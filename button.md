# Button 按钮

常用的操作按钮，用于触发用户操作。

## 基础用法

基础的按钮用法。

:::demo
```vue
<template>
  <div class="demo-button">
    <NexusButton>默认按钮</NexusButton>
    <NexusButton type="primary">主要按钮</NexusButton>
    <NexusButton type="success">成功按钮</NexusButton>
    <NexusButton type="warning">警告按钮</NexusButton>
    <NexusButton type="danger">危险按钮</NexusButton>
  </div>
</template>

<style>
.demo-button .nexus-button {
  margin-right: 10px;
}
</style>
```
:::

## 禁用状态

按钮不可用状态。

:::demo 使用 `disabled` 属性来定义按钮是否禁用。
```vue
<template>
  <div class="demo-button">
    <NexusButton disabled>默认按钮</NexusButton>
    <NexusButton type="primary" disabled>主要按钮</NexusButton>
    <NexusButton type="success" disabled>成功按钮</NexusButton>
    <NexusButton type="warning" disabled>警告按钮</NexusButton>
    <NexusButton type="danger" disabled>危险按钮</NexusButton>
  </div>
</template>
```
:::

## API

### 属性

| 属性名    | 说明     | 类型    | 可选值                                      | 默认值    |
| --------- | -------- | ------- | ------------------------------------------- | --------- |
| type      | 类型     | string  | default / primary / success / warning / danger | default   |
| disabled  | 是否禁用 | boolean | —                                           | false     |

### 事件

| 事件名 | 说明     | 回调参数     |
| ------ | -------- | ------------ |
| click  | 点击事件 | (event: MouseEvent) => void |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 | 