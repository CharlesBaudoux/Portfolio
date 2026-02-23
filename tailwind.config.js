/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dauphine-blue': '#0055A4',
        'accent-gold': '#D4AF37',
        'deep-slate': '#1A202C',
        'dark-bg': '#0A0F1E', // Bleu nuit très profond
        'card-dark': '#1A2238', // Couleur des cartes (bleu ardoise)
        'text-primary': '#F8FAFC', // Blanc cassé très clair
        'text-secondary': '#CBD5E1', // Gris clair pour texte secondaire
        'border-dark': '#2D3748', // Bordures gris ardoise
        // Nouvelles couleurs Violet Premium
        'purple-light': '#a855f7', // violet-500
        'purple-accent': '#8b5cf6', // violet-600
        'purple-glow': 'rgba(168, 85, 247, 0.2)',
        'purple-dark': '#1e1b4b', // violet-900
        'purple-bg': '#0f0a23', // Fond violet très foncé
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'stagger': 'stagger 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'purple-glow': '0 10px 25px -5px rgba(168, 85, 247, 0.2)',
        'purple-glow-lg': '0 20px 50px -12px rgba(168, 85, 247, 0.3)',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #0f0a23 0%, #1e1b4b 50%, #0A0F1E 100%)',
      },
    },
  },
  plugins: [],
}