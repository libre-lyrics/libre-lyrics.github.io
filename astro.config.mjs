import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://libre-lyrics.github.io',
  base: '/',
  integrations: [tailwind()],
});
