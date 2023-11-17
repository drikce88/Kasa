// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Spécifiez le dossier de sortie ici
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
