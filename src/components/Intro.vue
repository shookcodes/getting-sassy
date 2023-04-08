<template>
  <div class="intro">
    <h1 class="title">
      <span>Let's </span> <span>get</span>
      <div class="sassy">
        <FontAwesomeIcon icon="fa-brands fa-sass" class="sass-icon" />
        <!-- <FaSass class="w-40 h-40 text-sassy" /> -->
        <span class="sass-y">-y</span>
      </div>
    </h1>
    <div class="animatedPizza">
      <div class="pepperoni"></div>
    </div>
    <div>
      <h2 class="subline">with pizza animations!</h2>
    </div>
    <!-- <Button> Let's go! <TiArrowRightOutline class="mt-1" /> </Button> -->
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

console.log("AWE", FontAwesomeIcon);
export default {
  components: {
    FontAwesomeIcon,
  },
};
// import { FaSass } from "react-icons/fa";
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
  transform: rotate(-20deg);
  border: 2px solid white;
  gap: 0.4rem;
  animation: titleEntrance 1s ease-in forwards;
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      border: calc($i * 5px) solid yellow;
    }
  }
}

.sassy {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  transform: rotate(10deg);
  .sass-icon {
    width: 160px;
    color: $sassy;
  }

  .sass-y {
    color: $sassy;
    font-family: $sassyFont;
    font-weight: bold;
    font-size: 4.5rem;
    transform: rotate(-20deg);
  }
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

  animation: growIn 1s ease-in forwards;

  &::before {
    content: "";
    position: absolute;
    width: 92%;
    height: 92%;
    margin: auto;
    padding: 12px;
    border-radius: 100%;
    background-color: $pizzaCheese;
    animation: growIn 0.8s ease-in forwards;
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
    animation: growIn 0.8s ease-in forwards,
      rotateCounterClockwise 60s linear infinite;

    &::before {
      content: "";
      position: absolute;
      width: 25%;
      height: 25%;
      padding: 20px;
      margin: auto;
      border: 23px dotted $pepperoni;
      border-radius: 100%;
      animation: growIn 1s ease-in forwards, rotateClockwise 30s linear infinite;
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
    transform: rotate(-20deg) translateX(120vw);
  }
  100% {
    transform: rotate(-20deg) translateX(-20vw);
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
