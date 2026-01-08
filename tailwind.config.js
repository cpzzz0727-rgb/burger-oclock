/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burger-yellow': '#FFD700',
        'burger-red': '#DC2626',
        'burger-black': '#1A1A1A',
        'burger-gray': '#2D2D2D',
      },
      fontFamily: {
        'display': ['Arial Black', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
