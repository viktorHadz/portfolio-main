<!-- Used to center all of my site's content properly on all devices -->
<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default', // 'default' | 'wide'
  },
  mobilePadding: {
    type: Boolean,
    default: false,
  },
  marginTop: {
    type: Boolean,
    default: false,
  },
  mobileMarginX: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <section
    :class="[
      'w-full', // saves time if parent is flex - could just override the tailwind classes tho
      props.mobileMarginX === true ? 'mx-auto' : 'mx-0 sm:mx-auto',
      props.variant === 'wide'
        ? 'max-w-[min(90vw,1600px)]'
        : 'max-w-[min(85vw,1440px)]',
      props.marginTop === true ? 'mt-12 sm:mt-14 lg:mt-16 xl:mt-20' : '',
      props.mobilePadding === true ? 'px-4' : '',
      'place-self-center sm:px-6 lg:px-8 xl:px-10 2xl:px-12',
    ]"
  >
    <slot />
  </section>
</template>
