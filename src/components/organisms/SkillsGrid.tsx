import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../molecules/SkillCard';
import type { IconProps } from '../atoms/Icon';

const SkillsGrid: React.FC = () => {
  const skills = {
    tech: [
      { name: 'Python', level: 5, iconName: 'python' as IconProps['name'] },
      { name: 'Java (POO)', level: 4, iconName: 'java' as IconProps['name'] },
      { name: 'SQL / PostgreSQL', level: 4, iconName: 'sql' as IconProps['name'] },
      { name: 'React.js', level: 4, iconName: 'react' as IconProps['name'] },
      { name: 'Tailwind CSS', level: 5, iconName: 'tailwind' as IconProps['name'] },
      { name: 'HTML/CSS/JS', level: 5, iconName: 'react' as IconProps['name'] },
      { name: 'Linux', level: 4, iconName: 'linux' as IconProps['name'] },
      { name: 'C', level: 3, iconName: 'react' as IconProps['name'] },
    ],
    data: [
      { name: 'PowerBI', level: 4, iconName: 'powerbi' as IconProps['name'] },
      { name: 'R', level: 3, iconName: 'powerbi' as IconProps['name'] },
      { name: 'Numpy', level: 5, iconName: 'numpy' as IconProps['name'] },
      { name: 'Pack Office', level: 4, iconName: 'chart' as IconProps['name'] },
      { name: 'Pandas', level: 4, iconName: 'chart' as IconProps['name'] },
    ],
    soft: [
      { name: 'Travail en équipe', level: 5, iconName: 'users' as IconProps['name'] },
      { name: 'Rigoureux', level: 5, iconName: 'work' as IconProps['name'] },
      { name: 'Sociable', level: 5, iconName: 'users' as IconProps['name'] },
      { name: 'Esprit d\'analyse', level: 5, iconName: 'chart' as IconProps['name'] },
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
          Un profil équilibré entre <span className="font-semibold text-dauphine-blue">expertise technique</span> et{' '}
          <span className="font-semibold text-accent-gold">aptitudes managériales</span>.
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
            Analyse de données
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
                iconName={skill.iconName as any}
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
                iconName={skill.iconName as any}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;