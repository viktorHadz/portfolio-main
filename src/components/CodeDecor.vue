<script setup>
import { ref, onMounted, computed } from 'vue'

const isLoaded = ref(false)
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 200)
})

const wrapperClass = computed(() => [
  'absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'select-none pointer-events-none -z-10 opacity-80',
  '[mask-image:radial-gradient(120%_120%_at_50%_50%,white_45%,transparent_90%)]',
  'transition-opacity duration-700 motion-reduce:transition-none',
])
</script>

<template>
  <div :class="wrapperClass" aria-hidden="true">
    <div
      class="flex w-[min(90vw,50rem)] max-w-full flex-col gap-2"
      :class="[
        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
        'transition-all duration-700 ease-out motion-reduce:duration-0',
      ]"
    >
      <div
        class="flex gap-2"
        :class="[
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
          'transition-all duration-800 ease-out motion-reduce:duration-0',
        ]"
      >
        <div class="from-yellow to-red h-2 w-[62%] bg-gradient-to-r"></div>
        <div class="bg-gray size-2 rounded-full"></div>
        <div class="bg-gray h-2 w-[18%]"></div>
      </div>
      <div
        class="flex gap-2"
        :class="[
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0',
          'transition-all duration-400 ease-out motion-reduce:duration-0',
        ]"
      >
        <div class="from-acc-prim via-green to-acc-ter h-2 w-[30%] bg-gradient-to-r"></div>
        <div class="bg-gray h-2 w-[10%]"></div>
        <div class="from-purple via-blue to-acc-prim h-2 w-[50%] bg-gradient-to-r"></div>
      </div>
      <div class="flex gap-2">
        <div class="from-blue to-acc-prim h-2 w-[80%] bg-gradient-to-r"></div>
        <div class="bg-gray h-2 w-[10%]"></div>
      </div>
      <div class="flex gap-2">
        <div class="bg-gray h-2 w-[10%]"></div>
        <div class="from-orange to-yellow h-2 w-[46%] bg-gradient-to-r"></div>
        <div class="from-acc-ter to-acc-prim h-2 w-[36%] bg-gradient-to-r"></div>
      </div>
    </div>
  </div>
</template>
