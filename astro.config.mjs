// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.ipac27.org',
  // Keep old links working after pages are renamed
  redirects: {
    '/program/synoptic-table': '/program/timetable',
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
