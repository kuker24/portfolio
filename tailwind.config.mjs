/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void-black)',
        graphite: 'var(--color-graphite-hairline)',
        white: 'var(--color-white)',
        bone: 'var(--color-bone-white)',
        ash: 'var(--color-ash-gray)',
        smoke: 'var(--color-smoke-gray)',
        iron: 'var(--color-iron)',
        charcoal: 'var(--color-charcoal)',
        violet: 'var(--color-iris-violet)',
        'violet-glow': 'var(--color-iris-violet-glow)',
        'signal-blue': 'var(--color-signal-blue)',
        'pulse-green': 'var(--color-pulse-green)',
        'alarm-red': 'var(--color-alarm-red)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        btn: 'var(--radius-button)',
        badge: 'var(--radius-badge)',
        input: 'var(--radius-input)',
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
        pill: 'var(--radius-pill)',
      },
      maxWidth: {
        site: 'var(--page-max-width)',
      },
    },
  },
  plugins: [],
};
