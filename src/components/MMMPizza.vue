<template>
  <div class="pizza-text-wrapper">
    <p class="pizza-text" :data-text="text">{{ text }}</p>
    <!-- <p class="pizza-text2" :data-text="text">{{ text }}</p> -->
  </div>
</template>

<script setup>
const text = "MMMM Pizza";
</script>

<style scoped lang="scss">
@import "./MMMPizza.module.scss";
</style>
