import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";

export default ({ command }) => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
  ],
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
