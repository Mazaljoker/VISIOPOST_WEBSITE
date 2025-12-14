/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ========================================
        // nSignal - Brand Colors 2025
        // Charte Graphique Anti "Violet AI"
        // ========================================
        
        'nsignal': {
          // Primary - Teal Profond
          // Confiance + fraîcheur, évite le bleu corporate
          'primary': {
            DEFAULT: '#0F7B6C',
            50: '#E6F4F2',
            100: '#CCE9E5',
            200: '#99D3CB',
            300: '#66BDB1',
            400: '#33A797',
            500: '#0F7B6C',
            600: '#0C6256',
            700: '#094A41',
            800: '#06312B',
            900: '#031916',
          },
          
          // Secondary - Coral Dynamique
          // Chaleur humaine, coordination, anti-AI aesthetic
          'secondary': {
            DEFAULT: '#E86A58',
            50: '#FDEBE8',
            100: '#FBD7D1',
            200: '#F7AFA3',
            300: '#F38775',
            400: '#EF5F47',
            500: '#E86A58',
            600: '#D55A4A',
            700: '#B84A3C',
            800: '#8A382D',
            900: '#5C251E',
          },
          
          // Accent - Jaune Signal
          // Visibilité maximale, optimisme, CTAs
          'accent': {
            DEFAULT: '#DFAB01',
            50: '#FEF9E6',
            100: '#FDF3CC',
            200: '#FBE799',
            300: '#F9DB66',
            400: '#F7CF33',
            500: '#DFAB01',
            600: '#B28901',
            700: '#866701',
            800: '#594400',
            900: '#2D2200',
          },
          
          // Dark - Charcoal Chaud
          // Sophistication, lectures longues, dark mode
          'dark': {
            DEFAULT: '#1E2B3A',
            50: '#E9EBEE',
            100: '#D3D7DD',
            200: '#A7AFBB',
            300: '#7B8799',
            400: '#4F5F77',
            500: '#1E2B3A',
            600: '#18222E',
            700: '#121A23',
            800: '#0C1117',
            900: '#06090C',
          },
          
          // Light - Crème Mocha
          // Inspiration Pantone 2025, chaleur sans froideur
          'light': {
            DEFAULT: '#F8F5F2',
            50: '#FFFFFF',
            100: '#FDFCFB',
            200: '#FAF8F6',
            300: '#F8F5F2',
            400: '#EDE9E5',
            500: '#D6D0CA',
            600: '#B8B0A8',
            700: '#8A8279',
            800: '#6B6259',
            900: '#4A433C',
          },
        },
        
        // ========================================
        // Couleurs de Catégories (5 types de posts)
        // Toutes WCAG AA compliant
        // ========================================
        
        'category': {
          // Personnel - Bleu Ocean
          'personnel': {
            DEFAULT: '#0B6E99',
            light: '#E6F4F9',
            dark: '#074A66',
          },
          // Playlist - Coral (= secondary)
          'playlist': {
            DEFAULT: '#E86A58',
            light: '#FDEBE8',
            dark: '#B84A3C',
          },
          // Hérité - Vert Forêt
          'herite': {
            DEFAULT: '#2D7D46',
            light: '#E8F5EC',
            dark: '#1E5330',
          },
          // Suggéré - Orange Vif
          'suggere': {
            DEFAULT: '#D9730D',
            light: '#FEF3E6',
            dark: '#9A5209',
          },
          // Partagé - Pourpre Berry
          'partage': {
            DEFAULT: '#7C4DFF',
            light: '#F0EBFF',
            dark: '#5835B3',
          },
        },
        
        // ========================================
        // Couleurs Sémantiques
        // ========================================
        
        'status': {
          'success': '#2D7D46',
          'warning': '#D9730D',
          'error': '#DC2626',
          'info': '#0B6E99',
        },
        
        // ========================================
        // Semantic Colors - Light Mode
        // ========================================
        'light': {
          'bg': '#FFFFFF',
          'surface': '#F8F5F2',
          'text': '#1E2B3A',
          'text-muted': '#6B6259',
          'border': '#EDE9E5',
        },
        
        // ========================================
        // Semantic Colors - Dark Mode
        // ========================================
        'dark': {
          'bg': '#0F1419',
          'surface': '#1E2B3A',
          'text': '#F8F5F2',
          'text-muted': '#B8B0A8',
          'border': '#2B3544',
        },
      },
      
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      backgroundImage: {
        // Gradients nSignal
        'gradient-primary': 'linear-gradient(135deg, #0F7B6C 0%, #E86A58 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E2B3A 0%, #0F7B6C 100%)',
        'gradient-warm': 'linear-gradient(135deg, #E86A58 0%, #DFAB01 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(15,123,108,0.15) 0%, transparent 70%)',
      },
      
      boxShadow: {
        'nsignal': '0 4px 24px rgba(15, 123, 108, 0.15)',
        'nsignal-lg': '0 8px 40px rgba(15, 123, 108, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'warm': '0 4px 24px rgba(232, 106, 88, 0.15)',
      },
      
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'signal': 'signal 1.5s ease-out infinite',
      },
      
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(15, 123, 108, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(15, 123, 108, 0.5)' },
        },
        signal: {
          '0%': { opacity: '1', transform: 'scale(0.8)' },
          '100%': { opacity: '0', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
