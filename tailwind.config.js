/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Combination 56: Salt and Pepper Palette
        sp: {
          white: '#FFFFFF',
          offWhite: '#F7F7F5',
          lightGray: '#D4D4D4',
          gray: '#B3B3B3',
          midGray: '#6B6B6B',
          charcoal: '#3A3A3A',
          ink: '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'container': '8px',
        'btn': '6px',
        'card': '10px',
      },
      letterSpacing: {
        'micro': '0.18em',
        'widest-editorial': '0.22em',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
