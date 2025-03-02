import { PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger'

export interface ButtonProps {
  type?: ButtonType
  disabled?: boolean
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}

// 提供 Props 定义助手
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} 