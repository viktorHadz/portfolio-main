<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

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
  <div class="selection:bg-acc-prim selection:text-fg-sec dark:selection:text-white">
    <nav class="border-brdr bg-bg-prim sticky top-0 z-50 w-full border-b">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="hover:text-acc-prim text-fg-prim text-xl font-semibold transition-colors"
        >
          VH
        </RouterLink>

        <!-- Navigation -->
        <div class="flex items-center space-x-8">
          <RouterLink
            to="/"
            class="hover:text-acc-prim text-fg-prim font-medium transition-colors"
            activeClass="link-active"
          >
            Home
          </RouterLink>

          <RouterLink
            to="/about"
            class="hover:text-acc-prim text-fg-prim font-medium transition-colors"
            activeClass="link-active"
          >
            About
          </RouterLink>

          <RouterLink
            to="/new"
            class="hover:text-acc-prim text-fg-prim font-medium transition-colors"
            activeClass="link-active"
          >
            Work
          </RouterLink>

          <!-- Theme -->
          <button
            @click="toggleMode()"
            class="bg-bg-sec hover:bg-bg-ter rounded-lg p-2 transition-colors"
            :title="`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`"
          >
            <span v-if="mode === 'dark'" class="text-tiny rounded-full">
              <SunIcon class="size-4 text-yellow-400" />
            </span>
            <span v-else class="text-tiny rounded-full"
              ><MoonIcon class="size-4 text-yellow-300"
            /></span>
          </button>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
#app {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--color-fg-prim);
}
.link-active {
  color: var(--color-acc-prim);
}
.link-active {
  color: var(--color-acc-prim);
}
</style>
