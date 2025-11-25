<script setup>
import { onMounted } from 'vue'
import ThePortal from '../svg/ThePortal.vue'
import { scrollLine } from '@/composables/journeyScrol'

onMounted(() => {
  scrollLine()
})
</script>
<template>
  <div class="absolute top-36 -left-20">
    <div class="relative">
      <ThePortal
        class="portal-scroll portal-warped size-20 rotate-y-80 transform-3d"
      ></ThePortal>

      <div class="absolute">
        <div id="line-container" class="absolute">
          <!-- Emitting ball -->
          <div
            id="ball"
            class="absolute h-3 w-3 rounded-full bg-[#a3d920]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
