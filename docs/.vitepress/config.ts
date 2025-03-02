import { defineConfig } from 'vitepress'
import { demoPlugin, markdownItDemo } from './plugins/demo'

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
      { text: '指南', link: '/guide/installation', activeMatch: '^/guide/' },
      { text: '组件', link: '/components/button', activeMatch: '^/components/' },
      { text: 'Hooks', link: '/hooks/use-toggle', activeMatch: '^/hooks/' },
      { text: '工具函数', link: '/utils/format', activeMatch: '^/utils/' },
      { text: 'GitHub', link: 'https://github.com/your-username/nexus' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '主题定制', link: '/guide/theme' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        },
        {
          text: '开发',
          items: [
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '组件开发', link: '/guide/component-dev' },
            { text: '样式指南', link: '/guide/style-guide' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' }
          ]
        }
      ],
      '/hooks/': [
        {
          text: 'Hooks',
          items: [
            { text: 'useToggle', link: '/hooks/use-toggle' }
          ]
        }
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '格式化', link: '/utils/format' }
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
      markdownItDemo(md)
    }
  },
  vite: {
    plugins: [demoPlugin()]
  }
}) 