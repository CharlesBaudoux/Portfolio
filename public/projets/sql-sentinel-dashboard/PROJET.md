# SentinelSQL — Analyse de Fraude Financière

## Présentation du Projet

SentinelSQL est un dashboard analytique de détection de fraude financière. Il transforme des données transactionnelles brutes en renseignement exploitable à travers six analyses complémentaires : KPIs de risque global, détection de wash trading, mesure du slippage, identification de pics de volume anormaux, scoring de risque utilisateur par Z-Score et suivi de l'évolution quotidienne des volumes.

Le projet simule un environnement de surveillance réglementaire dans lequel un analyste financier doit identifier des comportements suspects (wash trading, pump & dump, front-running) à partir de données de marché.

---

## Stack Technique

### Evidence.dev — Framework BI

Le projet repose sur **Evidence.dev**, un framework open-source qui permet de construire des applications de données en combinant SQL et Markdown. Evidence génère un site statique (SvelteKit) où chaque requête SQL est exécutée côté client grâce à un moteur analytique embarqué.

Ce choix permet de :
- Rédiger les analyses directement en Markdown enrichi de blocs SQL.
- Générer des visualisations (graphiques, tableaux interactifs) sans code JavaScript.
- Déployer un dashboard autonome sous forme de site statique, sans serveur backend.

### DuckDB — Moteur Analytique Embarqué

**DuckDB** est le moteur de base de données analytique utilisé. Il s'exécute directement dans le navigateur via WebAssembly (workers `duckdb-browser-eh` et `duckdb-browser-mvp`). Ses caractéristiques clés exploitées dans le projet :

- **Architecture columnar (OLAP)** : optimisée pour les agrégations et les scans analytiques, contrairement aux bases relationnelles classiques orientées lignes (OLTP).
- **Lecture native de fichiers Parquet** : les données sont stockées en `.parquet`, un format binaire compressé et columnar.
- **Extensions SQL avancées** : `GROUP BY ALL`, `RANGE BETWEEN INTERVAL`, fonctions fenêtrées imbriquées (`AVG(SUM(...)) OVER(...)`).
- **Fonctions statistiques intégrées** : `STDDEV`, `AVG`, `EXTRACT(EPOCH FROM ...)`.

### Apache Parquet — Format de Stockage

Les deux jeux de données (`transactions.parquet` et `market_prices.parquet`) sont stockés au format **Parquet**. Ce format offre :

- Une compression efficace grâce à l'encodage par colonne.
- Un *projection pushdown* (seules les colonnes nécessaires sont lues).
- Une compatibilité native avec DuckDB sans étape d'import.

### SvelteKit — Génération Statique

Evidence.dev s'appuie sur **SvelteKit** pour produire un site statique pré-rendu (SSG). Le résultat est un ensemble de fichiers HTML, CSS et JavaScript hachés, déployables sur n'importe quel hébergeur statique sans infrastructure serveur.

### Python — Génération des Données

Le script `generate_sentinel_data.py` produit les jeux de données synthétiques. Il injecte volontairement des anomalies (transactions circulaires, pics de volume, écarts de prix) pour permettre la démonstration des algorithmes de détection.

---

## Compétences SQL Démontrées

### Common Table Expressions (CTEs)

Cinq des six requêtes utilisent des CTEs (`WITH ... AS`) pour structurer la logique en étapes lisibles. Les CTEs permettent de séparer les phases de préparation des données (jointures, calculs intermédiaires) de la phase de présentation (agrégation finale, formatage).

```sql
WITH user_metrics AS (
  SELECT user_id, COUNT(*) AS trade_count, SUM(amount * price) AS total_volume
  FROM sentinel.transactions
  WHERE status = 'completed'
  GROUP BY user_id
),
stats AS (
  SELECT *,
    (trade_count - AVG(trade_count) OVER()) / NULLIF(STDDEV(trade_count) OVER(), 0) AS z_score
  FROM user_metrics
)
SELECT ...
FROM stats
```

### Self-Join

La détection de wash trading repose sur un **Self-Join** : la table `transactions` est jointe avec elle-même pour identifier des paires de transactions effectuées par le même utilisateur, sur le même actif, au même prix, dans un intervalle de temps critique.

```sql
FROM sentinel.transactions a
INNER JOIN sentinel.transactions b
  ON a.user_id = b.user_id
  AND a.asset_id = b.asset_id
  AND a.price = b.price
  AND b.trade_id > a.trade_id
```

La condition `b.trade_id > a.trade_id` évite les doublons (paire A-B identique à B-A) et l'auto-appariement.

### Window Functions (Fonctions Fenêtrées)

La détection de pics de volume exploite des **fonctions fenêtrées imbriquées** avec des fenêtres glissantes temporelles :

```sql
AVG(SUM(amount)) OVER (
  ORDER BY DATE_TRUNC('minute', timestamp)
  RANGE BETWEEN INTERVAL '24 hours' PRECEDING AND CURRENT ROW
) AS mean_24h
```

L'agrégat `SUM` est d'abord calculé par le `GROUP BY`, puis la fonction fenêtrée `AVG` opère sur ces résultats agrégés — une fonctionnalité avancée de DuckDB.

### Jointures Temporelles

La requête de slippage aligne chaque transaction avec le prix de marché correspondant via une jointure sur `asset_id` et sur le timestamp tronqué à la minute :

```sql
INNER JOIN sentinel.market_prices m
  ON t.asset_id = m.asset_id
  AND DATE_TRUNC('minute', t.timestamp) = m.timestamp
```

### Protections Défensives

- **`NULLIF(x, 0)`** : protège systématiquement contre les divisions par zéro.
- **`ABS(...)`** : garantit des valeurs positives pour les écarts temporels et les slippages.
- **Filtres de sécurité build** : les conditions `<` sont réécrites en `>` inversé (`10 > sec_diff` au lieu de `sec_diff < 10`) pour éviter que le parseur Svelte n'interprète le `<` comme une balise HTML.

---

## Compétences Statistiques Appliquées

### Z-Score (Normalisation Statistique)

Le Z-Score mesure à combien d'écarts-types une observation se situe par rapport à la moyenne :

**Z = (x − μ) / σ**

Appliqué au nombre de transactions par utilisateur (`trade_count`), il permet de segmenter les profils en trois niveaux de risque :
- **Z > 2** (au-delà de 2 écarts-types) → Risque critique
- **Z > 1** (au-delà de 1 écart-type) → Risque élevé
- **Z ≤ 1** → Risque normal

### Règle des 3 Sigmas (Détection d'Anomalies)

Un volume est signalé comme anormal lorsqu'il dépasse le seuil :

**Seuil = μ₂₄ₕ + 3 × σ₂₄ₕ**

Où μ₂₄ₕ et σ₂₄ₕ sont la moyenne et l'écart-type mobiles calculés sur une fenêtre glissante de 24 heures. La règle 3-sigma repose sur le fait que, pour une distribution normale, 99,7 % des observations se trouvent dans l'intervalle [μ − 3σ, μ + 3σ]. Un dépassement signale donc un événement statistiquement exceptionnel.

### Slippage (Écart d'Exécution)

Le slippage quantifie la déviation entre le prix auquel une transaction est exécutée et le prix de marché de référence :

**Slippage = |prix_exécution − prix_marché| / prix_marché**

Un slippage supérieur à 1 % est considéré comme un indicateur potentiel de manipulation de prix ou de front-running.

---

## Compétences Métier (Finance & Conformité)

### Wash Trading
Identification de transactions circulaires où un même acteur achète et vend le même actif au même prix dans un intervalle très court (<10 secondes), dans le but de gonfler artificiellement les volumes affichés.

### Pump & Dump
Détection de pics de volume anormaux qui peuvent signaler une manipulation coordonnée visant à faire monter artificiellement le cours d'un actif avant de le revendre massivement.

### Surveillance Réglementaire
Le dashboard reproduit l'approche d'un système de Market Surveillance tel que pratiqué dans les institutions financières soumises aux réglementations MiFID II (Europe) ou Dodd-Frank (US).

---

## Architecture du Projet

```
sql-sentinel-dashboard/
├── index.html                          # Page principale du dashboard
├── donnees/index.html                  # Dictionnaire des données
├── data/
│   ├── manifest.json                   # Registre des fichiers Parquet
│   ├── sentinel/
│   │   ├── transactions/               # transactions.parquet
│   │   └── market_prices/              # market_prices.parquet
│   └── needful_things/orders/          # Données de démonstration Evidence
├── api/
│   ├── evidencemeta.json               # 6 requêtes SQL (page principale)
│   ├── donnees/evidencemeta.json       # 2 requêtes SQL (page données)
│   └── pagesManifest.json             # Arborescence des pages
└── _app/immutable/
    ├── workers/                        # DuckDB WebAssembly workers
    ├── assets/                         # CSS compilé
    ├── entry/                          # Points d'entrée SvelteKit
    ├── nodes/                          # Composants de routes
    └── chunks/                         # Modules partagés (Prism, composants)
```

---

## Synthèse des Compétences

| Domaine | Compétences mobilisées |
|---------|----------------------|
| **SQL Avancé** | CTEs chaînées, Self-Join, Window Functions imbriquées, agrégations conditionnelles (`CASE WHEN`), jointures temporelles |
| **Statistiques** | Z-Score, règle 3-sigma, écart-type mobile, moyenne glissante, slippage |
| **Data Engineering** | Format Parquet, architecture columnar, DuckDB embarqué (WebAssembly), génération de données synthétiques (Python) |
| **Finance & Conformité** | Wash trading, pump & dump, slippage, front-running, surveillance réglementaire |
| **Développement Web** | Evidence.dev, SvelteKit, génération statique (SSG), déploiement de site statique |
| **Visualisation de Données** | Tableaux interactifs paginés, graphiques temporels, KPIs visuels |

---

*Projet réalisé par Charles Baudoux — MIAGE Université Paris Dauphine*
