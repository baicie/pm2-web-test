import viteCompression from 'vite-plugin-compression';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

// 是否引入CDN
// https://vitejs.dev/config/
export default defineConfig({
  base: '/client',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'client/components.d.ts',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'client/auto-imports.d.ts',
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        manualChunks(id) {
          console.log('id', id);

          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
    outDir: './static',
  },
  server: {
    proxy: {
      '/api/': {
        target: 'http://localhost:6174',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/'),
      },
    },
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
});
