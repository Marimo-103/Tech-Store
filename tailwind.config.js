/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Poppins': ['Poppins', 'serif'],
    },

    extend: {
      boxShadow: {
        'custom': '0px 3px 15px 8px rgba(0, 0, 0, 0.20)',
      }
    },

  },
  plugins: [],
}