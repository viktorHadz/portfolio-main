<script setup>
import NewHero from '@/components/svg/NewHero.vue'
</script>
<template>
  <div class="space-y-12">
    <div class="container flex max-h-[90vh] place-self-center border">
      <!-- text -->
      <div>
        <div class="font-mono text-6xl font-normal">
          Hi I'm
          <div
            class="grad-tr-prim-sec inline-block bg-clip-text text-6xl font-bold text-transparent"
          >
            Vik
          </div>
        </div>
        <div class="text-lg font-light">
          and I love

          <div
            class="grad-tr-prim-sec inline-block bg-clip-text font-bold text-transparent"
          >
            building software
          </div>
          that
          <div
            class="grad-tr-prim-sec clamp inline-block bg-clip-text font-bold text-transparent"
          >
            solves real world problems
          </div>
        </div>
      </div>
      <div>
        <NewHero class="text-fg-sec fill-fg-sec size-96"></NewHero>
      </div>
    </div>
  </div>
</template>
