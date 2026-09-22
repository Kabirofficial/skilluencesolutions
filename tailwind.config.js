/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Tropical Editorial Consultancy Palette
        editorial: {
          ivory: '#FBF9F5',      // Warm Ivory / Primary Page Background
          cream: '#FFFFFF',      // Pure Linen / Card Surface
          sand: '#F4EFEA',       // Subtle Sand Wash
          botanical: '#142F23',  // Deep Botanical Green (Dominant Brand)
          botanicalDark: '#0E2118',
          botanicalHover: '#1B3E2F',
          terracotta: '#C36B4E', // Muted Terracotta (Restrained Accent)
          terracottaDark: '#A8553B',
          terracottaLight: '#E88B6E',
          sage: '#546B5F',       // Soft Botanical / Sage
          charcoal: '#1F2421',   // Deep Charcoal (Primary Text)
          muted: '#5E6963',      // Editorial Subtext & Captions
          border: '#E8E2D8',     // Crisp 1px Hairline Rule
          borderDark: 'rgba(20, 47, 35, 0.15)',
        },
        // Unified sp theme mapping for seamless integration
        sp: {
          white: '#FFFFFF',      // Cream / Linen surface
          offWhite: '#FBF9F5',   // Warm Ivory background
          lightGray: '#E8E2D8',  // Hairline Sand border
          gray: '#5E6963',       // Editorial subtext
          midGray: '#425048',    // Deep Sage Charcoal
          charcoal: '#1F2421',   // Charcoal body text
          ink: '#142F23',        // Deep Botanical Green
          palm: '#142F23',       // Dominant Botanical Green
          teal: '#546B5F',       // Sage Botanical
          coral: '#C36B4E',      // Muted Terracotta Accent
          sand: '#F4EFEA',       // Warm Sand Wash
          jungle: '#142F23',     // Deep Botanical Green
          coconut: '#FFFFFF',    // Cream / Linen surface
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', '"Times New Roman"', 'serif'],
        times: ['Newsreader', 'Georgia', 'serif'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'], // Keep typography human, no robotic monospace
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'card': '4px',
        'btn': '3px',
      },
      letterSpacing: {
        'editorial': '0.04em',
        'wide-editorial': '0.12em',
        'widest-editorial': '0.2em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
      }
    },
  },
  plugins: [],
}
