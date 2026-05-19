/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      /* Y2K Laboratory aesthetic tokens */
      colors: {
        primary: '#00328a',
        lab: {
          black: '#0a0a0a',
          white: '#f0ece4',
          chrome: '#c0c0c0',
          neon: '#b8ff00',
          pink: '#ff3cac',
          cyan: '#00e5ff',
          violet: '#7b2dff',
          glass: 'rgba(240, 236, 228, 0.06)',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(184, 255, 0, 0.15)',
        'glow-pink': '0 0 20px rgba(255, 60, 172, 0.15)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
