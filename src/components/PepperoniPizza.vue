<template>
  <div :class="['animatedPizza', endAnimation ? 'end-animation' : '']">
    <div :class="['pepperoni', endAnimation ? 'end-animation' : '']"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  endAnimation: Boolean,
});
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";

@mixin end-pizza {
  animation: none;
  animation-delay: 0;
  opacity: 1;
  transform: scale(1) translate(0);
}

.animatedPizza {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: 15px solid $pizzaBase;
  background-color: $pizzaSauce;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  animation: growIn 1s ease-in forwards 5s;

  &.end-animation {
    @include end-pizza;
    &::before {
      @include end-pizza;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 95%;
    height: 95%;
    opacity: 0;
    margin: auto;
    margin: 4px;
    border-radius: 100%;
    background-color: $pizzaCheese;
    animation: growIn 0.8s ease-in forwards 6s;
  }

  .pepperoni {
    position: relative;
    z-index: auto;
    width: 240px;
    height: 240px;
    border: 32px dotted $pepperoni;
    border-radius: 100%;
    z-index: 100;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: growIn 0.8s ease-in forwards 6.8s,
      rotateCounterClockwise 60s linear infinite;
    &.end-animation {
      @include end-pizza;
      animation: rotateCounterClockwise 60s linear infinite;

      &::before {
        @include end-pizza;
        animation: rotateClockwise 30s linear infinite;
      }

      &::after {
        @include end-pizza;
        animation: rotateCounterClockwise 30s linear infinite;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 100px;
      opacity: 0;
      margin: auto;
      overflow: visible;
      border: 32px dotted $pepperoni;

      border-radius: 100%;
      animation: growIn 1s ease-in forwards 7s,
        rotateClockwise 30s linear infinite;
    }

    &::after {
      content: "";
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 35px;
      height: 35px;
      opacity: 0;
      overflow: visible;
      border: 22px dotted $pepperoni;
      border-radius: 100%;
      animation: growIn 1s ease-in forwards 7.2s,
        rotateCounterClockwise 30s linear infinite;
    }
  }
}

@keyframes growIn {
  0% {
    transform: scale(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    @include end-pizza;
  }
}

@keyframes rotateClockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateCounterClockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
