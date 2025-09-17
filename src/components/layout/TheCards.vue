<script setup>
import TheCard from '@/components/layout/TheCard.vue'
import Efficiency from '@/components/svg/TheEfficient.vue'
import TheFullstack from '@/components/svg/TheFullstack.vue'
import EasyToUse from '@/components/svg/TheEasyToUse.vue'
import TheSecure from '@/components/svg/TheSecure.vue'
import uiMorph from '@/assets/images/neomorph.png'
import FullstackMench from '../svg/FullstackMench.vue'

const responsiveClasses = 'size-24 sm:size-32 md:size-44 lg:size-56 xl:size-64'
</script>
<template>
  <div
    class="container grid grid-cols-1 gap-6 place-self-center sm:grid-cols-2 lg:grid-cols-4"
  >
    <TheCard
      title="Full stack"
      text="Build, deploy and maintain complete systems, not fragments."
      gsap-selector="full-stacked"
    >
      <template #graphic>
        <TheFullstack :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Easy to Use"
      text="Design that puts the user first. Making the complicated simple."
      gsap-selector="easy-to-use"
    >
      <template #graphic>
        <EasyToUse :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Efficient"
      text=" Saving time, reducing costs, and delivering value."
      gsap-selector="the-efficient"
    >
      <template #graphic>
        <Efficiency :class="responsiveClasses" />
      </template>
    </TheCard>
    <TheCard
      title="Secure"
      text="Security as a default. Resilient code and safe data to build robust software."
      gsap-selector="the-secure"
    >
      <template #graphic>
        <TheSecure :class="responsiveClasses" />
      </template>
    </TheCard>
  </div>
  <div class="bg-bg-sec py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-acc-prim text-center text-base/7 font-semibold">
        built with purpose
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      >
        Full-stack development from idea to deployment
      </p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div
            class="bg-bg-prim absolute inset-px rounded-lg lg:rounded-l-4xl"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
          >
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p
                class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
              >
                Mobile friendly
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>
            <div
              class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm"
            >
              <div
                class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20"
              >
                <img
                  class="size-full object-cover object-top"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl"
          />
        </div>
        <div class="relative max-lg:row-start-1">
          <div
            class="bg-bg-prim absolute inset-px rounded-lg max-lg:rounded-t-4xl"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
              >
                Easy to Use
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center"
              >
                I focus on clarity and usability, turning complex systems into
                simple, intuitive experiences.
              </p>
            </div>
            <div
              class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"
            >
              <img
                class="w-full max-lg:max-w-xs"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"
          />
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="bg-bg-prim absolute inset-px rounded-lg" />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
              >
                Full stack
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center"
              >
                “I design, build, and deploy complete systems — connecting
                frontend, backend, and infrastructure into one seamless
                product.”
              </p>
            </div>
            <div
              class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2"
            >
              <!-- <img :src="uiMorph" alt="uiBoardDecor" /> -->
              <!-- <TheCard gsap-selector="full-stacked">
                <template #graphic>
                  <TheFullstack :class="responsiveClasses" />
                </template>
              </TheCard> -->
              <img
                class="h-[min(152px,40cqw)] object-cover"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15"
          />
        </div>
        <div class="relative lg:row-span-2">
          <div
            class="bg-bg-prim absolute inset-px rounded-lg max-lg:rounded-b-4xl lg:rounded-r-4xl"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
          >
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p
                class="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center"
              >
                Full stack
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center"
              >
                “I design, build, and deploy complete systems — connecting
                frontend, backend, and infrastructure into one seamless
                product.”
              </p>
            </div>
            <FullstackMench></FullstackMench>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
