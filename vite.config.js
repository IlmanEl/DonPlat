import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        screen1: resolve(__dirname, 'screen1.html'),
        screen2: resolve(__dirname, 'screen2.html'),
        screen3: resolve(__dirname, 'screen3.html'),
      },
    },
  },
});
