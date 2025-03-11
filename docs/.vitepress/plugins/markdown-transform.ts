import { Plugin } from "vite";
import glob from 'fast-glob'

let compPaths: string[]

export const MarkdownTransform = (): Plugin => {
    return {
        name: 'nexus-md-transform',

        enforce: 'pre',

        async buildStart() {
            // 支持国际化时这里应该是读取配置，目前仅中文，写死
            // `{zh-CN,en-US}/components`
            // 读取 docs/zh-CN/components 目录下的所有文件夹
            // cwd 为 process.cwd() 即项目根目录 docs/
            // 所以最终读取的是 docs/zh-CN/components/ 下的组件文件夹
            // fast-glob 支持 glob 模式匹配,可以使用 {pattern1,pattern2} 语法
            // 这里使用 {zh-CN,en-US}/components 匹配中英文组件目录
            // const pattern = `{zh-CN,en-US}/components`
            const langs = ['zh-CN', 'en-US']
            const pattern = `{${langs.join(',')}}/components`

            compPaths = await glob(pattern, {
                cwd: process.cwd(), // 当前工作目录为 docs/
                absolute: true, // 返回绝对路径
                onlyDirectories: true, // 只返回文件夹
            })
            console.log('----------compPaths:', compPaths)

        },

        async transform(code, id) {
            // if (!id.endsWith('.md')) return
            console.log('----------id:', id)
            // console.log('----------code:', code)

            return
        }
    }
}
