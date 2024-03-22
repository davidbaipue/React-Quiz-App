/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#111112',
      'background': '#fafafb',
      'primary': '#706d99',
      'secondary': '#b2afcf',
      'accent': '#8883c0',
    },

  },
  plugins: [],
}

