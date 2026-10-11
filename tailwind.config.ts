import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F3EEE3',
          300: '#E8E0CE',
        },
        brand: {
          50: '#FDF3F3',
          100: '#FBE4E5',
          200: '#F6C9CB',
          300: '#EF9FA3',
          400: '#E4696F',
          500: '#C1272D',
          600: '#A91F27',
          700: '#8B1A20',
          800: '#6E151A',
          900: '#4E0F13',
        },
        leaf: {
          50: '#F1F8F3',
          100: '#DDEEE2',
          200: '#BBDCC6',
          300: '#8FC5A2',
          400: '#5EA87A',
          500: '#2F7D4F',
          600: '#26653F',
          700: '#1E5033',
          800: '#173E28',
          900: '#10291B',
        },
        amber: {
          400: '#F0B954',
          500: '#E8A33D',
          600: '#CC8A28',
        },
        ink: {
          900: '#17171A',
          800: '#26262B',
          700: '#3A3A41',
          600: '#52525B',
          500: '#6B6B75',
          400: '#8A8A94',
          300: '#B5B5BD',
          200: '#DCDCE1',
          100: '#EFEFF2',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,23,26,0.04), 0 8px 24px -12px rgba(23,23,26,0.12)',
        lift: '0 2px 4px rgba(23,23,26,0.04), 0 18px 40px -18px rgba(23,23,26,0.22)',
      },
      borderRadius: { '4xl': '2rem' },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
