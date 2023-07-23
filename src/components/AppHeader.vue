<script setup>
import { RouterLink } from 'vue-router'
import { useUiStore } from '../stores/ui'

const uiStore = useUiStore()
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__nav_container">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink v-if="uiStore.$state.isLogged" to="/lesson">Урок</RouterLink>
        <RouterLink v-if="uiStore.$state.isLogged" to="/exercise">Задание</RouterLink>
      </div>

      <div class="header__nav_container">
        <RouterLink v-if="uiStore.$state.isLogged" to="/feedback">Обратная связь</RouterLink>
        <RouterLink v-if="!uiStore.$state.isLogged" to="/login">Вход</RouterLink>
        <RouterLink v-if="!uiStore.$state.isLogged" to="/signin">Регистрация</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 60px;
  padding: 0 20px;
  background: #dcfbff;
}

.header__nav {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav a {
  text-decoration: none;
  color: #a28089;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.header__nav a:hover {
  transform: scale(1.1);
}

.header__nav_container {
  display: flex;
  gap: 15px;
}
</style>
