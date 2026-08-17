/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--bg) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        ink: 'hsl(var(--text) / <alpha-value>)',
        mute: 'hsl(var(--muted) / <alpha-value>)',
        stroke: 'hsl(var(--stroke) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      borderRadius: {
        pill: 'var(--radius-pill)',
        card: 'var(--radius-card)',
      },
      maxWidth: {
        site: 'var(--page-max-width)',
      },
    },
  },
  plugins: [],
};
