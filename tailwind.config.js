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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
