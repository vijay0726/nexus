import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // 自定义组件解析器
        (name) => {
          if (name.startsWith('Nexus')) {
            const componentName = name.slice(5) // 去掉 'Nexus' 前缀
            return {
              name: componentName,
              from: '@nexus/components',
              sideEffects: `@nexus/components/styles/${componentName.toLowerCase()}.css`
            }
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 指定使用 dart-sass
        implementation: require('sass')
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NexusComponents',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    },
    cssCodeSplit: true
  }
}) 