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
  site: "https://missingcore.cyanchill.com",
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
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Nynjara",
      cssVariable: "--font-nynjara",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/nynjara.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
