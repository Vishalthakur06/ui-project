/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          900: '#881337', // Rose 900
          800: '#9f1239', // Rose 800
          700: '#be123c', // Rose 700
          600: '#e11d48', // Rose 600
          500: '#f43f5e', // Rose 500
          400: '#fb7185', // Rose 400
          300: '#fda4af', // Rose 300
          200: '#fecdd3', // Rose 200
          100: '#ffe4e6', // Rose 100
          50: '#fff1f2',  // Rose 50
        },
        lavender: {
            100: '#e9d5ff',
            200: '#d8b4fe',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
