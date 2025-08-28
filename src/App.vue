<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'data-theme',
  modes: {
    light: 'light',
    dark: 'dark',
  },
  disableTransition: false,
})

const toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav
    class="border-brdr absolute top-0 flex w-full justify-center gap-6 border-b"
  >
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/new">New</RouterLink>
    <button @click="toggleMode()" class="cursor-pointer">
      {{ mode }}
    </button>
  </nav>

  <RouterView />
</template>

<style scoped>
/* go to base.css for globals */
#app {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-items: center;
  color: var(--color-fg-prim);
}
</style>
