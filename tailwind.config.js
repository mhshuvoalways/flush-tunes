/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD95A",
        "royal-blue": "#1F3D7F",
        "cerulean-blue": "#136AC6",
        "sky-blue": "#4995DB",
        "light-blue": "#8CDCF5",
        "dark-gray": "#7A7A7A",
        "dark-blue": "#193166 "
      },
    },
    fontFamily: {
      inter: ['"Inter var", sans-serif'],
      "proza-libre": ['"Proza Libre", sans-serif'],
      righteous: ['"Righteous", sans-serif'],
    },
  },
  plugins: [],
};
