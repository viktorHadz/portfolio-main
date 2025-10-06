<script setup>
// import TheButton from './TheButton.vue'
import SystemTwo from '../svg/projects/SystemTwo.vue'
import TheSystem from '../svg/projects/TheSystem.vue'
</script>

<template>
  <div class="relative overflow-clip py-24 bg-stars">
    <div class="divider-upwards">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>
    <div class="py-24">
      <h2 class="text-acc-prim text-center text-sm font-semibold">
        my universe of projects
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        Each planet a creation on my journey
      </p>
      <!-- <TheSystem
        class="z-10 container mx-auto max-w-7xl p-6 sm:py-24 lg:px-8 lg:py-32"
      ></TheSystem> -->
      <SystemTwo class="container mx-auto"></SystemTwo>
    </div>
  </div>
</template>
<style scoped>
.divider-upwards {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-upwards svg {
  position: relative;
  display: block;
  width: calc(150% + 1.3px);
  height: 150px;
}

.divider-upwards .shape-fill {
  fill: var(--color-bg-sec);
}
</style>
