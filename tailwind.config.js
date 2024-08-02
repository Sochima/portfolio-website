/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'my-yellow': '#F89D13',
      },

      fontFamily:{
        'montserrat': ['Montserrat'],
        

      }
    },
  },
  plugins: [],
}

