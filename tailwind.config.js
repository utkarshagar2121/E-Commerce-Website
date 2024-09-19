/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'garamond': ['EB Garamond', 'serif'],
      }
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  },
  plugins: [],
}