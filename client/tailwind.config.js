/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Geist Sans', 'ui-sans-serif', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
        wide: '80rem',
      },
      colors: {
        matte: {
          DEFAULT: '#080b12',
          elevated: '#0f131c',
          card: '#141a26',
          border: 'rgba(255, 255, 255, 0.07)',
        },
        brand: {
          DEFAULT: '#3d6fd4',
          light: '#5b87e8',
          muted: '#2a4f9e',
          dim: 'rgba(61, 111, 212, 0.14)',
          glow: 'rgba(61, 111, 212, 0.08)',
        },
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -16px rgba(0,0,0,0.45)',
        'card-hover':
          '0 0 0 1px rgba(61, 111, 212, 0.35), 0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -16px rgba(0,0,0,0.5)',
      },
      animation: {
        'grid-pulse': 'grid-pulse 5s ease-in-out infinite',
        'pill-float': 'pill-float 7s ease-in-out infinite',
      },
      keyframes: {
        'grid-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
        'pill-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
