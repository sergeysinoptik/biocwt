/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',
        'yellow-extra-light': '#FFDBBB',
        'yellow-light': '#FFC099',
        main: '#222021',
        'main-black': '#1E0C06',
        'black-border': '#6C200B',
        'blue-extra-light': '#D5DCEE',
        'blue-light': '#728BAD',
        'blue-table': '#D9D9D9',
        'blue-menu': '#A3B8D7',
        'blue-form': 'rgba(213, 220, 238, 0.9)',
        'red-table': '#E69679',
      },
      backgroundImage: {
        'main-pattern': "url('/img/main-bg.webp')",
      },
    },
    fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
      montserrat: ['"Montserrat"', 'sans-serif'],
    },
  },
  plugins: [],
};
