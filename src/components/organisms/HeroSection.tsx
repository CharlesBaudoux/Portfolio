import React from 'react';
import { motion } from 'framer-motion';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background subtle gradient violet */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple-bg to-dark-bg -z-10" />

      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Photo de profil */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-2xl overflow-hidden"
          >
            <img
              src="/photo_Charles.webp"
              alt="Charles Baudoux"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Titre */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-4">
            Charles <span className="text-purple-accent">BAUDOUX</span>
          </h1>

          {/* Sous‑titre */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            Étudiant en <span className="font-semibold text-purple-accent">L3 MIAGE</span> à Paris Dauphine‑PSL
          </p>

          {/* Accroche */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Double compétence <span className="font-semibold text-purple-light">Informatique & Gestion</span> | Passionné par l'algorithmique et la Data.
          </p>

          {/* Call‑to‑Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<Icon name="project" size={20} />}
            >
              Voir ma vitrine de projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<Icon name="email" size={20} />}
            >
              Me contacter
            </Button>
          </div>

          {/* Indicateur de scroll */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-purple-400"
          >
            <span className="text-sm mb-2">Découvrez mon parcours</span>
            <Icon name="chevronRight" size={24} className="rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;