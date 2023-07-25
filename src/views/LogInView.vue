<script setup>
import UiMain from '../components/ui/UiMain.vue'
import router from '../router'
import { useApiStore } from '../stores/api.js'
import { useUiStore } from '../stores/ui.js'

const apiStore = useApiStore()
const uiStore = useUiStore()

const onFinishForm = async (evt) => {
  try {
    const elements = evt.target.elements
    const email = elements.email.value
    const password = elements.password.value

    const responseLogin = await apiStore.login({ email, password })

    apiStore.addJftToken(responseLogin.token)

    const responseUser = await apiStore.getUser()

    uiStore.changeIsLogged(true)
    uiStore.changeUser({ name: responseUser.name, email: responseUser.email })
    router.push('lesson')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <ui-main>
    <section class="login">
      <form class="custom-form" action="#" @submit.prevent="onFinishForm" name="signin-form">
        <input type="email" name="email" placeholder="Введите email" />
        <input type="password" name="password" placeholder="Введите пароль" />

        <button type="submit">Вход</button>
      </form>
    </section>
  </ui-main>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
}
.login h1 {
  text-align: center;
}

.login form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
