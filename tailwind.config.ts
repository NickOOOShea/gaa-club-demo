import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GAA Traditional Colors - Green & Gold
        'gaa': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',   // Primary GAA Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',   // GAA Gold
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Supporting colors
        'pitch': {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',   // Pitch green
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
      },
      fontFamily: {
        'display': ['Merriweather', 'Georgia', 'serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gaa-gradient': 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
        'gold-gradient': 'linear-gradient(135deg, #b45309 0%, #fbbf24 100%)',
        'pitch-gradient': 'linear-gradient(180deg, #f7fee7 0%, #d9f99d 100%)',
        'pitch-pattern': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(132, 204, 22, 0.05) 2px, rgba(132, 204, 22, 0.05) 4px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'gaa': '0 10px 40px -10px rgba(22, 163, 74, 0.3)',
        'gold': '0 10px 40px -10px rgba(251, 191, 36, 0.3)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.2)',
        'glow-gold': '0 0 30px rgba(251, 191, 36, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
