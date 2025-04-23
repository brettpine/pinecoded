export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        'pine-shadow': '0 2px 2px rgba(0, 0, 0, 0.6)',
      },
      colors: {
        pine: {
          light: '#2E5A36',
          DEFAULT: '#194428',
          dark: '#0C2E16'
        },
        leaf: '#8FAD79',
        cream: '#f2e8cf',
        mist: '#a9def9',
        dirt: '#30281D',
        root: '#4A3D2A'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif']
      },
      keyframes: {
        'feather-poof': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-60px) rotate(-15deg)' },
        },
      },
      animation: {
        'feather-poof': 'feather-poof 1.5s ease-out forwards',
      },
    },
  },
  plugins: []
};