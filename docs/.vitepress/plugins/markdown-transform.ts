import { Plugin } from "vite";
import glob from 'fast-glob'
import path from "path";
import fs from 'fs'
import { camelize } from '@vue/shared'
import { docRoot } from "../../utils";


type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>


// 组件文档绝对路径
// [ 'E:/study/code/nexus/docs/zh-CN/components' ]
let compPaths: string[]

export const MarkdownTransform = (): Plugin => {
    return {
        name: 'nexus-md-transform',

        // 在其他插件之前执行
        enforce: 'pre',

        // 添加configResolved钩子确认插件被加载
        configResolved(config) {
            console.log('MarkdownTransform插件配置已解析');
        },

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
            console.log('---MarkdownTransform--buildStart-----compPaths:', compPaths)

        },

        // async transform(code: string, id: string) {

        //     if (!id.endsWith('.md')) return
        //     const componentId = path.basename(id, '.md')
        //     console.log('----MarkdownTransform---transform---componentId:', componentId)
        //     if (componentId === 'button.md') {
        //         console.log('----MarkdownTransform---transform---code:', code)

        //     }

        //     const append: Append = {
        //         headers: [],
        //         footers: [],
        //         scriptSetups: getExampleImports(componentId)
        //     }

        //     // code = transformScriptSetup(code, append)


        //     return {
        //         code: code,
        //         map: undefined,
        //         ast: undefined,
        //     }
        // }
    }
}


const transformScriptSetup = (code: string, append: Append) => {

    return
}

const transformComponentMarkdown = (id: string, componentId: string, code: string, append: Append) => {

    return 
 }

const getExampleImports = (componentId: string) => {
    console.log('----MarkdownTransform---getExampleImports---componentId:', componentId)

    const examplePath = path.resolve(docRoot, 'examples', componentId)
    console.log('----MarkdownTransform---getExampleImports---examplePath:', examplePath)

    if (!fs.existsSync(examplePath)) return []
    const files = fs.readdirSync(examplePath)
    const imports: string[] = []

    for (const item of files) {
        if (!item.endsWith('.vue')) continue

        const file = item.replace('.vue', '')
        const name = camelize(`Ep-${componentId}-${file}`)

        imports.push(`import ${name} from '../../examples/${componentId}/${item}.vue'`)

    }

    console.log('----MarkdownTransform---getExampleImports---files:', files)

    return imports
}
