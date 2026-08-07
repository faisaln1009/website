/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0b0b0b',
          800: '#141214',
          700: '#2b2a29',
          warm: '#efe6d8',
          gold: '#b8894a'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
