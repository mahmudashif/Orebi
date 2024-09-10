/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dm': ['DM Sans', 'sans-serif'],
    },
    extend: {
      container:"1604px",
    },
    colors: {
      'primaryBg': '#979797',
      'secondaryBg': '#262626',
    },
  },
  plugins: [],
}