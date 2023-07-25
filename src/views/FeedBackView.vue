<script setup>
import UiMain from '../components/ui/UiMain.vue'
import { useUiStore } from '../stores/ui'

const uiStore = useUiStore()

const handleOnFinishForm = () => {
  console.log('test')
}
</script>

<template>
  <ui-main>
    <section class="feedback">
      <h1>Обратная связь</h1>
      <form @submit.prevent="handleOnFinishForm" class="custom-form" action="#">
        <input type="email" name="email" v-model="uiStore.$state.user.email" disabled />
        <textarea name="feedback-value" cols="30" rows="10"></textarea>

        <button type="submit">Отправить</button>
      </form>
    </section>
  </ui-main>
</template>

<style scoped>
.feedback form {
  margin: 15px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
