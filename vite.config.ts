import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // ✅ load jest-dom matchers
    include: ['src/**/*.test.tsx'],
    // optional: SCSS/image mocks (you can remove if handled in setup file)
    alias: {
      '\\.scss$': 'identity-obj-proxy',
      '\\.png$': 'identity-obj-proxy',
      '\\.jpg$': 'identity-obj-proxy',
      '\\.svg$': 'identity-obj-proxy',
    },
  },
});
