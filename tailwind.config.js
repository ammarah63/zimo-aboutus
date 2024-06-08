/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      Date: "#BE9F56",
      bordergrey: "#707070",
      gray: "#e5e7eb",
      inputgrey: "#aeb2b9",
    },
    extend: {
      screens: {
        "xl": "1366px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      backgroundImage: {
        "home-section": "url('/public/images/2023-01-19_22-48-19.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBrightness: {
        25: ".25",
        35: ".35",
        175: "1.75",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
