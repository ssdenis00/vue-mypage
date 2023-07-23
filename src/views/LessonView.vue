<script setup>
import UiMain from '../components/ui/UiMain.vue'
</script>

<template>
  <ui-main>
    <section class="lesson">
      <h1>Анимации в CSS</h1>
      <video class="lesson__video" width="650" controls>
        <source src="../assets/videos/lesson.mp4" type="video/mp4" />
      </video>
    </section>
  </ui-main>
</template>

<style scoped>
.lesson__video {
  margin: 20px 0 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 25px;
}
</style>
