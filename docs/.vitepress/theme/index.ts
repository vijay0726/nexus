import DefaultTheme from 'vitepress/theme'
import Demo from '../../vitepress/components/demo.vue'

import NexusUI from '@nexus/components'


import './styles/index.css'
import '@nexus/components/dist/styles/index.css'

console.log('NexusUI', NexusUI);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NexusUI)
    app.component('Demo', Demo)
  }
} 