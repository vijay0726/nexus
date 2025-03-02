declare module '@nexus/components' {
  import { App } from 'vue'
  const NexusUI: {
    install: (app: App) => void
  }
  export default NexusUI
  export const Button: any
}

declare module '@nexus/components/dist/styles/index.css' 