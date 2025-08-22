<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useColorMode } from '@vueuse/core'

const props = defineProps({
  size: {
    type: [String, Number],
    default: '6',
  },
})

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
  <button @click="toggleMode" class="theme-toggle-btn cursor-pointer">
    <transition name="rotate-element" mode="out-in">
      <div :key="mode" class="icon-wrapper">
        <component :is="mode === 'dark' ? SunIcon : MoonIcon" :class="`size-${props.size} stroke-1`" />
      </div>
    </transition>
  </button>
</template>

<style scoped></style>
