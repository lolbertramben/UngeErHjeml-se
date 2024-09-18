/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ["DisplayBold", "sans-serif"],
        'brød': ["Brød", "sans-serif"],
        'kilde': ["LightItalic", "sans-serif"]
      },
    },
  },
  plugins: [],
}

