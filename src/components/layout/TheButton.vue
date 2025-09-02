<script setup>
defineProps({
  variant: {
    type: String,
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
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
    class="group bg-acc-prim hover:bg-acc-sec border-brdr relative overflow-hidden rounded border px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all duration-200 ease-out hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 dark:text-black"
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
    class="group border-fg-sec hover:border-acc-prim text-fg-sec hover:text-acc-prim relative rounded border bg-transparent px-8 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-200 ease-out hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
  >
    <span class="relative z-10">
      <slot></slot>
    </span>
  </button>
  <!-- tertiay -->
  <button
    v-else-if="variant === 'tertiary'"
    :disabled="disabled"
    class="text-fg-prim hover:text-acc-prim cursor-pointer p-2 capitalize drop-shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
  >
    <slot></slot>
  </button>
  <button v-else :disabled="disabled">
    <slot></slot>
  </button>
</template>
