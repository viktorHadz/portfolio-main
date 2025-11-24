<script setup>
import { onMounted } from 'vue'
import ThePortal from '../svg/ThePortal.vue'
import { scrollLine } from '@/composables/journeyScrol'

onMounted(() => {
  scrollLine()
})
</script>
<template>
  <div class="absolute">
    <ThePortal class="size-20 rotate-y-70 transform-3d"></ThePortal>
    <!-- The Scroll Line -->
    <div class="relative top-20 left-16">
      <div id="beam-container" class="absolute">
        <!-- The glowing head -->
        <div
          id="beam-head"
          class="absolute h-3 w-3 rounded-full bg-[#a3d920]"
        ></div>

        <!-- The trailing line behind it -->
      </div>
    </div>
  </div>
</template>
