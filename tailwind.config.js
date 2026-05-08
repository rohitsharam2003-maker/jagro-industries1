/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        forest: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        earth: {
          50:  '#fdf8f0',
          100: '#faecd8',
          200: '#f5d5a8',
          300: '#efb96d',
          400: '#e8963a',
          500: '#e07b1a',
          600: '#c96213',
          700: '#a74912',
          800: '#873a16',
          900: '#6e3115',
          950: '#3c1607',
        },
        sage: {
          50:  '#f6f7f4',
          100: '#eaece4',
          200: '#d4d9c7',
          300: '#b4be9e',
          400: '#8f9e73',
          500: '#718254',
          600: '#596843',
          700: '#475337',
          800: '#3b432f',
          900: '#333a29',
          950: '#191e13',
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'slide-left':   'slideLeft 0.5s ease forwards',
        'slide-right':  'slideRight 0.5s ease forwards',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'spin-slow':    'spin 8s linear infinite',
        'bounce-slow':  'bounce 3s infinite',
        'grow':         'grow 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grow: {
          '0%':   { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
      },
      boxShadow: {
        'glass':       '0 8px 32px rgba(0,0,0,0.12)',
        'glass-dark':  '0 8px 32px rgba(0,0,0,0.4)',
        'glow-green':  '0 0 30px rgba(34,197,94,0.3)',
        'glow-earth':  '0 0 30px rgba(224,123,26,0.3)',
        'card':        '0 4px 24px rgba(21,128,61,0.12)',
        'card-hover':  '0 12px 40px rgba(21,128,61,0.22)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
