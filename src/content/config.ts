import { defineCollection, z } from 'astro:content';

const kienThucCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  'kien-thuc': kienThucCollection,
};
