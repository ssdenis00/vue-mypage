<script setup>
import { ref } from 'vue'
import UiMain from '../components/ui/UiMain.vue'
let isMount = ref(false)

let isMountTimeout = setTimeout(() => {
  isMount.value = true

  return () => {
    clearTimeout(isMountTimeout)
  }
}, 200)
</script>

<template>
  <ui-main>
    <section class="about-me">
      <img
        src="../assets/images/old-photo.jpg"
        class="about-me__image animate_disable"
        :class="{ animate_active: isMount }"
        alt="my-old-photo"
      />

      <p class="about-me__text animate_disable" :class="{ animate_active: isMount }">
        Когда-то давно, в школьные годы, я случайно наткнулся на книгу о программировании в местной
        библиотеке. Хотя компьютеры и вселенная кодирования казались мне загадочными, я решил взять
        эту книгу и попробовать разобраться в этой теме. Мои первые шаги были не такими гладкими,
        как я ожидал. Но что меня поразило, так это ощущение магии, когда с помощью нескольких строк
        кода можно создать нечто удивительное. Со временем, программирование перестало быть для меня
        просто увлечением – оно стало моим путём.
      </p>

      <p class="about-me__text animate_disable" :class="{ animate_active: isMount }">
        Я осознал, что это именно та сфера, где я хочу развиваться и вкладывать свои усилия. Каждый
        новый день был возможностью узнать что-то новое и стать лучше в своём деле. Чувство
        удовлетворения, когда твоя программа работает безупречно, непередаваемо. Таким образом,
        программирование стало моим любимым занятием не только из-за его красоты и творческого
        потенциала, но и потому, что оно открыло передо мной целый мир возможностей и стало моим
        путём к профессиональному росту и самореализации
      </p>

      <img
        class="about-me__image about-me__image_latest animate_disable"
        :class="{ animate_active: isMount }"
        src="../assets/images/latest-photo.jpg"
        alt="my-latest-photo"
      />
    </section>
  </ui-main>
</template>

<style scoped>
.about-me {
  width: 80%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
}

.about-me__image {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 40vh;
  object-fit: cover;
  object-position: 0% 65%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.animate_disable {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;
}

.animate_active {
  opacity: 1;
  transform: translateX(0);
}

.about-me__image_latest {
  object-position: 0% 25%;
}

.about-me__text {
  width: 100%;
}
</style>
