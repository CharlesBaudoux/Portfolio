import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string; // chemin relatif dans public/
  link: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  link,
  featured = false,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si le lien est un lien interne (ancre) ou vide, ne pas quitter l'app
    if (link === '#' || link.startsWith('#')) {
      e.preventDefault();
      // Optionnel: faire défiler vers le haut ou rien
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Détecter les liens vers des projets statiques (fichiers HTML dans public/projets/)
    const isStaticProject = link.includes('/projets/') && link.endsWith('.html');
    if (isStaticProject) {
      // Laisser le comportement natif de la balise <a> : redirection complète hors de l'app React
      // Ne pas appeler e.preventDefault() -> le navigateur quitte l'app
      // Optionnel : on peut ajouter un attribut target="_blank" si souhaité, mais la consigne est de quitter l'app.
      // Pour garantir la disparition de la navbar du portfolio, on utilise une redirection native.
      // On peut aussi forcer window.location.href, mais le simple clic sur <a href="..."> suffira.
      // Cependant, pour éviter toute interception par React Router, on utilise window.location.href.
      e.preventDefault();
      window.location.href = link;
      return;
    }

    // Pour les autres liens (non gérés), comportement par défaut
    // (ce cas ne devrait pas se produire avec les données actuelles)
  };

  // Déterminer si ce projet est le portfolio actuel
  const isCurrentPortfolio = title.toLowerCase().includes('portfolio') || link === '#';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`card overflow-hidden flex flex-col h-full ${featured ? 'border-2 border-purple-accent' : ''}`}
    >
      {/* Image du projet */}
      {image && (
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
          {featured && (
            <Badge label="Vitrine" color="purple" size="sm" />
          )}
        </div>

        <p className="text-text-secondary mb-4 flex-grow">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              label={tech}
              color="purple"
              size="sm"
            />
          ))}
        </div>

        {/* Bouton d'action ou indicateur "Site Actuel" */}
        <div className="mt-auto">
          {isCurrentPortfolio ? (
            <div className="flex justify-center items-center py-2 px-4">
              <Badge
                label="Site Actuel"
                color="gold"
                size="md"
                className="border-2 border-accent-gold bg-accent-gold/10 text-accent-gold font-semibold"
              />
            </div>
          ) : (
            <a
              href={link}
              onClick={handleClick}
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-accent border border-purple-accent text-purple-accent hover:bg-purple-900/30 py-2 px-4 text-sm w-full"
            >
              <Icon name="external" size={16} className="mr-2" />
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;