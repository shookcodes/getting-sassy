<script setup>
import Intro from "./components/Intro.vue";
</script>

<template>
  <div class="page">
    <Intro />
  </div>
</template>

<style scoped lang="scss">
@import "./styles/_variables.scss";
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
