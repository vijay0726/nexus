# useToggle

用于管理布尔状态的 Hook。

## 基础用法

:::demo
```vue
<template>
  <div>
    <p>当前状态: {{ state ? '开启' : '关闭' }}</p>
    <NexusButton @click="toggle">切换</NexusButton>
    <NexusButton @click="setTrue" style="margin-left: 10px">开启</NexusButton>
    <NexusButton @click="setFalse" style="margin-left: 10px">关闭</NexusButton>
  </div>
</template>

<script setup>
import { useToggle } from '@nexus/hooks'

const { state, toggle, setTrue, setFalse } = useToggle(false)
</script>
```
:::

## API

```ts
const { 
  state,    // Ref<boolean> - 当前状态
  toggle,   // () => void - 切换状态
  setTrue,  // () => void - 设置为 true
  setFalse  // () => void - 设置为 false
} = useToggle(initialValue?: boolean)
```

### 参数

| 参数         | 说明     | 类型    | 默认值 |
| ------------ | -------- | ------- | ------ |
| initialValue | 初始状态 | boolean | false  |

### 返回值

| 名称     | 说明       | 类型           |
| -------- | ---------- | -------------- |
| state    | 当前状态   | Ref\<boolean\> |
| toggle   | 切换状态   | () => void     |
| setTrue  | 设置为开启 | () => void     |
| setFalse | 设置为关闭 | () => void     |
``` 