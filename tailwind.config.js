/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "serif"],
    },

    extend: {
      boxShadow: {
        custom: "0px 3px 15px 8px rgba(0, 0, 0, 0.20)",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(50% 50% at 50% 50%, #242528 0%, #040404 100%)",
        "customer-support": "url('/Common Images/HelpBanner.png')",
        "i7D": "url('/Common Images/ProductDetailsBanner.png')",
        "i7T": "url('/Common Images/ProductDetailsBannerTab.png')",
        "i7M": "url('/Common Images/ProductDetailsBannerMob.png')",

      },
    },
  },
  plugins: [],
};
