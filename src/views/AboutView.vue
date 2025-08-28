<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheDialog from '@/components/layout/TheDialog.vue'
// SVG Imports
import svgVue from '@/assets/svgs/brandIcons/Vue.js.svg'
gsap.registerPlugin(Draggable, InertiaPlugin)

const box = useTemplateRef('box')
const svgVueRef = useTemplateRef('svgVueRef')
// const skillIcons = ref({

// })

onMounted(() => {
  gsap.fromTo(
    box.value,
    { x: -200, y: 0 },
    { x: 200, y: 300, rotation: 360, duration: 10, ease: 'elastic' },
  )
  Draggable.create(box.value, {
    type: 'x,y',
    inertia: true,
    bounds: document.getElementById('boundary'),
  })
  Draggable.create(svgVueRef.value, {
    type: 'x,y',
    inertia: true,
    bounds: document.getElementById('boundary'),
  })
})
</script>
<template>
  <TheContainer>
    <div class="flex h-full w-full gap-6 p-8">
      <TheDialog
        open-dialog-button-title="quick view"
        openButtonVariant="tertiary"
        open-button-classes="hover:text-green-300 border rounded"
        close-button-variant="tertiary"
        close-button-classes="p-0! -ml-2"
      >
        <template #diagTitle><h1>Skills Description</h1></template>
        <template #diagDesc>
          <p class="text-fg-sec">
            Here are my skills and my evaluation of them.
          </p>
        </template>
        <template #diagContent>
          <ol class="list list-inside list-disc">
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ol>
        </template>
      </TheDialog>
    </div>

    <div id="boundary" class="h-[600px] max-w-full">
      <img :src="svgVue" alt="svg-vue" ref="svgVueRef" class="size-24" />
      <div
        ref="box"
        class="size-24 bg-gradient-to-br from-lime-400 to-green-300 p-2"
      ></div>
    </div>
  </TheContainer>
</template>

<style></style>
