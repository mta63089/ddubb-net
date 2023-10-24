const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './mdx-components.tsx', 'content/**/*.mdx'],

  theme: {
    extend: {
      colors: {
        ddDarkGreen: {
          DEFAULT: '#043638',
          50: '#0A898E',
          100: '#097F84',
          200: '#086D71',
          300: '#075B5E',
          400: '#05484B',
          500: '#043638',
          600: '#032D2E',
          700: '#032425',
          800: '#021A1B',
          900: '#011112',
          950: '#010D0D',
        },
        ddYellow: {
          DEFAULT: '#DECC00',
          50: '#FFFAC4',
          100: '#FFF8AB',
          200: '#FFF478',
          300: '#FFF045',
          400: '#FFEC12',
          500: '#DECC00',
          600: '#B5A700',
          700: '#8C8100',
          800: '#645C00',
          900: '#3B3600',
          950: '#262300',
        },
        ddRose: {
          DEFAULT: '#D90368',
          50: '#FE96C7',
          100: '#FD82BC',
          200: '#FD5AA7',
          300: '#FC3191',
          400: '#FC097C',
          500: '#D90368',
          600: '#B10255',
          700: '#890241',
          800: '#60012E',
          900: '#38011B',
          950: '#240011',
        },
        ddEggshell: {
          DEFAULT: '#F4ECDB',
          50: '#FFFFFE',
          100: '#FEFCFA',
          200: '#FBF8F2',
          300: '#F9F4EB',
          400: '#F6F0E3',
          500: '#F4ECDB',
          600: '#E7D5B0',
          700: '#DABF85',
          800: '#CDA85A',
          900: '#B78E38',
          950: '#A17D31',
        },
        ddPink: {
          DEFAULT: '#820263',
          50: '#FC40CE',
          100: '#FC2BC9',
          200: '#FB04BF',
          300: '#D203A0',
          400: '#AA0382',
          500: '#820263',
          600: '#730258',
          700: '#64024C',
          800: '#550141',
          900: '#460135',
          950: '#3E012F',
        },
        ddLightGreen: {
          DEFAULT: '#19907F',
          50: '#79E8D8',
          100: '#68E5D3',
          200: '#45DFC9',
          300: '#25D6BC',
          400: '#1FB39E',
          500: '#19907F',
          600: '#157A6C',
          700: '#116559',
          800: '#0E4F46',
          900: '#0A3932',
          950: '#082E29',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['allotrope'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fade-in 3s ease-in-out forwards',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
};
