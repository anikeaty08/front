/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
      colors: {
        brand: {
          sky: '#38BDF8',
          dark: '#050505',
          panel: '#0F110E',
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 70% 50%, rgba(56, 189, 248, 0.25) 0%, rgba(5, 5, 5, 0) 60%)',
      },
      animation: {
        'beam': 'beam 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        beam: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    }
  },
  plugins: [],
}