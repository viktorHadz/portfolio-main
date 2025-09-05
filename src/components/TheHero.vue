<script setup>
import TheButton from '@/components/layout/TheButton.vue'
import PostMench from '@/components/svg/PostMench.vue'
</script>
<template>
  <div class="flex h-[100vh] justify-center">
    <div
      class="container flex flex-col place-content-center place-self-center self-center sm:flex-row"
    >
      <!-- text -->
      <div class="flex flex-col justify-start text-center sm:text-start">
        <div
          class="text-fg-prim overflow-visible text-5xl font-bold tracking-tighter text-nowrap sm:text-6xl 2xl:text-8xl"
        >
          Hi I'm Vik!
        </div>
        <div class="overflow-visible text-lg leading-tight font-light tracking-normal text-nowrap">
          <div>and I love building software that</div>
          <div class="">solves real world problems</div>
        </div>
        <div class="mt-12 flex items-center justify-center gap-6 sm:justify-start">
          <TheButton variant="neu">My Work</TheButton>
          <TheButton variant="neu-sec">Contact</TheButton>
        </div>
      </div>
      <div class="w-full max-w-full sm:max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
        <PostMench></PostMench>
      </div>
    </div>
  </div>
</template>
