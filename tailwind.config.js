/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        maglisto: ['Maglisto', 'sans-serif'],
        edges: ['Edges', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace', 'Courier New'],
      },
      colors: {
        bottega: {
          DEFAULT: '#008a3d',
          light: '#00a84a',
          dark: '#006a2e',
          accent: '#10b981',
        },
        paper: {
          DEFAULT: '#fafaf7',
          pure: '#ffffff',
          dark: '#f0f0ea',
          border: '#e2e2d8',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          pure: '#000000',
          charcoal: '#171717',
          card: '#121212',
          border: '#262626',
          muted: '#737373',
          light: '#a3a3a3',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        soundBar: {
          '0%, 100%': { height: '3px' },
          '50%': { height: '14px' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideUp: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 22s linear infinite',
        marqueeReverse: 'marqueeReverse 22s linear infinite',
        spinSlow: 'spinSlow 18s linear infinite',
        soundBar1: 'soundBar 0.9s ease-in-out infinite 0.1s',
        soundBar2: 'soundBar 0.9s ease-in-out infinite 0.3s',
        soundBar3: 'soundBar 0.9s ease-in-out infinite 0.2s',
        soundBar4: 'soundBar 0.9s ease-in-out infinite 0.4s',
      }
    },
  },
  plugins: [],
}