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
        :glow="true"
        class="portal-scroll size-20 rotate-y-70 transform-3d"
      ></ThePortal>
    </div>
  </div>
</template>
