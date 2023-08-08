import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = resolve(process.cwd(), 'env');
  const env = loadEnv(mode, envDir, '');

  return {
    base: env.BASE_URL,
    envDir,
    build: {
      manifest: true,
      rollupOptions: {
        external: [],
        output: { globals: {}},
      },
    },
    resolve: { alias: { src: resolve('src/') } },
    plugins: [react()],
  };
});
