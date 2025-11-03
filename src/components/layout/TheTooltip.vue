<script setup>
defineProps({
  text: String,
})
</script>
<template>
  <div class="absolute left-1/2 isolate -translate-x-1/2">
    <div
      class="bg-bg-prim border-bg-ter relative rounded border px-2 py-1 text-xs"
    >
      <p class="text-acc-prim text-center">
        {{ text }}
      </p>
      <div
        class="bg-bg-prim absolute right-1/2 left-1/2 size-2 -translate-x-1 rotate-45"
      ></div>
    </div>
    <div
      class="bg-bg-prim border-bg-ter relative -z-10 mx-auto size-4 -translate-y-3 rotate-45 border"
    ></div>
  </div>
</template>
