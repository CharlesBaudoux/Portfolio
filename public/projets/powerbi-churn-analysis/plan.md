# Plan : Page d'Étude de Cas Power BI - TechStream Analytics

## 📋 Vue d'ensemble
Page web "Case Study" intégrée dans un portfolio global, présentant un projet Data Analytics réalisé avec Power BI.

**Public cible** : Recruteurs de cabinets de conseil, entreprises tech, départements Data/BI.

**Objectif** : Démontrer une double compétence technique (Power BI, DAX, modélisation) et analytique (raisonnement business, recommandations stratégiques).

## 🎨 Design System
- **Thème** : Dark Mode premium
- **Couleurs** :
  - Fond : `#0f172a` (slate-900) ou `#111827` (gray-900)
  - Texte : `#f8fafc` (slate-50) / `#cbd5e1` (slate-300)
  - Accents : `#3b82f6` (blue-500) / `#06b6d4` (cyan-500)
  - Bordures : `#334155` (slate-700)
- **Typographie** : Font-sans (Inter ou system) avec hiérarchie claire
- **Effets** : Légers glassmorphism, ombres portées, bordures lumineuses subtiles
- **Responsive** : Mobile-first avec breakpoints Tailwind

## 🏗️ Structure HTML
```
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechStream Analytics - Étude de Cas Power BI | Charles Baudoux</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gray-900 text-gray-100">
    <!-- Navigation -->
    <header>...</header>
    
    <!-- Section Hero -->
    <section id="hero">...</section>
    
    <!-- Section Vidéo -->
    <section id="video">...</section>
    
    <!-- Section Résumé Exécutif -->
    <section id="executive">...</section>
    
    <!-- Section Analyse (3 cards) -->
    <section id="analysis">...</section>
    
    <!-- Section Recommandations -->
    <section id="recommendations">...</section>
    
    <!-- Footer / Contact -->
    <footer id="contact">...</footer>
</body>
</html>
```

## 📄 Sections Détailées

### 1. Navigation
- Bouton discret en haut à gauche : `← Retour au portfolio principal` (lien vers `index.html` ou `/`)
- Position fixed ou sticky avec fond semi-transparent

### 2. Section Hero
- **Surtitre** : "Projet Data | Réalisé par Charles Baudoux - L3 MIAGE Paris Dauphine" (badge)
- **Titre principal** : "TechStream Analytics : Transformer les données SaaS en décisions stratégiques."
- **Sous-titre** : "Modélisation, DAX complexe et diagnostic d'attrition (Churn) sur une cohorte de 200 clients B2B et B2C."
- **Tags techniques** : 4 pills avec icônes : Power BI | Power Query (ETL) | Modélisation en Étoile | DAX Avancé

### 3. Section Vidéo
- **Élément** : `<video>` avec attributs `autoplay loop muted playsinline`
- **Source** : `présentation_Power_Bi.mp4` (fichier existant)
- **Style** : `w-full max-w-5xl mx-auto rounded-xl shadow-2xl border border-gray-800`
- **Légende** : "Aperçu interactif du Dashboard Power BI - Filtres dynamiques, tooltips et variations des KPIs."

### 4. Section Résumé Exécutif
- **Texte** : "L'analyse de l'année fiscale révèle une entreprise à deux vitesses. D'un côté, une santé financière solide portée par le segment Enterprise. De l'autre, une alerte rouge critique sur le segment Consumer/SMB, qui subit une hémorragie de clients. Le taux de Churn global (~20%) masque une réalité beaucoup plus polarisée."
- **Style** : Texte centré avec fond légèrement différent, bordures latérales décoratives

### 5. Section Analyse (Grille de 3 Cards)
**Layout** : Grille responsive `grid-cols-1 md:grid-cols-3` avec gap

**Card 1 - "💰 La Règle des 80/20"**
- Icon : <i class="fas fa-chart-pie"></i>
- Contenu : "Le produit Premium (~2500$) est le véritable moteur de l'entreprise. Il génère près de 70% du Chiffre d'Affaires Total (MRR). La rétention du segment Enterprise sécurise le Cash-Flow."
- Style : Bordure cyan

**Card 2 - "🚨 Le Paradoxe du Churn"**
- Icon : <i class="fas fa-exclamation-triangle"></i>
- Contenu : "Le danger des Vanity Metrics. Un taux de churn global de 9% en France masquait une hémorragie de 50% sur le produit Basic. Le volume massif des comptes Premium (0% de churn) cachait cette fuite d'entrée de gamme."
- Style : Bordure rouge/amber

**Card 3 - "🌍 Dynamique Géographique"**
- Icon : <i class="fas fa-globe-europe"></i>
- Contenu : "USA et France dominent l'Enterprise. L'Allemagne et le Canada montrent une forte traction sur le segment intermédiaire (SMB), offrant un excellent vivier pour des campagnes d'Upsell."
- Style : Bordure verte

### 6. Section Recommandations Stratégiques
**Layout** : Liste numérotée avec icônes

1. **Geler l'acquisition Basic** : "Couper immédiatement le budget marketing sur le segment 'Consumer' (effet 'seau percé')."
2. **Audit UX/UI de l'Onboarding** : "Comprendre pourquoi 50% des utilisateurs de l'offre Basic n'arrivent pas à utiliser l'outil lors du premier mois."
3. **Pivot stratégique B2B** : "Assumer un positionnement 100% 'Entreprise' au vu de l'excellente rétention sur les offres Pro et Premium."

### 7. Footer / Contact
- **Titre** : "Prêt à faire parler vos données ?"
- **Texte** : "Je suis activement à la recherche d'une opportunité en Data."
- **Coordonnées** :
  - 📞 06 16 76 29 23
  - ✉️ charlesbaudoux92@gmail.com
- **Bouton CTA** : "Me contacter par email" (href="mailto:charlesbaudoux92@gmail.com")

## 📱 Responsive Design
- **Mobile** : Stack vertical, padding réduit, texte taille adaptée
- **Tablette** : Grille 2 colonnes pour les cards, vidéo pleine largeur
- **Desktop** : Grille 3 colonnes, contenu centré avec max-width

## 🚀 Optimisations
- **Performance** : Tailwind via CDN, vidéo optimisée (mp4)
- **Accessibilité** : Contrast WCAG, labels ARIA, navigation clavier
- **SEO** : Meta tags appropriés, structure sémantique (header, section, footer)

## ✅ Prochaines étapes
1. Créer le fichier HTML principal
2. Implémenter chaque section
3. Tester la responsivité
4. Valider avec le client
5. Passer en mode code pour l'implémentation