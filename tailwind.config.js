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
        'custom': '0px 5px 15px 0px rgba(0, 0, 0, 0.14)',
      }
    },

  },
  plugins: [],
}