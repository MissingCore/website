import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

let adapter = vercel();

if (process.argv[3] === "--node" || process.argv[4] === "--node") {
  adapter = node({ mode: "standalone" });
}

// https://astro.build/config
export default defineConfig({
  site: "https://missingcore.vercel.app",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
  // "hybrid" is deprecated and makes "static" works like "hybrid".
  output: "static",
  adapter: adapter,
  redirects: {
    "/privacy-policy": "/music/privacy-policy",
  },
});
