import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

interface EducationCardProps {
  period: string;
  institution: string;
  degree: string;
  details: string[];
  logo: string; // chemin vers l'image dans public/
  isLast?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
  period,
  institution,
  degree,
  details,
  logo,
  isLast = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex items-start"
    >
      {/* Ligne de connexion */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-300 -z-10" />
      )}

      {/* Point de timeline */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dauphine-blue flex items-center justify-center mr-4 relative z-10">
        <Icon name="graduation" size={24} className="text-white" />
      </div>

      <div className="flex-1 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            {/* Logo à gauche du titre */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt={`Logo ${institution}`}
                className="h-12 w-12 object-contain rounded-lg border border-border-dark"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">{institution}</h3>
              <p className="text-lg text-text-secondary mb-3">{degree}</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-dauphine-blue bg-blue-900/20 px-3 py-1 rounded-full mt-2 md:mt-0">
            {period}
          </span>
        </div>

        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <Icon name="chevronRight" size={16} className="text-accent-gold mr-2 mt-1 flex-shrink-0" />
              <span className="text-text-secondary">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default EducationCard;