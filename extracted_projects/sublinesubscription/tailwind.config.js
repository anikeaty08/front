/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        background: '#08090a',
      }
    },
  },
  plugins: [],
}