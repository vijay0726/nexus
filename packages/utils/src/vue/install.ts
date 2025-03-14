import { App } from "vue"
import { SFCWithInstall } from "./typescript"


export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
    (main as SFCWithInstall<T>).install = (app: App) => {
        // 遍历main和extra的组件，并注册到app中
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component(comp.name, comp)
        }
    }

    // 如果extra存在，则将extra的组件添加到main中
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as any)[key] = comp
        }
    }

    return main as SFCWithInstall<T> & E
}

