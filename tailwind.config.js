/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBeige: '#F4EDE3',
        softPink: '#DBB5B5',
        mutedMauve: '#C4A2A2',
        mediumTaupe: '#AA8585',
        deepTaupe: '#8D6D6D',
      },
      animation: {
        bounce: 'fadeIn 0.5s ease-in',
        fadeIn: 'fadeIn 0.5s ease-in',
        pulse: 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
