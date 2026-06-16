/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'sans-serif'],
      },
      colors: {
        framer: {
          dark: '#000000',
          panel: '#111111',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#ffffff',
          muted: 'rgba(255, 255, 255, 0.6)',
          accent: '#0099ff',
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          /* Translating exactly 33.333% creates a mathematically seamless loop because the container holds exactly 3 identical sets of logos with matching gap/padding */
          '100%': { transform: 'translateX(-33.333333%)' },
        }
      }
    },
  },
  plugins: [],
}