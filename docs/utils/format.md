# 格式化工具函数

## formatDate

日期格式化工具函数。

### 基础用法

```ts
import { formatDate } from '@nexus/utils'

// 格式化当前日期
const today = formatDate(new Date(), 'YYYY-MM-DD')
console.log(today) // 例如: 2023-09-01

// 格式化时间戳
const timestamp = formatDate(1693526400000, 'YYYY-MM-DD HH:mm:ss')
console.log(timestamp) // 例如: 2023-09-01 08:00:00
```

### API

```ts
formatDate(date: Date | number | string, format = 'YYYY-MM-DD'): string
```

#### 参数

| 参数   | 说明                   | 类型                  | 默认值       |
| ------ | ---------------------- | --------------------- | ------------ |
| date   | 日期对象、时间戳或日期字符串 | Date \| number \| string | -          |
| format | 格式化模板             | string                | 'YYYY-MM-DD' |

#### 格式化模板

| 格式 | 说明     | 示例  |
| ---- | -------- | ----- |
| YYYY | 年       | 2023  |
| MM   | 月       | 01-12 |
| DD   | 日       | 01-31 |
| HH   | 小时     | 00-23 |
| mm   | 分钟     | 00-59 |
| ss   | 秒       | 00-59 | 