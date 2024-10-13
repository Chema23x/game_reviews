/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gameplay: ['Gameplay', 'sans-serif'], // agrega tu fuente
      },
    },
  },
  plugins: [],
}