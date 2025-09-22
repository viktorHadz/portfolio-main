<script setup>
import FullstackMench from '../svg/FullstackMench.vue'
import EasyToUseMench from '../svg/EasyToUseMench.vue'
import SecureMench from '../svg/SecureMench.vue'
import EfficientMench from '../svg/EfficientMench.vue'
</script>
<style scoped>
.divider-downwards {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-downwards svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 50px;
}

.divider-downwards .shape-fill {
  fill: var(--color-bg-prim);
}
</style>
<template>
  <section class="bg-bg-sec relative">
    <div class="divider-downwards">
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
    <div
      class="container mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32"
    >
      <h2 class="text-acc-prim text-center text-sm font-semibold">
        software built with purpose
      </h2>
      <p
        class="text-fg-prim mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        From idea to deployment
      </p>

      <div class="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
        <!-- Fullstack -->
        <div
          class="bg-bg-prim border-brdr hover:border-acc-prim/50 relative flex flex-col items-center rounded-l-2xl rounded-r-2xl border-2 p-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:col-span-3 lg:rounded-r-md"
        >
          <div
            class="flex flex-col text-center sm:flex-1 sm:-translate-y-6 sm:text-left"
          >
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Full stack
            </h3>
            <p class="text-acc-prim mt-2 text-sm leading-relaxed font-bold">
              Build, design, deploy and maintain <br />
              complete systems, not fragments.
            </p>
          </div>
          <div class="flex justify-center sm:mt-0 sm:flex-1">
            <FullstackMench class="h-auto w-44 max-w-full sm:w-52 lg:w-64" />
          </div>
        </div>

        <!-- Easy to use -->
        <div
          id="easyUseMench"
          class="bg-bg-prim border-brdr hover:border-acc-prim/50 flex flex-col items-center justify-between rounded-2xl border-2 p-6 sm:items-start sm:p-8 lg:col-span-2 lg:flex-col lg:rounded-l-md"
        >
          <div class="flex-1 place-self-center text-center">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Easy to Use
            </h3>
            <p class="text-acc-prim mt-2 text-sm leading-relaxed font-bold">
              Design that puts the user first.<br />
              Making the complicated simple.
            </p>
          </div>
          <div class="flex w-full flex-1 justify-center sm:mt-0">
            <EasyToUseMench class="h-auto w-44 max-w-full sm:w-52 lg:w-64" />
          </div>
        </div>

        <!-- Efficient -->
        <div
          class="bg-bg-prim border-brdr hover:border-acc-prim/50 flex flex-col items-center justify-between rounded-2xl border-2 p-6 sm:items-start sm:p-8 lg:col-span-2 lg:flex-col lg:rounded-r-md"
        >
          <div class="flex-1 place-self-center text-center">
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">
              Efficient
            </h3>
            <p class="text-acc-prim mt-2 text-sm leading-relaxed font-bold">
              Saving time, reducing costs, <br />
              and delivering value.
            </p>
          </div>
          <div class="mt-6 flex w-full flex-1 justify-center">
            <EfficientMench class="h-auto w-44 max-w-full sm:w-52 lg:w-64" />
          </div>
        </div>

        <!-- Secure -->
        <div
          class="bg-bg-prim border-brdr hover:border-acc-prim/50 relative flex flex-col items-center rounded-l-2xl rounded-r-2xl border-2 p-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:col-span-3 lg:rounded-l-md"
        >
          <div
            class="flex flex-col text-center sm:flex-1 sm:-translate-y-6 sm:text-left"
          >
            <h3 class="text-fg-prim text-2xl font-bold sm:text-3xl">Secure</h3>
            <p class="text-acc-prim mt-2 text-sm leading-relaxed font-bold">
              Security as a default. Resilient code <br />
              and safe data to build robust software.
            </p>
          </div>
          <div
            class="mt-6 flex flex-1 justify-center sm:mt-0 sm:justify-around lg:mt-6"
          >
            <SecureMench class="h-auto w-44 max-w-full sm:w-52 lg:w-64" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
