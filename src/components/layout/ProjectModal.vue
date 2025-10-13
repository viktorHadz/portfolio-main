<script setup>
import { portalState } from '@/stores/portalState'
import { closePortal } from '@/composables/useGsapFuncs'
import TheButton from './TheButton.vue'
import { XCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div v-if="portalState.isOpen" id="project-portal-modal"
    class="fixed left-1/2 top-1/2 z-[9999] flex -translate-x-1/2 -translate-y-1/2 flex-col">
    <h2 class="text-xl uppercase">
      {{ portalState.projectName }}
    </h2>

    <div class="flex flex-col sm:flex-row gap-3">
      <TheButton variant="primary">
        <slot name="button-one">Demo</slot>
      </TheButton>
      <TheButton variant="secondary">
        <slot name="button-one">Code</slot>
      </TheButton>
      <button @click="closePortal" class="transition
       duration-300">
        <XCircleIcon class="size-12 fill-bg-ter
         active:scale-90 hover:fill-red-500" />
      </button>

    </div>
  </div>
</template>

<style scoped>
#project-portal-modal {
  animation: portalPulse 2s infinite ease-in-out;
}
</style>
