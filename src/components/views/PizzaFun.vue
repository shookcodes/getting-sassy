<template>
  <div class="pizza-fun">
    <h2 class="title">
      Let's animate some pizza!
      <!-- Positioning: Absolute & Relative -->
      <!-- <span class="scale">Scale</span>
      <span class="and">&</span>
      <span class="translate">Translate</span> -->
    </h2>
    <div class="display">
      <div class="whole-pizza">
        <PizzaCrust />
        <PizzaCheese />
      </div>
    </div>
    <Demo> </Demo>
  </div>
</template>

<script setup>
import { PizzaCrust, PizzaCheese } from "../pizza";

const props = defineProps({
  currentIndex: Number,
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";
@import "@/styles/_animations.scss";
@import "@/styles/PizzaFun.module.scss";
.pizza-fun {
  width: 100%;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;

  .title {
    font-size: 3rem;
    display: flex;
    align-items: center;

    gap: 1rem;
    overflow: visible;
    opacity: 0;
    animation: slideInFromRight 1.5s ease-in-out forwards 1s;
  }

  .display {
    // flex-grow: 1;
    justify-content: center;
    align-items: center;
    border: 2px solid $sassy;
    border-radius: 8px;
    text-align: center;
    height: 100%;
    width: 100%;
    @include sassyShadow();
  }
}
</style>
