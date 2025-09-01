<script setup>
const props = defineProps({
  tagType: {
    type: String,
    default: 'open', // 'open' | 'close'
  },
})
</script>
<template>
  <div v-if="props.tagType === 'open'">
    <svg viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3.75L1 9L6 14.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div v-else-if="props.tagType === 'close'">
    <svg viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3.75L14 9L9 14.25M6 0.75L1.5 17" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>
<style scoped></style>
