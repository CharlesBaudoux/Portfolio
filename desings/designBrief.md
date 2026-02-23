# 🎯 Design Brief - Portfolio MIAGE Charles Baudoux

## 1. Objectif du Projet
Créer un portfolio "One-Page" interactif et premium pour **Charles Baudoux**, étudiant en L3 MIAGE à l'Université Paris Dauphine-PSL.
L'objectif principal est de décrocher un stage en IT/Data (minimum 8 semaines à partir du 18 mai 2026) en mettant en valeur une **double compétence Tech & Management**. Le design doit refléter le "Prestige Dauphinois" : moderne, structuré, professionnel et ambitieux.

## 2. Structure de la One-Page (React.js + Tailwind CSS)
L'application doit être une Single Page Application (SPA) avec un défilement fluide (smooth scroll) entre les sections suivantes :

### A. Hero Section (Introduction)
- **Visuel :** Intégration de la photo `photo_Charles.webp` (design épuré, par exemple avec un contour subtil ou un léger effet glassmorphism).
- **Accroches :** - "Charles BAUDOUX"
  - "Étudiant en L3 MIAGE à Paris Dauphine-PSL"
  - "Double compétence Informatique & Gestion | Passionné par l'algorithmique et la Data."
- **Call-to-Action (CTA) :** Un bouton primaire "Voir ma vitrine de projets" et un bouton secondaire "Me contacter".

### B. Compétences (Tech & Soft Skills)
Une section visuelle claire (badges, icônes ou barres de progression minimalistes) divisée en trois catégories :
- **Informatique :** Python, Java (POO), SQL / PostgresSql, C, React.js, Tailwind CSS, HTML/CSS/JavaScript, Linux.
- **Analyse de données :** PowerBI, Numpy, Pack OFFICE.
- **Soft Skills :** Travail en équipe, Rigoureux, Sociable.

### C. Formation académique
Mise en page chronologique ou en cartes côte à côte :
- **Sept. 2025 - Présent : Université Paris Dauphine-PSL** (L3 MIAGE). 
  - *Détails :* Ingénierie des systèmes, Finance d'entreprise, Bases de données Relationnelles, Algorithmes dans les graphes, Analyse de données, Programmation objet avec Java, Programmation linéaire.
  - *Asset :* `Logo_Dauphine.png`
- **Sept. 2023 - Juin 2025 : Université Paris-1 Panthéon-Sorbonne** (L1/L2). 
  - *Détails :* Baccalauréat Spécialités Mathématiques et SES, mention Bien.
  - *Asset :* `Logo_PanthéonSorbonne.png`

### D. Projets (La Vitrine Interactive)
Une belle grille (CSS Grid/Flexbox) présentant 5 cartes interactives (Tuiles). Les 4 tuiles des projets externes doivent être cliquables et rediriger vers leur dossier statique respectif hébergé dans `public/projets/`.

1. **Conception d'un Portfolio Web Interactif (React, Tailwind CSS)**
   - *Description :* Vitrine interactive détaillant l'ensemble de mes projets. Stack React/Tailwind propulsée par des agents IA autonomes sous contexte strict.
2. **Simulation et optimisation budgétaire d’une ville (JAVA)**
   - *Description :* Outil d'aide à la décision budgétaire. Application du problème du Sac à dos Multidimensionnel et méthodes de tri Glouton/HillClimbing.
   - *Lien Cliquable :* `/projets/page_Java/dauphine-city-manager/index.html`
3. **Développement d'un jeu vidéo 2D modulaire (PYTHON)**
   - *Description :* Jeu de labyrinthe (pièges, objets, ennemis) avec moteur Pygame (compilé via Pygbag). Création de session depuis le terminal.
   - *Lien Cliquable :* `/projets/page_labyrinthe/index.html`
4. **Dashboard de Détection de Fraudes Financières (SQL, BI-as-Code)**
   - *Description :* Monitoring identifiant les anomalies de marché. Exploitation de fonctions SQL analytiques sous DuckDB et Evidence.dev.
   - *Lien Cliquable :* `/projets/sentinel-dashboard/build/index.html` *(Note pour l'IA : pointer vers le dossier build généré)*
5. **Data Analytics : Analyse de Churn & Modélisation (PowerBi)**
   - *Description :* Dashboard analytique complet (ETL, DAX, Data Storytelling) pour une entreprise SaaS fictive.
   - *Lien Cliquable :* `/projets/Projet_PowerBi/case-study.html`

### E. Centres d'intérêt & Contact (Footer)
- **Centres d'intérêt :** Informatique, Boxe, Streetworkout.
- **Informations de contact :**
  - 📍 Localisation : Boulogne-Billancourt, 92100
  - 📞 Téléphone : 06 16 76 29 23
  - ✉️ Email : [À définir / Mettre un lien mailto]
  - 🔗 LinkedIn : Linkedin/Charles_Baudoux

## 3. Contraintes Techniques pour l'IA (Roo Code)
- **Framework :** React (Vite.js) avec des composants fonctionnels clairs.
- **Styling :** Tailwind CSS obligatoire (sans fichier CSS externe sauf configuration).
- **Architecture des assets :** Les images (`.png`, `.webp`) et le dossier `/projets/` doivent être strictement placés dans le répertoire `public/`.
- **Responsive :** Mobile-first design (Parfait sur téléphone, tablette, et desktop).
- **Accessibilité :** Contraste suffisant et balises sémantiques.
