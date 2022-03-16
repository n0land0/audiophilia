module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-h1Mobile',
    'sm:text-h1Tablet',
    'lg:text-h1Desktop',
    'text-h2Mobile',
    'sm:text-h2Tablet',
    'lg:text-h2Desktop',
    'text-h3Mobile',
    'sm:text-h3Tablet',
    'lg:text-h3Desktop',
    'text-h4Mobile',
    'sm:text-h4Tablet',
    'lg:text-h4Desktop',
    'text-h5Mobile',
    'sm:text-h5Tablet',
    'lg:text-h5Desktop',
    'text-h6Mobile',
    'sm:text-h6Tablet',
    'lg:text-h6Desktop',
    'text-overlineMobile',
    'sm:text-overlineTablet',
    'lg:text-overlineDesktop',
    'text-subtitleMobile',
    'sm:text-subtitleTablet',
    'lg:text-subtitleDesktop',
    'text-bodyMobile',
    'sm:text-bodyTablet',
    'lg:text-bodyDesktop',
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
        h1Mobile: [
          '36px',
          {
            letterSpacing: '1.29px',
            lineHeight: '40px',
          },
        ],
        h1Tablet: [
          '56px',
          {
            letterSpacing: '2px',
            lineHeight: '58px',
          },
        ],
        h1Desktop: [
          '56px',
          {
            letterSpacing: '2px',
            lineHeight: '58px',
          },
        ],
        h2Mobile: [
          '28px',
          {
            letterSpacing: '1px',
            lineHeight: '38.25px',
          },
        ],
        h2Tablet: [
          '40px',
          {
            letterSpacing: '1.5px',
            lineHeight: '44px',
          },
        ],
        h2Desktop: [
          '40px',
          {
            letterSpacing: '1.5px',
            lineHeight: '44px',
          },
        ],
        h3Mobile: [
          '24px',
          {
            letterSpacing: '0.86px',
            lineHeight: '36px',
          },
        ],
        h3Tablet: [
          '32px',
          {
            letterSpacing: '1.15px',
            lineHeight: '36px',
          },
        ],
        h3Desktop: [
          '32px',
          {
            letterSpacing: '1.15px',
            lineHeight: '36px',
          },
        ],
        h4Mobile: [
          '28px',
          {
            letterSpacing: '2px',
            lineHeight: '38px',
          },
        ],
        h4Tablet: [
          '28px',
          {
            letterSpacing: '2px',
            lineHeight: '38px',
          },
        ],
        h4Desktop: [
          '28px',
          {
            letterSpacing: '2px',
            lineHeight: '38px',
          },
        ],
        h5Mobile: [
          '24px',
          {
            letterSpacing: '1.7px',
            lineHeight: '33px',
          },
        ],
        h5Tablet: [
          '24px',
          {
            letterSpacing: '1.7px',
            lineHeight: '33px',
          },
        ],
        h5Desktop: [
          '24px',
          {
            letterSpacing: '1.7px',
            lineHeight: '33px',
          },
        ],
        h6Mobile: [
          '18px',
          {
            letterSpacing: '1.3px',
            lineHeight: '24px',
          },
        ],
        h6Tablet: [
          '15px',
          {
            letterSpacing: '1.07px',
            lineHeight: '20.49px',
          },
        ],
        h6Desktop: [
          '15px',
          {
            letterSpacing: '1.07px',
            lineHeight: '20.49px',
          },
        ],
        overlineMobile: [
          '14px',
          {
            letterSpacing: '10px',
            lineHeight: '19px',
          },
        ],
        overlineTablet: [
          '14px',
          {
            letterSpacing: '10px',
            lineHeight: '19px',
          },
        ],
        overlineDesktop: [
          '14px',
          {
            letterSpacing: '10px',
            lineHeight: '19px',
          },
        ],
        subtitleMobile: [
          '13px',
          {
            letterSpacing: '1px',
            lineHeight: '25px',
          },
        ],
        subtitleTablet: [
          '13px',
          {
            letterSpacing: '1px',
            lineHeight: '25px',
          },
        ],
        subtitleDesktop: [
          '13px',
          {
            letterSpacing: '1px',
            lineHeight: '25px',
          },
        ],
        bodyMobile: [
          '15px',
          {
            lineHeight: '25px',
          },
        ],
        bodyTablet: [
          '15px',
          {
            lineHeight: '25px',
          },
        ],
        bodyDesktop: [
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
