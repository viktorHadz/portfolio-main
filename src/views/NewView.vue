<script setup>
import TheButton from '@/components/layout/TheButton.vue'
import PostMench from '@/components/svg/PostMench.vue'
</script>
<template>
  <div class="container flex max-h-[90vh] place-content-center gap-6 place-self-center">
    <!-- text -->
    <div class="flex flex-col justify-center">
      <div class="text-fg-prim overflow-visible text-6xl font-bold tracking-tighter text-nowrap">
        Hi I'm Vik!
      </div>
      <div class="overflow-visible p-1 text-lg leading-none font-light tracking-tight text-nowrap">
        <div>and I love building software that</div>
        <div class="">solves real world problems</div>
      </div>
      <div class="around mt-12 flex gap-6">
        <TheButton variant="primary">View My Work</TheButton>
        <TheButton variant="secondary">Get in touch</TheButton>
      </div>
    </div>
    <div class="w-full max-w-xl min-w-md">
      <PostMench></PostMench>
    </div>
  </div>
</template>
