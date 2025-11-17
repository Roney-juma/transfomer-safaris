/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'safari-orange': '#F4A261',
        'safari-navy': '#264653',
        'safari-teal': '#2A9D8F',
        'safari-yellow': '#E9C46A',
        'safari-cream': '#F7F3E9',
      },
      fontFamily: {
        'safari': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}