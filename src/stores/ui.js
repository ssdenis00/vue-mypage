import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isLogged = ref(false)
  const user = ref({ name: '', email: '' })

  const changeIsLogged = (state) => {
    isLogged.value = state
  }

  const changeUser = (userValue) => {
    user.value = userValue
  }

  return { isLogged, user, changeIsLogged, changeUser }
})
