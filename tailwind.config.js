/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#080706',
          900: '#0b0b0b',
          800: '#141214',
          700: '#1f1d1b',
          600: '#2b2a29',
          warm: '#efe6d8',
          gold: '#b8894a',
          'gold-soft': '#c9a063'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        'eyebrow': '0.35em'
      }
    }
  },
  plugins: []
};
