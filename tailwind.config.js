/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Big Shoulders Display', 'sans-serif'],
        outfit: ['Outfit']
      },
      colors: {
        gold: '#d5966c',
        dark: '#151515',
        gunmetal: '#444444'
      },
      scale: {
        '550': '4'
      },
    },
  },
  plugins: [],
}

