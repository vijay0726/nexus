// 组件库入口文件
import { App } from 'vue'
import './styles/index'

// 导入所有组件
import * as components from './components'

// 导出所有组件 install 方法
export * from './components'

// 导出版本信息
const version = '1.0.0'

// 提供组件库默认导出
export default {
    version,
    install(app: App) {
        // 注册所有组件
        Object.entries(components).forEach(([name, component]) => {
            console.log('index.ts: ', name, component);
            
            app.component(name, component)
        })
    }
}
