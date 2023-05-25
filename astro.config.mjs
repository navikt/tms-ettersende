import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  base: "/person/ettersende",
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
