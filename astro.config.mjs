import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://carmelina-ayala.netlify.app',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',
  adapter: netlify()
});