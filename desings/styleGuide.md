# 🎨 Style Guide - MIAGE Portfolio

## Palette de Couleurs (Tokens Tailwind)

### Couleurs Primaires
- **Dauphine Blue** : `#0055A4` (Bleu institutionnel de Dauphine)
  - Utilisation : En-têtes, boutons primaires, liens importants.
- **Accent Gold** : `#D4AF37` (Or subtil pour les accents)
  - Utilisation : Survols, bordures, badges, icônes.
- **Deep Slate** : `#1A202C` (Arrière‑plan sombre pour contraste)
  - Utilisation : Footer, cartes en mode sombre optionnel.

### Couleurs Neutres
- **White** : `#FFFFFF` (Fond principal)
- **Light Gray** : `#F7FAFC` (Fond secondaire)
- **Medium Gray** : `#E2E8F0` (Bordures, séparateurs)
- **Dark Gray** : `#4A5568` (Texte secondaire)
- **Black** : `#2D3748` (Texte principal)

### États & Interactions
- **Success** : `#38A169` (Validation, complétion)
- **Warning** : `#D69E2E` (Avertissements)
- **Error** : `#E53E3E` (Erreurs, actions critiques)

## Typographie

### Familles de Polices
- **Titre principal** : `'Inter', sans-serif` (Poids 700)
- **Corps de texte** : `'Inter', sans-serif` (Poids 400)
- **Accents & citations** : `'Playfair Display', serif` (Poids 500, italique optionnel)

### Échelle Typographique (rem)
- `text-xs` : 0.75rem
- `text-sm` : 0.875rem
- `text-base` : 1rem
- `text-lg` : 1.125rem
- `text-xl` : 1.25rem
- `text-2xl` : 1.5rem
- `text-3xl` : 1.875rem
- `text-4xl` : 2.25rem
- `text-5xl` : 3rem
- `text-6xl` : 3.75rem

### Hiérarchie
- **H1** : `text-5xl md:text-6xl` (Titre hero)
- **H2** : `text-3xl md:text-4xl` (Titre de section)
- **H3** : `text-2xl md:text-3xl` (Sous‑titre)
- **H4** : `text-xl md:text-2xl` (Titre de carte)
- **Body** : `text-base md:text-lg` (Paragraphes)
- **Small** : `text-sm` (Légendes, métadonnées)

## Espacement (Spacing Scale)
Basé sur `rem` avec un ratio de 1.5.

- `0` : 0rem
- `1` : 0.25rem
- `2` : 0.5rem
- `3` : 0.75rem
- `4` : 1rem
- `6` : 1.5rem
- `8` : 2rem
- `12` : 3rem
- `16` : 4rem
- `24` : 6rem
- `32` : 8rem

## Ombres (Shadow Scale)
- `shadow-sm` : `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- `shadow` : `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`
- `shadow-md` : `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- `shadow-lg` : `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- `shadow-xl` : `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Effets Visuels
- **Border Radius** : `rounded-lg` (0.5rem) pour les cartes, `rounded-full` pour les avatars.
- **Glassmorphism** : `backdrop-blur-md bg-white/10` pour les overlays hero.
- **Gradients** : `bg-gradient-to-r from-blue-600 to-blue-800` pour les boutons primaires.

## Responsive Breakpoints (Tailwind par défaut)
- `sm` : 640px
- `md` : 768px
- `lg` : 1024px
- `xl` : 1280px
- `2xl` : 1536px

## Accessibilité
- Contraste texte/fond ≥ 4.5:1 pour le texte normal, ≥ 3:1 pour les grands textes.
- Taille de police minimale : 16px pour les corps de texte.
- Focus visible : `outline-2 outline-blue-500 outline-offset-2`.