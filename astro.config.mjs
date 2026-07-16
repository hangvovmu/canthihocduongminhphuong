import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://canthihocduongminhphuong.com',
  integrations: [tailwind(), sitemap()],
  adapter: cloudflare()
});