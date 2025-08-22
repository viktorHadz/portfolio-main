<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="props.variant === 'primary'" class="group relative">
    <div
      class="absolute -inset-1 animate-none rounded-xl bg-gradient-to-br from-green-400 via-sky-400 to-green-500 opacity-0 blur-sm transition-all duration-300 group-hover:animate-pulse group-hover:opacity-70"
    ></div>
    <div
      class="absolute -inset-0.5 rounded-xl bg-gradient-to-tl from-green-400 via-sky-400 to-green-500 opacity-0 transition-all duration-300 group-hover:opacity-90"
    ></div>
    <button
      :class="[
        'relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br via-zinc-950 to-black p-2 text-lg font-bold text-white capitalize transition-all duration-300 group-hover:shadow-2xl dark:from-zinc-900',
        props.disabled
          ? 'cursor-not-allowed opacity-50'
          : 'group-hover:-translate-y-0.5 group-hover:scale-105',
      ]"
      :disabled="props.disabled"
    >
      <div
        class="mask-br-to-40% pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-gray-200/50 via-transparent to-transparent mask-t-from-0% mask-linear-135 opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-gray-500/50"
      ></div>
      <span class="relative z-10">
        <slot></slot>
      </span>
    </button>
  </div>

  <div v-else-if="props.variant === 'secondary'" class="group relative">
    <div
      class="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-40 dark:from-gray-600 dark:via-gray-500 dark:to-gray-700"
    ></div>
    <button
      :class="[
        'relative cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 via-white to-gray-200 p-2 text-lg font-semibold text-gray-900 capitalize transition-all duration-300 hover:border-gray-400 dark:border-gray-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:text-gray-100 dark:hover:border-gray-600',
        props.disabled
          ? 'cursor-not-allowed opacity-50'
          : 'group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg',
      ]"
      :disabled="props.disabled"
    >
      <!-- Reverse light mask effect -->
      <div
        class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tl from-white/60 via-transparent to-transparent mask-radial-from-0% mask-radial-to-50% mask-radial-at-[80%_80%] opacity-100 transition-opacity duration-500 group-hover:opacity-0 dark:from-gray-300/20 dark:via-transparent dark:to-transparent"
      ></div>
      <span class="relative z-10">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<style scoped></style>
