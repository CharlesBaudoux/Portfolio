import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../molecules/ProjectCard';

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  image?: string;
  link: string;
  github?: string;
  featured?: boolean;
}

const ProjectsShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'SentinelSQL v2 — Détection de manipulation de marché en flux',
      description:
        'Plateforme de surveillance de marché événementielle : détection en flux d’anneaux de wash trading, de layering, de pics de volume et de divergences de prix, avec un harnais d’évaluation qui mesure ce que valent réellement les détecteurs.',
      highlights: [
        'Redpanda → Flink → Iceberg, dbt (22 modèles), Dagster, Prometheus/Grafana',
        'Détection de cycles dans un graphe temporel glissant, état borné et alertes idempotentes',
        '642 tests, 95 % de couverture sur le cœur, 11 décisions d’architecture documentées',
        'Rappel et précision mesurés sur 6 graines — jamais sur une seule',
      ],
      technologies: ['Python', 'Kafka', 'Flink', 'dbt', 'DuckDB', 'Iceberg', 'Dagster', 'Docker'],
      image: './Sentinel_V2.png',
      link: '/projets/sentinel-v2/index.html',
      github: 'https://github.com/CharlesBaudoux/sentinel-v2',
      featured: true,
    },
    {
      title: 'SentinelSQL v1 — Dashboard de détection de fraudes (BI‑as‑Code)',
      description:
        'Tableau de bord analytique de surveillance de marché : volumes anormaux, transactions circulaires, écarts de prix. Le SQL s’exécute dans le navigateur, sans serveur d’API.',
      highlights: [
        'DuckDB compilé en WebAssembly, données au format Parquet',
        'SQL analytique : CTE, fonctions fenêtrées, agrégations temporelles',
        'Site statique généré par Evidence.dev (SvelteKit)',
      ],
      technologies: ['SQL', 'DuckDB', 'Evidence.dev', 'Parquet', 'Python'],
      image: './Projet_SQL.png',
      link: '/projets/sql-sentinel-dashboard/index.html',
      github: 'https://github.com/CharlesBaudoux/Dashboard-de-D-tection-de-Fraudes-Financi-res-SQL-BI-as-Code-',
    },
    {
      title: 'Analyse de churn & modélisation décisionnelle (Power BI)',
      description:
        'Étude de cas BI sur une entreprise SaaS : comprendre qui part, pourquoi les moyennes trompent, et quelles décisions en tirer.',
      highlights: [
        'ETL sous Power Query, modèle sémantique en schéma en étoile',
        'Mesures et logique temporelle en DAX',
        'Restitution orientée décision, formulée pour un comité exécutif',
      ],
      technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation', 'Data Storytelling'],
      image: './PowerBi_Portfolio.png',
      link: '/projets/powerbi-churn-analysis/case-study.html',
    },
    {
      title: 'Simulation et optimisation budgétaire d’une ville (Java)',
      description:
        'Outil d’aide à la décision : répartir des crédits municipaux entre projets sous contraintes de budget et de politique publique.',
      highlights: [
        'Problème du sac à dos multidimensionnel',
        'Heuristique gloutonne et méta‑heuristique Hill Climbing, comparées',
        'Exécution du moteur Java dans le navigateur via CheerpJ',
      ],
      technologies: ['Java', 'Algorithmique', 'Optimisation', 'React'],
      image: './Java_Portfolio.png',
      link: '/projets/java-city-manager/index.html',
      github: 'https://github.com/CharlesBaudoux/Simulation_et_optimisation_budg-taire_d_une_ville',
    },
    {
      title: 'Jeu de labyrinthe 2D modulaire (Python)',
      description:
        'Jeu 2D avec pièges, objets et ennemis, écrit avec Pygame puis porté dans le navigateur.',
      highlights: [
        'Détection de collisions par masques pixel‑perfect',
        'Portage WebAssembly via pygbag',
      ],
      technologies: ['Python', 'Pygame', 'WebAssembly'],
      image: './labyrinthe.png',
      link: '/projets/python-labyrinthe-game/index.html',
      github: 'https://github.com/CharlesBaudoux/labyrinthe_python',
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
            github={project.github}
            highlights={project.highlights}
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
          Chaque projet est accessible en ligne, et le code source de ceux qui en ont un
          est publié sur{' '}
          <a
            href="https://github.com/CharlesBaudoux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-accent hover:underline font-semibold"
          >
            github.com/CharlesBaudoux
          </a>.
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;
