<template>
  <div class="demo-container">
    <div class="demo-example">
      <component :is="DemoComponent" v-if="DemoComponent" />
      <div v-else>
        <slot name="source"></slot>
      </div>
    </div>
    <div class="demo-code">
      <div class="demo-code-content" v-if="codeVisible">
        <slot name="code"></slot>
      </div>
      <div class="demo-code-button" @click="toggleCode">
        {{ codeVisible ? '隐藏代码' : '显示代码' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineComponent, h } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: ''
  }
})

const codeVisible = ref(false)

function toggleCode() {
  codeVisible.value = !codeVisible.value
}

// 尝试将源代码编译为组件
const DemoComponent = computed(() => {
  try {
    // 这里可以尝试动态编译组件，但在生产环境可能不工作
    // 所以我们依赖 slot 机制
    return null
  } catch (e) {
    console.error(e)
    return null
  }
})
</script>

<style>
.demo-container {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-example {
  padding: 24px;
  border-bottom: 1px solid #eee;
}

.demo-code {
  background-color: #f9f9f9;
}

.demo-code-content {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.demo-code-button {
  text-align: center;
  padding: 8px;
  color: #409eff;
  cursor: pointer;
  font-size: 14px;
}
</style> 