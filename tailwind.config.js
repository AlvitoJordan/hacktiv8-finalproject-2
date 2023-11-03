/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#C4542C',
        secondary: '#E6BA71',
        vanilla: '#FCF5E5',
        beige: '#ECE5D2',
        lightgray: '#C2C2C2',
        darkgray : '#444444',
        gray : '#6E6E6E' 
      },
      boxShadow: {
        box_item: "0px 3px 10px 0px rgba(129, 129, 129, 0.21)",
      },
    },
  },
  plugins: [],
};
