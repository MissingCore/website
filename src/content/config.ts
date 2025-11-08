import { defineCollection } from "astro:content";

import { z } from "astro:content";

export const MDXFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type MDXFrontmatter = z.infer<typeof MDXFrontmatterSchema>;

export const privacyPolicyCollection = defineCollection({
  type: "content",
  schema: MDXFrontmatterSchema,
});

export const collections = {
  "privacy-policy": privacyPolicyCollection,
};
