/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7E8',
          100: '#C8ECD0',
          200: '#A5DFAF',
          300: '#82D28F',
          400: '#5FC56F',
          500: '#3EAC4D', // Aurora Green - Main primary color
          600: '#318A3E',
          700: '#25672F',
          800: '#1A441F',
          900: '#0D2210',
        },
        secondary: {
          50: '#E6ECE8',
          100: '#C1D0C5',
          200: '#9CB3A3',
          300: '#799680',
          400: '#5A7A62',
          500: '#3C5F44', // Deep Forest Green
          600: '#304D37',
          700: '#243A29',
          800: '#1A3A1F', // Darker Forest Green
          900: '#0A1A0D',
        },
        aurora: {
          lighter: '#73E086',
          light: '#56C769',
          DEFAULT: '#3EAC4D',
          dark: '#29743A',
          darker: '#1A3A1F',
        },
        night: {
          lighter: '#2F384A',
          light: '#1E2433',
          DEFAULT: '#0F1219', // Night Sky
          dark: '#080C10',
          darker: '#030507',
        },
        snow: {
          DEFAULT: '#F5F5F5',
        },
        star: {
          DEFAULT: '#8CA6DB',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Noto Sans',
          'Noto Sans SC',
          'Noto Sans TC',
          'PingFang SC',
          'Microsoft YaHei',
          'Hiragino Sans GB',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Georgia',
          'Cambria',
          'Noto Serif',
          'Noto Serif SC',
          'Noto Serif TC',
          'SimSun',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      backgroundImage: {
        'aurora-hero': "url('/images/northern-lights.jpg')",
      },
    },
  },
  plugins: [],
} 