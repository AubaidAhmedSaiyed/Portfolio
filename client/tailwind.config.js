export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        // Warm Cinematic & Editorial Palette
        themeBg: '#F5F2EA',        // Parchment / Warm Ivory
        themeSurface: '#FCFBF9',   // Cream / Pure Paper
        themeBorder: '#E5E1D8',    // Subtle warm gray/tan border
        themeInk: '#262524',       // Charcoal / Soft Black
        themeMuted: '#7E7A75',     // Warm gray for metadata
        themeAccent: '#A38B71',    // Warm brown / Soft clay
        themeOlive: '#7B826B',     // Muted olive
        themeBlue: '#84949C',      // Dusty blue
      },
      maxWidth: {
        content: '72rem',
        wide: '80rem',
      },
    },
  },
  plugins: [],
};
