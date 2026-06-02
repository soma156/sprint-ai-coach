/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0F172A', // 最深蓝
          800: '#1E3A5F', // 深蓝
          700: '#2A4A7F',
          600: '#3A5B9F',
        },
        accent: {
          DEFAULT: '#F97316', // 橙色点缀
          light: '#FB923C',
          dark: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
