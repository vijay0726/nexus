import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NexusUtils',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', '@vue/shared'],
      output: {
        globals: {
          vue: 'Vue',
          '@vue/shared': 'VueShared'
        }
      }
    }
  },
  plugins: [
    dts({ include: ['src'] })
  ]
}) 