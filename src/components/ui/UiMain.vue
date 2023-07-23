<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 60px);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
