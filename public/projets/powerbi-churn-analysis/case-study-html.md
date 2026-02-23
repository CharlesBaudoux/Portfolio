# Code HTML complet - Page d'Étude de Cas Power BI

Voici le code HTML complet de la page d'étude de cas, prêt à être copié dans un fichier `case-study.html`.

## Structure des fichiers requis
- `case-study.html` : fichier principal
- `présentation_Power_Bi.mp4` : fichier vidéo (existe déjà dans le dossier)

## Code HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechStream Analytics - Étude de Cas Power BI | Charles Baudoux</title>
    <meta name="description" content="Étude de cas Data Analytics réalisée par Charles Baudoux, étudiant L3 MIAGE à Paris Dauphine. Modélisation Power BI, analyse de churn et recommandations stratégiques pour une SaaS fictive.">
    <!-- Tailwind CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <!-- Font Awesome pour les icônes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Police Google Fonts (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Inter', sans-serif;
        }
        .glass-card {
            background: rgba(30, 41, 59, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(100, 116, 139, 0.2);
        }
        .hover-glow:hover {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        .gradient-text {
            background: linear-gradient(90deg, #3b82f6, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-100 min-h-screen">
    <!-- Navigation -->
    <header class="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div class="container mx-auto px-4 py-3">
            <a href="index.html" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <i class="fas fa-arrow-left mr-2"></i>
                <span>Retour au portfolio principal</span>
            </a>
        </div>
    </header>

    <main class="container mx-auto px-4 py-8 max-w-6xl">
        <!-- Section Hero -->
        <section id="hero" class="mb-16 mt-8">
            <!-- Badge / Surtitre -->
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 mb-6">
                <i class="fas fa-database mr-2"></i>
                <span class="text-sm font-semibold">Projet Data | Réalisé par Charles Baudoux - L3 MIAGE Paris Dauphine</span>
            </div>

            <!-- Titre principal -->
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                TechStream Analytics : <span class="gradient-text">Transformer les données SaaS en décisions stratégiques.</span>
            </h1>

            <!-- Sous-titre -->
            <p class="text-xl text-gray-300 mb-10 max-w-3xl">
                Modélisation, DAX complexe et diagnostic d'attrition (Churn) sur une cohorte de 200 clients B2B et B2C.
            </p>

            <!-- Tags techniques -->
            <div class="flex flex-wrap gap-3 mb-8">
                <span class="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center">
                    <i class="fas fa-chart-bar text-blue-400 mr-2"></i> Power BI
                </span>
                <span class="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center">
                    <i class="fas fa-code-branch text-green-400 mr-2"></i> Power Query (ETL)
                </span>
                <span class="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center">
                    <i class="fas fa-star text-yellow-400 mr-2"></i> Modélisation en Étoile
                </span>
                <span class="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 flex items-center">
                    <i class="fas fa-calculator text-purple-400 mr-2"></i> DAX Avancé
                </span>
            </div>

            <!-- Séparateur -->
            <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"></div>
        </section>

        <!-- Section Vidéo -->
        <section id="video" class="mb-20">
            <h2 class="text-3xl font-bold mb-6 flex items-center">
                <i class="fas fa-play-circle text-blue-400 mr-3"></i> Démonstration Interactive
            </h2>
            <p class="text-gray-400 mb-8 max-w-3xl">
                Présentation du Dashboard Power BI avec filtres dynamiques, tooltips contextuels et variations des KPIs en temps réel.
            </p>
            
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover-glow transition-shadow duration-300">
                <video 
                    src="présentation_Power_Bi.mp4" 
                    autoplay 
                    loop 
                    muted 
                    playsinline 
                    class="w-full h-auto"
                    poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <!-- Overlay de contrôle -->
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div class="flex items-center justify-between">
                        <div class="text-white">
                            <i class="fas fa-sync-alt mr-2"></i> Lecture en boucle
                        </div>
                        <div class="text-white text-sm">
                            <i class="fas fa-volume-mute mr-2"></i> Son désactivé
                        </div>
                    </div>
                </div>
            </div>
            
            <p class="text-gray-500 text-sm mt-4 text-center">
                Aperçu interactif du Dashboard Power BI - Filtres dynamiques, tooltips et variations des KPIs.
            </p>
        </section>

        <!-- Section Résumé Exécutif -->
        <section id="executive" class="mb-20">
            <div class="glass-card rounded-2xl p-8 border-l-4 border-blue-500">
                <h2 class="text-3xl font-bold mb-6 flex items-center">
                    <i class="fas fa-file-alt text-blue-400 mr-3"></i> Résumé Exécutif
                </h2>
                <blockquote class="text-xl text-gray-300 italic border-l-4 border-gray-600 pl-6 py-2">
                    "L'analyse de l'année fiscale révèle une entreprise à deux vitesses. D'un côté, une santé financière solide portée par le segment Enterprise. De l'autre, une alerte rouge critique sur le segment Consumer/SMB, qui subit une hémorragie de clients. Le taux de Churn global (~20%) masque une réalité beaucoup plus polarisée."
                </blockquote>
                <div class="mt-6 flex items-center text-gray-400">
                    <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                    <span class="text-sm">Insight clé : La moyenne globale peut cacher des problèmes structurels majeurs.</span>
                </div>
            </div>
        </section>

        <!-- Section Analyse (3 cards) -->
        <section id="analysis" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center">Analyse Détaillée</h2>
            <p class="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Trois insights stratégiques extraits de l'analyse des données, permettant de comprendre les dynamiques sous-jacentes.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="glass-card rounded-2xl p-6 border border-cyan-800/30 hover:border-cyan-500/50 transition-all hover-glow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-chart-pie text-2xl text-cyan-400"></i>
                        </div>
                        <h3 class="text-2xl font-bold">💰 La Règle des 80/20</h3>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Le produit Premium (~2500$) est le véritable moteur de l'entreprise. Il génère près de <span class="font-bold text-cyan-300">70% du Chiffre d'Affaires Total (MRR)</span>. La rétention du segment Enterprise sécurise le Cash-Flow.
                    </p>
                    <div class="mt-6 pt-4 border-t border-gray-800">
                        <span class="text-sm text-cyan-300 font-semibold">IMPLICATION BUSINESS</span>
                        <p class="text-sm text-gray-400 mt-1">Concentrer les efforts sur la satisfaction client Enterprise plutôt que sur l'acquisition de nouveaux clients low-value.</p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="glass-card rounded-2xl p-6 border border-amber-800/30 hover:border-amber-500/50 transition-all hover-glow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-exclamation-triangle text-2xl text-amber-400"></i>
                        </div>
                        <h3 class="text-2xl font-bold">🚨 Le Paradoxe du Churn</h3>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Le danger des Vanity Metrics. Un taux de churn global de <span class="font-bold text-amber-300">9% en France</span> masquait une hémorragie de <span class="font-bold text-red-400">50% sur le produit Basic</span>. Le volume massif des comptes Premium (0% de churn) cachait cette fuite d'entrée de gamme.
                    </p>
                    <div class="mt-6 pt-4 border-t border-gray-800">
                        <span class="text-sm text-amber-300 font-semibold">IMPLICATION BUSINESS</span>
                        <p class="text-sm text-gray-400 mt-1">Segmenter les analyses de churn par produit pour éviter les conclusions trompeuses.</p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="glass-card rounded-2xl p-6 border border-emerald-800/30 hover:border-emerald-500/50 transition-all hover-glow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-globe-europe text-2xl text-emerald-400"></i>
                        </div>
                        <h3 class="text-2xl font-bold">🌍 Dynamique Géographique</h3>
                    </div>
                    <p class="text-gray-300 mb-4">
                        USA et France dominent l'Enterprise. L'Allemagne et le Canada montrent une <span class="font-bold text-emerald-300">forte traction sur le segment intermédiaire (SMB)</span>, offrant un excellent vivier pour des campagnes d'Upsell.
                    </p>
                    <div class="mt-6 pt-4 border-t border-gray-800">
                        <span class="text-sm text-emerald-300 font-semibold">IMPLICATION BUSINESS</span>
                        <p class="text-sm text-gray-400 mt-1">Cibler les marchés géographiques prometteurs avec des offres adaptées au segment SMB.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Recommandations Stratégiques -->
        <section id="recommendations" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center">Recommandations Stratégiques pour le COMEX</h2>
            <p class="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Trois actions prioritaires issues de l'analyse data‑driven pour optimiser la rentabilité et réduire l'attrition.
            </p>
            
            <div class="space-y-8 max-w-4xl mx-auto">
                <!-- Recommandation 1 -->
                <div class="glass-card rounded-xl p-6 border border-blue-800/30">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center mr-6">
                            <span class="text-2xl font-bold text-blue-300">1</span>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-3 text-blue-300">Geler l'acquisition Basic</h3>
                            <p class="text-gray-300">
                                Couper immédiatement le budget marketing sur le segment "Consumer" (effet "seau percé"). Les coûts d'acquisition dépassent la valeur à vie de ces clients. Rediriger les ressources vers le <span class="font-semibold">renforcement de la rétention Enterprise</span>.
                            </p>
                            <div class="mt-4 flex items-center text-gray-400">
                                <i class="fas fa-chart-line text-blue-400 mr-2"></i>
                                <span class="text-sm">Impact estimé : +15% de marge opérationnelle en 6 mois</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recommandation 2 -->
                <div class="glass-card rounded-xl p-6 border border-purple-800/30">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/40 flex items-center justify-center mr-6">
                            <span class="text-2xl font-bold text-purple-300">2</span>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-3 text-purple-300">Audit UX/UI de l'Onboarding</h3>
                            <p class="text-gray-300">
                                Comprendre pourquoi <span class="font-semibold">50% des utilisateurs de l'offre Basic n'arrivent pas à utiliser l'outil</span> lors du premier mois. Mettre en place des parcours guidés, des tutoriels interactifs et un support proactif pour réduire la friction initiale.
                            </p>
                            <div class="mt-4 flex items-center text-gray-400">
                                <i class="fas fa-user-check text-purple-400 mr-2"></i>
                                <span class="text-sm">Objectif : réduire le churn premier mois de 50% à 20%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recommandation 3 -->
                <div class="glass-card rounded-xl p-6 border border-green-800/30">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-green-900/40 flex items-center justify-center mr-6">
                            <span class="text-2xl font-bold text-green-300">3</span>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-3 text-green-300">Pivot stratégique B2B</h3>
                            <p class="text-gray-300">
                                Assumer un positionnement <span class="font-semibold">100% "Entreprise"</span> au vu de l'excellente rétention sur les offres Pro et Premium. Repositionner la marque, adapter le messaging marketing et restructurer l'équipe commerciale vers un modèle B2B pur.
                            </p>
                            <div class="mt-4 flex items-center text-gray-400">
                                <i class="fas fa-bullseye text-green-400 mr-2"></i>
                                <span class="text-sm">Horizon : transition sur 12-18 mois</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer / Contact -->
    <footer id="contact" class="bg-gray-900/50 border-t border-gray-800 mt-20">
        <div class="container mx-auto px-4 py-16 max-w-4xl">
            <div class="text-center">
                <h2 class="text-4xl font-bold mb-6">Prêt à faire parler vos données ?</h2>
                <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Je suis activement à la recherche d'une opportunité en Data. Passionné par l'analyse business et la visualisation de données, je souhaite mettre mes compétences au service de projets à impact.
                </p>
                
                <!-- Coordonnées -->
                <div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                    <div class="flex items-center text-gray-300">
                        <div class="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-phone text-blue-400"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Téléphone</p>
                            <p class="text-xl font-semibold">06 16 76 29 23</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center text-gray-300">
                        <div class="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-4">
                            <i class="fas fa-envelope text-blue-400"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Email</p>
                            <p class="text-xl font-semibold">charlesbaudoux92@gmail.com</p>
                        </div>
                    </div>
                </div>
                
                <!-- Bouton CTA -->
                <a href="mailto:charlesbaudoux92@gmail.com" 
                   class="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <i class="fas fa-paper-plane mr-3"></i> Me contacter par email
                </a>
                
                <!-- Mention -->
                <p class="text-gray-500 text-sm mt-12 pt-6 border-t border-gray-800">
                    © 2025 Charles Baudoux - Étudiant L3 MIAGE à l'Université Paris Dauphine<br>
                    Cette étude de cas est une démonstration de compétences en Business Intelligence et Data Visualization.
                </p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script>
        // Ajout d'un effet de scroll fluide pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animation simple pour les cards au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, observerOptions);

        // Observer les cards
        document.querySelectorAll('.glass-card').forEach(card => {
            observer.observe(card);
        });
    </script>
</body>
</html>
```

## Fonctionnalités incluses
1. **Design responsive** (mobile-first avec Tailwind)
2. **Thème dark mode premium** (gradients, glassmorphism)
3. **Navigation** avec lien retour au portfolio
4. **Section Hero** avec badges et tags techniques
5. **Vidéo intégrée** avec autoplay en boucle
6. **Résumé exécutif** avec citation stylisée
7. **Grille d'analyse** (3 cards avec icônes et implications business)
8. **Recommandations stratégiques** numérotées
9. **Section contact** avec coordonnées et bouton CTA
10. **Animations subtiles** au scroll
11. **Scripts JavaScript** pour le scroll fluide et les animations

## Prochaines étapes
1. Copier ce code dans un fichier `case-study.html`
2. Vérifier que la vidéo `présentation_Power_Bi.mp4` est dans le même dossier
3. Ouvrir le fichier dans un navigateur pour tester
4. Ajuster les couleurs ou le contenu si nécessaire

Le design respecte les exigences du fichier .clinerules : ton professionnel, orienté business, présentation structurée et analytique.