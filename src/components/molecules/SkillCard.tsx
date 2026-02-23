import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';
import type { IconProps } from '../atoms/Icon';

interface SkillCardProps {
  name: string;
  category: 'tech' | 'data' | 'soft';
  level: number; // 1‑5 (maintenant inutilisé mais conservé pour la compatibilité)
  iconName: IconProps['name'];
}

const SkillCard: React.FC<SkillCardProps> = ({ name, category, iconName }) => {
  const categoryLabels = {
    tech: 'Informatique',
    data: 'Analyse de données',
    soft: 'Soft Skills',
  };

  const categoryColors = {
    tech: 'blue',
    data: 'green',
    soft: 'gold',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card flex flex-col items-start p-5"
    >
      <div className="flex items-center w-full">
        <div className="p-3 bg-blue-900/20 rounded-lg mr-4">
          <Icon name={iconName} size={28} className="text-dauphine-blue" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-xl text-text-primary mb-1">{name}</h4>
          <Badge
            label={categoryLabels[category]}
            color={categoryColors[category] as any}
            size="sm"
            className="mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;