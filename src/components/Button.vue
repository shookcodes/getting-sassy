<template>
  <button class="button">{children}</button>
</template>

<script setup></script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: #fffff7;
  background-clip: text;
  line-height: 3rem;
  color: transparent;
  & > svg {
    color: #fffff7;
    background: inherit;
    transition: ease-in-out 0.2s;
  }

  &:hover {
    & > svg {
      transform: translateX(8px);
    }
  }
}
</style>
