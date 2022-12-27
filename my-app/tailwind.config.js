/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#F2F0E6',
        colorShape1: '#FCA17D',
        colorShape2: '#DA627D',
        black: '#222423',
        alphaBlack: 'rgba(0,0,0,75%)',
      },

      boxShadow: {
        sh1: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'
      },

      animation: {
        spin: 'spin 10s linear infinite'
      },
    },
  },
  plugins: [],
}
