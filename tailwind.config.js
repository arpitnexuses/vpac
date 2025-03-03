/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        drawLine: {
          '0%': { maskPosition: '100% 50%', WebkitMaskPosition: '100% 50%' },
          '100%': { maskPosition: '0% 50%', WebkitMaskPosition: '0% 50%' }
        }
      },
      animation: {
        drawLine: 'drawLine 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}
