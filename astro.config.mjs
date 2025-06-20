import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact()],
});
