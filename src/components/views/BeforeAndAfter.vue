<template>
  <div class="before-after">
    <h2 class="title">
      Before & After
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

  align-items: center;
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
    width: 100%;
    @include sassyShadow();
  }

  .title {
    font-size: 3rem;
    display: flex;
    align-items: center;

    gap: 1rem;
    overflow: visible;
    opacity: 0;
    animation: slideInFromRight 1.5s ease-in-out forwards 1s;
  }
}
</style>
