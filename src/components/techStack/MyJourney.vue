<script setup>
import TheDivider from '@/components/layout/TheDivider.vue'
import MenchPortalWave from '../svg/variousMench/MenchPortalWave.vue'
import PortalJourney from './PortalJourney.vue'
const articles = [
  {
    title: 'The Beginning',
    body: "If not already apparent my name is Viktor. I began this journey 3 years ago, helping a family member who needed a website made for their business. Since then programming and design got under my skin and I haven't looked back since. The thrill of making something out of nothing brought me back to those times when the world made more sense and I was a young boy playing with constructors, or making swords out of wood or riding carts out of wood nails and spare parts in my grandpa's garage.",
  },
  {
    title: 'Discovery & Learning',
    body: "A few sleepless weeks later, WordPress and the help of a dear friend we had a working e-commerce platform ready to go. This is about the time OpenAI released their models. My journey was quickly hijacked by the robot and for the next year and something my love for code deepened but I learned very little. The roots of my invoicing app were born out of that. Several re-writes later I understood that if I was to program anything of value I had to re-frame learning. I had to start from scratch. The good thing was I didn't know much. Then a colleague of mine required a website. Actualizedman.co.uk was created thanks to Tailwind, WordPress and GPT. But I was beginning to learn a thing or two although a for loop still sent shivers down my spine.",
  },
  {
    title: 'Growth & Mastery',
    body: "My next year was spent rewriting the invoicing app. I finally understood for loops, if statements and APIs. I made the firm decision that I wasn't going to write an async PHP app and I decided to write everything in JavaScript. Most of the time I spent writing CSS unable to grasp the next thing about design. I don't claim I do now but you should have seen the first few iterations of invoi-king.work. Finally grasping the value of CSS style tokens I could make some progress and finish the damn thing. It was written in Alpine.js with my custom router and it was a miracle it worked. That is about the time I found out about Vue and it really freed me up to doing more.",
  },
]
</script>

<template>
  <div class="bg-bg-sec relative overflow-clip py-24 lg:py-32">
    <TheDivider fill="fill-bg-prim" position="top" />
    <div class="relative container mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
      <!-- Portal Scroll   -->
      <PortalJourney></PortalJourney>
      <!-- Header -->
      <section
        class="container mx-auto my-12 flex flex-col items-center justify-center sm:my-24 sm:flex-row"
      >
        <div
          class="mb-6 flex flex-col justify-center text-center sm:text-start"
        >
          <p
            class="text-fg-prim text-4xl font-bold tracking-tighter sm:text-5xl 2xl:text-6xl"
          >
            Programming Journey
          </p>
          <h1
            class="text-acc-prim mt-2 text-lg leading-tight font-bold tracking-tight"
          >
            A little bit more About Me
          </h1>
        </div>
        <MenchPortalWave class="size-96 max-w-full py-8 sm:py-10" />
      </section>

      <!-- Content -->
      <div class="mx-auto" v-for="article in articles" :key="article">
        <!-- Article 1 -->
        <article class="my-12 space-y-3 sm:my-16 sm:space-y-4">
          <h3 class="text-acc-prim text-lg font-semibold sm:text-xl">
            {{ article.title }}
          </h3>
          <p class="text-fg-sec text-base leading-relaxed sm:text-lg">
            {{ article.body }}
          </p>
          <hr
            class="text-acc-prim mt-12 mask-x-from-0 mask-x-to-transparent mask-radial-at-center"
          />
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
