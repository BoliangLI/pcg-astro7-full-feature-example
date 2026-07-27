import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ cache }) => {
  cache.set({ maxAge: 5, swr: 30, tags: ['demo-api'] });
  return Response.json({ renderedAt: new Date().toISOString() });
};
