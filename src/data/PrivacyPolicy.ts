import { z } from "astro/zod";

export const MDXFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type MDXFrontmatter = z.infer<typeof MDXFrontmatterSchema>;
