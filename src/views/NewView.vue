<script setup>
import TheCard from '@/components/layout/TheCard.vue'
import TheHero from '@/components/TheHero.vue'
</script>
<template>
  <div>
    <TheHero></TheHero>
    <div
      class="bg-bg-sec isolate my-20 flex h-[100vh] w-full flex-col items-center justify-center gap-6 place-self-center md:flex-row"
    >
      <div
        class="isolate container flex h-auto w-full flex-col items-center justify-center gap-6 place-self-center p-4 md:flex-row"
      >
        <TheCard> </TheCard>
        <TheCard> </TheCard>
        <TheCard> </TheCard>
      </div>
    </div>
  </div>
</template>
