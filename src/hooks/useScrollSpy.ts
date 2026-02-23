import { useState, useEffect } from 'react';

/**
 * Hook pour détecter la section active pendant le scroll.
 * @param sectionIds Liste des IDs des sections à observer
 * @param offset Décalage en pixels pour ajuster la détection
 * @returns L'ID de la section active
 */
export const useScrollSpy = (sectionIds: string[], offset = 80): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Trouver la section la plus proche du haut de la fenêtre
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};