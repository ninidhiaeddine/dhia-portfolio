/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    colors: {
      'primary': '#7C4DFF',
      'secondary': '#42384B',
      'white': '#FFF',
      'black': '#000',
      'background': '#212022',
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
