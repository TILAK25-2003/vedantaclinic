/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          50: '#fdf2f2',
          100: '#fde3e3',
          200: '#fbd0d0',
          300: '#f7abab',
          400: '#f27a7a',
          500: '#e94b4b',
          600: '#d42a2a', // Base Red
          700: '#ae2029', // Upsdell Red
          800: '#65000b', // Rosewood
          900: '#3c1414', // Dark Sienna
          950: '#2b0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
