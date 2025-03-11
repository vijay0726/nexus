/**
 * 1.Required类型的作用
 * 2.
 */

import { loadEnv, UserConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from '../plugins/markdown-transform'
type ViteConfig = Required<UserConfig>['vite']

export const getViteConfig = ({ mode }: { mode: string }): ViteConfig => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        css: {

        },
        server: {

        },
        resolve: {},
        plugins: [
            // https://github.com/antfu/unplugin-vue-components
            // 报错原因:
            // 1. 类型不兼容问题 - Components() 返回的插件类型与 Vite 插件类型不匹配
            // 2. 这是由于 vite 和 @types/node 版本不一致导致的类型定义冲突
            // 解决方案: 使用类型断言将 Components() 返回值强制转换为 PluginOption 类型
            Components({
                dirs: ['.vitepress/vitepress/components'],
                allowOverrides: true,
                // todo: 自定义解析器,后面解析 icon可能用到
                resolvers: [],
                // allow auto import and register components used in markdown
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            }) as any,
            
            MarkdownTransform()
        ],
        optimizeDeps: {}
    }
}