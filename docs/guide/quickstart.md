# 快速开始

本节将介绍如何在项目中使用 Nexus UI 组件库。

## 完整引入

```ts
// main.ts
import { createApp } from 'vue'
import NexusUI from '@nexus/components'
import '@nexus/components/dist/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(NexusUI)
app.mount('#app')
```

## 按需引入

推荐使用 unplugin-vue-components 实现组件和样式的按需引入：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NexusResolver } from '@nexus/components/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NexusResolver()]
    })
  ]
})
```

然后你可以直接在模板中使用组件，而无需导入：

```vue
<template>
  <NexusButton type="primary">按钮</NexusButton>
</template>
```

## 手动引入

```vue
<template>
  <NexusButton type="primary">按钮</NexusButton>
</template>

<script setup>
import { NexusButton } from '@nexus/components'
</script>
``` 