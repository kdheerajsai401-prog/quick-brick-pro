/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"FSP DEMO - PODIUM Sharp 4.11"', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brick: {
          DEFAULT: '#C0392B',
          dark: '#A93226',
        },
        accent: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        navy: '#0a1a2f',
      },
    },
  },
  plugins: [],
};
