<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import TheButton from './TheButton.vue'
</script>
<style scoped>
.divider-upwards {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-upwards svg {
  position: relative;
  display: block;
  width: calc(150% + 1.3px);
  height: 150px;
}

.divider-upwards .shape-fill {
  fill: var(--color-bg-sec);
}
</style>
<template>
  <div class="relative py-24">
    <div class="divider-upwards">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="py-24">
      <h2 class="text-acc-prim text-center text-sm font-semibold">
        a general overview
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Projects synopsys
      </p>
    </div>
    <div class="my-12 flex items-center justify-around">
      <ChevronLeftIcon
        class="text-acc-prim size-24 cursor-pointer transition duration-300 hover:scale-110 hover:animate-pulse active:scale-90"
      />
      <div class="rounded-full border p-4">big project icons</div>
      <ChevronRightIcon
        class="text-acc-prim size-24 cursor-pointer transition duration-300 hover:scale-110 hover:animate-pulse active:scale-90"
      />
    </div>
    <div>
      <div
        class="bg-bg-sec border-brdr inset-ring-bg-sec/50 hover:border-acc-prim/50 mx-auto flex max-w-sm rounded-lg border px-6 py-4 inset-ring-4"
      >
        <div>
          <div class="text-acc-prim text-3xl font-bold">
            Invoicer
            <hr class="bg-acc-prim mt-1.5 h-px border-0" />
            <!-- <hr
              class="from-acc-sec to-acc-prim mt-2 h-px border-0 bg-gradient-to-r"
            /> -->
          </div>
          <p class="text-fg-sec mt-4">
            A comercially deployed custom invoicing program. Reducing time spent
            invoicing, streamlining business process. Simple and highly tailored
            to the customer needs.
          </p>
          <div class="mt-6 text-lg">Tech Stack</div>
          <!-- ICONS -->
          <div class="mt-4 flex gap-2">
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
            <div
              class="bg-bg-sec inset-shadow-bg-prim relative size-8 rounded-full border-transparent inset-shadow-sm"
            >
              <div class="absolute"></div>
            </div>
          </div>
          <TheButton variant="oxiliary" class="mt-6"> See more </TheButton>
        </div>
      </div>
    </div>
  </div>
</template>
