<script setup>
import TheCard from '@/components/layout/TheCard.vue'
import Efficiency from '@/components/svg/TheEfficient.vue'
import TheFullstack from '@/components/svg/TheFullstack.vue'
import EasyToUse from '@/components/svg/TheEasyToUse.vue'
import TheSecure from '@/components/svg/TheSecure.vue'

const responsiveClasses = 'size-24 sm:size-32 md:size-44 lg:size-56 xl:size-64'
</script>
<template>
  <div
    class="container grid grid-cols-1 gap-6 place-self-center sm:grid-cols-2 lg:grid-cols-4"
  >
    <TheCard
      title="Full stack"
      text="Design, build, deploy and maintain. Complete system, not fragents."
    >
      <template #graphic>
        <TheFullstack :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Easy to Use"
      text="Systems that put users first. Making the complicated simple."
      gsap-selector="easy-to-use"
    >
      <template #graphic>
        <EasyToUse :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Efficient"
      text=" Saving time, reducing costs, and delivering value."
    >
      <template #graphic>
        <Efficiency :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Secure"
      text="Security as a default resilient code, safe data, and robust systems."
    >
      <template #graphic>
        <TheSecure :class="responsiveClasses" />
      </template>
    </TheCard>
  </div>
</template>
