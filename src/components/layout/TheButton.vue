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
})
</script>

<template>
  <div class="inline-block">
    <!-- primary solid -->
    <button
      v-if="variant === 'primary'"
      :disabled="disabled"
      class="group bg-fg-sec hover:bg-fg-prim text-bg-prim relative overflow-hidden rounded px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-200 ease-out hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
    >
      <!-- hover effect -->
      <div
        class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"
      ></div>
      <span class="relative z-10">
        <slot></slot>
      </span>
    </button>

    <!-- secondary outlined -->
    <button
      v-else-if="variant === 'secondary'"
      :disabled="disabled"
      class="group border-fg-sec hover:border-fg-prim text-fg-sec hover:text-fg-prim relative rounded border bg-transparent px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-200 ease-out hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span class="relative z-10">
        <slot></slot>
      </span>
    </button>
    <!-- tertiay text - pulse on hover -->
    <button
      v-else-if="variant === 'tertiary'"
      :disabled="disabled"
      class="text-fg-prim cursor-pointer p-2 capitalize drop-shadow-lg hover:animate-pulse hover:text-green-300"
    >
      <slot></slot>
    </button>
    <button v-else :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>
