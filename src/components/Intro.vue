<template>
  <div class="intro">
    <h1 class="title">
      <span>Let's </span> <span>get</span>
      <div class="sassy">
        <FontAwesomeIcon icon="fa-brands fa-sass" class="sass-icon" />
        <span class="sass-y">-y</span>
      </div>
    </h1>
    <PepperoniPizza />
    <div>
      <h2 class="subline">with pizza animations!</h2>
    </div>
    <!-- <Button> Let's go! <TiArrowRightOutline class="mt-1" /> </Button> -->
  </div>
</template>

<script setup>
import PepperoniPizza from "./PepperoniPizza.vue";
// import Button from "./Button";
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.title {
  font-size: 3rem;
  display: flex;
  align-items: center;
  transform: rotate(-20deg) translate(-15vw, 0);
  gap: 1rem;
  overflow: visible;

  @for $i from 1 through 3 {
    & :nth-child(#{$i}) {
      opacity: 0;
      animation: titleEntrance 3s ease-in forwards 0.5s;
      animation-delay: ($i - 1) * 0.8s;
    }
  }
}

.sassy {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  overflow: visible;
  // transform: rotate(10deg);
}

.sass-icon {
  width: 160px;
  height: max-content;
  color: $sassy;
  transform: rotate(10deg);
  overflow: visible;
}
.sass-y {
  margin-top: 1rem;
  margin-left: -1rem;
  color: $sassy;
  font-family: $sassyFont;
  font-weight: bold;
  font-size: 4.5rem;
  transform: rotate(-10deg);
}

.subline {
  font-size: 2.5rem;
}
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

  // animation: growIn 1s ease-in forwards;

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

@keyframes titleEntrance {
  0% {
    opacity: 0;
    // same as transform: translateX(120vw) translateY(-100vh);
    transform: translate(120vw, -100vh);
  }
  20% {
    opacity: 1;
  }
  80% {
    font-weight: bold;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    font-weight: normal;
    transform: scale(1) translate(0);
  }
}

@keyframes growIn {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
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
