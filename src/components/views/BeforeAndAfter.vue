<template>
  <div class="before-after">
    <h2 class="title">
      Before & After Text Fun
      <!-- <span class="scale">Scale</span>
        <span class="and">&</span>
        <span class="translate">Translate</span> -->
    </h2>
    <div class="display">
      <MMMPizza />
    </div>
  </div>
</template>

<script setup>
import Demo from "@/components/Demo.vue";
import MMMPizza from "@/components/MMMPizza.vue";

const props = defineProps({
  currentIndex: Number,
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";
@import "@/styles/_animations.scss";

.before-after {
  display: flex;
  flex-direction: column;
  justify-content: starts;

  width: 100%;
  height: 100%;
  text-align: center;

  .display {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    border: 2px solid $sassy;
    border-radius: 8px;
    text-align: center;
    height: 100%;
    min-height: 70vh;
    width: 100%;
    @include sassyShadow();
  }
}
</style>
