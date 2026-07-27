// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react()],
  cache: {},
  routeRules: {
    '/cached': { maxAge: 5, swr: 30, tags: ['demo-clock'] },
    '/api/cached': { maxAge: 5, swr: 30, tags: ['demo-api'] },
  },
});
