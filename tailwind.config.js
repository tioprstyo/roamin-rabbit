/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'roamin-yellow': {
          500: '#FFEC69'
        },
        'roamin-dark': {
          800: '#211F26',
          700: '#2D2B30',
          600: '#36343B',
          500: '#424046',
          400: '#525057',
        },
        'roamin-neutral': {
          400: '#D9D9D9',
          500: '#E7E7E7',
          600: '#E2DFDF',
          700: '#B3B3B3',
          800: '#717171',
        },
      }
    },
  },
  plugins: [],
}