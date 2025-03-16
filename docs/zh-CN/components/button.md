
<script setup>
import EpButtonBasic from '../../examples/button/basic.vue'
import EpButtonDisabled from '../../examples/button/disabled.vue'
import EpButtonCustom from '../../examples/button/custom.vue'
</script>

# Button 按钮

常用的操作按钮，用于触发用户操作。

## 基础用法

:::demo basic

button/basic

:::



## 禁用状态
:::demo 使用 `disabled` 属性来定义按钮是否禁用。

button/disabled

:::

## 自定义样式
:::demo 使用 `type` 属性来定义按钮的类型。

button/custom

:::


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