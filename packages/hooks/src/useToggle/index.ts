import { ref } from 'vue'

export function useToggle(initialValue = false) {
  const state = ref(initialValue)
  
  function toggle() {
    state.value = !state.value
  }
  
  function setTrue() {
    state.value = true
  }
  
  function setFalse() {
    state.value = false
  }
  
  return {
    state,
    toggle,
    setTrue,
    setFalse
  }
} 