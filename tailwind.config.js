const pallette = {
  background: '#000',
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
      },
      height: {
        ['norx-nav']: '3rem',
      },
      colors: {
        background: pallette.background,
        ['whitesmoke']: 'whitesmoke',
        ['norx-gray-400']: '#BDBDBD',
        ['norx-blue-100']: '#c9e9ff',
        ['norx-blue-300']: '#59bbff',
        ['norx-blue-500']: '#00869E',
        ['norx-blue-700']: '#00434F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
