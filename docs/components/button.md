# Button 按钮

常用的操作按钮，用于触发用户操作。

## 基础用法
<div class="demo-button">
  <NeButton>测试按钮</NeButton>
  <NeButton type="primary">主要按钮</NeButton>
  <NeButton type="success">成功按钮</NeButton>
  <NeButton type="warning">警告按钮</NeButton>
  <NeButton type="danger">危险按钮</NeButton>
</div>


## 禁用状态
按钮不可用状态。

使用 `disabled` 属性来定义按钮是否禁用。

<div class="demo-button">
  <NeButton disabled>禁用按钮</NeButton>
  <NeButton type="primary" disabled>主要按钮</NeButton>
  <NeButton type="success" disabled>成功按钮</NeButton>
  <NeButton type="warning" disabled>警告按钮</NeButton>
  <NeButton type="danger" disabled>危险按钮</NeButton>
</div>

## API

### 属性

| 属性名   | 说明     | 类型    | 可选值                                         | 默认值  |
| -------- | -------- | ------- | ---------------------------------------------- | ------- |
| type     | 类型     | string  | default / primary / success / warning / danger | default |
| disabled | 是否禁用 | boolean | —                                              | false   |

### 事件

| 事件名 | 说明     | 回调参数                    |
| ------ | -------- | --------------------------- |
| click  | 点击事件 | (event: MouseEvent) => void |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |