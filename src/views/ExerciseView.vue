<script setup>
import { ref } from 'vue'
import UiMain from '../components/ui/UiMain.vue'

const isLoading = ref(false)
const width = ref(0)

let interval = null

const handleStartOrStopButton = () => {
  if (!interval && !isLoading.value) {
    isLoading.value = true
    interval = setInterval(() => {
      if (width.value >= 100) {
        width.value = 0
      }
      width.value++

      if (width.value >= 100) {
        isLoading.value = false
        clearInterval(interval)
        interval = null
      }
    }, 50)
  } else {
    isLoading.value = false
    clearInterval(interval)
    interval = null
  }
}
</script>

<template>
  <ui-main>
    <section class="exercise">
      <div class="progress-container">
        <div class="progress" :style="{ width: width + '%' }"></div>
      </div>

      <button type="button" class="button" @click="handleStartOrStopButton">
        {{ isLoading ? 'Stop' : 'Start' }}
      </button>

      <h1>Задание для джедаев</h1>

      <p>-Нужно создать фейковую загрузочную стоку.</p>
      <p>
        -Строка загрузки должна заполняться при нажатии на кнопку Start и останавливать загрузку при
        нажатии на Stop.
      </p>
      <p>-При нажатии на Start строка должна продолжать загрузку, если уже была начата.</p>
      <p>-После заполнения строки при нажатии на Start строка должна начать загрузку заново</p>
    </section>
  </ui-main>
</template>

<style scoped>
.exercise h1 {
  margin: 30px 0;
}

.exercise p {
  padding: 0 5px;
  margin: 7px 0;
  max-width: 400px;
}
.exercise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.progress-container {
  width: 200px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #d1d1d1;
  transition: all 0.1s ease-in-out;
}

.button {
  cursor: pointer;
  margin: 10px 0 0;
  background-color: #d1d1d1;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}
</style>
