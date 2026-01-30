import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.test.tsx'],
    // THIS IS IMPORTANT:
    alias: {
      '\\.scss$': 'identity-obj-proxy', // mocks scss imports
      '\\.png$': 'identity-obj-proxy',  // mocks image imports
      '\\.jpg$': 'identity-obj-proxy',
    },
  },
})
