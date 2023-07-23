<script setup>
import UiMain from '../components/ui/UiMain.vue'
import { useApiStore } from '../stores/api.js'

const apiStore = useApiStore()

const onFinishForm = async (evt) => {
  try {
    const elements = evt.target.elements
    const email = elements.email.value
    const name = elements.name.value
    const password = elements.password.value

    const response = await apiStore.createUser({ email, name, password })

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <ui-main>
    <section class="signin">
      <form class="custom-form" action="#" @submit.prevent="onFinishForm" name="signin-form">
        <input type="email" name="email" placeholder="Введите email" />
        <input type="text" name="name" placeholder="Введите имя" />
        <input type="password" name="password" placeholder="Введите пароль" />

        <button type="submit">Зарегестрироваться</button>
      </form>
    </section>
  </ui-main>
</template>

<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
}
.signin h1 {
  text-align: center;
}

.signin form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
