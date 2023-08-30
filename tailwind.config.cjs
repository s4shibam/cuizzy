/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        animation: {
          rotate: 'rotate 5s linear infinite alternate',
          reveal: 'reveal .5s ease-in',
          'fade-upwards': 'fade-upwards 1s ease-in'
        },

        colors: {
          primary: '#18A08B',
          'primary-darker': '#116f61',
          secondary: '#42B5A4',
          light: '#F8FCFB',
          dark: '#030707'
        },

        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif']
        },

        gridTemplateColumns: {
          quizzes: 'repeat(auto-fit, minmax(330px, 1fr))',
          options: 'repeat(auto-fit, minmax(300px, 1fr))'
        },

        keyframes: {
          rotate: {
            '100%': { transform: 'rotateY(360deg)' }
          },
          reveal: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          'fade-upwards': {
            '45%': { opacity: '0.5', width: '300px' },
            '75%': { opacity: '0.5', width: '400px' },
            '100%': { opacity: '0.1', width: '512px' }
          }
        }
      }
    },
  }
);
