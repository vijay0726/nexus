import DefaultTheme from 'vitepress/theme'
import { h, defineAsyncComponent } from 'vue'
import Demo from './components/Demo.vue'

import NexusUI from '@nexus/components'


import { NeButton } from '@nexus/components'


import './styles/index.css'
import '@nexus/components/dist/styles/index.css'

console.log('NexusUI', NexusUI);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NexusUI)
    // app.component('NeButton', NeButton)
    app.component('Demo', Demo)
  }
} 