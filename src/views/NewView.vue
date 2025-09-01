<script setup>
import NewHero from '@/components/svg/NewHero.vue'
</script>
<template>
  <div class="space-y-12">
    <div class="container flex max-h-[90vh] place-self-center border">
      <!-- text -->
      <div>
        <div class="">
          <div
            class="grad-tr-prim-sec letter inline-block bg-clip-text font-mono text-6xl leading-tight font-bold tracking-tighter text-transparent"
          >
            Hi I'm, Vik!
          </div>
        </div>
        <div class="text-lg font-light">
          and I love building

          <div class="grad-tr-prim-sec inline-block bg-clip-text font-bold text-transparent">
            software
          </div>
          that
          <div class="grad-tr-prim-sec clamp inline-block bg-clip-text font-bold text-transparent">
            solves
          </div>
          <span> real world </span>
          <div class="grad-tr-prim-sec clamp inline-block bg-clip-text font-bold text-transparent">
            problems
          </div>
        </div>
      </div>
      <div>
        <NewHero class="text-fg-sec fill-fg-sec size-96"></NewHero>
      </div>
    </div>
  </div>
</template>
