<template>
  <div class="animatedPizza">
    <div class="pepperoni"></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.animatedPizza {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 15px solid $pizzaBase;
  background-color: $pizzaSauce;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  animation: growIn 1s ease-in forwards 3s;

  &::before {
    content: "";
    position: absolute;
    width: 92%;
    height: 92%;
    margin: auto;
    padding: 12px;
    border-radius: 100%;
    background-color: $pizzaCheese;
    // animation: growIn 0.8s ease-in forwards;
  }

  .pepperoni {
    position: relative;
    width: 70%;
    height: 70%;
    border: 25px dotted $pepperoni;
    border-radius: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    // animation: growIn 0.8s ease-in forwards,
    //   rotateCounterClockwise 60s linear infinite;

    &::before {
      content: "";
      position: absolute;
      width: 25%;
      height: 25%;
      padding: 20px;
      margin: auto;
      border: 23px dotted $pepperoni;
      border-radius: 100%;
      // animation: growIn 1s ease-in forwards, rotateClockwise 30s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      width: 23px;
      height: 23px;
      margin: auto;
      background: $pepperoni;

      border-radius: 100%;
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
    opacity: 1;
    transform: scale(1);
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
