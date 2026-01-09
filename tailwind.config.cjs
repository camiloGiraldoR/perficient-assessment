/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        perf: {
          red: '#E4002B', // Perficient Red
          black: '#231F20', // Perficient Black
          gray: '#F5F5F5', // Perficient Light Gray
          darkgray: '#6D6E71', // Perficient Dark Gray
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
