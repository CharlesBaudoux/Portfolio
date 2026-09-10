# Portfolio — Charles Baudoux

Vitrine de mes projets d'ingénierie de la donnée et de développement.
Alternant Data Engineer chez Crédit Agricole S.A., M1 MIAGE à l'Université
Paris Dauphine‑PSL.

[LinkedIn](https://linkedin.com/in/charlesbaudoux) ·
[GitHub](https://github.com/CharlesBaudoux)

## Les projets exposés

| Projet | Ce qu'il démontre | Code |
|---|---|---|
| **SentinelSQL v2** | Détection de manipulation de marché en flux : Redpanda → Flink → Iceberg, dbt, Dagster. Détection de cycles dans un graphe temporel glissant, 642 tests, métriques mesurées sur 6 graines. | [sentinel-v2](https://github.com/CharlesBaudoux/sentinel-v2) |
| **SentinelSQL v1** | SQL analytique (CTE, fonctions fenêtrées) exécuté dans le navigateur via DuckDB‑WASM sur des fichiers Parquet, site généré par Evidence.dev. | [dépôt](https://github.com/CharlesBaudoux/Dashboard-de-D-tection-de-Fraudes-Financi-res-SQL-BI-as-Code-) |
| **Analyse de churn** | Modélisation décisionnelle sous Power BI : ETL Power Query, schéma en étoile, mesures DAX, restitution orientée décision. | — |
| **Optimisation budgétaire** | Sac à dos multidimensionnel en Java : heuristique gloutonne et Hill Climbing comparées, moteur exécuté dans le navigateur via CheerpJ. | [dépôt](https://github.com/CharlesBaudoux/Simulation_et_optimisation_budg-taire_d_une_ville) |
| **Labyrinthe 2D** | Jeu Pygame avec collisions pixel‑perfect, porté en WebAssembly via pygbag. | [dépôt](https://github.com/CharlesBaudoux/labyrinthe_python) |

Chaque projet est consultable depuis le site ; les pages statiques vivent dans
`public/projets/` et sont servies telles quelles.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router.

Les composants suivent une organisation *atomic design* :

```
src/components/
├── atoms/       Button, Badge, Icon
├── molecules/   SkillCard, ProjectCard, EducationCard
└── organisms/   Navbar, HeroSection, SkillsGrid,
                 ExperienceTimeline, EducationTimeline,
                 ProjectsShowcase, ProjectViewer, Footer
```

`EducationCard` sert les deux timelines — expérience et formation — via ses
props `icon` et `logo`.

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm run build    # tsc -b && vite build -> dist/
npm run lint
npm run preview  # servir le build de production localement
```

`dist/` est un artefact de build : il est ignoré par git et régénéré à chaque
`npm run build`.

## Ajouter un projet

1. Déposer la page statique dans `public/projets/<nom-du-projet>/`.
2. Ajouter une entrée dans le tableau `projects` de
   `src/components/organisms/ProjectsShowcase.tsx` — `highlights` porte les
   chiffres saillants, `github` le lien vers le code quand il est publié.
3. Ajouter une image de couverture dans `public/` et la référencer via `image`.
