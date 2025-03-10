import mdContainer from 'markdown-it-container'
import { MarkdownRenderer } from 'vitepress'
import { createDemoContainer } from '../plugins/demo'

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, 'demo', createDemoContainer(md))
}
