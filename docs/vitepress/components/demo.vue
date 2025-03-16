<template>
  <div class="demo-container">
    <div class="demo-example">
      <div class="example-showcase">
        <slot name="source" />
      </div>
    </div>
    <div class="demo-code">
      <div class="demo-code-content" v-if="codeVisible">
        <SourceCode :visible="codeVisible" :source="source" />
      </div>
      <div class="demo-code-button" @click="toggleCode">
        {{ codeVisible ? '隐藏代码' : '显示代码' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SourceCode from './source-code.vue'

const props = defineProps({
  source: String,
  path: String,
  rawSource: String,
  description: String
})


const codeVisible = ref(false)

function toggleCode() {
  codeVisible.value = !codeVisible.value
}
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