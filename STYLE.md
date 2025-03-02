# 组件库样式方案设计

## 样式管理方案

### 1. 样式文件分离

将样式从 Vue 组件中分离出来，采用单独的样式文件：

```typescript
// styles/index.ts - 样式入口文件
import './base.scss'
import './components/button.scss'
import './components/input.scss'
// 导入其他组件样式
```

### 2. 样式目录结构

```
packages/components/
├── src/
│   ├── styles/
│   │   ├── base.scss           # 基础样式（变量、混合宏等）
│   │   ├── common/             # 公共样式
│   │   │   ├── _variables.scss # 变量定义
│   │   │   ├── _mixins.scss    # 混合宏
│   │   │   └── _functions.scss # 函数
│   │   ├── components/         # 组件样式
│   │   │   ├── button.scss     # 按钮样式
│   │   │   └── ...
│   │   └── index.ts            # 样式入口
│   └── components/
│       ├── Button/
│       │   ├── Button.vue      # 不包含样式，只有结构和逻辑
│       │   └── index.ts
│       └── ...
```

### 3. 样式命名规范

采用 BEM 命名规范，避免样式冲突：

```scss
/* BEM 命名规范 */
.nexus-button {
  /* 基础样式 */
  
  &--primary {
    /* 主要按钮样式 */
  }
  
  &--success {
    /* 成功按钮样式 */
  }
  
  &__icon {
    /* 按钮图标样式 */
  }
  
  &.is-disabled {
    /* 禁用状态 */
  }
}
```

### 4. 主题定制方案

使用 CSS 变量实现主题定制：

```scss
:root {
  // 主色调
  --nexus-primary-color: #409eff;
  --nexus-success-color: #67c23a;
  --nexus-warning-color: #e6a23c;
  --nexus-danger-color: #f56c6c;
  
  // 文字颜色
  --nexus-text-color-primary: #303133;
  --nexus-text-color-regular: #606266;
  
  // 边框颜色
  --nexus-border-color: #dcdfe6;
  
  // 字体大小
  --nexus-font-size-large: 18px;
  --nexus-font-size-normal: 14px;
  --nexus-font-size-small: 12px;
  
  // 圆角
  --nexus-border-radius: 4px;
}
```

### 5. 按需加载方案

使用 unplugin-vue-components 实现组件和样式的按需加载：

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // 自定义组件解析器
        (name) => {
          if (name.startsWith('Nexus')) {
            const componentName = name.slice(5) // 去掉 'Nexus' 前缀
            return {
              name: componentName,
              from: '@nexus/components',
              sideEffects: `@nexus/components/styles/${componentName.toLowerCase()}.css`
            }
          }
        }
      ]
    })
  ],
  // ...其他配置
})
```

## 需要考虑的事项

### 1. 样式隔离

防止组件样式与用户项目样式冲突：

- 使用特定前缀（如 `nexus-`）
- 考虑使用 CSS Modules 或 Shadow DOM
- 避免使用全局选择器

### 2. 浏览器兼容性

- 使用 Autoprefixer 自动添加浏览器前缀
- 设置合理的 browserslist 配置

```
> 1%
last 2 versions
not dead
```

### 3. 样式打包策略

提供多种引入方式：

1. 全量引入：

```typescript
// 全量引入
import '@nexus/components/dist/styles/index.css'
```

2. 按需引入：

```typescript
// 按需引入
import '@nexus/components/dist/styles/button.css'
```

### 4. 样式预处理器选择

推荐使用 SCSS，因为它提供了变量、嵌套、混合宏等功能，同时兼容原生 CSS。

### 5. 样式文件构建配置

```typescript
// build/build-styles.ts
import { series, parallel, src, dest } from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

// 编译 SCSS 文件
function compile() {
  return src('./src/styles/**/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('./dist/styles'))
}

// 复制 CSS 变量文件（用于主题定制）
function copyCssVars() {
  return src('./src/styles/common/_variables.scss')
    .pipe(rename('theme-vars.scss'))
    .pipe(dest('./dist/styles'))
}

export default series(parallel(compile, copyCssVars))
```

## 实施方案

### 1. 修改 Button 组件

从 Vue 组件中移除样式部分：

```vue
<template>
  <button
    class="nexus-button"
    :class="[
      `nexus-button--${type}`,
      {
        'is-disabled': disabled,
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NexusButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'danger'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      if (props.disabled) return
      emit('click', e)
    }

    return {
      handleClick
    }
  }
})
</script>
```

### 2. 创建按钮样式文件

```scss
// styles/components/button.scss
@import '../common/variables';
@import '../common/mixins';

.nexus-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--nexus-border-color, #dcdfe6);
  color: var(--nexus-text-color-regular, #606266);
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: var(--nexus-font-size-normal, 14px);
  border-radius: var(--nexus-border-radius, 4px);
  
  &--primary {
    color: #fff;
    background-color: var(--nexus-primary-color, #409eff);
    border-color: var(--nexus-primary-color, #409eff);
  }
  
  &--success {
    color: #fff;
    background-color: var(--nexus-success-color, #67c23a);
    border-color: var(--nexus-success-color, #67c23a);
  }
  
  &--warning {
    color: #fff;
    background-color: var(--nexus-warning-color, #e6a23c);
    border-color: var(--nexus-warning-color, #e6a23c);
  }
  
  &--danger {
    color: #fff;
    background-color: var(--nexus-danger-color, #f56c6c);
    border-color: var(--nexus-danger-color, #f56c6c);
  }
  
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
```

### 3. 更新组件库入口文件

```typescript
// src/index.ts
// 导入样式
import './styles/index'

// 导出组件
export * from './components'
```

## 优势

1. **关注点分离**：样式与逻辑分离，便于维护
2. **主题定制**：通过 CSS 变量实现简单的主题定制
3. **按需加载**：减小用户应用的体积
4. **样式隔离**：避免样式冲突
5. **统一风格**：保持组件库的一致性

## 参考资源

- [BEM 命名规范](http://getbem.com/)
- [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [Sass 官方文档](https://sass-lang.com/documentation)
- [Element Plus 样式系统](https://element-plus.org/zh-CN/guide/theming.html)