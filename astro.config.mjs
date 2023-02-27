import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: 'https://adityamajali.gitlab.io/',
  outDir: 'public',
  publicDir: './src/pages',
  integrations: [mdx(), sitemap(), tailwind(),] 
});