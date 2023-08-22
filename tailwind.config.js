/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-2': "url('/src/assets/homepage/bg-2.png')"
      }
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
};
