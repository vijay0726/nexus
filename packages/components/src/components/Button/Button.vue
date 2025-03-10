<template>
  <button
    class="ne-button"
    :class="[
      `ne-button--${type}`,
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
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'NeButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
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

<!-- <style>
.ne-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.ne-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.ne-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.ne-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.ne-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.ne-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>  -->