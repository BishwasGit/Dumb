/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lotus: {
          100: '#fdf2f8',
          200: '#fce7f3',
          300: '#fbcfe8',
          400: '#f9a8d4',
          500: '#f472b6',
          600: '#ec4899',
        },
        lavender: {
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
        },
        peach: {
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
