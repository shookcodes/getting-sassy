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
    width: 200px;
    height: 200px;
    border: 2px solid green;
    border: 32px dotted $pepperoni;
    border-radius: 100%;
    z-index: 100;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: growIn 0.8s ease-in forwards 6.8s,
      rotateCounterClockwise 60s linear infinite;

    &::before {
      content: "";
      position: absolute;
      //   width: 55%;
      //   height: 55%;
      width: 120px;
      height: 120px;
      //   padding: 23px;
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
      width: 40px;
      height: 40px;
      //   margin: 32px;
      opacity: 0;
      //   margin: auto;

      overflow: visible;
      border: 25px dotted $pepperoni;
      //   border: 2px solid green;
      border-radius: 100%;
      animation: growIn 1s ease-in forwards 7.2s,
        rotateCounterClockwise 30s linear infinite;
      //   content: "";
      //   position: absolute;
      //   width: 38px;
      //   height: 38px;
      //   opacity: 0;
      //   margin: auto;
      //   background: $pepperoni;
      //   animation: growIn 1s ease-in forwards 6.9s;
      //   border-radius: 100%;
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
