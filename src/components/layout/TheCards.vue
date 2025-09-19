<script setup>
import FullstackMench from '../svg/FullstackMench.vue'
import EasyToUseMench from '../svg/EasyToUseMench.vue'
import SecureMench from '../svg/SecureMench.vue'
import EfficientMench from '../svg/EfficientMench.vue'
</script>

<template>
  <div class="bg-bg-sec py-16 sm:py-24 lg:py-32">
    <div class="container mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-acc-prim text-center text-sm font-semibold">
        software built with purpose
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        From idea to deployment
      </p>

      <!-- Grid -->
      <div class="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
        <!-- Fullstack -->
        <div
          class="bg-bg-prim flex flex-col items-center justify-between rounded-2xl p-6 sm:col-span-2 sm:flex-row sm:items-start sm:p-8 lg:col-span-3 lg:flex-col"
        >
          <div class="flex-1">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Full stack
            </h3>
            <p class="text-acc-prim mt-2 text-sm sm:text-lg">
              Build, design, deploy and maintain complete systems, not
              fragments.
            </p>
          </div>
          <div
            class="mt-6 flex flex-1 justify-center sm:mt-0 sm:justify-end lg:mt-6"
          >
            <FullstackMench class="h-auto w-40 max-w-full sm:w-56 lg:w-64" />
          </div>
        </div>

        <!-- Easy to use -->
        <div
          class="bg-bg-prim flex flex-col items-center justify-between rounded-2xl p-6 sm:items-start sm:p-8 lg:col-span-2 lg:flex-col"
        >
          <div class="flex-1 text-center sm:text-left">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Easy to Use
            </h3>
            <p class="text-acc-prim mt-2 text-sm sm:text-lg">
              Design that puts the user first. Making the complicated simple.
            </p>
          </div>
          <div
            class="mt-6 flex flex-1 justify-center sm:mt-0 sm:justify-end lg:mt-6"
          >
            <EasyToUseMench class="w-48 max-w-full sm:w-56 lg:w-64" />
          </div>
        </div>

        <!-- Efficient -->
        <div
          class="bg-bg-prim flex flex-col items-center justify-between rounded-2xl p-6 sm:items-start sm:p-8 lg:col-span-2 lg:flex-col"
        >
          <div class="flex-1">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Efficient
            </h3>
            <p class="text-acc-prim mt-2 text-sm sm:text-lg">
              Saving time, reducing costs, and delivering value.
            </p>
          </div>
          <div
            class="mt-6 flex flex-1 justify-center sm:mt-0 sm:justify-end lg:mt-6"
          >
            <EfficientMench class="h-auto w-40 max-w-full sm:w-56 lg:w-64" />
          </div>
        </div>

        <!-- Secure -->
        <div
          class="bg-bg-prim flex flex-col items-center justify-between rounded-2xl p-6 sm:col-span-2 sm:flex-row sm:items-start sm:p-8 lg:col-span-3 lg:flex-col"
        >
          <div class="flex-1">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">Secure</h3>
            <p class="text-acc-prim mt-2 text-sm sm:text-lg">
              Security as a default. Resilient code and safe data to build
              robust software.
            </p>
          </div>
          <div
            class="mt-6 flex flex-1 justify-center sm:mt-0 sm:justify-around lg:mt-6"
          >
            <SecureMench class="h-auto w-40 max-w-full sm:w-56 lg:w-64" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
