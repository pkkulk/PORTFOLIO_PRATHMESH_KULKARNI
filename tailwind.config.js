/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #0070ff, #8a2be2, #ff0080)',
      },
      animation: {
        gradient: 'gradient-animation 3s infinite linear',
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 25%' },
          '50%': { 'background-position': '50% 25%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },

    },
  },
  plugins: [],
}

