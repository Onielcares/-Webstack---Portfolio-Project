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
      'blue': '#055AC3',
      'grey-black': '#707173',
      'white': '#fff',
      'milky': '#F4F6FB',
      'placeholder': '#B7BECF',
      'border-black': '#1E1E1E',
      'primary': '#043064',
      'light-primary': '#2786F4',
      'red': '#D60505',
      'main': '#F9FBFF',
      'orange': '#E7984E',   
      'border': '#657889',
      'yellow': '#F2FBB9',
      'green': '#DFFFE6',
      'btn-green': '#0C8026',
      },
  },
  plugins: [],
}

