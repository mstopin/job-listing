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
          dark: '#152040',
        },
        text: {
          DEFAULT: '#57606D',
          dark: 'white',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
