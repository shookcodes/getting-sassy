<template>
  <div class="positioning">
    <h2 class="title">
      Positioning: Absolute & Relative
      <!-- <span class="scale">Scale</span>
      <span class="and">&</span>
      <span class="translate">Translate</span> -->
    </h2>
    <Demo>
      <PizzaSlice class="pizza-container" />
    </Demo>
  </div>
</template>

<script setup>
import Demo from "@/components/Demo.vue";
import PizzaSlice from "@/components/PizzaSlice.vue";

const props = defineProps({
  currentIndex: Number,
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";
@import "@/styles/_animations.scss";

.positioning {
  width: 100%;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
}
</style>
