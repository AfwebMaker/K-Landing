/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANyekan'],
        black: ['IRANyekan'],
        bold: ['IRANyekan'],
        extrablack: ['IRANyekan'],
        extrabold: ['IRANyekan'],
        medium: ['IRANyekan'],
        regular: ['IRANyekan'],
        thin: ['IRANyekan'],
      },
      colors: {
        'color-1': '#EBEFED',
        'color-2': '#9D9FA2',
        'color-3': '#######',

        'color-font-1': '#353535',
        'color-font-2': '#636466',
        'color-font-3': '#45B649',
        'color-font-4': '#1B93D7',
        
      },
      padding: {
        '2/3': '57.14285%',
        '1/3': '42.85715%'
      },
    },
  },
  plugins: [],
}
