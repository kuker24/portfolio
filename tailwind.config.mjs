/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#090A0F',
          surface: '#0E1117',
          card: '#161B22',
          border: '#21262D',
        },
        text: {
          main: '#F0F6FC',
          muted: '#8B949E',
          dim: '#6E7681',
        },
        accent: {
          amber: '#E3B341',
          copper: '#F0883E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
