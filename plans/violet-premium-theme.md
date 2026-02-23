# Plan d'application du thème "Violet Premium"

## Objectif
Appliquer un thème sombre et élégant avec des accents violets sur l'ensemble du portfolio, sans modifier les fonctionnalités ni le dossier Projets.

## Modifications à effectuer

### 1. Configuration Tailwind (`tailwind.config.js`)

**Couleurs à ajouter :**
- `purple-light: '#a855f7'` (violet-500)
- `purple-accent: '#8b5cf6'` (violet-600)
- `purple-glow: 'rgba(168, 85, 247, 0.2)'`
- `purple-dark: '#1e1b4b'` (violet-900)
- `purple-bg: '#0f0a23'` (fond violet très foncé)

**Ombres personnalisées :**
- `shadow-purple-glow: '0 10px 25px -5px rgba(168, 85, 247, 0.2)'`
- `shadow-purple-glow-lg: '0 20px 50px -12px rgba(168, 85, 247, 0.3)'`

**Dégradé de fond :**
- `purple-gradient: linear-gradient(135deg, #0f0a23 0%, #1e1b4b 50%, #0A0F1E 100%)`

### 2. Styles globaux (`src/index.css`)

**Modifications :**
- Remplacer le `background-color` du `body` par `#0f0a23` (purple-bg) ou utiliser le dégradé `purple-gradient`.
- Mettre à jour la couleur du texte principal avec `text-gray-200` (blanc cassé).
- Ajuster les couleurs des titres (`h1, h2, h3, h4`) pour utiliser `text-purple-400` ou `text-purple-300`.
- Mettre à jour la classe `.card` pour utiliser une ombre violette (`shadow-purple-glow`) et une bordure subtile violette.

### 3. Composants principaux

#### HeroSection (`src/components/organisms/HeroSection.tsx`)
- Remplacer le dégradé de fond clair (`from-blue-50 via-white to-gray-50`) par un dégradé sombre avec des nuances violettes (`from-purple-dark via-purple-bg to-dark-bg`).
- Changer les couleurs de texte :
  - `text-gray-900` → `text-gray-100`
  - `text-gray-700` → `text-gray-300`
  - `text-gray-600` → `text-gray-400`
- Utiliser `text-purple-400` pour les accents (ex: "BAUDOUX", "L3 MIAGE").

#### Navbar (`src/components/organisms/Navbar.tsx`)
- Changer le fond de la navbar en `bg-purple-dark/80` avec `backdrop-blur-md`.
- Les liens de navigation doivent avoir une couleur `text-gray-300` et un survol `text-purple-400`.

#### Footer (`src/components/organisms/Footer.tsx`)
- Remplacer `bg-slate-900` par `bg-purple-dark`.
- Ajuster les couleurs de texte pour utiliser `text-gray-300`.

### 4. Composants atomiques

#### Button (`src/components/atoms/Button.tsx`)
- Modifier les variantes :
  - Primary : `bg-purple-accent hover:bg-purple-light text-white shadow-purple-glow`
  - Secondary : `bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700`
  - Outline : `border border-purple-accent text-purple-accent hover:bg-purple-900/30`
- Mettre à jour `focus:ring-dauphine-blue` en `focus:ring-purple-accent`.

#### Badge (`src/components/atoms/Badge.tsx`)
- Ajouter une variante `purple` avec `bg-purple-900 text-purple-300 border border-purple-700`.
- Mettre à jour les couleurs existantes pour qu'elles s'harmonisent avec le thème sombre.

### 5. Cartes de projets (`src/components/molecules/ProjectCard.tsx`)

- Remplacer la classe `.card` existante par une version avec ombre violette.
- Ajouter `shadow-purple-glow hover:shadow-purple-glow-lg` sur la carte.
- Changer la bordure `border-accent-gold` en `border-purple-accent` pour les projets en vedette.
- Le bouton "Voir le projet" doit utiliser `border-purple-accent text-purple-accent hover:bg-purple-900/30`.

### 6. Autres composants

- `SkillsGrid` : Ajuster les couleurs des cartes de compétences.
- `EducationTimeline` : Utiliser des couleurs de texte claires et des bordures violettes.
- `ProjectViewer` : S'assurer que le fond est sombre.

### 7. Vérifications finales

- Contraste des couleurs (WCAG) : Vérifier que le texte `text-gray-200` sur fond `purple-bg` a un ratio d'au moins 4.5:1.
- Cohérence sur tous les breakpoints (mobile, tablette, desktop).
- Aucune régression fonctionnelle (les liens, les interactions doivent rester identiques).

## Fichiers à modifier

1. `tailwind.config.js`
2. `src/index.css`
3. `src/components/organisms/HeroSection.tsx`
4. `src/components/organisms/Navbar.tsx`
5. `src/components/organisms/Footer.tsx`
6. `src/components/atoms/Button.tsx`
7. `src/components/atoms/Badge.tsx`
8. `src/components/molecules/ProjectCard.tsx`
9. `src/components/organisms/SkillsGrid.tsx`
10. `src/components/organisms/EducationTimeline.tsx`

## Ordre d'exécution

1. Mettre à jour Tailwind config.
2. Mettre à jour les styles globaux.
3. Mettre à jour les composants atomiques.
4. Mettre à jour les composants principaux.
5. Tester l'application et ajuster les couleurs si nécessaire.

## Remarques

- Ne pas modifier le dossier `public/projets/`.
- Conserver les fonctionnalités existantes (navigation, liens, etc.).
- Le thème doit rester professionnel et refléter le "Prestige Dauphinois" avec une touche moderne violette.