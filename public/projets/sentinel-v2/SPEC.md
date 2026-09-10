# SentinelSQL v2 — Spécification technique

**Plateforme de surveillance de marché en temps réel**

> Document de conception. Il définit ce qui est construit, dans quel ordre, et comment on prouve que ça marche.
> Projet successeur de `sql-sentinel-dashboard`. Auteur : Charles Baudoux — MIAGE, Université Paris Dauphine-PSL.

---

## 1. Intention

### En une phrase

SentinelSQL v2 transforme un dashboard statique en **plateforme événementielle** : des transactions arrivent en continu, les comportements suspects sont détectés en quelques secondes, les alertes sont tracées et instruites, et l'ensemble alimente un entrepôt analytique versionné.

### Ce qui change par rapport à la v1

La v1 démontre du **SQL analytique**. La v2 démontre de l'**ingénierie de données**. C'est un changement de nature, pas d'échelle.

| Dimension | v1 (existant) | v2 (cible) |
|---|---|---|
| Données | 2 fichiers Parquet figés | Flux continu + référentiel + CDC |
| Traitement | SQL au chargement de la page | Traitement de flux avec état, fenêtres glissantes |
| Latence | Aucune (données mortes) | Détection en < 5 s (p95) |
| Stockage | Parquet plat | Format de table ouvert (Iceberg), couches bronze/silver/gold |
| Transformation | Requêtes inline dans le Markdown | dbt : modèles versionnés, testés, documentés |
| Exécution | Navigateur (DuckDB-WASM) | Services orchestrés, conteneurisés |
| Qualité | Aucune vérification | Tests dbt + contrats de schéma + vérité terrain mesurée |
| Observabilité | Aucune | Métriques Prometheus, tableaux Grafana, alerting |
| Reproductibilité | Build manuel | `docker compose up` + CI GitHub Actions |

### Ce qu'on garde de la v1

- **La logique métier** : wash trading, slippage, pics de volume, Z-score, règle 3-sigma. Elle est juste et bien documentée — on la porte, on ne la réinvente pas.
- **Le vocabulaire finance** : c'est ce qui rend le projet lisible par un recruteur bancaire.
- **Le dashboard Evidence** : il devient la couche de restitution *gold*, alimentée par dbt au lieu de Parquet bruts.

> ⚠️ **Note de départ.** Le dépôt `Portfolio` ne contient que le **build statique** de la v1 (`_app/`, `api/`, `data/`), pas les sources Evidence ni le script `generate_sentinel_data.py`. La v2 se fait donc dans un **dépôt neuf**, en reprenant la logique SQL depuis `api/evidencemeta.json` (les 6 requêtes y sont intégralement lisibles).

---

## 2. Le problème dur

Un projet n'est intéressant que s'il contient un vrai obstacle. Ici, il y en a un.

### Le wash trading en v1 est trivial

La requête `wash_events` actuelle fait une auto-jointure : même `user_id`, même `asset_id`, même `price`, moins de 10 secondes d'écart. Elle ne détecte que l'**auto-négociation** — un acteur qui échange avec lui-même.

Or le vrai wash trading passe par des **anneaux de collusion** : A vend à B, B vend à C, C revend à A. Chaque transaction est individuellement irréprochable. Seule la **structure du graphe** trahit la manipulation.

### Ce que ça implique

**1. Le modèle de données doit évoluer.** Le schéma v1 (`user_id` unique par transaction) ne peut pas représenter une contrepartie. Il faut passer à `buyer_id` / `seller_id` — sans quoi il n'y a pas de graphe.

**2. L'algorithme devient un vrai problème.** Détecter un cycle dans un graphe **temporel glissant**, en flux, sous contrainte mémoire :

```
Pour chaque nouvelle transaction (vendeur s → acheteur b) :
  1. Ajouter l'arête s → b au graphe de la fenêtre courante
  2. Chercher un chemin b → s de longueur ≤ K dans la fenêtre
     (parcours en profondeur borné, en remontant les arêtes)
  3. Si trouvé → cycle de longueur ≤ K+1 → émettre une alerte
  4. Purger les arêtes plus vieilles que la fenêtre
```

Les difficultés réelles, celles dont on parle en entretien :

| Difficulté | Pourquoi c'est dur | Traitement |
|---|---|---|
| **Explosion combinatoire** | Un nœud très actif a des milliers d'arêtes ; un DFS naïf explose | Borner la profondeur `K = 4`, borner le degré exploré, élaguer par montant minimum |
| **Taille de l'état** | Le graphe grandit indéfiniment | TTL sur les arêtes = durée de fenêtre ; état borné par `débit × fenêtre` |
| **Événements en retard** | Une transaction arrive après la fermeture de sa fenêtre | Filigranes (*watermarks*) + retard toléré configuré, puis routage vers un flux « en retard » |
| **Doublons d'alertes** | Le même cycle est redétecté à chaque arête ajoutée | Clé d'alerte canonique = cycle trié + fenêtre → déduplication idempotente |
| **Rejeu** | Rejouer l'historique doit produire exactement les mêmes alertes | Traitement en *event time*, jamais en *processing time* |

C'est le cœur du projet. Tout le reste est de la plomberie — bien faite, mais de la plomberie.

---

## 3. Le détail qui fait la différence : la vérité terrain

**Tu génères les données. Donc tu connais la réponse.**

Le générateur injecte les anomalies **et écrit un fichier d'étiquettes** : quels trades appartiennent à quel scénario de manipulation, avec quel identifiant de scénario. Tu peux donc calculer, pour chaque détecteur :

- **Rappel** — quelle proportion des manipulations injectées a été détectée ?
- **Précision** — quelle proportion des alertes émises correspond à une vraie manipulation ?
- **Latence de détection** — délai entre le dernier trade du scénario et l'émission de l'alerte.

```
scenarios.jsonl
{"scenario_id":"WASH-0042","type":"wash_ring","members":[1043,2871,5502],
 "trade_ids":[88213,88219,88240],"asset_id":"AAPL","injected_at":"2026-03-04T10:22:31Z"}
```

Puis, en CI :

```
Détecteur          Rappel   Précision   Latence p95
wash_ring           94,2 %     87,1 %        1,8 s
volume_spike        99,0 %     71,4 %        0,9 s
price_divergence    88,6 %     93,3 %        1,2 s
```

**C'est le tableau qui fait la différence.** Il transforme « j'ai codé un détecteur de fraude » en « j'ai mesuré mon détecteur de fraude ». Presque aucun projet étudiant ne le fait, et c'est exactement la question que pose un ingénieur senior en entretien : *comment sais-tu que ça marche ?*

Corollaire : le curseur précision/rappel devient un **choix métier discutable**. Un service de conformité préfère du rappel (ne rien rater, quitte à trier des faux positifs). Tu peux en parler. C'est de la double compétence, pas de la technique pure.

---

## 4. Architecture cible

```
┌──────────────────────────────────────────────────────────────────────┐
│  GÉNÉRATEUR (Python)                                                 │
│  marché synthétique + injection d'anomalies étiquetées               │
│  → sortie : trades, ordres, cours   → écrit aussi scenarios.jsonl    │
└────────────────────────────┬─────────────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │    REDPANDA     │   topics : trades, orders,
                    │  (API Kafka)    │   market_prices, alerts, dlq
                    └────┬───────┬────┘
                         │       │
        ┌────────────────▼──┐  ┌─▼──────────────────────────┐
        │  FLINK (PyFlink)  │  │  SINK  →  Iceberg BRONZE   │
        │  détection avec   │  │  (brut, append-only)       │
        │  état :           │  └─────────────┬──────────────┘
        │  • anneaux wash   │                │
        │  • pics 3-sigma   │                ▼
        │  • divergence prix│         ┌─────────────┐
        │  → topic alerts   │         │    MinIO    │  stockage objet
        └─────────┬─────────┘         │  (S3-like)  │  + Iceberg
                  │                   └──────┬──────┘
                  ▼                          │
        ┌───────────────────┐                ▼
        │    POSTGRES       │          ┌──────────┐
        │  référentiel :    │   CDC    │   dbt    │  bronze → silver → gold
        │  comptes, actifs  │ ───────► │  + tests │  + doc + lignage
        │  cas d'alerte     │ Debezium └────┬─────┘
        └───────────────────┘               │
                                            ▼
                                   ┌──────────────────┐
                                   │  DuckDB (gold)   │
                                   │  + Evidence.dev  │  ← dashboard v1 réutilisé
                                   └──────────────────┘

   Transverse : Dagster (orchestration) · Prometheus + Grafana (métriques)
                GitHub Actions (CI) · Docker Compose (tout)
```

### Pourquoi Postgres et le CDC ont un vrai rôle

C'est le point où beaucoup de projets étudiants sonnent faux : ils ajoutent Debezium « parce que c'est dans les offres d'emploi ». Ici il y a une raison métier.

Postgres porte deux choses que le flux ne peut pas porter :

1. **Le référentiel** — comptes, instruments, groupes de contrepartie. Ça change lentement mais ça change (un compte est requalifié, un instrument est suspendu).
2. **La gestion des cas d'alerte** — un analyste ouvre une alerte, l'annote, la classe en « avéré » ou « faux positif ». C'est de l'OLTP pur.

Le CDC diffuse ces changements vers le lakehouse, où le référentiel est historisé en **SCD2** (on garde l'état du compte *au moment* de la transaction, pas son état actuel). C'est exactement le fonctionnement d'une chaîne de conformité réelle, et ça donne un argument fort : *la décision d'hier doit rester auditable avec le référentiel d'hier.*

Bonus : le verdict de l'analyste devient une **étiquette supplémentaire** qui alimente la mesure de précision. La boucle se ferme.

---

## 5. Modèle de données

### 5.1 Flux — `trades` (évolution du schéma v1)

| Champ | Type | v1 ? | Rôle |
|---|---|:---:|---|
| `trade_id` | bigint | ✅ | Identifiant unique |
| `event_time` | timestamp(3) | ✅ (`timestamp`) | **Temps métier** — base de toutes les fenêtres |
| `ingest_time` | timestamp(3) | ❌ | Temps d'arrivée — sert à mesurer le retard |
| `asset_id` | varchar | ✅ | Instrument |
| `buyer_id` | bigint | ❌ **nouveau** | Acheteur — sommet du graphe |
| `seller_id` | bigint | ❌ **nouveau** | Vendeur — sommet du graphe |
| `amount` | decimal(18,6) | ✅ | Quantité |
| `price` | decimal(18,6) | ✅ | Prix d'exécution |
| `venue` | varchar | ❌ **nouveau** | Place d'exécution — permet l'analyse inter-places |
| `order_id` | bigint | ❌ **nouveau** | Rattachement à l'ordre d'origine |
| `status` | varchar | ✅ | `completed` / `failed` |

> `buyer_id` + `seller_id` remplacent `user_id`. **Sans ce changement, la détection d'anneaux est impossible** — c'est la modification structurante de la v2.

### 5.2 Flux — `orders` (nouveau)

Permet de détecter le **layering / spoofing** : passer de gros ordres sans intention de les exécuter, pour créer une fausse impression de profondeur, puis les annuler.

| Champ | Type | Rôle |
|---|---|---|
| `order_id` | bigint | Identifiant |
| `event_time` | timestamp(3) | Temps métier |
| `account_id` | bigint | Émetteur |
| `asset_id` | varchar | Instrument |
| `side` | varchar | `buy` / `sell` |
| `price`, `quantity` | decimal(18,6) | Termes de l'ordre |
| `action` | varchar | `placed` / `cancelled` / `filled` |

Signal : un ratio annulations / exécutions anormalement élevé, concentré du même côté du carnet.

### 5.3 Flux — `market_prices` (inchangé)

`event_time`, `asset_id`, `market_price`. Sert de référence pour le slippage, comme en v1.

### 5.4 Référentiel Postgres

```sql
CREATE TABLE accounts (
  account_id      BIGINT PRIMARY KEY,
  display_name    TEXT NOT NULL,
  country         CHAR(2) NOT NULL,
  segment         TEXT NOT NULL,        -- retail | institutional | market_maker
  risk_tier       TEXT NOT NULL,        -- low | medium | high
  opened_at       DATE NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE instruments (
  asset_id        TEXT PRIMARY KEY,
  label           TEXT NOT NULL,
  asset_class     TEXT NOT NULL,
  currency        CHAR(3) NOT NULL,
  is_suspended    BOOLEAN NOT NULL DEFAULT false,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Gestion des cas : c'est ici que l'analyste travaille
CREATE TABLE alert_cases (
  case_id         BIGSERIAL PRIMARY KEY,
  alert_key       TEXT NOT NULL UNIQUE,   -- clé canonique émise par le détecteur
  detector        TEXT NOT NULL,          -- wash_ring | volume_spike | ...
  severity        TEXT NOT NULL,          -- low | medium | high | critical
  status          TEXT NOT NULL,          -- new | investigating | confirmed | dismissed
  assigned_to     TEXT,
  verdict_note    TEXT,
  detected_at     TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Ces trois tables sont capturées par Debezium. `accounts` et `instruments` deviennent des dimensions SCD2 en silver ; `alert_cases` alimente les indicateurs de traitement (délai moyen d'instruction, taux de faux positifs par détecteur).

### 5.5 Couches du lakehouse

| Couche | Contenu | Règle |
|---|---|---|
| **bronze** | Événements bruts, tels qu'ingérés, horodatés | Immuable, append-only. On ne corrige jamais bronze. |
| **silver** | Nettoyé, dédoublonné, typé, conformé. Dimensions SCD2. | Une ligne = un fait métier propre. Clés stables. |
| **gold** | Agrégats orientés usage : KPI, séries temporelles, tableaux d'alertes | Alimente le dashboard. Optimisé pour la lecture. |

---

## 6. Structure du dépôt

```
sentinel-v2/
├── README.md                      # pitch + métriques + démarrage en 1 commande
├── docker-compose.yml             # profils : core | stream | cdc | obs
├── Makefile                       # up / down / seed / replay / test / bench
├── .github/workflows/ci.yml       # lint, tests, dbt build, éval des détecteurs
│
├── docs/
│   ├── architecture.md
│   ├── adr/                       # décisions d'architecture, une par fichier
│   │   ├── 0001-redpanda-plutot-que-kafka.md
│   │   ├── 0002-iceberg-comme-format-de-table.md
│   │   ├── 0003-detection-de-cycles-bornee-a-4.md
│   │   └── 0004-event-time-et-filigranes.md
│   └── glossaire.md
│
├── generator/                     # producteur de marché synthétique
│   ├── market.py                  # dynamique de prix, carnet, comportements
│   ├── scenarios/                 # un module par manipulation injectée
│   │   ├── wash_ring.py
│   │   ├── layering.py
│   │   └── momentum_ignition.py
│   ├── labels.py                  # écrit scenarios.jsonl (vérité terrain)
│   └── produce.py                 # publie vers Redpanda
│
├── detectors/                     # ← le cœur intellectuel
│   ├── core/                      # logique PURE, sans dépendance framework
│   │   ├── temporal_graph.py      # graphe glissant + détection de cycles
│   │   ├── rolling_stats.py       # moyenne/écart-type mobiles, 3-sigma
│   │   └── alert_key.py           # clé canonique idempotente
│   ├── flink/                     # enveloppes PyFlink autour de core/
│   └── tests/
│       ├── test_temporal_graph.py # tests unitaires + propriétés
│       └── fixtures/
│
├── ingestion/
│   ├── sink_iceberg.py            # topics → bronze
│   └── connect/debezium-postgres.json
│
├── warehouse/                     # projet dbt
│   ├── models/{bronze,silver,gold}/
│   ├── tests/
│   └── dbt_project.yml
│
├── orchestration/                 # Dagster : actifs, planifications, capteurs
│
├── dashboard/                     # projet Evidence (repris de la v1)
│
├── eval/
│   ├── score.py                   # alertes × vérité terrain → précision/rappel
│   └── report.md                  # généré, versionné à chaque exécution
│
└── ops/
    ├── prometheus/prometheus.yml
    └── grafana/dashboards/
```

### La décision de conception la plus importante

> **`detectors/core/` ne connaît ni Flink, ni Kafka, ni Iceberg.** Ce sont des fonctions pures : elles reçoivent des événements, retournent des alertes.

Trois conséquences :

1. **La partie difficile est testable en millisecondes**, sans lancer un seul conteneur.
2. **Tu ne peux pas être bloqué par Flink.** Si son exploitation devient pénible, tu branches la même logique sur un consommateur Python simple. La valeur du projet est préservée.
3. **Tu peux migrer de framework** sans réécrire l'algorithme — et le dire en entretien est un argument d'architecture.

---

## 7. Docker Compose — point de départ

Ta machine dispose de ~11 Go de RAM sous WSL2. **Tout lancer simultanément ne rentre pas.** D'où les profils : on ne démarre que ce dont on a besoin.

```yaml
# docker-compose.yml — épingler les versions exactes après première validation
name: sentinel-v2

services:
  # ─────────────────────────── profil : core ───────────────────────────
  redpanda:
    image: redpandadata/redpanda:v24.2.7
    profiles: [core, stream, cdc, obs]
    command:
      - redpanda
      - start
      - --overprovisioned
      - --smp=1
      - --memory=1G                      # bridé volontairement
      - --reserve-memory=0M
      - --node-id=0
      - --check=false
      - --kafka-addr=internal://0.0.0.0:29092,external://0.0.0.0:9092
      - --advertise-kafka-addr=internal://redpanda:29092,external://localhost:9092
    ports: ["9092:9092", "9644:9644"]
    healthcheck:
      test: ["CMD-SHELL", "rpk cluster health | grep -q 'Healthy:.*true'"]
      interval: 10s
      retries: 12

  console:
    image: redpandadata/console:v2.7.2
    profiles: [core]
    environment:
      KAFKA_BROKERS: redpanda:29092
    ports: ["8080:8080"]
    depends_on: { redpanda: { condition: service_healthy } }

  postgres:
    image: postgres:16-alpine
    profiles: [core, cdc]
    # wal_level=logical est REQUIS pour le CDC Debezium
    command: ["postgres", "-c", "wal_level=logical",
              "-c", "max_replication_slots=4", "-c", "max_wal_senders=4"]
    environment:
      POSTGRES_USER: sentinel
      POSTGRES_PASSWORD: sentinel
      POSTGRES_DB: sentinel
    ports: ["5432:5432"]
    volumes:
      - ./ops/postgres/init:/docker-entrypoint-initdb.d:ro
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U sentinel"]
      interval: 5s
      retries: 12

  minio:
    image: minio/minio:RELEASE.2024-10-13T13-34-11Z
    profiles: [core, stream]
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: minio
      MINIO_ROOT_PASSWORD: minio123
    ports: ["9000:9000", "9001:9001"]
    volumes: [miniodata:/data]

  # ────────────────────────── profil : stream ──────────────────────────
  flink-jobmanager:
    image: flink:1.20-scala_2.12-java17
    profiles: [stream]
    command: jobmanager
    environment:
      FLINK_PROPERTIES: |
        jobmanager.rpc.address: flink-jobmanager
        jobmanager.memory.process.size: 1024m
        state.backend: rocksdb
    ports: ["8081:8081"]

  flink-taskmanager:
    image: flink:1.20-scala_2.12-java17
    profiles: [stream]
    command: taskmanager
    environment:
      FLINK_PROPERTIES: |
        jobmanager.rpc.address: flink-jobmanager
        taskmanager.memory.process.size: 2048m
        taskmanager.numberOfTaskSlots: 2
    depends_on: [flink-jobmanager]

  # ─────────────────────────── profil : cdc ────────────────────────────
  connect:
    image: debezium/connect:2.7
    profiles: [cdc]
    environment:
      BOOTSTRAP_SERVERS: redpanda:29092
      GROUP_ID: sentinel-connect
      CONFIG_STORAGE_TOPIC: _connect_configs
      OFFSET_STORAGE_TOPIC: _connect_offsets
      STATUS_STORAGE_TOPIC: _connect_status
    ports: ["8083:8083"]
    depends_on:
      redpanda: { condition: service_healthy }
      postgres: { condition: service_healthy }

  # ─────────────────────────── profil : obs ────────────────────────────
  prometheus:
    image: prom/prometheus:v2.55.0
    profiles: [obs]
    volumes: ["./ops/prometheus:/etc/prometheus:ro"]
    ports: ["9090:9090"]

  grafana:
    image: grafana/grafana:11.3.0
    profiles: [obs]
    environment:
      GF_AUTH_ANONYMOUS_ENABLED: "true"
      GF_AUTH_ANONYMOUS_ORG_ROLE: Admin
    volumes: ["./ops/grafana:/etc/grafana/provisioning:ro"]
    ports: ["3000:3000"]
    depends_on: [prometheus]

volumes:
  pgdata:
  miniodata:
```

Usage :

```bash
make up-core          # docker compose --profile core up -d       (~2 Go)
make up-stream        # + Flink                                    (~5 Go)
make up-full          # tout                                       (~8 Go)
```

> **Point de vigilance** : `wal_level=logical` sur Postgres est indispensable au CDC. Sans lui, Debezium démarre puis échoue silencieusement au premier changement — c'est le piège classique.

---

## 8. Feuille de route

Chaque semaine produit quelque chose de **montrable**. La règle : si une semaine ne se termine pas par une démo, le découpage est mauvais.

### Phase 1 — Le flux existe (S1-S2) · *MVP démontrable*

| S | Livrable | Démo |
|---|---|---|
| **1** | Générateur qui publie des trades vers Redpanda. Compose `core`. | La console Redpanda montre les messages qui arrivent en direct. |
| **2** | Consommateur Python simple → écriture Parquet. Détection 3-sigma portée depuis la v1. | Un pic de volume injecté produit une ligne d'alerte en console. |

**À ce stade tu as déjà dépassé tes 4 projets actuels** : quelque chose tourne, en continu, dans Docker.

### Phase 2 — Le socle de données (S3-S4)

| S | Livrable | Démo |
|---|---|---|
| **3** | MinIO + tables Iceberg. Couche bronze alimentée par le sink. Postgres + référentiel initialisé. | Requête DuckDB sur une table Iceberg ; voyage dans le temps entre deux versions. |
| **4** | Debezium sur Postgres. dbt : bronze → silver, dimensions SCD2, premiers tests. | Modifier un `risk_tier` dans Postgres → la dimension silver s'historise. |

### Phase 3 — Le cœur intellectuel (S5-S7) · *la partie difficile*

| S | Livrable | Démo |
|---|---|---|
| **5** | `detectors/core/temporal_graph.py` : graphe glissant, détection de cycles bornée, TTL. **Tests unitaires d'abord.** | Suite de tests verte sur des anneaux fabriqués à la main. |
| **6** | Portage sur PyFlink : *event time*, filigranes, état RocksDB, retard toléré. | L'IHM Flink montre le job ; une alerte d'anneau apparaît sur le topic `alerts`. |
| **7** | Détecteurs `layering` et `price_divergence`. Clés d'alerte idempotentes. File de rebut (*DLQ*). | Rejeu du même flux → alertes strictement identiques, zéro doublon. |

> **Semaine tampon recommandée.** La S6 est la plus risquée du projet. Si Flink résiste, la logique reste exécutable sur le consommateur simple de la S2 — le projet ne s'effondre pas.

### Phase 4 — La preuve (S8-S9)

| S | Livrable | Démo |
|---|---|---|
| **8** | Harnais d'évaluation : `eval/score.py` croise alertes et `scenarios.jsonl`. Rapport précision/rappel/latence, exécuté en CI. | Le tableau de métriques du README, généré automatiquement. |
| **9** | Orchestration Dagster. Prometheus + Grafana : débit, retard, taille d'état, latence p95. | Tableau Grafana pendant un rejeu accéléré. |

### Phase 5 — La vitrine (S10)

| S | Livrable | Démo |
|---|---|---|
| **10** | Dashboard Evidence branché sur gold. Mode « Rejouer 24 h en 60 s ». Export statique de secours. ADR + README finalisés. | Le bouton de rejeu dans ton portfolio : les alertes tombent en direct. |

### Ligne de coupe

Si le temps manque, **livre S1→S8 et arrête-toi là.** Tu auras un projet complet, mesuré et défendable. Les semaines 9-10 sont du confort, pas du fond.

---

## 9. Stratégie de démonstration

Le problème : ton portfolio est un site statique. Personne ne va lancer ton `docker compose` pour t'évaluer.

**Trois niveaux, du plus impressionnant au plus robuste :**

1. **Rejeu en direct** — un enregistrement de 24 h de marché rejoué en 60 s, poussé vers le dashboard par WebSocket. Les KPI bougent, les alertes tombent. Spectaculaire. Nécessite un petit service hébergé (Fly.io, Railway, ou une VM ARM gratuite chez Oracle Cloud).
2. **Capture vidéo** — 90 secondes montrant le rejeu, l'IHM Flink, Grafana. À intégrer dans la fiche projet. Fonctionne toujours, ne coûte rien.
3. **Export statique** — le dashboard Evidence figé sur les données de la dernière exécution, exactement comme la v1. Le filet de sécurité : même infrastructure éteinte, il reste quelque chose à voir.

**Fais les trois.** Le niveau 3 est ce qui restera dans deux ans quand tu auras arrêté de payer l'hébergement.

---

## 10. Le README, et pourquoi il compte autant que le code

C'est la seule partie que 90 % des lecteurs verront. Structure imposée :

```markdown
# SentinelSQL v2
Détection de manipulation de marché en temps réel — de l'événement à l'alerte en moins de 2 s.

## Démarrage
git clone … && make up-core && make seed && make replay      # 3 commandes

## Les chiffres
| Mesure                          | Valeur   |
|---------------------------------|----------|
| Débit soutenu                   | 12 400 événements/s |
| Latence de détection (p95)      | 1,8 s    |
| Rappel — anneaux de wash trading| 94,2 %   |
| Précision — anneaux             | 87,1 %   |
| Taille d'état (fenêtre 5 min)   | 340 Mo   |
| Couverture de tests — core/     | 91 %     |

## Architecture
[diagramme] + 5 lignes d'explication

## Le problème difficile
La détection de cycles temporels — pourquoi c'est dur, comment c'est résolu.

## Décisions d'architecture
Liens vers les ADR.
```

**Trois règles absolues :**

1. **Des chiffres mesurés, jamais estimés.** « ~10 000 événements/s » sonne faux. « 12 400 événements/s (p50, 4 vCPU, voir `bench/`) » est crédible.
2. **`git clone && make up` doit fonctionner.** C'est le premier test que fait un recruteur technique, et la plupart des projets étudiants échouent dessus.
3. **Un ADR par vraie décision.** Trois paragraphes : le problème, les options envisagées, le choix et sa raison. C'est ce qui distingue un profil MIAGE d'un profil purement développeur — tu documentes un arbitrage, pas seulement une solution.

---

## 11. Risques identifiés

| Risque | Probabilité | Parade |
|---|---|---|
| **Flink dépasse la RAM disponible** | Élevée | Profils Compose ; `taskmanager.memory.process.size` bridé ; repli sur consommateur Python (la logique est découplée) |
| **Enlisement sur la détection de cycles** | Moyenne | Écrire les tests unitaires en premier (S5) ; démarrer avec `K=3` avant de généraliser |
| **Debezium ne démarre pas** | Moyenne | `wal_level=logical` dès l'init Postgres ; valider avec `pg_replication_slots` avant d'aller plus loin |
| **Dispersion sur trop d'outils** | Élevée | La ligne de coupe S8. Dagster et Grafana sont du confort. |
| **Le générateur devient un projet en soi** | Moyenne | Se limiter à 3 scénarios de manipulation. Le générateur sert la démonstration, il n'est pas le sujet. |

Le risque n° 4 est le plus sérieux et le moins évident : la tentation d'ajouter Airflow, Kubernetes, Great Expectations, OpenLineage… Un projet cohérent en profondeur bat un catalogue d'outils survolés.

---

## 12. Glossaire

*Dans l'esprit pédagogique du document `PROJETS.md`.*

### Traitement de flux

- **Traitement avec état** (*stateful stream processing*) — Traitement où chaque événement est interprété à la lumière des précédents (ici : le graphe des transactions récentes). S'oppose au traitement sans état, où chaque événement est indépendant.

- **Temps métier / temps de traitement** (*event time* / *processing time*) — Le temps métier est celui où l'événement **s'est produit** ; le temps de traitement, celui où le système **le reçoit**. Raisonner en temps métier est indispensable pour que rejouer un historique donne le même résultat.

- **Filigrane** (*watermark*) — Marqueur qui traverse le flux et signifie « tous les événements antérieurs à cet instant sont probablement arrivés ». Permet de fermer une fenêtre sans attendre indéfiniment.

- **Retard toléré** (*allowed lateness*) — Délai de grâce accordé après le filigrane pour intégrer les retardataires. Au-delà, l'événement part en flux latéral.

- **File de rebut** (*dead letter queue*, DLQ) — Destination des messages qu'on ne sait pas traiter (schéma invalide, corruption). Les isoler évite de bloquer tout le pipeline sur un message.

- **Idempotence** — Propriété d'une opération qui, répétée, produit le même résultat. Ici : rejouer un flux ne doit pas dupliquer les alertes.

### Données et stockage

- **CDC** (*Change Data Capture*) — Capture des changements d'une base transactionnelle en lisant son journal de transactions, sans requêter la base ni la ralentir. Debezium en est l'implémentation de référence.

- **Format de table ouvert** — Couche de métadonnées au-dessus de fichiers Parquet qui apporte transactions, évolution de schéma et voyage dans le temps. **Apache Iceberg** en est un ; Delta Lake et Hudi sont ses concurrents.

- **Voyage dans le temps** (*time travel*) — Capacité à interroger l'état d'une table tel qu'il était à un instant passé. Essentiel pour l'audit : reproduire une décision avec les données de l'époque.

- **Architecture médaillon** — Organisation en trois couches — **bronze** (brut, immuable), **silver** (nettoyé, conformé), **gold** (agrégé pour l'usage). Chaque couche a une règle claire, ce qui rend le pipeline débogable.

- **SCD2** (*Slowly Changing Dimension type 2*) — Technique d'historisation : plutôt qu'écraser une valeur qui change, on ferme la ligne courante et on en ouvre une nouvelle avec ses dates de validité. Permet de savoir ce qu'on savait **au moment** des faits.

- **Contrat de schéma** — Engagement formel sur la structure des messages d'un topic. Le rompre casse les consommateurs ; le versionner permet de le faire évoluer sans incident.

### Détection et évaluation

- **Graphe temporel** — Graphe dont les arêtes ont une durée de vie. Ici, une transaction crée une arête vendeur → acheteur qui expire au bout de la fenêtre.

- **Rappel** (*recall*) — Proportion des vraies manipulations effectivement détectées. Un rappel faible = on laisse passer des fraudes.

- **Précision** — Proportion des alertes émises qui correspondent à de vraies manipulations. Une précision faible = on noie les analystes sous les faux positifs.

- **Vérité terrain** (*ground truth*) — Réponse connue et fiable qui sert de référence pour mesurer un système. Ici, elle est disponible parce que le générateur étiquette ce qu'il injecte.

- **Layering / spoofing** — Placer des ordres importants sans intention de les exécuter, pour donner une fausse impression de profondeur du marché, puis les annuler après avoir influencé le prix.

### Exploitation

- **ADR** (*Architecture Decision Record*) — Note courte figeant une décision d'architecture : le problème, les options, le choix, la raison. Rend les arbitrages relisables un an plus tard.

- **Percentile 95** (*p95*) — Valeur en dessous de laquelle se situent 95 % des mesures. Bien plus informatif qu'une moyenne pour une latence : la moyenne masque les cas dégradés.

- **Observabilité** — Capacité à comprendre l'état interne d'un système depuis l'extérieur, via métriques, journaux et traces.

---

## 13. Premiers pas

```bash
mkdir sentinel-v2 && cd sentinel-v2 && git init
mkdir -p generator/scenarios detectors/core detectors/tests docs/adr ops/postgres/init
# Copier le docker-compose.yml de la section 7
docker compose --profile core up -d
docker compose ps          # les 4 services doivent être 'healthy'
```

**Objectif de la première session :** voir des messages arriver dans la console Redpanda sur `localhost:8080`. Rien d'autre. Une fois ce fil tiré, tout le reste s'enchaîne.

---

## 14. Ce que ce projet démontre

| Domaine | Preuve concrète |
|---|---|
| **Data Engineering** | Kafka/Redpanda, CDC Debezium, Iceberg, architecture médaillon, dbt |
| **Traitement de flux** | État, fenêtres, filigranes, événements en retard, idempotence |
| **Algorithmique** | Détection de cycles dans un graphe temporel sous contrainte mémoire |
| **Qualité logicielle** | Logique découplée, tests unitaires, CI, mesure objective précision/rappel |
| **Exploitation** | Docker, profils de ressources, métriques, tableaux de bord |
| **Finance & conformité** | Abus de marché, piste d'audit, arbitrage précision/rappel, historisation réglementaire |
| **Architecture** | ADR, découpage en couches, gestion explicite des risques |

C'est le profil complet d'un ingénieur data — pas celui d'un étudiant qui a suivi un tutoriel.

---

*Spécification rédigée pour le portfolio MIAGE — Charles Baudoux, Université Paris Dauphine-PSL.*
