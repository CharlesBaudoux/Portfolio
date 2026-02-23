import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const Footer: React.FC = () => {
  const interests = ['Informatique', 'Boxe', 'Streetworkout'];

  return (
    <footer id="contact" className="bg-purple-dark text-white py-16">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Icon name="work" size={28} className="mr-3 text-purple-light" />
              Centres d'intérêt
            </h3>
            <ul className="space-y-4">
              {interests.map((interest, idx) => (
                <li key={idx} className="flex items-center text-lg">
                  <Icon name="chevronRight" size={18} className="mr-3 text-purple-light" />
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Icon name="email" size={28} className="mr-3 text-purple-light" />
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center">
                <Icon name="location" size={20} className="mr-4 text-purple-light" />
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p className="text-gray-300">Boulogne‑Billancourt, 92100</p>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="phone" size={20} className="mr-4 text-purple-light" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-300">06 16 76 29 23</p>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="email" size={20} className="mr-4 text-accent-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:charlesbaudoux92@gmail.com"
                    className="text-gray-300 hover:text-white underline"
                  >
                    charlesbaudoux92@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="linkedin" size={20} className="mr-4 text-accent-gold" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/charlesbaudoux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white underline"
                  >
                    linkedin.com/in/charles_baudoux
                  </a>
                </div>
              </div>
            </address>

            <div className="mt-8">
              <Button
                variant="primary"
                href="mailto:charlesbaudoux92@gmail.com"
                icon={<Icon name="email" size={18} />}
              >
                Envoyer un email
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-purple-700 pt-8 mt-8 text-center text-gray-400">
          <p className="mb-4">
            © {new Date().getFullYear()} Charles Baudoux – Portfolio L3 MIAGE Dauphine. Tous droits réservés.
          </p>
          <p className="text-sm">
            Conçu avec React, Tailwind CSS et Framer Motion – Déployé avec Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
