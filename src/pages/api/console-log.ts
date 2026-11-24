import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () => {
  const executedAt = new Date().toISOString();
  console.log('[api/console-log] GET handler executed');
  console.info('[api/console-log] executedAt', executedAt);
  return Response.json({ ok: true, executedAt }, {
    headers: { 'Cache-Control': 'no-store' },
  });
};
