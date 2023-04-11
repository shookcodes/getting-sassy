<template>
  <div class="pizza-fun">
    <h2 class="title">Let's animate some pizza!</h2>
    <div class="display">
      <div class="whole-pizza">
        <PizzaCrust />
        <PizzaSauce />
        <PizzaCheese />
        <PepperoniGroup />
        <Pineapple1 />
        <Pineapple2 />
        <Basil />
        <Pepperoni1 />
        <Pepperoni2 />
        <Pepperoni3 />
        <PineappleHalf1 />
        <PineappleHalf2 />
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
  PineappleHalf1,
  PineappleHalf2,
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
}
</style>
