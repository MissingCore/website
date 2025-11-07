import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

let adapter = vercel();

if (process.argv[3] === "--node" || process.argv[4] === "--node") {
  adapter = node({ mode: "standalone" });
}

// https://astro.build/config
export default defineConfig({
  site: "https://missingcore.vercel.app",
  integrations: [mdx(), sitemap(), icon()],
  // "hybrid" is deprecated and makes "static" works like "hybrid".
  output: "static",
  adapter: adapter,
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/privacy-policy": "/music/privacy-policy",
  },
  experimental: {
    fonts: [
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
      },
      {
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
        provider: fontProviders.fontsource(),
      },
    ],
  },
});
