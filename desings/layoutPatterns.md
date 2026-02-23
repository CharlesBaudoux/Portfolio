# 📐 Layout Patterns - MIAGE Portfolio

## Principes de Grille
**Mobile‑First 12‑Column Grid** (Tailwind `grid-cols-1` à `grid-cols-12`).

### Breakpoints & Comportements
- **Mobile (< 640px)** : Colonne unique, espacement vertical généreux.
- **Tablette (640px‑1024px)** : 2 colonnes pour les grilles de cartes.
- **Desktop (≥ 1024px)** : 3‑4 colonnes selon le contenu.

### Conteneurs
- `.container` centré avec `mx-auto`, `px-4` (padding horizontal).
- Largeur max : `max-w-7xl` pour les écrans larges.

## Patterns de Section

### Hero Section
- Hauteur minimale : `min-h-[90vh]` (viewport height).
- Disposition : Flex colonne centrée (`flex-col`, `items-center`, `justify-center`).
- Image de profil : Arrondie (`rounded-full`), bordure subtile (`border-4 border-white/20`), ombre portée (`shadow-2xl`).
- Call‑to‑Action : Boutons alignés horizontalement sur desktop, empilés sur mobile.

### Compétences (Skills)
- Grille de badges/icons : `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
- Chaque compétence : Carte avec icône, nom, niveau (barre de progression ou tag).
- Animation au scroll : Fade‑in stagger avec Framer Motion.

### Formation (Education)
- Timeline verticale sur desktop, empilée sur mobile.
- Chaque étape : Carte avec logo à gauche, détails à droite.
- Connecteurs visuels entre les étapes (ligne pointée).

### Projets (Projects Grid)
- Grille responsive : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Cartes de dimension uniforme (`aspect-square` ou `h-64`).
- Effet hover : Scale léger (`scale-105`), ombre augmentée, transition douce.
- Overlay d'information au hover (titre, technologies, lien).

### Footer (Contact)
- 2 colonnes sur desktop (Centres d'intérêt + Coordonnées), empilées sur mobile.
- Icônes sociales alignées horizontalement.
- Background sombre (`bg-slate-900`) avec texte clair.

## Patterns de Navigation

### Navbar Fixe
- Position : `fixed top-0 left-0 right-0`.
- Background : `bg-white/80 backdrop-blur-md`.
- Liens de section : Smooth scroll vers les ancres correspondantes.
- Indicateur de section active (soulignement animé).

### Smooth Scroll
- Utilisation de `react-scroll` ou Framer Motion `scrollIntoView`.
- Durée : `500ms` easing `cubic-bezier(0.4, 0, 0.2, 1)`.

## Patterns d'Animation (Framer Motion)

### Entrées Progressives (Stagger Children)
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### Slide‑In au Scroll
```jsx
import { useInView } from 'framer-motion';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
```

### Hover Effects
- Boutons : `hover:scale-105`, `hover:shadow-lg`, `hover:bg-blue-700`.
- Cartes : `hover:shadow-xl`, `hover:-translate-y-2`.

## Responsive Utilities
- Masquer/afficher : `hidden md:block`, `block md:hidden`.
- Taille texte : `text-sm md:text-base lg:text-lg`.
- Marges conditionnelles : `mt-4 md:mt-8`.

## Espacement Vertical entre Sections
- `section-py` : `py-12 md:py-24` (12rem sur mobile, 24rem sur desktop).
- `section-px` : `px-4 md:px-8 lg:px-16`.