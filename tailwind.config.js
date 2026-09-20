/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          ink: '#25283D',
          moss: '#68705A',
          sage: '#A8B09A',
          bone: '#F3EFE6',
          paper: '#FAF8F2',
          terracotta: '#D96C4A',
          clay: '#A95245',
        },
        palette: {
          dark: '#25283D',        // INK
          deep: '#1C1E2E',        // DEEP INK
          surface: '#2E324B',     // INK SURFACE
          card: '#2B2E44',        // INK CARD
          slate: '#68705A',       // MOSS
          slateDark: '#545B49',   // MOSS DARK
          silver: '#A8B09A',      // SAGE
          silverLight: '#F3EFE6', // BONE
          white: '#FAF8F2',       // PAPER
          coral: '#D96C4A',       // TERRACOTTA
          coralHover: '#A95245',  // CLAY
          coralLight: '#E88B6E',  // LIGHT TERRACOTTA
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite linear',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
