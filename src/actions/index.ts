import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  greet: defineAction({
    accept: 'form',
    input: z.object({ name: z.string().min(1).max(40) }),
    handler: async ({ name }) => ({
      message: `Hello ${name} from Astro 7 Action`,
    }),
  }),
};
