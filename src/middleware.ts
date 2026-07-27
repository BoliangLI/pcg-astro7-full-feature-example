import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ locals }, next) => {
  locals.requestStartedAt = new Date().toISOString();
  const response = await next();
  response.headers.set('X-PCG-Astro-Middleware', '7');
  return response;
});
