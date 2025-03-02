import DefaultTheme from 'vitepress/theme'
import { h, defineAsyncComponent } from 'vue'
import Demo from './components/Demo.vue'
// @ts-ignore
// import { Button } from '@nexus/components'
import NexusUI from '@nexus/components'
// @ts-ignore
import '@nexus/components/dist/styles/index.css'
import './styles/index.css'
// console.log('NexusUI', NexusUI);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NexusUI)
    // app.component('NexusButton', Button)
    app.component('Demo', Demo)
    
    // 添加调试信息
    // console.log('Button component registered:', Button)
  }
} 