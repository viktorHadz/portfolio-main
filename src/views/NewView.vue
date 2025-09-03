<script setup>
import TheButton from '@/components/layout/TheButton.vue'
import NewHero from '@/components/svg/NewHero.vue'
import PostMench from '@/components/svg/PostMench.vue'
</script>
<template>
  <div class="container flex max-h-[90vh] place-content-center gap-6 place-self-center">
    <!-- text -->
    <div class="flex flex-col justify-center gap-4">
      <div class="text-8xl font-bold tracking-tight">Hi I'm Vik!</div>
      <div class="font-ligh mt-2 p-1 text-lg">
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
      <div class="around mt-6 flex gap-6">
        <TheButton variant="primary">View My Work</TheButton>
        <TheButton variant="secondary">Get in touch</TheButton>
      </div>
    </div>
    <div class="w-full">
      <!-- <NewHero class="text-fg-prim relative size-96"></NewHero> -->
      <PostMench></PostMench>
    </div>
  </div>
</template>
