import path from 'path'
import fs from 'fs'

import type { Plugin } from 'vite'
import type MarkdownIt from 'markdown-it'
import { MarkdownRenderer } from 'vitepress'

// export function demoPlugin(): Plugin {
//   return {
//     name: 'vitepress-plugin-demo',
//     enforce: 'pre',
//     transform(code, id) {
//       if (!id.endsWith('.md')) return code

//       // 简化处理逻辑，直接将 demo 容器转换为 Vue 组件
//       return code.replace(/:::\s*demo([\s\S]*?):::/g, (_, content) => {
//         const componentContent = content.trim()
//         const vueCode = componentContent.match(/```vue\s*([\s\S]*?)\s*```/)?.[1] || ''

//         return `<ClientOnly><Demo>\n<template #source>\n${vueCode}\n</template>\n<template #code>\n\`\`\`vue\n${vueCode}\n\`\`\`\n</template>\n</Demo></ClientOnly>`
//       })
//     }
//   }
// }

// export function markdownItDemo(md: MarkdownIt) {
//   // 这个函数可以简化或移除，因为我们在 transform 中已经处理了 demo 容器
// } 

// 获取文档根目录
const docRoot = path.resolve(__dirname, '../../')
console.log('docRoot:', docRoot);

interface ContainerOpts {
  validate?(params: string): boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}

export const createDemoContainer = (md: MarkdownRenderer): ContainerOpts => {
  return {
    validate(params) {
      console.log('params:', params);

      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      // 1.解析标记
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)

      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source

        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve(docRoot, 'examples', `${sourceFile}.vue`), 'utf-8')
        }

        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`)
        }

        return `
        <Demo 
          source="${encodeURIComponent(md.render(`\`\`\`vue\n${source}\n\`\`\`\``))}"
          path="${sourceFile}"
          description="${encodeURIComponent(md.render(description))}"
        >
          <template #source><ep-${sourceFile.replaceAll('/', '-')}/></template>
         `
      } else {
        return '</Demo>\n'
      }

    }
  }
}