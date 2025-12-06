/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // nReach Studio - Brand Colors
        'nreach': {
          // Primary - Midnight
          'midnight': {
            DEFAULT: '#1A1F3D',
            50: '#E8E9ED',
            100: '#D1D3DC',
            200: '#A3A7B9',
            300: '#757B96',
            400: '#474F73',
            500: '#1A1F3D',
            600: '#151931',
            700: '#101325',
            800: '#0B0D19',
            900: '#05060C',
          },
          // Accent - Electric Cyan
          'electric': {
            DEFAULT: '#00D4AA',
            50: '#E6FBF6',
            100: '#CCF7ED',
            200: '#99EFDB',
            300: '#66E7C9',
            400: '#33DFB7',
            500: '#00D4AA',
            600: '#00AA88',
            700: '#008066',
            800: '#005544',
            900: '#002B22',
          },
          // Secondary - Lavande Tech
          'lavande': {
            DEFAULT: '#6B7AED',
            light: '#8B9AFF',
            50: '#F0F1FE',
            100: '#E1E4FC',
            200: '#C3C9FA',
            300: '#A5AEF7',
            400: '#8793F5',
            500: '#6B7AED',
            600: '#4A5BE5',
            700: '#2E3FD9',
            800: '#2432AD',
            900: '#1A2581',
          },
        },
        // Semantic Colors - Light Mode
        'light': {
          'bg': '#FFFFFF',
          'surface': '#F9FAFB',
          'text': '#0F1219',
          'text-muted': '#6B7280',
          'border': '#E5E7EB',
        },
        // Semantic Colors - Dark Mode
        'dark': {
          'bg': '#0F1219',
          'surface': '#1F2937',
          'text': '#E5E7EB',
          'text-muted': '#9CA3AF',
          'border': '#374151',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #00D4AA 0%, #6B7AED 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #1A1F3D 0%, #2E3440 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'nreach': '0 4px 24px rgba(0, 212, 170, 0.15)',
        'nreach-lg': '0 8px 40px rgba(0, 212, 170, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(0, 212, 170, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(0, 212, 170, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
