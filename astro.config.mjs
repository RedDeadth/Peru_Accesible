// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  integrations: [db()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});