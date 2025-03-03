// 组件库入口文件
import { App, Plugin } from 'vue'

// 导入所有组件
import components from './components/component'

import './styles/index'

// 导出所有组件 install 方法
export * from './components'

// 导出版本信息
const version = '1.0.0'

// 提供组件库默认导出
export default {
    version,
    install(app: App) {
        // 注册所有组件
        components.forEach((comp: Plugin) => {
            console.log('index.ts: ', comp);
            app.use(comp)
        })
    }
}
