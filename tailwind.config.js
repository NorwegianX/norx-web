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
        ['norx-nav']: '4rem',
      },
      colors: {
        background: pallette.background,
        ['whitesmoke']: 'whitesmoke',
        ['norx-gray-400']: '#BDBDBD',
        ['norx-blue-300']: '#c9e9ff',
        ['norx-blue-500']: '#59bbff',
        ['norx-blue-600']: '#246594',
        ['norx-blue-650']: '#125585',
        ['norx-blue-700']: '#004475',
        ['norx-blue-900']: '#00434F',
      },
    },
  },
  variants: {
      extend: {
        backgroundColor: ['active'],
      }
  },
  plugins: [],
};
