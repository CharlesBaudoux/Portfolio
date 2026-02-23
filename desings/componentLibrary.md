# 🧩 Component Library - MIAGE Portfolio

## Principes de Conception
- **Atomic Design** : Atomes → Molécules → Organismes → Templates → Pages.
- **Props Typés** : TypeScript interfaces pour toutes les props.
- **Réutilisabilité** : Composants génériques avec slots (`children`) quand pertinent.
- **Accessibilité** : ARIA labels, gestion du focus, support clavier.

## Atomes (Atoms)

### Button (`Button.tsx`)
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
```
**Styles Tailwind** :
- Primary : `bg-blue-600 hover:bg-blue-700 text-white`
- Secondary : `bg-gray-200 hover:bg-gray-300 text-gray-800`
- Outline : `border border-blue-600 text-blue-600 hover:bg-blue-50`

### Badge (`Badge.tsx`)
Pour les tags de technologies, niveaux de compétence.
```tsx
interface BadgeProps {
  label: string;
  color?: 'blue' | 'green' | 'yellow' | 'gray';
  icon?: React.ReactNode;
}
```

### Icon (`Icon.tsx`)
Wrapper pour les icônes (React Icons, SVG).

## Molécules (Molecules)

### SkillCard (`SkillCard.tsx`)
Combine Badge, Icon et une barre de progression.
```tsx
interface SkillCardProps {
  name: string;
  category: 'tech' | 'data' | 'soft';
  level: number; // 1‑5
  icon: React.ReactNode;
}
```

### EducationCard (`EducationCard.tsx`)
Logo, période, établissement, description.
```tsx
interface EducationCardProps {
  period: string;
  institution: string;
  degree: string;
  details: string[];
  logo: string; // chemin vers l'image
}
```

### ProjectCard (`ProjectCard.tsx`)
Image, titre, description, technologies, lien.
```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link: string; // URL vers le projet
  isExternal?: boolean;
}
```

## Organismes (Organisms)

### Navbar (`Navbar.tsx`)
Logo + liens de navigation + bouton contact.
- Liens : ['Accueil', 'Compétences', 'Formation', 'Projets', 'Contact']
- Smooth scroll vers les sections.
- Responsive : Menu hamburger sur mobile.

### HeroSection (`HeroSection.tsx`)
Photo, titre, sous‑titre, CTA.
```tsx
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <Image src="/photo_Charles.webp" alt="Charles Baudoux" />
      <h1>Charles BAUDOUX</h1>
      <p>Étudiant en L3 MIAGE à Paris Dauphine‑PSL</p>
      <div>
        <Button variant="primary" href="#projects">Voir ma vitrine de projets</Button>
        <Button variant="outline" href="#contact">Me contacter</Button>
      </div>
    </section>
  );
};
```

### SkillsGrid (`SkillsGrid.tsx`)
Agrège les SkillCard par catégorie.
```tsx
const skills = {
  tech: [
    { name: 'Python', level: 5 },
    { name: 'Java', level: 4 },
    // ...
  ],
  data: [ ... ],
  soft: [ ... ]
};
```

### EducationTimeline (`EducationTimeline.tsx`)
Liste verticale des EducationCard avec connecteurs.

### ProjectsShowcase (`ProjectsShowcase.tsx`)
Grille de ProjectCard avec titre de section.
```tsx
const projects = [
  {
    title: 'Conception d\'un Portfolio Web Interactif',
    description: 'Vitrine interactive détaillant l\'ensemble de mes projets...',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#', // Lien interne (c'est le portfolio lui‑même)
  },
  // ...
];
```

### Footer (`Footer.tsx`)
Coordonnées, centres d'intérêt, liens sociaux.
```tsx
const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3>Centres d'intérêt</h3>
          <ul>
            <li>Informatique</li>
            <li>Boxe</li>
            <li>Streetworkout</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <address>
            📍 Boulogne‑Billancourt, 92100<br/>
            📞 06 16 76 29 23<br/>
            ✉️ <a href="mailto:charles.baudoux@example.com">charles.baudoux@example.com</a><br/>
            🔗 <a href="https://linkedin.com/in/charles_baudoux">LinkedIn</a>
          </address>
        </div>
      </div>
    </div>
  </footer>
);
```

## Templates

### MainLayout (`MainLayout.tsx`)
Structure globale : Navbar fixe, contenu principal, Footer.
```tsx
const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
```

### SectionWrapper (`SectionWrapper.tsx`)
Wrapper commun pour chaque section (padding, titre, animation).
```tsx
interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}
```

## Hooks Personnalisés

### useScrollSpy (`useScrollSpy.ts`)
Détecte la section active pour la Navbar.

### useResponsive (`useResponsive.ts`)
Retourne les breakpoints actuels.

## Fichiers de Configuration

### `tailwind.config.js`
```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dauphine-blue': '#0055A4',
        'accent-gold': '#D4AF37',
        'deep-slate': '#1A202C',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
```

### `tsconfig.json`
Configuration TypeScript standard Vite.

## Structure de Dossiers Recommandée
```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Icon.tsx
│   ├── molecules/
│   │   ├── SkillCard.tsx
│   │   ├── EducationCard.tsx
│   │   └── ProjectCard.tsx
│   └── organisms/
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── SkillsGrid.tsx
│       ├── EducationTimeline.tsx
│       ├── ProjectsShowcase.tsx
│       └── Footer.tsx
├── hooks/
│   ├── useScrollSpy.ts
│   └── useResponsive.ts
├── layouts/
│   ├── MainLayout.tsx
│   └── SectionWrapper.tsx
├── assets/
│   └── icons/
├── App.tsx
└── main.tsx