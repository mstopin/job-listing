/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DEE9FB',
          dark: '#0B1124',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          dark: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
};
