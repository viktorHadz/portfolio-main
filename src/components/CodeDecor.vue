<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  /** Where to pin inside the parent box */
  anchor: {
    type: String,
    default: 'center', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  },
  /** Visual pattern of lines */
  variant: {
    type: String,
    default: 'stack', // 'stack' | 'fan' | 'stripe'
  },
  /** Overall opacity (0..1) */
  opacity: { type: Number, default: 0.5 },
  /** Scale multiplier */
  scale: { type: Number, default: 1 },
  /** Degrees of rotation */
  tilt: { type: Number, default: 0 }, // e.g. 2
  /** Animation speed in ms */
  speed: { type: Number, default: 700 },
})

const isLoaded = ref(false)
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 200)
})
onBeforeUnmount(() => {
  isLoaded.value = false
})

const anchorClasses = {
  'top-left': 'absolute top-0 left-0',
  'top-right': 'absolute top-0 right-0',
  'bottom-left': 'absolute bottom-0 left-0',
  'bottom-right': 'absolute bottom-0 right-0',
  center: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

const wrapperClass = computed(() => [
  anchorClasses[props.anchor] ?? anchorClasses.center,
  'select-none pointer-events-none will-change-transform -z-10',
  // A11y
  'transition-all motion-reduce:transition-none',
])

const wrapperStyle = computed(() => ({
  opacity: props.opacity,
  transform: `translate3d(0,0,0) scale(${props.scale})`,
  transitionDuration: `${props.speed}ms`,
}))

const maskUtilities =
  '[mask-image:radial-gradient(120%_120%_at_50%_50%,white_45%,transparent_90%)]'
</script>

<template>
  <!-- Prevents overflow and sits behind content -->
  <div
    :class="['inset-0', wrapperClass, maskUtilities]"
    :style="wrapperStyle"
    aria-hidden="true"
  >
    <div
      v-if="variant === 'stack'"
      class="flex w-[min(90vw,50rem)] max-w-full flex-col gap-2"
      :class="[
        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0',
        'transition-all duration-700 ease-out motion-reduce:duration-0',
      ]"
    >
      <div class="flex gap-2">
        <div
          class="from-yellow to-red h-2 w-[62%] rounded bg-gradient-to-r"
        ></div>
        <div class="bg-gray size-2 rounded-full"></div>
        <div class="bg-gray h-2 w-[18%] rounded"></div>
      </div>
      <div class="flex gap-2">
        <div
          class="from-acc-prim via-green to-acc-ter h-2 w-[30%] rounded bg-gradient-to-r"
        ></div>
        <div class="bg-gray h-2 w-[10%] rounded"></div>
        <div
          class="from-purple via-blue to-acc-prim h-2 w-[50%] rounded bg-gradient-to-r"
        ></div>
      </div>
      <div class="flex gap-2">
        <div
          class="from-blue to-acc-prim h-2 w-[80%] rounded bg-gradient-to-r"
        ></div>
        <div class="bg-gray h-2 w-[10%] rounded"></div>
      </div>
      <div class="flex gap-2">
        <div class="bg-gray h-2 w-[10%] rounded"></div>
        <div
          class="from-orange to-yellow h-2 w-[46%] rounded bg-gradient-to-r"
        ></div>
        <div
          class="from-acc-ter to-acc-prim h-2 w-[36%] rounded bg-gradient-to-r"
        ></div>
      </div>
    </div>
  </div>
</template>
