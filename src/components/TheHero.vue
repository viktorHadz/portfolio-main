<script setup>
import TheContainer from '@/components/layout/TheContainer.vue'
import SvgMe from '@/components/svg/SvgMe.vue'
import TagSVG from './svg/TagSVG.vue'
import TheButton from './layout/TheButton.vue'
</script>

<template>
  <TheContainer
    width="full"
    pad="sm"
    :center-mobile="false"
    :mobile-padding="false"
    :mobile-margin-x="false"
    class="mt-8 grid grid-cols-1 place-items-center gap-12 px-4 sm:grid-cols-2 lg:gap-16"
  >
    <!-- Text column -->
    <div class="flex w-full flex-col gap-8 text-center sm:text-left">
      <!-- Name with enhanced glow effect -->
      <div
        class="relative flex flex-col text-5xl font-bold lg:text-6xl xl:text-7xl"
      >
        <!-- Background glow for name -->
        <div
          class="absolute -inset-4 animate-pulse bg-gradient-to-r from-green-400/20 via-sky-400/20 to-green-500/20 opacity-0 blur-3xl duration-4000"
        ></div>

        <span
          class="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-gray-100 dark:via-white dark:to-gray-100"
        >
          Viktor
        </span>

        <!-- Enhanced accent bar with glow -->
        <div class="group relative my-2 flex justify-center sm:justify-start">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-green-400 via-sky-400 to-green-500 opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-80"
          ></div>
          <div
            class="relative h-3 w-32 rounded-full bg-gradient-to-r from-green-400 via-sky-400 to-green-500 mask-add"
          ></div>
        </div>

        <span
          class="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text tracking-tighter text-transparent dark:from-gray-100 dark:via-white dark:to-gray-100"
        >
          Hadzhiyski
        </span>
      </div>

      <!-- Enhanced role description -->
      <div class="hidden sm:block">
        <div class="group relative inline-block">
          <!-- Glow effect for tag container -->
          <div
            class="absolute -inset-2 rounded-xl bg-gradient-to-r from-green-400/10 via-sky-400/10 to-green-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          ></div>

          <div
            class="relative flex items-center justify-center sm:justify-start"
          >
            <!-- Enhanced tag styling -->
            <div class="relative mr-4">
              <div
                class="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 to-sky-400/20 blur-md"
              ></div>
              <TagSVG
                class="relative size-10 stroke-green-500 stroke-[1.5] transition-colors duration-300 group-hover:stroke-sky-400 dark:stroke-green-400"
              />
            </div>

            <span
              class="bg-gradient-to-r from-green-600 via-sky-600 to-green-600 bg-clip-text font-mono text-2xl text-transparent lg:text-3xl dark:from-green-400 dark:via-sky-400 dark:to-green-400"
            >
              Developer and<br />Designer from London
            </span>

            <div class="relative ml-4">
              <div
                class="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/20 to-green-400/20 blur-md"
              ></div>
              <TagSVG
                tag-type="close"
                class="relative size-10 stroke-green-500 stroke-[1.5] transition-colors duration-300 group-hover:stroke-sky-400 dark:stroke-green-400"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile role description -->
      <div class="sm:hidden">
        <span
          class="bg-gradient-to-r from-green-600 via-sky-600 to-green-600 bg-clip-text font-mono text-xl text-transparent dark:from-green-400 dark:via-sky-400 dark:to-green-400"
        >
          Developer & Designer from London
        </span>
      </div>

      <!-- Enhanced button group -->
      <div
        class="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
      >
        <TheButton variant="primary" class="group relative overflow-hidden">
          <span class="relative z-10 flex items-center gap-2">
            <span>My Work</span>
            <!-- Subtle arrow that appears on hover -->
            <svg
              class="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </TheButton>

        <TheButton variant="secondary" class="group relative overflow-hidden">
          <span class="relative z-10 flex items-center gap-2">
            <span>Get in Touch</span>
            <!-- Subtle icon that appears on hover -->
            <svg
              class="h-4 w-4 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
        </TheButton>
      </div>

      <!-- Optional: Floating elements for extra flair -->
      <div
        class="absolute -top-8 left-1/4 h-2 w-2 animate-pulse rounded-full bg-green-400 opacity-20 duration-3000"
      ></div>
      <div
        class="absolute top-1/3 -right-4 h-1 w-1 animate-pulse rounded-full bg-sky-400 opacity-30 duration-2000"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 opacity-25 duration-4000"
      ></div>
    </div>

    <!-- Enhanced SVG column -->
    <div class="group relative overflow-clip">
      <!-- Subtle glow behind avatar -->
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/5 via-sky-400/5 to-green-500/5 opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-100"
      ></div>

      <!-- Optional: Rotating border glow -->
      <div
        class="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400/10 via-sky-400/10 to-green-500/10 opacity-0 transition-opacity duration-500 group-hover:animate-spin group-hover:opacity-50"
        style="animation-duration: 8s"
      ></div>

      <div
        class="relative max-w-80 transition-transform duration-500 group-hover:scale-105"
      >
        <SvgMe class="size-72 drop-shadow-2xl sm:size-80 md:size-96" />
      </div>
    </div>
  </TheContainer>
</template>

<style scoped></style>
