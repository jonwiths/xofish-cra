/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-2': "url('/src/assets/homepage/bg-2.png')"
      }
    }
  },
  plugins: []
};
