/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-gilroy-regular)",
          "var(--font-gilroy-bold)",
          "system-ui",
          "sans-serif",
        ],
        heading: ["var(--font-gilroy-bold)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#0D1B39",
        accent: "#E58411",
        "accent-hover": "#d17810",
        background: "#F5F5F5",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "body, p, span, a, li, div": {
          fontFamily: "var(--font-gilroy-regular)",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "var(--font-gilroy-bold)",
        },
      });
    },
  ],
};
