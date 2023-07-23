import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {
  const api = ref('http://localhost:3000/')

  const createUser = async ({ email, name, password }) => {
    return await fetch(`${api.value}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ email, name, password })
    }).then((res) => res.json())
  }

  return { createUser }
})
