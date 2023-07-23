<script setup>
import UiMain from '../components/ui/UiMain.vue'

const onFinishForm = (evt) => {
  const elements = evt.target.elements
  const emailValue = elements.email.value
  const passwordValue = elements.password.value

  console.log({ email: emailValue, password: passwordValue })
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
