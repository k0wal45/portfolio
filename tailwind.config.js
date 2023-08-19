/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'montserrat-bold': ['montserrat-bold', 'sans-serif'],
        'montserrat-black': ['montserrat-black', 'sans-serif'],
        'montserrat-light': ['montserrat-light', 'sans-serif'],
        'montserrat-semibold': ['montserrat-semibold', 'sans-serif'],
        'montserrat-thin': ['montserrat-thin', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        primary: {
          "primary": "#2563eb",
          "secondary": "#22c55e",
          "accent": "#fde047",
          "neutral": "#4b5563",
          "base-100": "#f0f0f0",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}