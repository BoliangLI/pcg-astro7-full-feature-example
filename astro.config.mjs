// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react()],
  cache: {},
  routeRules: {
    '/cached': { maxAge: 5, swr: 30, tags: ['demo-clock'] },
    '/api/cached': { maxAge: 5, swr: 30, tags: ['demo-api'] },
  },
});
