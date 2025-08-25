<script setup>
import TheButton from '@/components/layout/TheButton.vue'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheSvgHero from '@/components/svg/TheSvgHero.vue'
import CodeDecor from '@/components/CodeDecor.vue'
</script>

<template>
  <TheContainer width="full" :center-mobile="false" :mobile-padding="false" :mobile-margin-x="false"
    class="mt-8 grid grid-cols-1 items-center justify-items-center sm:mt-12 sm:grid-cols-2 sm:gap-8">
    <div class="flex w-full max-w-[12rem] justify-center sm:max-w-xs sm:justify-end">
      <TheSvgHero class="text-fg-prim" />
    </div>
    <div class="relative isolate w-full max-w-xl overflow-hidden rounded-2xl">
      <CodeDecor variant="center" :opacity="0.6" :scale="1.4" />

      <div class="flex flex-col items-center gap-4 sm:items-start">
        <div class="pt-2 text-center text-4xl font-bold sm:text-left sm:text-5xl lg:text-6xl">
          Viktor Hadzhiyski
        </div>
        <div class="text-acc-prim text-center sm:text-left">
          <span class="text-2xl">
            I love programing and building software
          </span>
        </div>
        <div class="mt-2 flex justify-center gap-4 sm:justify-start">
          <TheButton>My Work</TheButton>
          <TheButton variant="secondary">Get in Touch</TheButton>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<style></style>
