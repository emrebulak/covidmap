/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark : "#18181B",
        primary: "#22C55E",
        secondary: "#27272A"
      }
    },
  },
  plugins: [],
}