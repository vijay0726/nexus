import type { Plugin } from 'vite'
import type MarkdownIt from 'markdown-it'

export function demoPlugin(): Plugin {
  return {
    name: 'vitepress-plugin-demo',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return code
      
      // 简化处理逻辑，直接将 demo 容器转换为 Vue 组件
      return code.replace(/:::\s*demo([\s\S]*?):::/g, (_, content) => {
        const componentContent = content.trim()
        const vueCode = componentContent.match(/```vue\s*([\s\S]*?)\s*```/)?.[1] || ''
        
        return `<ClientOnly><Demo>\n<template #source>\n${vueCode}\n</template>\n<template #code>\n\`\`\`vue\n${vueCode}\n\`\`\`\n</template>\n</Demo></ClientOnly>`
      })
    }
  }
}

export function markdownItDemo(md: MarkdownIt) {
  // 这个函数可以简化或移除，因为我们在 transform 中已经处理了 demo 容器
} 