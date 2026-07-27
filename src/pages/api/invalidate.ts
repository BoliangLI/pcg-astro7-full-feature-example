import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ cache }) => {
  await cache.invalidate({ tags: ['demo-clock', 'demo-api'] });
  return Response.json({ invalidated: true });
};
