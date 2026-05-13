/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          pink: '#ff00e5',
          yellow: '#ffe600',
          green: '#00ff88',
          orange: '#ff6b00',
        },
        dark: {
          900: '#060612',
          800: '#0d0d2b',
          700: '#111138',
          600: '#1a1a4e',
          500: '#252560',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'dice-roll': 'diceRoll 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'card-flip': 'cardFlip 0.6s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff' },
          '50%': { boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        diceRoll: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(180deg) scale(1.2)' },
          '75%': { transform: 'rotate(540deg) scale(0.9)' },
          '100%': { transform: 'rotate(720deg) scale(1)' },
        },
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
}
