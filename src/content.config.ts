import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { MDXFrontmatterSchema } from "./data/PrivacyPolicy";

export const privacyPolicyCollection = defineCollection({
  loader: glob({
    base: "./src/content/privacy-policy",
    pattern: "**/*.{md,mdx}",
  }),
  schema: MDXFrontmatterSchema,
});

export const collections = {
  "privacy-policy": privacyPolicyCollection,
};
