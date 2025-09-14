<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const hov = ref(false)
let ctx, dotTl, gridTl
let card

const moveDot = (start, end) => ({
  motionPath: {
    path: '#con-front',
    align: '#con-front',
    alignOrigin: [0.5, 0.5],
    start,
    end,
  },
})

function createGridTimeline() {
  const zeros = document.querySelectorAll('.grid-zero')
  const ones = document.querySelectorAll('.grid-one')

  return gsap
    .timeline({ paused: true, repeat: -1 })
    .to(zeros, { fill: '#ff8c00', duration: 0.5, stagger: 0.05 })
    .to(zeros, { fill: '', duration: 0.5, stagger: 0.05 })
    .to(ones, { fill: '#ff8c00', duration: 0.5, stagger: 0.05 })
    .to(ones, { fill: '', duration: 0.5, stagger: 0.05 })
}
function createClientDotTimeline() {
  return (
    gsap
      .timeline({
        paused: true,
        repeat: -1,
        defaults: { duration: 2, ease: 'sine.inOut' },
      })
      // Forward
      .to('#fwd-color-change-1', { fill: '#ff8c00', duration: 0.2 })
      .to('#dot-front', moveDot(0, 0.5))
      .to('#mid-color-change-2', { fill: '#ff8c00', duration: 0.2 })
      .to('#dot-front', moveDot(0.5, 1))
      .to('.back-color-change-3', { fill: '#ff8c00', duration: 0.2 })
      // Reverse
      .to('#dot-front', moveDot(1, 0.5))
      .set('#mid-color-change-2', { fill: '#ffeb58' })
      .to('#dot-front', moveDot(0.5, 0))
      .set('#fwd-color-change-1', { fill: '#ffeb58' })
  )
}

onMounted(() => {
  ctx = gsap.context(() => {
    dotTl = createClientDotTimeline()
    gridTl = createGridTimeline()

    card = document.querySelector('.full-stacked')
    if (!card) return

    card.addEventListener('mouseenter', () => {
      dotTl.play()
      gridTl.play()
    })
    card.addEventListener('mouseleave', () => {
      dotTl.pause(0)
      gridTl.pause(0)
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div @mouseenter="hov = true" @mouseleave="hov = false">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="accent-acc-prim"
      viewBox="0 0 500 501"
    >
      <g id="fullstack" clip-path="url(#clip0_781_3434)">
        <g id="all-devs-and-connector">
          <g id="connectors">
            <path
              id="con-front"
              d="M302.061 459.5L256.624 489.091L29.5703 342.55L78.11 314.516"
              class="stroke-white stroke-4"
            />

            <path
              id="dot-front"
              d="M308.411 463.911C308.411 467.007 304.468 469.517 299.604 469.517C294.74 469.517 290.797 467.007 290.797 463.911C290.797 460.815 294.74 458.305 299.604 458.305C304.468 458.305 308.411 460.815 308.411 463.911Z"
              class="fill-acc-sec"
            />
            <path
              id="dot-back"
              d="M308.411 463.911C308.411 467.007 304.468 469.517 299.604 469.517C294.74 469.517 290.797 467.007 290.797 463.911C290.797 460.815 294.74 458.305 299.604 458.305C304.468 458.305 308.411 460.815 308.411 463.911Z"
              class="fill-acc-ter"
            />
          </g>

          <g id="forward-devc">
            <path
              id="Vector"
              fill="#AFD84B"
              d="M266 420v25c0 3 2 5 5 7l78 45v-26l-78-45c-3-2-5-4-5-6Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_2"
              fill="#AFD84B"
              d="M370 471v26l120-69c2-2 4-4 4-6v-26c0 2-2 5-5 6l-119 69Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_3"
              fill="#000"
              d="M349 498h-1l-78-46c-3-1-5-4-5-7v-25l1-1 1 1c0 2 2 4 4 5l78 45 1 2h-2l-78-45-3-3v21c0 2 2 4 4 6l78 45a1 1 0 0 1 0 2Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_4"
              fill="#000"
              d="M370 472h-1l1-2 119-68c3-2 4-4 4-6a1 1 0 0 1 2 0v19l-1 1-1-1v-14l-3 2-119 69h-1Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_5"
              fill="#000"
              d="M370 498a1 1 0 0 1 0-2l89-51a1 1 0 0 1 1 1l-89 52h-1Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_6"
              fill="#fff"
              d="M271 413c-6 4-6 9 0 13l78 45c6 4 15 4 21 0l119-69c6-3 6-9 1-12l-79-45c-5-4-15-4-21 0l-119 68Z"
              style="fill: #fff; fill-opacity: 1"
            />
            <path
              id="Vector_7"
              fill="#000"
              d="M359 475c-4 0-8-1-11-3l-78-45c-3-2-5-5-5-7 0-3 2-6 5-7l120-69c6-4 16-4 22 0l78 45c3 2 5 4 5 7s-2 5-5 7l-119 69c-3 2-8 3-12 3Zm-88-61c-2 2-4 4-4 6s2 4 4 5l78 45c6 4 15 4 21 0l119-69c3-1 4-3 4-5s-1-4-4-5l-78-46c-6-3-15-3-21 0l-119 69Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_8"
              fill="#AFD84B"
              d="M349 471v26c6 3 15 3 21 0v-26c-6 4-15 4-21 0Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_9"
              fill="#000"
              d="M359 500c-4 0-8 0-11-2a1 1 0 1 1 1-2c6 3 15 3 20 0v-14l1-1 1 1v16c-3 2-7 2-12 2Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_10"
              fill="#000"
              d="m349 483-1-1v-11a1 1 0 0 1 1-1c6 4 15 4 21 0l1 1v1c-6 3-15 4-21 1v9l-1 1Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_11"
              fill="#AFD84B"
              d="m364 394 101-59v68l-101 58v-67Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_12"
              fill="#000"
              d="M364 462h-1v-68h1l101-59a1 1 0 0 1 1 0v68l-102 59Zm1-67v65l99-58 1-65-100 58Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="fwd-color-change-1"
              class="fill-[#ffeb58]"
              d="m382 405 65-38v25l-65 38v-25Z"
            />
            <path
              id="Vector_13"
              fill="#fff"
              d="m334 324 101-59 30 70-101 59-30-70Z"
              style="fill: #fff; fill-opacity: 1"
            />
            <path
              id="Vector_14"
              fill="#000"
              d="M364 395h-1l-30-71 1-1 101-59h1l30 71v1l-102 59Zm-29-71 29 69 100-58-29-69-100 58Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_15"
              fill="#000"
              d="M370 382h-2c-1 0-2-1-2-3l-20-46c-2-4 0-8 3-10l76-44h1v2l-76 43c-2 2-3 5-2 8l19 47a3 3 0 0 0 4 1l59-34h1v1l-59 35h-2Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_16"
              fill="#AFD84B"
              d="m388 247 8-5 39 23-101 59-39-23 58-34"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_17"
              fill="#000"
              d="M334 325v-1l-39-22a1 1 0 0 1 0-2l58-34 1 1v1l-57 33 37 22 100-58-38-22-7 5-1-1v-1l8-5h1l39 23a1 1 0 0 1 0 2l-102 58v1Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_18"
              fill="#AFD84B"
              d="m334 324 30 70v67l-69-39V301l39 23Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_19"
              fill="#000"
              d="M364 462h-1l-69-40V301a1 1 0 0 1 1-1l39 23h1l30 71v67a1 1 0 0 1-1 1Zm-68-41 67 39v-65l-30-71-37-21v118Z"
              style="fill: #000; fill-opacity: 1"
            />
            <g id="fwd-dev-cloud-and-bg">
              <path
                id="bg"
                fill="#FFEB58"
                d="m350 324 78-46c2-1 4 0 5 2l20 47c1 3 0 7-3 8l-78 46c-2 1-5 0-5-2l-20-46c-2-4 0-8 3-9Z"
                style="
                  fill: #ffeb58;
                  fill: color(display-p3 1 0.9216 0.3451);
                  fill-opacity: 1;
                "
              />
              <path
                id="cloud"
                fill="#D88A4B"
                d="M384 313c5-2 10-1 13 3l3-2c4-2 9-1 12 4 5-3 11 0 14 7 2 7-1 15-6 18l-32 19c-6 3-12 0-14-7s0-14 5-18l-1-3c-3-8 0-17 6-21Z"
                style="
                  fill: #d88a4b;
                  fill: color(display-p3 0.8471 0.5429 0.2941);
                  fill-opacity: 1;
                "
              />
            </g>
          </g>
          <g id="back-device">
            <g id="back-dev-floor">
              <path
                id="Vector_20"
                fill="#AFD84B"
                d="m316 219-1 40c0 22-14 43-42 60-57 33-150 33-207 0-29-17-43-39-43-61v-40c0 22 15 44 44 60 57 33 149 33 206 0 28-16 43-37 43-59Z"
                style="
                  fill: #afd84b;
                  fill: color(display-p3 0.6863 0.8471 0.2941);
                  fill-opacity: 1;
                "
              />
              <path
                id="Vector_21"
                fill="#000"
                d="M66 320v-1c-28-16-44-38-44-61v-40l1-1 1 1c0 23 15 44 43 60 57 32 149 32 206 0 27-16 41-37 42-58v-1l1-1 1 1v1l-1 39c0 23-15 44-43 60a1 1 0 1 1-1-1c27-16 42-37 42-59l1-26c-5 18-20 34-41 46-57 33-151 33-208 0-22-13-37-29-42-47v26c0 23 15 44 43 60a1 1 0 0 1-1 2Z"
                style="fill: #000; fill-opacity: 1"
              />
              <path
                id="Vector_22"
                fill="#fff"
                d="M316 219c0-47-65-85-146-85S24 171 23 218c0 47 66 85 146 85 81 0 147-37 147-84Z"
                style="fill: #fff; fill-opacity: 1"
              />
              <path
                id="Vector_23"
                fill="#000"
                d="M170 304c-38 0-75-8-104-25-28-16-44-38-44-61s16-44 43-60c57-33 151-33 208 0 28 16 44 38 44 61s-16 44-43 60c-29 17-66 25-104 25Zm-1-169c-37 0-74 8-103 25-27 15-42 36-42 58 0 23 16 44 43 60 57 32 149 32 206 0 27-16 42-37 42-59 0-23-15-44-43-59-28-17-66-25-103-25Z"
                style="fill: #000; fill-opacity: 1"
              />
            </g>
            <g id="cloud_2">
              <path
                class="back-color-change-3 fill-yellow-300"
                d="M271 222v-22c0 7-5 14-15 20l-12 5v22l13-5c9-6 14-13 14-20Z"
              />
              <path
                id="Vector_25"
                fill="#000"
                d="M244 248a1 1 0 0 1-1-1v-23l13-5c9-5 14-12 14-19l1-1 1 1v22c0 8-6 15-15 21a57 57 0 0 1-13 5Zm1-22v20l11-5c9-5 14-12 14-19v-14c-3 5-7 9-13 13l-12 5Z"
                style="fill: #000; fill-opacity: 1"
              />
              <path
                class="back-color-change-3 fill-yellow-300"
                d="m68 178 1 22c0 6 3 12 11 16l104 61c15 9 40 9 56 0 8-5 12-11 11-16v-22c0 6-3 11-11 16-16 9-41 9-56 0L80 194c-8-4-11-10-12-16Z"
              />
              <path
                id="Vector_27"
                fill="#000"
                d="M212 284c-10 0-21-2-28-6l-25-14a1 1 0 1 1 1-2l25 14c15 9 39 9 54 0 8-4 12-10 11-15v-15c-2 4-5 7-10 10-15 9-41 9-56 0L79 195c-4-2-8-6-9-9v14c0 6 3 11 11 16a1 1 0 1 1-1 1c-8-4-12-10-12-17v-23l1 1c1 6 4 11 11 16l105 60c15 9 39 9 54 0 7-4 11-10 11-15l1-1 1 1v22c0 6-4 12-12 17-8 4-18 6-28 6Z"
                style="fill: #000; fill-opacity: 1"
              />
              <path
                id="Vector_28"
                fill="#D88A4B"
                d="M80 162c-15 9-15 23 0 32l104 61c15 9 40 9 56 0 14-8 15-21 4-30l12-5c19-11 19-28 1-39-14-8-34-10-51-7-1-5-4-10-11-14a61 61 0 0 0-59 2c-15-9-40-9-56 0Z"
                style="
                  fill: #d88a4b;
                  fill: color(display-p3 0.8471 0.5429 0.2941);
                  fill-opacity: 1;
                "
              />
              <path
                id="Vector_29"
                fill="#000"
                d="M212 263c-10 0-21-3-28-7L79 195c-7-4-11-10-11-17 0-6 4-12 12-17 11-6 28-8 43-5a1 1 0 0 1 0 2c-15-3-31-1-42 5-8 4-11 10-11 15-1 6 3 11 10 16l105 60c15 9 39 9 54 0 7-4 11-9 11-14 1-5-2-10-7-14v-2l13-5c9-5 14-12 14-19s-5-13-14-18c-13-8-32-10-50-7a1 1 0 0 1 0-2c18-3 38-1 51 7 9 5 15 12 15 20s-6 15-15 21l-11 5c4 4 7 9 6 14 0 6-4 11-12 16-8 4-18 7-28 7Z"
                style="fill: #000; fill-opacity: 1"
              />
              <path
                class="back-color-change-3 fill-yellow-300"
                d="M207 200c0-12-17-22-37-22-21 0-37 10-37 22s16 21 36 21c21 0 37-9 38-21Z"
              />
              <path
                id="outline-cl"
                fill="#000"
                d="M170 222c-10 0-20-2-27-6s-11-10-11-16 4-12 11-16c14-9 38-9 53 0 7 4 12 10 12 16s-4 12-12 16c-7 4-17 6-26 6Zm-1-43c-9 0-18 2-25 7-7 3-10 8-10 14 0 5 3 10 10 14 14 8 37 8 51 0 7-4 11-9 11-14s-4-11-11-14c-7-5-16-7-26-7Z"
                style="fill: #000; fill-opacity: 1"
              />
            </g>

            <g id="antenae">
              <g class="text-fg-prim" id="antena-left">
                <path
                  id="ant-1"
                  class="stroke-current stroke-2"
                  d="m137 211-1-1L43 94a1 1 0 1 1 2-1l92 116a1 1 0 0 1 0 2Z"
                />
              </g>
              <g class="text-fg-prim" id="antena-right">
                <path
                  id="Vector_31"
                  d="M201 191v-1l-1-1 67-162h1l1 1-67 162-1 1Z"
                  class="stroke-current stroke-2"
                />
                <path
                  id="Vector_32"
                  d="M233 86h-1v-2l19-47 2-1v1l-19 48-1 1Z"
                  class="stroke-current stroke-2"
                />
              </g>
            </g>
            <g id="zeroes" fill="#F1F2F2">
              <path class="grid-one" d="M108 57v21l-3 2V62l-4 3v-4l7-4Z" />
              <path
                class="grid-zero"
                d="m126 51 1 6-1 6-2 6-4 3-4 1c-2 0-3-1-3-2l-1-5a21 21 0 0 1 3-12l4-4 4-1c2 0 3 1 3 2Zm-3 14 1-6-1-5h-4l-3 3-1 7 1 5h4l3-4Z"
              />
              <path class="grid-one" d="M136 41v21l-3 2V46l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m154 35 1 5-1 7-2 5-4 4-4 1c-2 0-3-1-3-2l-1-6a21 21 0 0 1 3-11l4-4 4-1c2 0 3 1 3 2Zm-3 14 1-7-1-5h-4l-3 4-1 6 1 5 4 1 3-4Z"
              />
              <path class="grid-one" d="M164 25v21l-3 2V30l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m182 19 1 5a21 21 0 0 1-3 12l-4 4-4 1c-2 0-3-1-3-2l-1-6a21 21 0 0 1 3-12l4-3 4-1c2 0 3 1 3 2Zm-3 14 1-7-1-5h-4l-3 4-1 6 1 5h4l3-3Z"
              />
              <path class="grid-one" d="M192 8v22l-3 2V14l-4 2v-3l7-5Z" />
              <path
                class="grid-zero"
                d="m210 3 1 5a20 20 0 0 1-3 12l-4 4-4 1c-2-1-3-1-3-3l-1-5a21 21 0 0 1 3-12l4-3c2-1 3-2 4-1 2 0 3 0 3 2Zm-3 13 1-6-1-5h-4l-3 4-1 6 1 5h4l3-4Z"
              />
              <path class="grid-one" d="M108 90v21l-3 2V95l-4 3v-4l7-4Z" />
              <path
                class="grid-zero"
                d="m126 84 1 5a21 21 0 0 1-3 12l-4 4-4 1c-2 0-2-1-3-2l-1-5a21 21 0 0 1 4-12l4-4 4-1 2 2Zm-3 14 1-6-1-6h-3l-4 4-1 6 1 5 4 1 3-4Z"
              />
              <path class="grid-one" d="M136 74v21l-3 2V79l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m154 68 1 5a21 21 0 0 1-3 12l-4 4-4 1c-2 0-2-1-3-2l-1-6a21 21 0 0 1 4-12l4-3 4-1 2 2Zm-3 14 1-7-1-5h-3l-4 4-1 6 1 5h4l3-3Z"
              />
              <path class="grid-one" d="M164 58v21l-3 2V63l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m182 52 1 5a21 21 0 0 1-3 12l-4 4-4 1-3-3-1-5a21 21 0 0 1 4-12c1-1 2-3 4-3 1-1 2-2 4-1 1 0 2 0 2 2Zm-3 13 1-6-1-5h-3l-4 4-1 6 1 5h4l3-4Z"
              />
              <path class="grid-one" d="M192 41v22l-3 2V47l-4 2v-3l7-5Z" />
              <path
                class="grid-zero"
                d="m210 36 1 5a20 20 0 0 1-3 12l-4 4-4 1-3-3-1-5a21 21 0 0 1 4-12l4-4 4-1c1 1 2 1 2 3Zm-3 13 1-6-1-5h-3l-4 4-1 6 1 5h4l3-4Z"
              />
              <path class="grid-one" d="M108 123v21l-3 2v-18l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m126 117 1 5a21 21 0 0 1-3 12l-4 4-4 1-3-2-1-6a21 21 0 0 1 4-12l4-3 4-1 2 2Zm-3 14 1-7-1-5h-3c-2 1-3 2-3 4l-2 6c0 3 1 5 2 5h3l3-3Z"
              />
              <path class="grid-one" d="M136 107v21l-3 2v-18l-4 2v-3l7-4Z" />
              <path
                class="grid-zero"
                d="m154 101 2 5-1 7-3 5-4 4-4 1-3-2-1-6a21 21 0 0 1 4-12l4-3c1-1 2-2 4-1l2 2Zm-3 14 1-7-1-5h-3c-2 1-3 2-3 4l-2 6c0 3 1 4 2 5h3l3-3Z"
              />
              <path class="grid-one" d="M164 90v22l-3 2V96l-4 2v-3l7-5Z" />
              <path
                class="grid-zero"
                d="m182 85 2 5a21 21 0 0 1-4 12l-4 4-4 1-3-3-1-5a21 21 0 0 1 4-12c1-1 2-3 4-3l4-2c1 1 2 1 2 3Zm-3 13 1-6-1-5h-3c-2 1-3 2-3 4l-2 6c0 3 1 4 2 5h3l3-4Z"
              />
              <path class="grid-one" d="M192 74v22l-3 2V80l-4 2v-3l7-5Z" />
              <path
                class="grid-zero"
                d="m210 69 2 5a21 21 0 0 1-4 12l-4 3c-2 1-3 2-4 1-1 0-2 0-3-2l-1-5a21 21 0 0 1 4-12l4-4 4-1c1 0 2 1 2 3Zm-3 13 1-6-1-5h-3c-2 1-3 2-3 4l-2 6 2 5h3l3-4Z"
              />
            </g>
          </g>
          <g id="middle-device">
            <path
              id="Vector_57"
              fill="#AFD84B"
              d="M233 400v27c0 3-2 5-5 7l-64 37c-7 5-19 5-27 0l-64-37c-3-2-5-5-5-7v-27c0 3 2 5 6 8l63 36c8 5 20 5 27 0l64-36c3-3 5-5 5-8Z"
              style="
                fill: #afd84b;
                fill: color(display-p3 0.6863 0.8471 0.2941);
                fill-opacity: 1;
              "
            />
            <path
              id="Vector_58"
              fill="#000"
              d="M151 475c-5 0-10-1-14-3l-64-37c-4-2-6-5-6-8v-27l1-1 1 1c0 2 2 5 5 7l64 37c7 4 19 4 26 0l63-37c3-2 5-4 5-7l1-1 1 1v27c0 3-2 6-6 8l-64 37c-3 2-8 3-13 3Zm-82-70v22c0 2 2 5 5 7l64 37c7 4 18 4 26 0l63-37c3-2 5-5 5-7v-22l-4 3-63 37c-8 5-20 5-28 0l-64-37-4-3Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="Vector_59"
              fill="#fff"
              d="M228 392c7 4 7 11 0 16l-64 37c-7 4-19 4-27 0l-63-37c-8-5-8-12-1-16l64-37c7-4 19-4 27 0l64 37Z"
              style="fill: #fff; fill-opacity: 1"
            />
            <path
              id="Vector_60"
              fill="#000"
              d="M151 449c-5 0-10-1-14-4l-64-37c-4-2-6-5-6-8s2-6 6-9l64-37c7-4 19-4 27 0l64 37c4 3 6 6 6 9s-2 6-6 8l-63 37c-4 3-9 4-14 4Zm-1-96c-4 0-9 1-13 3l-63 37c-3 2-5 4-5 7 0 2 2 5 5 7l64 37c7 4 19 4 26 0l63-37c3-2 5-5 5-7 0-3-2-5-5-7l-64-37c-3-2-8-3-13-3Z"
              style="fill: #000; fill-opacity: 1"
            />
            <path
              id="mid-color-change-2"
              ref="mid-dev"
              class="fill-yellow-300"
              d="M188 396c3 2 3 6 0 8l-31 17c-3 2-9 2-13 0l-31-17c-3-2-3-6 0-8l31-18c4-2 9-2 13 0l31 18Z"
            />
            <path
              id="Vector_61"
              fill="#000"
              d="m151 424-7-2-31-18c-2-1-3-2-3-4s1-3 3-5l31-17h1l-1 1-30 18c-2 1-2 2-2 3s0 2 2 3l31 18c3 2 8 2 12 0l30-18c2-1 2-2 2-3s0-2-2-3a1 1 0 0 1 1-2c2 2 3 3 3 5s-1 3-3 4l-30 18-7 2Z"
              style="fill: #000; fill-opacity: 1"
            />
            <g id="mid-dev-dots" fill="#489934">
              <path
                id="Vector_62"
                d="M196 435c3-1 4 0 4 3 0 2-1 5-4 6-2 2-4 1-4-2l4-7Z"
                style="
                  fill: #489934;
                  fill: color(display-p3 0.2824 0.6 0.2039);
                  fill-opacity: 1;
                "
              />
              <path
                id="Vector_63"
                d="M209 428c2-1 4 0 4 2 0 3-2 6-4 7s-4 0-4-2c0-3 2-6 4-7Z"
                style="
                  fill: #489934;
                  fill: color(display-p3 0.2824 0.6 0.2039);
                  fill-opacity: 1;
                "
              />
              <path
                id="Vector_64"
                d="M222 420c2-1 4 0 4 3l-4 7c-2 1-4 0-4-3l4-7Z"
                style="
                  fill: #489934;
                  fill: color(display-p3 0.2824 0.6 0.2039);
                  fill-opacity: 1;
                "
              />
            </g>
            <path
              id="dev-mid-face-line"
              fill="#489934"
              d="m111 439 2 5c0 2-1 3-3 2l-32-19c-2-1-3-3-3-5s1-3 3-2l33 19Z"
              style="
                fill: #489934;
                fill: color(display-p3 0.2824 0.6 0.2039);
                fill-opacity: 1;
              "
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_781_3434">
          <path
            fill="#fff"
            d="M0 0h500v500H0z"
            style="fill: #fff; fill-opacity: 1"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>
