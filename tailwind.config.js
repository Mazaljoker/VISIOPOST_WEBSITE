/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs VisioScreen - Palette officielle
        'visio-violet': {
          DEFAULT: '#3f2680',
          50: '#f8f6fc',
          100: '#f0ebf8',
          200: '#e3d9f2',
          300: '#d0bde8',
          400: '#b896db',
          500: '#3f2680',
          600: '#2a1250',
          700: '#1f0d3d',
          800: '#150a2a',
          900: '#0a0517',
        },
        'visio-rose': {
          DEFAULT: '#ed1164',
          50: '#fef2f7',
          100: '#fee7f0',
          200: '#fecfe3',
          300: '#fda6cc',
          400: '#fb6da8',
          500: '#ed1164',
          600: '#c90f54',
          700: '#a50c43',
          800: '#7d0933',
          900: '#540622',
        },
        'visio-bleu': {
          DEFAULT: '#00aeef',
          50: '#f0fbff',
          100: '#e0f7fe',
          200: '#b9ecfd',
          300: '#7cddfc',
          400: '#36cbf8',
          500: '#00aeef',
          600: '#0091c7',
          700: '#0074a1',
          800: '#026185',
          900: '#08516e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        }
      }
    },
  },
  plugins: [],
}
