import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base './' memastikan aplikasi bisa jalan di domain.github.io/nama-repo/
  base: './', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    reportCompressedSize: false
  }
});