import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#fe7f25',
          'orange-hover': '#e0650d',
          'orange-light': '#fff5ed',
          blue: '#0284c7',
          navy: '#0b1b3d',
          dark: '#071126',
          indigo: '#3e47cc',
          cyan: '#22ace3',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'move-snake': 'move-snake 1.4s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-dot': 'pulse-ring 2s infinite',
      },
      keyframes: {
        'move-snake': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(34, 197, 94, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
