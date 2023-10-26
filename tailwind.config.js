/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        contact_bg: "url('../public/assets/bgContactUs.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "#C86DD7",
        primary: "#3023AE",
        fontBlack: "#333333",
        customPink: "#FDF2FF",
      },
    },
  },
  plugins: [],
};
