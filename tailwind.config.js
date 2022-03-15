module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-h1',
    'text-h2',
    'text-h3',
    'text-h4',
    'text-h5',
    'text-h6',
    'text-overline',
    'text-subtitle',
    'text-body',
    'text-black',
    'text-offBlack',
    'text-white',
    'text-grayLight',
    'text-grayMed',
    'text-orangeLight',
    'text-orangeBurnt',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        offBlack: '#101010',
        white: '#FFFFFF',
        grayLight: '#FAFAFA',
        grayMed: '#F1F1F1',
        orangeLight: '#FBAF85',
        orangeBurnt: '#D87D4A',
      },
      fontFamily: {
        main: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '56px',
          {
            letterSpacing: '2px',
            lineHeight: '58px',
          },
        ],
        h2: [
          '40px',
          {
            letterSpacing: '1.5px',
            lineHeight: '44px',
          },
        ],
        h3: [
          '32px',
          {
            letterSpacing: '1.15px',
            lineHeight: '36px',
          },
        ],
        h4: [
          '28px',
          {
            letterSpacing: '2px',
            lineHeight: '38px',
          },
        ],
        h5: [
          '24px',
          {
            letterSpacing: '1.7px',
            lineHeight: '33px',
          },
        ],
        h6: [
          '18px',
          {
            letterSpacing: '1.3px',
            lineHeight: '24px',
          },
        ],
        overline: [
          '14px',
          {
            letterSpacing: '10px',
            lineHeight: '19px',
          },
        ],
        subtitle: [
          '13px',
          {
            letterSpacing: '1px',
            lineHeight: '25px',
          },
        ],
        body: [
          '15px',
          {
            lineHeight: '25px',
          },
        ],
      },
    },
  },
  plugins: [],
};
