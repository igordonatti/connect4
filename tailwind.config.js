/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:  {
        beiges: {
          100: "#FFFAF0",
          300: "#FFDAB9"
        },
        browns: {
          200: '#32302E',
          500: '#2F261E'
        },
        grays: {
          300: '#32302E',
          100: '#909090'
        }
      },
      width: {
        281: "1124px",
        'boardWidth': '768px',
        'cell': '72px'
      },
      height: {
        218: "872px",
        'boardHeight': '632px',
        'cell': '72px'
      }
    },
  },
  plugins: [],
}