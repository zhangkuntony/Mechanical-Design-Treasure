import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Element Plus 按需自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动注入 SCSS 变量，所有 vue 组件中可直接使用变量
        additionalData: `@use "@/styles/variables" as *;`,
      },
    },
  },

  server: {
    host: '0.0.0.0',    // 监听所有网络接口，允许局域网/外网访问
    port: 5173,         // 可自定义端口，默认就是 5173
    open: false,        // 是否自动打开浏览器（可选）
  },
})
