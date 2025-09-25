<script setup>
// import TheButton from './TheButton.vue'
import TheSystem from '../svg/projects/TheSystem.vue'
</script>

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
        my universe of projects
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        Each Planet a creation I've built and love
      </p>
      <TheSystem class="size-96"></TheSystem>
    </div>
    <!-- the card    -->
    <!-- <div>
      <div
        class="bg-bg-sec border-brdr inset-ring-bg-sec/50 hover:border-acc-prim/50 mx-auto flex max-w-sm rounded-lg border px-6 py-4 inset-ring-4"
      >
        <div>
          <div class="text-acc-prim text-3xl font-bold">
            Invoicer
            <hr class="bg-acc-prim mt-1.5 h-px border-0" />
          </div>
          <p class="text-fg-sec mt-4">
            A comercially deployed custom invoicing program. Reducing time spent
            invoicing, streamlining business process. Simple and highly tailored
            to the customer needs.
          </p>
          <div class="mt-6 text-lg">Tech Stack</div>
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
    </div> -->
    <!-- The portal -->
  </div>
</template>
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
