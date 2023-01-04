/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'primary': '#7C4DFF',
      'secondary': '#00838F',
      'light-purple': '#42384B',
      'light-orange': '#FFCCBC',
      'orange': '#FF6F00',
      'white': '#FFF',
      'black': '#000',
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        'slide-right': 'slideRight 150ms linear',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
