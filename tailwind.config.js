// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your project's file structure
  ],
  darkMode: 'class', // or 'media', if you prefer
  theme: {
    extend: {
      // 1. Define your custom colors here
      colors: {
        neutralLight: '#FAFAFA', // Example: A light gray. Replace with your color.
        neutralDark: '#1A202C',  // Example: A dark blue-gray. Replace with your color.
      },
      // 2. Register your new fonts here
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};