import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://malcolm-write.netlify.app',
  integrations: [
    preact({
      compat: true,
    }),
    mdx(),
    tailwind(),
    partytown(),
    sitemap(),
  ],
});
