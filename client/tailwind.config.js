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
          DEFAULT: 'var(--bg-main)',
          elevated: 'var(--surface-elevated)',
          card: 'var(--surface-card)',
          border: 'var(--border-color)',
        },
        brand: {
          DEFAULT: 'var(--brand)',
          light: 'var(--brand-light)',
          muted: 'var(--brand-muted)',
          dim: 'var(--brand-dim)',
          glow: 'var(--brand-glow)',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
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
