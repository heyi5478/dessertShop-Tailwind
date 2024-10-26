/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F5D45',
        secondary: '#FFE180',
        primary_200: '#EAF0ED',
        primary_500: '#8DA291',
      },
      fontFamily: {
        "noto-sans": "Noto Sans HK, sans-serif",
      },
    },
  },
  plugins: [],
}