import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApiStore = defineStore('api', () => {
  const api = ref('http://localhost:3000')
  const jwtToken = ref('')

  const addJftToken = (token) => {
    jwtToken.value = token
  }

  const createUser = async ({ email, name, password }) => {
    return await fetch(`${api.value}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ email, name, password })
    }).then((res) => res.json())
  }

  const login = async ({ email, password }) => {
    return await fetch(`${api.value}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ email, password })
    }).then((res) => res.json())
  }

  const getUser = async () => {
    return await fetch(`${api.value}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer ' + jwtToken.value
      }
    }).then((res) => res.json())
  }

  return { createUser, login, addJftToken, getUser }
})
