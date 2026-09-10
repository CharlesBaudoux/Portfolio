import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../molecules/SkillCard';
import type { IconProps } from '../atoms/Icon';

const SkillsGrid: React.FC = () => {
  const skills = {
    tech: [
      { name: 'Python', level: 5, iconName: 'python' as IconProps['name'] },
      { name: 'SQL', level: 4, iconName: 'sql' as IconProps['name'] },
      { name: 'Java (POO)', level: 4, iconName: 'java' as IconProps['name'] },
      { name: 'Git / GitHub', level: 4, iconName: 'github' as IconProps['name'] },
      { name: 'Linux', level: 4, iconName: 'linux' as IconProps['name'] },
      { name: 'React / TypeScript', level: 3, iconName: 'react' as IconProps['name'] },
      { name: 'Docker', level: 3, iconName: 'work' as IconProps['name'] },
      { name: 'C', level: 2, iconName: 'project' as IconProps['name'] },
    ],
    data: [
      { name: 'Modélisation de données', level: 4, iconName: 'chart' as IconProps['name'] },
      { name: 'MicroStrategy', level: 3, iconName: 'powerbi' as IconProps['name'] },
      { name: 'Power BI / DAX', level: 3, iconName: 'powerbi' as IconProps['name'] },
      { name: 'dbt', level: 3, iconName: 'sql' as IconProps['name'] },
      { name: 'DuckDB', level: 3, iconName: 'sql' as IconProps['name'] },
      { name: 'Pandas / NumPy', level: 4, iconName: 'numpy' as IconProps['name'] },
      { name: 'Kafka / Flink', level: 2, iconName: 'chart' as IconProps['name'] },
      { name: 'Pack Office', level: 4, iconName: 'chart' as IconProps['name'] },
    ],
    soft: [
      { name: 'Esprit d\'analyse', level: 5, iconName: 'chart' as IconProps['name'] },
      { name: 'Rigueur', level: 5, iconName: 'work' as IconProps['name'] },
      { name: 'Travail en équipe', level: 5, iconName: 'users' as IconProps['name'] },
      { name: 'Vulgarisation technique', level: 4, iconName: 'users' as IconProps['name'] },
    ],
  };

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

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-text-primary mb-4">Compétences</h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Un profil orienté <span className="font-semibold text-dauphine-blue">ingénierie de la donnée</span>, adossé à la{' '}
          <span className="font-semibold text-accent-gold">compréhension du métier</span>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Informatique */}
        <div>
          <h3 className="text-2xl font-bold text-dauphine-blue mb-6 flex items-center">
            <span className="bg-blue-900/20 p-2 rounded-lg mr-3">💻</span>
            Informatique
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.tech.map((skill, idx) => (
              <SkillCard
                key={idx}
                name={skill.name}
                category="tech"
                level={skill.level}
                iconName={skill.iconName}
              />
            ))}
          </motion.div>
        </div>

        {/* Analyse de données */}
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
            <span className="bg-green-900/20 p-2 rounded-lg mr-3">📊</span>
            Données & décisionnel
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.data.map((skill, idx) => (
              <SkillCard
                key={idx}
                name={skill.name}
                category="data"
                level={skill.level}
                iconName={skill.iconName}
              />
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center">
            <span className="bg-yellow-900/20 p-2 rounded-lg mr-3">🤝</span>
            Soft Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.soft.map((skill, idx) => (
              <SkillCard
                key={idx}
                name={skill.name}
                category="soft"
                level={skill.level}
                iconName={skill.iconName}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;