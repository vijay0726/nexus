import { defineConfig } from 'vitepress'
import { getViteConfig } from './vite'
import { mdPlugin } from './plugins'

// 怎么读取mode
const mode = process.env.NODE_ENV || 'development'
console.log('----------mode:',mode)

export default defineConfig({
  title: 'Nexus UI',
  description: '基于 Vue 3 的现代化组件库',
  lang: 'zh-CN',
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/zh-CN/guide/installation', activeMatch: '^/zh-CN/guide/' },
      { text: '组件', link: '/zh-CN/components/button', activeMatch: '^/zh-CN/components/' },
      { text: 'Hooks', link: '/zh-CN/hooks/use-toggle', activeMatch: '^/zh-CN/hooks/' },
      { text: '工具函数', link: '/zh-CN/utils/format', activeMatch: '^/zh-CN/utils/' },
      { text: 'GitHub', link: 'https://github.com/your-username/nexus' }
    ],
    
    sidebar: {
      '/zh-CN/guide/': [
        {
          text: '入门',
          items: [
            { text: '安装', link: '/zh-CN/guide/installation' },
            { text: '快速开始', link: '/zh-CN/guide/quickstart' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '主题定制', link: '/zh-CN/guide/theme' },
            { text: '国际化', link: '/zh-CN/guide/i18n' },
            { text: '最佳实践', link: '/zh-CN/guide/best-practices' }
          ]
        },
        {
          text: '开发',
          items: [
            { text: '贡献指南', link: '/zh-CN/guide/contributing' },
            { text: '组件开发', link: '/zh-CN/guide/component-dev' },
            { text: '样式指南', link: '/zh-CN/guide/style-guide' }
          ]
        }
      ],
      '/zh-CN/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/zh-CN/components/button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/zh-CN/components/input' }
          ]
        }
      ],
      '/zh-CN/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useToggle', link: '/zh-CN/hooks/use-toggle' }
          ]
        }
      ],
      '/zh-CN/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '格式化', link: '/zh-CN/utils/format' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/nexus' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Nexus Team'
    },
    
    search: {
      provider: 'local'
    }
  },
  markdown: {
    config: (md) => {
      mdPlugin(md)
    }
  },
  vite: getViteConfig({ mode })
}) 