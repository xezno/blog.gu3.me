import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        date: z.string(),
        tags: z.string().optional(),
        thumb: z.string().optional(),
        cover: z.string().optional(),
        preview: z.string().optional(),
        video: z.string().optional(),
        hidden: z.boolean().default(false),
      }),
    }),
  },
})
