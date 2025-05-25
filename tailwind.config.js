/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lucidia: ['"Courier New"', 'monospace']
    },
    extend: {
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}