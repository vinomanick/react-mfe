import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.tsx'),
        formats: ['es'],
        fileName: 'admin-mfe',
      },
      rollupOptions: {
        external: [],
        output: { globals: {}},
      },
    },
    resolve: {
      alias: {
        src: resolve('src/'),
      },
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    plugins: [react()],
  };
});
