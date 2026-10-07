export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Dark Cinematic Palette from the reference HTML
        themeBg: '#0d0806',
        themeInk: '#f6e9d8',
        themeMuted: '#c9b29a',
        themeAccent: '#e8a35a',
        themeOk: '#a8d5a2',
        themeBad: '#f0907f',
        themeWarn: '#f1cf86',
      },
      maxWidth: {
        content: '72rem',
        wide: '80rem',
      },
    },
  },
  plugins: [],
};
