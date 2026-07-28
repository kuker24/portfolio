import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kuker24.github.io',
  base: '/portfolio/',
  output: 'static',
  integrations: [tailwind()],
});
