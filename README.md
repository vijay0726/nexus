# Nexus 组件库开发文档

## 项目介绍

Nexus 是一个基于 Vue 3 + TypeScript 的组件库，采用 monorepo 结构管理多个包：

- `@nexus/components`: Vue 3 组件库
- `@nexus/hooks`: Vue 3 组合式函数库
- `@nexus/utils`: 通用工具函数库

## 技术栈

- Vue 3
- TypeScript
- Vite
- pnpm (包管理工具)

## 项目结构 

nexus/
├── package.json # 根项目配置
├── pnpm-workspace.yaml # 工作空间配置
├── packages/
│ ├── components/ # 组件库
│ │ ├── src/
│ │ │ ├── components/ # 组件目录
│ │ │ │ ├── Button/ # 按钮组件
│ │ │ │ └── ...
│ │ │ └── index.ts # 组件库入口
│ ├── hooks/ # Hooks 库
│ │ ├── src/
│ │ │ ├── useToggle/ # 开关 Hook
│ │ │ └── ...
│ │ └── index.ts # Hooks 库入口
│ └── utils/ # 工具库
│ ├── src/
│ │ ├── format/ # 格式化工具
│ │ └── ...
│ └── index.ts # 工具库入口


## 开发环境搭建

### 安装依赖
安装根目录依赖
```bash
pnpm install
```

### 开发命令

启动所有包的开发服务器
```bash
pnpm dev
```

构建所有包
```bash
pnpm build
```
清理构建文件
```bash
pnpm clean
```

## 开发指南

### 组件开发流程

1. 在 `packages/components/src/components/` 下创建新组件目录
2. 创建组件文件（如 `ComponentName.vue`）
3. 创建 `index.ts` 导出组件
4. 在 `packages/components/src/components/index.ts` 中导出新组件

示例：
```vue
<!-- packages/components/src/components/NewComponent/NewComponent.vue -->
<template>
<div class="nexus-new-component">
<!-- 组件内容 -->
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
name: 'NexusNewComponent',
// 组件逻辑
})
</script>
<style>
/ 组件样式 /
</style>
```

```typescript
// packages/components/src/components/NewComponent/index.ts
import NewComponent from './NewComponent.vue'
export { NewComponent }
export default NewComponent
```

```typescript
// packages/components/src/components/index.ts
export from './Button'
export from './NewComponent' // 添加新组件导出
```

### Hooks 开发流程

1. 在 `packages/hooks/src/` 下创建新 Hook 目录
2. 创建 Hook 文件（如 `useNewHook/index.ts`）
3. 在 `packages/hooks/src/index.ts` 中导出新 Hook

示例：
```typescript
// packages/hooks/src/useNewHook/index.ts
import { ref } from 'vue'
export function useNewHook() {
// Hook 逻辑
const state = ref(0)
function increment() {
state.value++
}
return {
state,
increment
}
}
```

```typescript
// packages/hooks/src/index.ts
export from './useToggle'
export from './useNewHook' // 添加新 Hook 导出
```

### 工具函数开发流程

1. 在 `packages/utils/src/` 下创建新工具函数目录
2. 创建工具函数文件（如 `newUtil/index.ts`）
3. 在 `packages/utils/src/index.ts` 中导出新工具函数

示例：

```typescript

// packages/utils/src/newUtil/index.ts
/
新工具函数
/
export function newUtil(param: string): string {
// 工具函数逻辑
return Processed: ${param}
}
```

```typescript
// packages/utils/src/index.ts
export from './format'
export from './newUtil' // 添加新工具函数导出
```

## 包之间的相互引用

在 monorepo 中，包可以相互引用：
```bash
# 在 components 包中添加对 hooks 和 utils 的依赖
cd packages/components
pnpm add @nexus/hooks @nexus/utils -D
```
然后在组件中使用：
```vue
<script setup lang="ts">
import { useToggle } from '@nexus/hooks'
import { formatDate } from '@nexus/utils'
const { state, toggle } = useToggle()
</script>
```


## 发布流程

### 版本更新
```bash
更新版本号
cd packages/components
npm version patch # 或 minor 或 major
```

### 构建与发布
```bash
# 构建
cd ../..
pnpm build
# 发布
cd packages/components
npm publish --access public
```

对 hooks 和 utils 包执行相同的操作。

## 最佳实践

1. **组件文档**：为每个组件创建文档，说明其用法、属性和事件
2. **单元测试**：为组件和工具函数编写单元测试
3. **示例**：创建示例应用程序展示组件的使用
4. **类型定义**：确保所有组件和函数都有良好的 TypeScript 类型定义
5. **版本控制**：使用语义化版本控制

## 现有组件

### Button 组件

基础按钮组件，支持多种类型和禁用状态。

```vue
<template>
<NexusButton type="primary">主要按钮</NexusButton>
<NexusButton type="success">成功按钮</NexusButton>
<NexusButton type="warning">警告按钮</NexusButton>
<NexusButton type="danger">危险按钮</NexusButton>
<NexusButton disabled>禁用按钮</NexusButton>
</template>
```

## 现有 Hooks

### useToggle

用于管理布尔状态的 Hook。

```typescript
import { useToggle } from '@nexus/hooks'
const { state, toggle, setTrue, setFalse } = useToggle(false)
```

## 现有工具函数

### formatDate

日期格式化工具函数。

```typescript
import { formatDate } from '@nexus/utils'
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'
```
