/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":'var(--primary-color)',
        "primary-color-dark":'var(--primary-color-dark)',
        "primary-black":'var(--primary-black)',
      },
      fontFamily:{
        "primary-font":'var(--font-name)',
      }
    },
  },
  plugins: [],
}

