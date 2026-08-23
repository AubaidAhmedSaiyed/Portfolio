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
        olive: {
          DEFAULT: '#2f593b',
          light: '#5f8a68',
          dark: '#1f3f2c',
        },
      },
      spacing: {
        2: '8px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        blobFloat: 'blobFloat 12s ease-in-out infinite alternate',
        dotPulse: 'dotPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blobFloat: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.1)' },
          '100%': { transform: 'translate(-15px,20px) scale(0.92)' },
        },
        dotPulse: {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
};
