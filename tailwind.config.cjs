/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{html,js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        uzBlue: "#1e3a8a",
        uzOrange: "#ea580c",
      }
    }
  },
  plugins: [],
}