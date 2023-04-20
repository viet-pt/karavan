/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  mode: 'jit',
  important: true,
  theme: {
    extend: {
      textColor: {
        primary: '#434761',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      boxShadow: {
        DEFAULT: '0 2px 6px 0 rgba(0, 0, 0, 0.15)',
        5: '5px 5px 5px rgba(0, 0, 0, 0.35)',
        7: '1px 3px 12px 1px rgba(0, 0, 0, 0.5)',
        md: '0px 2px 12px #00000029',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        '2xl': '1px 5px 35px 1px #949494'
      },
      colors: {
        'primary-green': '#1E5C34',
        'second-green': '#9CCB3B',
        'primary-gray': '#F8F6F3',
        'second-gray': '#A0A0A0',
        'primary-orange': '#F89A3E',
        'primary-black': '#333333',
        'light-red': '#d9001b',
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        apoc: ['Apoc', 'sans-serif'],
        apocBold: ['ApocBold', 'sans-serif'],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1.5' }],
        13: ['13px', { lineHeight: '1.5' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      keyframes: {
        ringring: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
        }
      },
      animation: {
        ringring: 'ringring 1s linear',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      screens: {
        mobile: { 'max': '640px' },
        tablet: { 'max': '768px' },
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        DEFAULT: '4px',
        10: '10px',
        20: '20px'
      },
      padding: {
        '18': '72px',
      },
      margin: {
        '18': '72px',
      },
      width: {
        13: '52px',
        18: '72px',
        450: '450px',
        '3/10': '30%',
        '7/10': '70%',
      },
      height: {
        13: '52px',
        18: '72px',
      },
      maxHeight: {
        'auto': 'auto',
      },
      minHeight: {
        'auto': 'auto',
        '1/2': '50%',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        50: '12.5rem',
        56: '14rem',
        60: '15rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      borderWidth: ['first', 'last'],
      padding: ['first', 'last'],
      textColor: ['active'],
      animation: ['hover', 'group-hover']
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    // require('@tailwindcss/forms'),
  ],
};
