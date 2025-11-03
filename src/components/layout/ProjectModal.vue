<script setup>
import { usePortalStore } from '@/stores/portalStore'
import TheButton from './TheButton.vue'
import TheTooltip from './TheTooltip.vue'
import { ref } from 'vue'
import MenchDontKnow from '../svg/variousMench/MenchDontKnow.vue'
function svgGetURL(name) {
  return new URL(`../../assets/icons/techIcons/${name}.svg`, import.meta.url)
    .href
}
const portal = usePortalStore()
const hoveredIcon = ref(null)
</script>

<template>
  <div
    v-if="portal.isOpen"
    id="project-portal-modal"
    class="bg-bg-sec border-acc-prim fixed top-1/2 left-1/2 z-[9999] flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border p-4 max-sm:w-full sm:p-8"
  >
    <div class="flex w-full items-center justify-between">
      <h2 class="text-acc-prim mb-4 text-4xl font-bold">
        {{ portal.projectData.name }}
      </h2>
    </div>
    <div class="mb-8 flex text-base">
      <div class="z-10 w-[65%]">
        <p>{{ portal.projectData.description }}</p>
      </div>
      <!-- masked image -->
      <div class="absolute right-0">
        <MenchDontKnow v-if="portal.projectData.picture" class="mr-4 size-42" />
      </div>
    </div>

    <h3 class="mb-4 text-xl">Tech Stack</h3>
    <div class="flex gap-2">
      <div
        v-for="iconName in portal.projectData.techIcons"
        :key="iconName"
        class="relative"
        @mouseenter="hoveredIcon = iconName"
        @mouseleave="hoveredIcon = null"
      >
        <TheTooltip
          :text="iconName"
          class="-top-10 mx-auto"
          :class="hoveredIcon === iconName ? '' : 'hidden'"
        />
        <div
          class="shadow-bg-prim bg-bg-prim border-bg-ter/60 hover:border-acc-prim overflow-clip rounded-full border shadow-md grayscale transition-all duration-300 hover:grayscale-0"
        >
          <img
            :src="svgGetURL(iconName)"
            class="size-8 sm:size-10"
            :alt="iconName"
          />
        </div>
      </div>
    </div>

    <div class="mt-8 flex w-full justify-between">
      <div class="space-x-4">
        <TheButton variant="primary">
          <slot name="button-one">Demo</slot>
        </TheButton>
        <TheButton variant="secondary">
          <slot name="button-one">Code</slot>
        </TheButton>
      </div>
      <TheButton
        variant="tertiary"
        class="text-lg hover:text-red-500"
        @click="portal.close()"
      >
        <slot name="button-one">Close</slot>
      </TheButton>
    </div>
  </div>
</template>

<style scoped>
#project-portal-modal {
  animation: portalPulse 2s infinite ease-in-out;
}
</style>
