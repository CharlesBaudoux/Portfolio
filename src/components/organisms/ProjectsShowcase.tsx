import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../molecules/ProjectCard';

const ProjectsShowcase: React.FC = () => {
  const projects = [
    {
      title: 'Conception d’un Portfolio Web Interactif',
      description: 'Vitrine interactive détaillant l’ensemble de mes projets. Stack React/Tailwind propulsée par des agents IA autonomes sous contexte strict.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      image: './Image_Portfolio.png', // placeholder, à remplacer par une image de projet
      link: '#', // Lien interne (c’est le portfolio lui‑même)
      featured: true,
    },
    {
      title: 'Simulation et optimisation budgétaire d’une ville (JAVA)',
      description: 'Outil d’aide à la décision budgétaire. Application du problème du Sac à dos Multidimensionnel et méthodes de tri Glouton/HillClimbing.',
      technologies: ['Java', 'Algorithmes', 'Optimisation'],
      image: './Java_Portfolio.png', // placeholder
      link: '/projets/java-city-manager/index.html',
    },
    {
      title: 'Développement d’un jeu vidéo 2D modulaire (PYTHON)',
      description: 'Jeu de labyrinthe (pièges, objets, ennemis) avec moteur Pygame (compilé via Pygbag). Création de session depuis le terminal.',
      technologies: ['Python', 'Pygame', 'Algorithmes'],
      image: './labyrinthe.png', // placeholder
      link: '/projets/python-labyrinthe-game/index.html',
    },
    {
      title: 'Dashboard de Détection de Fraudes Financières (SQL, BI‑as‑Code)',
      description: 'Monitoring identifiant les anomalies de marché. Exploitation de fonctions SQL analytiques sous DuckDB et Evidence.dev.',
      technologies: ['SQL', 'DuckDB', 'Evidence.dev', 'DataViz'],
      image: './Projet_SQL.png', // placeholder
      link: '/projets/sql-sentinel-dashboard/index.html',
    },
    {
      title: 'Data Analytics : Analyse de Churn & Modélisation (PowerBi)',
      description: 'Dashboard analytique complet (ETL, DAX, Data Storytelling) pour une entreprise SaaS fictive.',
      technologies: ['Power BI', 'DAX', 'ETL', 'Data Storytelling'],
      image: './PowerBi_Portfolio.png',
      link: '/projets/powerbi-churn-analysis/case-study.html',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-text-primary mb-4">Vitrine de projets</h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Des réalisations concrètes illustrant ma double compétence{' '}
          <span className="font-semibold text-dauphine-blue">technique</span> et{' '}
          <span className="font-semibold text-accent-gold">analytique</span>. Cliquez pour explorer.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            featured={project.featured}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-text-secondary mb-6">
          Chaque projet est documenté et accessible via son dossier statique dans{' '}
          <code className="bg-card-dark px-2 py-1 rounded border border-border-dark">le lien GitHub sur le CV</code>.
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;
