import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'education', label: 'Formation' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  const activeSection = useScrollSpy(navItems.map(item => item.id), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-dark/80 backdrop-blur-md shadow-purple-glow' : 'bg-transparent'}`}
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-dauphine-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <span className="font-bold text-xl text-gray-100 hidden md:inline">
              Charles Baudoux
            </span>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${activeSection === item.id ? 'text-purple-accent border-b-2 border-purple-accent' : 'text-gray-300 hover:text-purple-light'}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </Button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-purple-light"
            >
              <Icon name={mobileMenuOpen ? 'external' : 'external'} size={24} />
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 bg-purple-dark/90 backdrop-blur-md rounded-lg shadow-purple-glow p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium ${activeSection === item.id ? 'bg-purple-900/30 text-purple-accent' : 'text-gray-300 hover:bg-purple-900/50'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-purple-700">
              <Button
                variant="primary"
                fullWidth
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;