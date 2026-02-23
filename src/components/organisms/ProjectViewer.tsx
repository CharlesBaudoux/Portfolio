import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';

/**
 * Composant ProjectViewer - Affiche un projet statique dans une iframe avec une barre de navigation élégante.
 * L'URL du projet est passée via le paramètre de recherche `src`.
 */
const ProjectViewer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const projectUrl = searchParams.get('src') || '';

  // Si aucune URL n'est fournie, afficher un message d'erreur
  if (!projectUrl) {
    return (
      <div className="min-h-screen bg-dark-bg text-text-primary flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-dauphine-blue mb-4">Aucun projet sélectionné</h1>
        <p className="text-text-secondary mb-8">Veuillez sélectionner un projet depuis la vitrine.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dauphine-blue bg-dauphine-blue text-white hover:bg-blue-700 py-3 px-6 text-lg"
        >
          <Icon name="arrow-left" size={20} className="mr-2" />
          Retour au Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col bg-dark-bg">
      {/* Barre de navigation élégante */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-card-dark border-b border-border-dark shadow-lg py-4 px-6 flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dauphine-blue border border-dauphine-blue text-dauphine-blue hover:bg-blue-50 py-2 px-4 text-sm"
          >
            <Icon name="arrow-left" size={16} className="mr-2" />
            ← Retour au Portfolio
          </Link>
          <div className="hidden md:block h-6 w-px bg-border-dark" />
          <div className="hidden md:flex items-center space-x-2">
            <Icon name="external" size={16} className="text-accent-gold" />
            <span className="text-text-secondary text-sm">Vue projet</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-text-secondary text-sm truncate max-w-xs">
            Projet : <span className="font-semibold text-text-primary">{projectUrl.split('/').pop()}</span>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold border border-accent-gold text-accent-gold hover:bg-yellow-50 py-2 px-4 text-sm"
          >
            <Icon name="external" size={16} className="mr-2" />
            Ouvrir dans un nouvel onglet
          </a>
        </div>
      </motion.nav>

      {/* Iframe qui prend tout l'espace restant */}
      <div className="flex-1 w-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0"
        >
          <iframe
            src={projectUrl}
            title="Aperçu du projet"
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            allow="fullscreen"
          />
        </motion.div>
        {/* Overlay de chargement optionnel */}
        <div className="absolute bottom-4 right-4 bg-card-dark/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="info" size={14} />
            <span>Le projet est chargé dans une iframe. Certaines fonctionnalités peuvent être limitées.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewer;