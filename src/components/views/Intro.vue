<template>
  <div class="intro" v-if="$route.path === '/'">
    <h1 :class="['title', endAnimation ? 'end-animation' : '']">
      <span>Let's </span> <span>get</span>
      <div class="sassy">
        <FontAwesomeIcon icon="fa-brands fa-sass" class="sass-icon" />
        <span class="sass-y">-y</span>
      </div>
    </h1>
    <PepperoniPizza :end-animation="endAnimation" />
    <div>
      <h2 :class="['subline', endAnimation ? 'end-animation' : '']">
        with pizza animations!
      </h2>
    </div>
    <Button
      :class="['button', endAnimation ? 'end-animation' : '']"
      @click="handleClick">
      Let's go!
      <FontAwesomeIcon icon="fa-right-long" />
    </Button>
  </div>
</template>

<script setup>
import PepperoniPizza from "@/components/PepperoniPizza.vue";
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";

const props = defineProps({
  endAnimation: Boolean,
  currentIndex: Number,
});

const emit = defineEmits({
  "update-index": (index) => typeof index === "number",
});

const handleClick = () => {
  emit("update-index", props.currentIndex + 1);
};
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";

@mixin end-title {
  animation: none;
  opacity: 1;
  font-weight: normal;
  transform: scale(1) translate(0);
}

@mixin end-slideIn {
  animation: none;
  opacity: 1;
  font-weight: normal;
  transform: skew(0);
}

.intro {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  .title {
    display: absolute;
    font-size: 3rem;
    display: flex;
    align-items: center;
    transform: rotate(-20deg) translate(-15vw, 0);
    gap: 1rem;
    overflow: visible;

    @for $i from 1 through 3 {
      & :nth-child(#{$i}) {
        transition: all;
        opacity: 0;
        animation: titleEntrance 2.2s ease-in forwards 0.5s;
        animation-delay: ($i - 1) * 1.2s;
      }
    }
    &.end-animation {
      @for $i from 1 through 3 {
        & :nth-child(#{$i}) {
          animation: none;
          @include end-title;
        }
      }
    }
  }

  .sassy {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    overflow: visible;
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
    opacity: 0;
    animation: slideInFromRight 1.5s linear forwards 7s;

    &.end-animation {
      @include end-slideIn;
    }
  }
}
.button {
  $buttonBorder: color.adjust($royal, $alpha: -0.2);
  $buttonBorderHover: color.adjust($royal, $alpha: -0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  align-self: end;
  background-color: #fffff7;
  background-clip: text;
  font-size: 1.2rem;
  margin-right: -5rem;
  border-radius: 10px;
  border: 2px solid $buttonBorder;
  padding: 0.2rem 1.5rem;
  line-height: 3rem;
  opacity: 0;
  transition: ease-in-out 0.1s;

  margin-top: 40px;
  animation: slideInFromRight 1.5s linear forwards 7.5s;
  color: transparent;
  cursor: pointer;

  &.end-animation {
    @include end-slideIn();
  }

  & > svg {
    color: #fffff7;
    background: inherit;
    transition: ease-in-out 0.2s;
  }

  &:hover {
    border: 2px solid $buttonBorderHover;
    padding: 0.2rem 1.8rem 0.2rem 1.5rem;
    margin-right: -5.8rem;

    & > svg {
      transform: translateX(8px);
    }
  }
}

@keyframes titleEntrance {
  0% {
    opacity: 0;
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
    @include end-title;
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(120vw) skew(-20deg);
  }
  10% {
    opacity: 1;
  }
  70% {
    transform: translateX(0) skew(-20deg);
  }
  80% {
    transform: translateX(0) scale(1.2);
  }

  100% {
    @include end-slideIn();
  }
}
</style>
