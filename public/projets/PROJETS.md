# Vue d’ensemble des projets — stacks, principes et glossaire

Ce document décrit les **quatre projets** du dossier `public/projets` : intention, technologies utilisées et définitions des termes métier ou techniques qui peuvent prêter à confusion.

---

## 1. `sql-sentinel-dashboard` — SentinelSQL (fraude financière)

### Principe

**SentinelSQL** est un **tableau de bord analytique** qui simule une **surveillance de marché** : à partir de données transactionnelles et de cours, il aide à repérer des comportements suspects (volumes anormaux, transactions circulaires, écarts de prix par rapport au marché, etc.). Les analyses sont présentées sous forme de **KPI**, graphiques et tableaux interactifs.

### Stack technique

| Couche | Technologies |
|--------|----------------|
| **BI / site de données** | [Evidence.dev](https://evidence.dev) — pages Markdown + SQL, génération d’un site statique |
| **Framework front** | **SvelteKit** (SSG : site statique pré-généré) |
| **Moteur SQL embarqué** | **DuckDB** dans le navigateur via **WebAssembly** (workers dédiés) |
| **Données** | Fichiers **Apache Parquet** (format analytique compressé, orienté colonnes) |
| **Données synthétiques** | Script **Python** pour générer jeux de données avec anomalies volontaires |

**En résumé** : pas de serveur d’API classique pour les requêtes — le SQL s’exécute **côté client** sur des Parquet chargés localement.

---

## 2. `powerbi-churn-analysis` — TechStream Analytics (SaaS fictive)

### Principe

Étude de cas **Business Intelligence** sur une entreprise SaaS fictive (**TechStream Analytics**) : comprendre **qui part**, **pourquoi les moyennes peuvent tromper**, et proposer des **décisions** (segments produit, géographie, offres). Le livrable principal est un **dashboard Power BI** ; la page web `case-study.html` raconte l’histoire, les insights et les recommandations.

### Stack technique

| Couche | Technologies |
|--------|----------------|
| **BI** | **Microsoft Power BI** |
| **Préparation des données** | **Power Query** (ETL intégré : extraction, transformation, chargement) |
| **Modèle sémantique** | **Schéma en étoile** (tables de faits + dimensions) |
| **Calculs** | **DAX** (langage de formules pour mesures et colonnes calculées) |
| **Page de présentation** | HTML statique, **Tailwind CSS** (CDN), **Font Awesome**, **Google Fonts** |
| **Données** | CSV fictif (`techstream_raw_data.csv`, 200 lignes) |

---

## 3. `java-city-manager` — Dauphine City Manager

### Principe

**Simulation d’optimisation de budget municipal** : vous décidez comment répartir des crédits entre des projets sous **contraintes** (budget, politique). Le cœur du raisonnement repose sur des **algorithmes d’optimisation** : stratégies **gloutonnes** (rapides, choix locaux) et **Hill Climbing** (méta-heuristique qui améliore une solution en explorant des voisins).

### Stack technique

| Couche | Technologies |
|--------|----------------|
| **Logique métier** | **Java** (simulation, solveurs) |
| **Exécution dans le navigateur** | **CheerpJ** — compilation / exécution Java vers le web (runtime côté client) |
| **Interface** | **React** |
| **Build front** | **Vite** |
| **Styles** | CSS (polices Inter, Fira Code) |

---

## 4. `python-labyrinthe-game` — Labyrinthe Python

### Principe

**Jeu de labyrinthe** en 2D : déplacement du joueur, murs, coffres avec effets aléatoires, **détection de collisions** (par exemple masques pixel-perfect entre sprites). Le jeu est écrit en **Python** avec **Pygame**, puis empaqueté pour le **navigateur**.

### Stack technique

| Couche | Technologies |
|--------|----------------|
| **Jeu** | **Python 3.12**, **Pygame** |
| **Portage web** | **pygbag** — build WebAssembly / runtime **pygame-web**, chargement du bundle `.apk` côté client |
| **Page portfolio** | **React**, **Vite**, **Tailwind CSS** (CDN sur l’entrée) |
| **Intégration** | Le build pygbag produit une page `game/index.html` intégrable (ex. **iframe** depuis l’app React) |

---

## Glossaire — termes souvent abscons

Les définitions ci-dessous sont volontairement **pédagogiques** ; en contexte métier précis, les formules ou seuils peuvent varier.

### Analytics, BI et produit

- **Churn** — Taux de **désabonnement** ou de **départ** de clients sur une période. Souvent : *clients perdus / clients au début de la période* (ou variante avec MRR, etc.). Un churn élevé signifie que beaucoup d’utilisateurs **quittent** le service.

- **Attrition** — Terme proche du churn : **érosion** de la base clients ou des effectifs. En SaaS, on l’emploie souvent comme synonyme de **perte de clients**.

- **Cohort** — Groupe de clients partageant une **caractéristique commune** (ex. : « tous ceux inscrits en janvier »). Analyser par cohorte évite de mélanger des comportements très différents.

- **KPI** (*Key Performance Indicator*) — **Indicateur clé** de performance : un nombre (ou un petit ensemble) qui résume un objectif (revenus, rétention, marge, etc.).

- **SaaS** (*Software as a Service*) — Logiciel **utilisé via abonnement** sur le cloud, sans installation lourde chez le client.

- **B2B / B2C** — **Business to business** (vente à des entreprises) vs **business to consumer** (vente aux particuliers).

- **Product-Market Fit** — Degré d’**adéquation** entre un produit et les besoins du marché : les bons segments achètent et restent.

- **COMEX** — Comité exécutif (direction) d’une entreprise ; dans le case study, les recommandations sont formulées pour ce niveau de décision.

### Power BI

- **DAX** (*Data Analysis Expressions*) — Langage de **formules** dans Power BI / SSAS pour définir **mesures** et colonnes calculées (agrégations, filtres, logique temporelle).

- **Power Query** — Outil d’**ETL** dans l’écosystème Microsoft pour **connecter**, **nettoyer** et **transformer** les données avant le modèle.

- **Schéma en étoile** (*star schema*) — Modèle de données avec une **table de faits** (événements, ventes…) entourée de **tables de dimensions** (date, client, produit…). Facilite les analyses et les requêtes type « tranche par ».

### Données et SQL (SentinelSQL)

- **OLAP** — Traitement **analytique** (agrégations, grands volumes en lecture). À opposer à **OLTP** (transactions ligne à ligne type banque en ligne).

- **Parquet** — Format de fichier **colonne**, **compressé**, très utilisé pour l’analytique et le lac de données.

- **CTE** (*Common Table Expression*) — Bloc `WITH nom AS ( … )` en SQL pour **structurer** une requête en étapes lisibles.

- **Fonction fenêtrée** (*window function*) — Fonction SQL calculée sur un **ensemble de lignes liées** à la ligne courante (ex. moyenne mobile, rang), via `OVER (...)`.

- **Z-score** — Nombre d’**écarts-types** entre une valeur et la moyenne : \(Z = (x - \mu) / \sigma\). Sert souvent à repérer des valeurs **extrêmes** relativement au groupe.

- **Slippage** — En finance, écart entre le **prix d’exécution** d’un ordre et un **prix de référence** (marché). Un slippage important peut signaler de la **volatilité**, de la **liquidité faible** ou des comportements suspects.

- **Wash trading** — Pratique où un acteur crée une activité **artificielle** (achat/vente qui ne reflète pas un intérêt économique réel), souvent pour gonfler le volume ou manipuler l’affichage du marché.

- **Front-running** — Usage d’**information non publique** sur des ordres à venir pour trader avant les autres — illégal sur les marchés réglementés.

- **Surveillance réglementaire** (*market surveillance*) — Ensemble de contrôles et d’outils pour **détecter** abus de marché, conformité aux règles (ex. cadres européens ou US selon le contexte).

### Optimisation (City Manager)

- **Algorithme glouton** (*greedy*) — À chaque étape, choix **localement optimal** sans garantie d’optimum global ; souvent **rapide** et simple.

- **Méta-heuristique** — Méthode générique (souvent **stochastique** ou exploratoire) pour approcher de bonnes solutions sur des problèmes **difficiles** (combinatoire), sans garantie d’optimalité stricte.

- **Hill Climbing** — Part d’une solution et la **améliore** en passant à un **voisin** meilleur jusqu’à un optimum local (comme gravir une colline en ne montant qu’en pente).

### Jeu web (Labyrinthe)

- **WebAssembly (Wasm)** — Format binaire exécutable **dans le navigateur**, souvent utilisé pour porter du code C/C++/Rust ou des runtimes (Python, jeux) avec des performances correctes.

- **pygbag** — Outil qui **empaquète** un projet Pygame pour le web (souvent via WebAssembly et assets).

---

## Tableau récapitulatif

| Projet | Idée en une phrase | Stack principale |
|--------|--------------------|------------------|
| **sql-sentinel-dashboard** | Détection de signaux de fraude / risque sur données marché | Evidence, SvelteKit, DuckDB, Parquet, Python |
| **powerbi-churn-analysis** | Diagnostic de churn et stratégie sur une SaaS fictive | Power BI, Power Query, DAX, HTML/CSS |
| **java-city-manager** | Optimisation budgétaire municipale sous contraintes | Java, CheerpJ, React, Vite |
| **python-labyrinthe-game** | Jeu labyrinthe 2D avec collisions et effets | Python, Pygame, pygbag, React, Vite |

---

*Document généré pour le portfolio — projets MIAGE / Dauphine.*
