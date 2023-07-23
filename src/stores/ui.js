import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isLogged = ref(false)

  function changeIsLogged(state) {
    isLogged.value = state
  }

  return { isLogged, changeIsLogged }
})
