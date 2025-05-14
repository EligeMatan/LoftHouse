import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// https://vite.dev/config/

const __dirname1 = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      host: env.VITE_HOST || 'localhost',
      port: env.VITE_PORT || 8099,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
})
