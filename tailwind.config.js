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
    },
    extend: {},
  },
  plugins: [],
}
