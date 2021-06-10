const pallette = {
  background: "#000",
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: pallette.background,
        ['norx-blue-100']: "#57a0df",
        ['norx-blue-300']: "#4980af",
        ['norx-blue-500']: "#3b5f7f",
        ['norx-blue-700']: "#2d3f4f",
        ['norx-blue-900']: "#262f37",
        ['norx-blue-1100']: "#1e1e1e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
