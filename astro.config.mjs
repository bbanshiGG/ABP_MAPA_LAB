import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'br'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: "http://localhost",
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: netlify()
});