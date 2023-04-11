<template>
  <div class="pizza-fun">
    <h2 class="title">Let's animate some pizza!</h2>
    <div class="display">
      <div class="whole-pizza">
        <!-- <PizzaCrust />
        <PizzaCheese />
        <PizzaSauce />
        <PepperoniGroup /> -->
      </div>
    </div>
    <Demo> </Demo>
  </div>
</template>

<script setup>
import {
  PizzaCrust,
  PizzaSauce,
  PizzaCheese,
  PepperoniGroup,
  Pepperoni1,
  Pepperoni2,
  Pepperoni3,
  Pineapple1,
  Pineapple2,
  Basil,
} from "../pizza";

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

  .display {
    // flex-grow: 1;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    border: 2px solid $sassy;
    border-radius: 8px;
    text-align: center;
    height: 100%;
    width: 100%;
    min-height: 70vh;
    @include sassyShadow();
  }
}
</style>
