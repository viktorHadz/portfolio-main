<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheDialog from '@/components/layout/TheDialog.vue'
// SVG Imports
import svgVue from '@/assets/svgs/brandIcons/Vue.js.svg'
import TheButton from '@/components/layout/TheButton.vue'
import { useMouse, useRafFn } from '@vueuse/core'
gsap.registerPlugin(Draggable, InertiaPlugin)

const { x: mouseX, y: mouseY } = useMouse()

const box = useTemplateRef('box')
const svgVueRef = useTemplateRef('svgVueRef')

let boxX, boxY
let stop

onMounted(() => {
  gsap.set('.follow-box', { xPercent: -50, yPercent: -50 })
  boxX = gsap.quickTo('.follow-box', 'x', { duration: 0.8, ease: 'power3' })
  boxY = gsap.quickTo('.follow-box', 'y', { duration: 0.8, ease: 'power3' })
  const { pause } = useRafFn(() => {
    boxX(mouseX.value)
    boxY(mouseY.value)
  })
  stop = pause
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
onBeforeUnmount(() => {
  stop?.()
})
</script>
<template>
  <div class="border-brdr container flex place-content-center place-self-center border">
    <div class="flex-flex-col">
      <div class="flex gap-2">
        <div
          class="border-brdr text-fg-prim bg-bg-prim flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
        <div
          class="border-brdr text-fg-sec bg-bg-sec flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
        <div
          class="border-brdr text-fg-ter bg-bg-ter flex size-22 items-center justify-center border-4 text-center text-2xl"
        >
          Hello
        </div>
      </div>
      <div class="mt-2 flex gap-2">
        <div
          class="text-fg-prim bg-acc-prim flex size-22 items-center justify-center text-center text-2xl"
        ></div>
        <div
          class="text-fg-sec bg-acc-sec flex size-22 items-center justify-center text-center text-2xl"
        ></div>
        <div
          class="text-fg-ter bg-acc-ter flex size-22 items-center justify-center text-center text-2xl"
        ></div>
      </div>
      <div
        class="border-brdr from-acc-prim via-acc-sec to-acc-ter mt-2 flex h-22 w-70 gap-2 border bg-gradient-to-r"
      ></div>
      <div class="border-brdr grad-tr-prim-sec mt-2 flex h-22 w-70 gap-2 border text-black">
        prim to sec
      </div>
      <div class="border-brdr grad-tr-sec-ter mt-2 flex h-22 w-70 gap-2 border text-black">
        sec to ter
      </div>
      <div class="border-brdr grad-tr-prim-ter mt-2 flex h-22 w-70 gap-2 border text-black">
        prim to ter
      </div>
    </div>
    <div class="border-brdr container space-x-2 border">
      <TheButton variant="primary">Button</TheButton>
      <TheButton variant="secondary">Button</TheButton>
      <TheButton variant="tertiary">Button</TheButton>
    </div>
  </div>

  <TheContainer>
    <div class="flex h-full w-full gap-6 p-8">
      <TheDialog
        open-dialog-button-title="quick view"
        openButtonVariant="tertiary"
        open-button-classes="hover:text-acc-prim border rounded"
        close-button-variant="tertiary"
        close-button-classes="-ml-2 self-start"
      >
        <template #diagTitle><h1>Skills Description</h1></template>
        <template #diagDesc>
          <p>Here are my skills and my evaluation of them.</p>
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
      <div ref="box" class="size-24 bg-gradient-to-br from-lime-400 to-green-300 p-2"></div>
      <div class="grad-tr-prim-sec follow-box size-24 p-2"></div>
    </div>
  </TheContainer>
</template>

<style></style>
