import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Path alias: import from '@/components/Button' instead of '../../components/Button'
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
