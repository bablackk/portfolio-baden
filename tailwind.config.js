/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.56) 0px 3px 70px 4px",
        "4xl": "rgba(0, 0, 0, 0.56) -115px 40px 400px 4px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        libre: ["Libre Baskerville", "sans-serif"],
      },
      fontSize: {
        11: "11px",
      },
      colors: {},
    },
  },
  plugins: [],
};
