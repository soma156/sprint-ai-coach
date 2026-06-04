/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 科研风格：深灰黑底色 + 青蓝科学色
        primary: {
          950: '#08080f',
          900: '#0d0d18',
          800: '#14142a',
          700: '#1a1a35',
          600: '#22223f',
        },
        surface: {
          DEFAULT: '#161625',
          light: '#1e1e32',
          border: 'rgba(255,255,255,0.06)',
        },
        accent: {
          DEFAULT: '#0891b2',   // 青蓝（科学感）
          light: '#06b6d4',
          dark: '#0e7490',
          glow: 'rgba(8,145,178,0.15)',
        },
        scitext: {
          primary: '#e8e8ed',
          secondary: '#9898b0',
          muted: '#6b6b80',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        'sci': '4px',
      },
    },
  },
  plugins: [],
}
