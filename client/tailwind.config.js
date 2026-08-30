export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        themeBg: '#F8FAFC',        // Slate 50
        themeSurface: '#FFFFFF',   // White
        themeBorder: '#E2E8F0',    // Slate 200
        themeInk: '#0F172A',       // Slate 900
        themeMuted: '#64748B',     // Slate 500
        themeAccent: '#334155',    // Slate 700
        themeCard: '#F1F5F9',      // Slate 100
      },
      maxWidth: {
        content: '72rem',
        wide: '80rem',
      },
    },
  },
  plugins: [],
};
