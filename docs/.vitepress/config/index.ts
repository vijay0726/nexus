import { defineConfig } from 'vitepress'
// import { markdownItDemo } from '../plugins/demo'
import { mdPlugin } from './plugins'

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
      { text: '指南', link: '/en-ZH/guide/installation', activeMatch: '^/en-ZH/guide/' },
      { text: '组件', link: '/en-ZH/components/button', activeMatch: '^/en-ZH/components/' },
      { text: 'Hooks', link: '/en-ZH/hooks/use-toggle', activeMatch: '^/en-ZH/hooks/' },
      { text: '工具函数', link: '/en-ZH/utils/format', activeMatch: '^/en-ZH/utils/' },
      { text: 'GitHub', link: 'https://github.com/your-username/nexus' }
    ],
    
    sidebar: {
      '/en-ZH/guide/': [
        {
          text: '入门',
          items: [
            { text: '安装', link: '/en-ZH/guide/installation' },
            { text: '快速开始', link: '/en-ZH/guide/quickstart' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '主题定制', link: '/en-ZH/guide/theme' },
            { text: '国际化', link: '/en-ZH/guide/i18n' },
            { text: '最佳实践', link: '/en-ZH/guide/best-practices' }
          ]
        },
        {
          text: '开发',
          items: [
            { text: '贡献指南', link: '/en-ZH/guide/contributing' },
            { text: '组件开发', link: '/en-ZH/guide/component-dev' },
            { text: '样式指南', link: '/en-ZH/guide/style-guide' }
          ]
        }
      ],
      '/en-ZH/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/en-ZH/components/button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/en-ZH/components/input' }
          ]
        }
      ],
      '/en-ZH/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useToggle', link: '/en-ZH/hooks/use-toggle' }
          ]
        }
      ],
      '/en-ZH/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '格式化', link: '/en-ZH/utils/format' }
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
  vite: {
    // plugins: [demoPlugin()]
  }
}) 