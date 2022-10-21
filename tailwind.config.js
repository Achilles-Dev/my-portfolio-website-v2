/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        green: '#64ffda',
        'ligth-navy': '#112240',
      },
      animation: {
        'spin-slow': 'spin 2s linear',
        slidein: 'slidein 2s',
        wiggle: 'wiggle 2s ease-in-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
      keyframes: {
        slidein: {
          from: {
            'margin-left': '50%',
            width: '150%',
          },
          to: {
            'margin-right': '0%',
            width: '100%',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
    },
  },
  plugins: [],
};
