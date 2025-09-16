<script setup>
defineProps({
  variant: {
    type: String,
    validator: (value) =>
      ['primary', 'secondary', 'tertiary', 'neu', 'neu-sec'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: String,
  },
})
</script>

<template>
  <!-- primary solid -->
  <button
    v-if="variant === 'primary'"
    :disabled="disabled"
    class="group bg-acc-prim hover:bg-acc-sec border-brdr relative overflow-hidden rounded-xl border-2 px-4 py-3 text-sm font-bold tracking-wide text-white uppercase shadow-[0_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_2px_0_rgba(0,0,0,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
  >
    <!-- hover effect -->
    <div
      class="via-bg-ter/20 pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"
    ></div>

    <span class="relative z-10">
      <slot></slot>
    </span>
  </button>

  <!-- secondary outlined -->
  <button
    v-else-if="variant === 'secondary'"
    :disabled="disabled"
    class="group border-brdr hover:border-acc-ter text-fg-prim hover:text-acc-ter relative rounded-xl border-2 bg-transparent px-4 py-3 text-sm font-bold tracking-wide uppercase shadow-[0_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_2px_0_rgba(0,0,0,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
  >
    <span class="relative z-10">
      <slot></slot>
    </span>
  </button>

  <!-- tertiary -->
  <button
    v-else-if="variant === 'tertiary'"
    :disabled="disabled"
    class="text-fg-prim hover:text-acc-prim cursor-pointer rounded-lg p-2 capitalize drop-shadow-lg transition-all duration-150 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <slot></slot>
  </button>
  <button
    v-else-if="variant === 'neu'"
    :disabled="disabled"
    class="bg-bg-sec border-brdr-sec shadow-fg-ter/50 text-fg-prim rounded-full border px-6 py-3 font-bold shadow-sm transition-shadow hover:shadow-md active:scale-90 dark:hover:text-white"
  >
    <slot></slot>
  </button>
  <button
    v-else-if="variant === 'neu-sec'"
    :disabled="disabled"
    class="bg-bg-sec border-brdr-sec shadow-fg-ter/50 text-fg-prim rounded-full border px-6 py-3 font-bold shadow-sm transition-shadow hover:shadow-md active:scale-90 dark:hover:text-white"
  >
    <slot></slot>
  </button>

  <button v-else :disabled="disabled">
    <slot></slot>
  </button>
</template>
