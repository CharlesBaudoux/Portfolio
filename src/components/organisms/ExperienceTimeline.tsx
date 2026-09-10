import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from '../molecules/EducationCard';

const ExperienceTimeline: React.FC = () => {
  const experienceData = [
    {
      period: 'Sept. 2026 - Présent',
      institution: 'Crédit Agricole S.A.',
      degree: 'Alternant Data Engineer – BI & Décisionnel',
      details: [
        'Conception et refonte de tableaux de bord MicroStrategy à destination des Caisses régionales et des directions du Groupe',
        'Optimisation de l’architecture des données décisionnelles : modélisation, alimentation et enrichissement des jeux de données',
        'Automatisation de processus de reporting et de tâches récurrentes (Python, SQL)',
        'Analyse des usages des tableaux de bord et amélioration de l’accès à l’information',
        'Administration fonctionnelle des outils du service : habilitations MicroStrategy et SharePoint',
      ],
    },
    {
      period: 'Juin 2026 - Août 2026',
      institution: 'LAMSADE — CNRS UMR 7243, Université Paris Dauphine‑PSL',
      degree: 'Stagiaire Research Software Engineer (Java)',
      details: [
        'Conception et développement d’une bibliothèque Java de génération de diagrammes UML depuis du code compilé et annoté, par réflexion et rendu PlantUML — 109 classes de production, 61 classes de test, depuis un dépôt vide',
        'Pipeline en quatre étapes (annotation → extraction → modèle → rendu), plugin Maven et fichier de règles à l’échelle du projet',
        'Validation contre un codebase réel dont les diagrammes avaient été tracés à la main, offrant un point de comparaison humain/machine : la démarche a révélé deux défauts sémantiques que la suite de tests ne pouvait pas détecter',
        'JGrapa : diagnostic et correction d’un défaut bloquant la compilation (récursion infinie sur une valeur sentinelle), avec 118 lignes de tests de non‑régression',
        'Java 21, Maven, JUnit, API Reflection, PlantUML, Guava, Jackson, JaCoCo, Git',
      ],
    },
    {
      period: 'Juil. 2024 - Août 2024',
      institution: 'Ludomino',
      degree: 'Responsable des ventes',
      details: [
        'Accueil et conseil client, gestion des opérations de caisse',
        'Mise en place et promotion des opérations commerciales',
        'Aménagement des rayons selon le plan de merchandising',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-text-primary mb-4">Expérience professionnelle</h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          De la <span className="font-semibold text-dauphine-blue">recherche en génie logiciel</span> à la{' '}
          <span className="font-semibold text-accent-gold">donnée décisionnelle</span> en environnement bancaire.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experienceData.map((exp, index) => (
          <EducationCard
            key={index}
            period={exp.period}
            institution={exp.institution}
            degree={exp.degree}
            details={exp.details}
            icon="work"
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
