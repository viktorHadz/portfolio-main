<script setup>
// import TheButton from './TheButton.vue'
import PlanetarySystem from './PlanetarySystem.vue'
</script>

<template>
  <div class="bg-stars relative overflow-clip py-24">
    <div class="py-24 sm:py-42">
      <h2 class="text-acc-prim text-center text-sm font-semibold">
        my universe of projects
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Each planet a creation on my journey
      </p>
      <PlanetarySystem class="mx-auto py-24 2xl:max-w-[70%]"></PlanetarySystem>
    </div>
  </div>
</template>
