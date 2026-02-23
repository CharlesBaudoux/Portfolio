import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from '../molecules/EducationCard';

const EducationTimeline: React.FC = () => {
  const educationData = [
    {
      period: 'Sept. 2025 - Présent',
      institution: 'Université Paris Dauphine‑PSL',
      degree: 'L3 MIAGE (Informatique & Gestion)',
      details: [
        'Ingénierie des systèmes',
        'Finance d’entreprise',
        'Bases de données Relationnelles',
        'Algorithmes dans les graphes',
        'Analyse de données',
        'Programmation objet avec Java',
        'Programmation linéaire',
      ],
      logo: '/Logo_Dauphine.png',
    },
    {
      period: 'Sept. 2023 - Juin 2025',
      institution: 'Université Paris‑1 Panthéon‑Sorbonne',
      degree: 'L1/L2 MIASHS ( Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales',
      details: [
        'Parcours général en sciences sociales, mathématiques et informatique',
        'Statistiques',
        'Analyse réelle',
        'Théorie économique',
        'Microéconomie',
        'Méthodologie de recherche et analyse économique',
      ],
      logo: '/Logo_PanthéonSorbonne.png',
    },
  ];

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-text-primary mb-4">Formation académique</h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Un parcours d'excellence au sein d'institutions prestigieuses, alliant{' '}
          <span className="font-semibold text-dauphine-blue">rigueur scientifique</span> et{' '}
          <span className="font-semibold text-accent-gold">vision business</span>.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            period={edu.period}
            institution={edu.institution}
            degree={edu.degree}
            details={edu.details}
            logo={edu.logo}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>

      {/* Note complémentaire */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-blue-900/20 rounded-2xl border border-blue-800 max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold text-dauphine-blue mb-2">Objectif professionnel</h3>
        <p className="text-text-secondary">
          À la recherche d'un <span className="font-semibold text-text-primary">stage en IT/Data (minimum 8 semaines à partir du 18 mai 2026)</span> pour mettre en pratique mes compétences techniques et managériales au sein d'une entreprise innovante.
        </p>
      </motion.div>
    </section>
  );
};

export default EducationTimeline;