// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'black': '#313131',
      },
      bg: {
        'blue': '#1fb6ff',
        'black': '#313131',
      },
    },
  },
  plugins: [],
}