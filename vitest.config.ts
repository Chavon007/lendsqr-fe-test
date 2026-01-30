import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["src/**/*.test.tsx"],

    alias: {
      "\\.scss$": "identity-obj-proxy",
      "\\.png$": "identity-obj-proxy",
      "\\.jpg$": "identity-obj-proxy",
      "\\.svg$": "identity-obj-proxy",
    },
  },
});
