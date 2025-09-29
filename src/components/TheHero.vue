<script setup>
import TheButton from '@/components/layout/TheButton.vue'
// import PostMench from '@/components/svg/PostMench.vue'
import PostMenchCopy from './svg/variousMench/PostMenchCopy.vue'
</script>

<template>
  <section
    class="bg-bg-prim container mx-auto flex flex-col items-center justify-center sm:flex-row"
  >
    <div
      class="mt-24 mb-6 flex flex-col justify-center text-center sm:text-start"
    >
      <h1
        class="text-fg-prim overflow-visible text-5xl font-bold tracking-tighter text-nowrap sm:text-6xl 2xl:text-8xl"
      >
        Hi I'm Vik!
      </h1>
      <p
        class="text-acc-prim overflow-visible text-lg leading-tight font-bold tracking-tight text-nowrap"
      >
        <span>and I love building software that</span><br />
        <span>solves real world problems</span>
      </p>
      <div class="mt-6 flex items-center justify-center gap-6 sm:justify-start">
        <TheButton variant="primary">My Work</TheButton>
        <TheButton variant="secondary">Contact</TheButton>
      </div>
    </div>
    <div class="w-full max-w-full sm:max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
      <!-- <PostMench /> -->
      <PostMenchCopy />
    </div>
  </section>
</template>
