import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    anything: z.string().optional()
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

const slides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { blog, projects, slides };
