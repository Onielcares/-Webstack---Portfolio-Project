/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#fff',
      'purple': '#3F1859',
      'beige': '#FFECB9',
      },
  },
  plugins: [],
}

