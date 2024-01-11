import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.coerce.date(), // Keep and eye on this!!!
		image: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { 
	'blog': blogCollection, };
