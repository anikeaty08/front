/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sohne-var', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SourceCodePro', 'monospace'],
      },
      colors: {
        stripe: {
          dark: '#0a2540',
          purple: '#635BFF',
          purpleHover: '#4B45FF',
          textDark: '#0a2540',
          textBody: '#424770',
          textMuted: '#6b7280',
          bgLight: '#f8f9fa',
        },
        fuchsia: {
          400: '#e879f9',
          500: '#d946ef',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          900: '#0f172a',
        }
      },
      spacing: {
        'page-margin': 'var(--page-margin, 1.5rem)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'mesh-flow': 'meshFlow 10s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        meshFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}