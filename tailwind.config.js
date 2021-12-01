const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: '#236AF2',
      ...colors
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/images/hero-background.png')"
      }
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
