import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		pubDate: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		heroImage: z.string().optional(),
// 	}),
// });


const blog = defineCollection({
	type: 'content',
	schema: z.object({
	  name: z.string(),
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(),
	  updatedDate: z.coerce.date().optional(),
	  heroImage: z.string().optional(),
	}),
  });



const courses = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const mentorship = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/mentorship', pattern: '**/*.{md}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { 
	blog: blog,
	mentorship: mentorship
};
