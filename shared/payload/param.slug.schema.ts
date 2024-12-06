import { z } from 'zod';

export const paramSlugSchema = z.object({
  slug: z.string(),
});
