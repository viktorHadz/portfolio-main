<script setup>
import { portalState } from '@/stores/portalState'
import { closePortal } from '@/composables/useGsapFuncs'
import TheButton from './TheButton.vue'
import { XCircleIcon } from '@heroicons/vue/24/solid'
import MenchDontKnow from '../svg/variousMench/MenchDontKnow.vue'
</script>

<template>
  <div
    v-if="portalState.isOpen"
    id="project-portal-modal"
    class="bg-bg-sec ring-offset-acc-prim fixed top-1/2 left-1/2 z-[9999] flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl ring ring-transparent ring-offset-4"
  >
    <div class="bg-bg-prim relative rounded-2xl p-4">
      <div class="flex">
        <h2 class="text-xl font-bold uppercase">
          {{ portalState.projectName }}
        </h2>
        <MenchDontKnow class="size-48" />
      </div>
      <h3 class="text-lg">Tech Stack</h3>
      <p>icons here</p>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <TheButton variant="primary">
          <slot name="button-one">Demo</slot>
        </TheButton>
        <TheButton variant="secondary">
          <slot name="button-one">Code</slot>
        </TheButton>
        <button
          @click="closePortal"
          class="absolute top-2 right-2 transition duration-300"
        >
          <XCircleIcon
            class="fill-bg-ter size-10 hover:fill-red-500 active:scale-90"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#project-portal-modal {
  animation: portalPulse 2s infinite ease-in-out;
}
</style>
