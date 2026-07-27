import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ locals }) =>
  Response.json({
    ok: true,
    framework: 'astro7',
    middleware: Boolean(locals.requestStartedAt),
  });

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  return Response.json({ received: body }, { status: 201 });
};
