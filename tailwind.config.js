/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          dark: '#CC5500',
          light: '#FF8533',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          dark: '#000000',
          light: '#333333',
        },
        accent: {
          DEFAULT: '#FF8C00',
          dark: '#CC7000',
          light: '#FFA333',
        },
        success: {
          DEFAULT: '#4CAF50',
          dark: '#3C9F40',
          light: '#5CBF60',
        },
        warning: {
          DEFAULT: '#FF9800',
          dark: '#E68800',
          light: '#FFA726',
        },
        error: {
          DEFAULT: '#F44336',
          dark: '#D32F2F',
          light: '#EF5350',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};