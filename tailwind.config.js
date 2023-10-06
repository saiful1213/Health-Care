/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#4169E1',
        'title': '#0000CD',
        'desc': '#1E90FF'
      },
      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

