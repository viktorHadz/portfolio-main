<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

let ctx, uiTl, pulseKb
let card // for cleanup

function createUiTimeline() {
  return gsap
    .timeline({
      paused: true,
      defaults: { duration: 0.8 },
    })
    .to('.laptop-ui', { x: 40, scale: 1.2 })
    .to('#circle-success', { scale: 1.2 })
    .to('.circ-icon', { rotate: 360 }, '-=0.8')
}
function pulseKeyboard() {
  return gsap
    .timeline({
      paused: true,
      defaults: { duration: 1, repeat: -1, yoyo: true },
    })
    .to('#keyboard', { fill: '#F4AD74' })
}
onMounted(() => {
  ctx = gsap.context(() => {
    uiTl = createUiTimeline()
    pulseKb = pulseKeyboard()
    card = document.querySelector('.the-efficient')
    if (!card) return

    const onEnter = () => {
      uiTl.play()
      pulseKb.play()
    }

    const onLeave = () => {
      uiTl.reverse()
      pulseKb.pause(0)
    }

    card.addEventListener('mouseenter', onEnter)
    card.addEventListener('mouseleave', onLeave)

    // stash for cleanup
    card._onEnter = onEnter
    card._onLeave = onLeave
  })
})

onUnmounted(() => {
  if (card) {
    card.removeEventListener('mouseenter', card._onEnter)
    card.removeEventListener('mouseleave', card._onLeave)
  }
  ctx?.revert()
})
</script>

<template>
  <div @mouseenter="hov = true" @mouseleave="hov = false">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 501 501">
      <g id="efficient">
        <g id="laptop-all_2">
          <g id="laptop-outer">
            <path
              fill="color(display-p3 .8745 .9451 .7098)"
              d="m129 96 131-73c4-2 7-2 9-1l12 7c-2-2-5-2-9 0L40 160c-8 4-13 13-13 21v177c0 4 2 7 4 8l-12-7c-2-1-4-4-4-8V175c0-8 6-18 13-22l59-33"
            />
            <path
              fill="#000"
              d="M31 367h-1l-11-7c-3-1-5-5-5-9V175c0-9 6-19 13-23l60-33h1v1l-60 34c-7 4-12 13-12 21v176c0 4 1 6 4 7l7 5-1-5V181c0-8 6-18 13-22C285 21 272 28 276 27l-7-4c-2-2-5-1-8 1L130 97h-2l1-2 131-73c3-2 7-2 10-1l12 7v1h-1c-2-1-5 0-9 1L40 160c-7 4-12 14-12 21v177c0 3 1 6 3 7l1 1-1 1Z"
            />
            <path
              fill="color(display-p3 .6863 .8471 .2941)"
              d="M272 29c7-4 13 0 13 8l1 176c0 8-6 18-13 22L40 365c-7 4-13 1-13-7V181c0-8 5-17 13-21L272 29Z"
            />
            <path
              fill="#000"
              d="m34 368-3-1c-3-2-5-5-5-9V181c0-8 6-18 13-22L271 29c8-5 15-1 15 8v176c0 8-6 19-13 23L41 366l-7 2ZM272 30 40 160c-7 4-12 14-12 21v177c0 3 1 6 3 7 3 1 6 1 9-1l232-130c7-4 13-13 13-21l-1-176c0-8-5-10-12-7Z"
            />
            <path fill="#fff" d="m42 181 5-9L270 48v157l-5 9L42 339V181Z" />
            <path
              fill="#000"
              d="M168 269v-2l96-54c3-1 5-6 5-8v-92l1-1 1 1v92c0 3-3 8-6 9l-96 55h-1ZM42 339h-1V181c0-3 3-8 6-9L225 72h1v1L48 173c-3 1-5 6-5 8v156l47-26h1v1l-48 27h-1Z"
            />
            <path
              fill="color(display-p3 .6863 .8471 .2941)"
              d="m335 427 121-68c3-2 5-5 5-7v-21c0 2-2 5-5 7L223 468c-7 4-18 4-25 0L40 380c-3-2-5-5-5-8v21c0 3 2 5 5 7l158 89c7 4 18 4 26 0l74-42"
            />
            <path
              fill="#000"
              d="M197 490 40 401c-4-2-6-5-6-8v-21l1-1 1 1c0 3 2 5 5 7l157 88c7 4 18 4 25 0l232-130c3-2 5-4 5-6l1-1 1 1v21c0 3-2 6-6 8l-121 68-1-1v-1l121-68c4-2 5-4 5-6v-16c-3 3 10-5-236 133-8 4-20 4-27 0L40 380l-4-3v16c0 3 2 5 5 7l157 88c7 4 18 4 25 0l74-41c1-1 2 1 1 1l-74 42c-7 4-19 4-27 0Z"
            />
            <path
              fill="#fff"
              d="M40 365c-7 4-7 11 0 15l158 88c7 4 18 4 25 0l233-130c7-4 7-11 0-15l-157-88c-7-4-19-4-26 0L40 365Z"
            />
            <path
              fill="#000"
              d="M197 469 40 380c-4-2-6-5-6-8s2-6 6-8l232-130c8-4 20-4 27 0l157 89c8 4 8 11 0 16L224 469c-8 4-20 4-27 0ZM41 366c-3 2-5 4-5 6 0 3 2 5 5 7l157 88c7 4 18 4 25 0l232-130c7-3 7-9 0-13l-157-88c-7-4-18-4-25 0L41 366Z"
            />
            <path
              fill="color(display-p3 .6863 .8471 .2941)"
              d="M217 471v20h-14v-21c5 1 9 2 14 1Z"
            />
            <path
              fill="#000"
              d="M203 485h-1l1-15c0-1 0-1 0 0h14v1l-13 1v13h-1Zm0 7v-2l13 1v-10l1-1 1 1v10l-1 1h-14Z"
            />
          </g>
          <path
            id="keyboard"
            class="fill-[#D1D3D4]"
            d="M312 259c2 1 2 2 0 3l-17 10h-5l-17-10c-2-1-2-2 0-3l17-9h5l17 9Zm30 17v3l-17 10h-6l-17-10v-3l17-10h6l17 10Zm-59 0c1 1 2 2 0 3l-17 9h-6l-17-9v-3l17-10h6l17 10Zm-29 16v3l-17 10h-6l-17-10c-2-1-2-2 0-3l17-9h5l18 9Zm-30 17c2 1 2 2 0 3l-17 9h-5l-17-9c-2-1-2-2-1-3l17-10h6l17 10Zm-29 16v3l-17 10h-6l-17-10v-3l17-9h6l17 9Zm-30 17c2 0 2 2 0 3l-17 9h-5l-17-9c-2-1-2-3 0-3l17-10h5l17 10Zm-29 16v3l-17 10h-6l-17-10v-3l17-9h6l17 9Zm-29 17v3l-17 9h-6l-17-9c-2-1-2-3 0-3l17-10h5l18 10Zm206-83v4l-17 9h-6l-17-9c-2-1-2-3 0-4l17-9h5l18 9Zm-30 17c2 1 2 2 0 3l-17 10h-5l-17-10c-2-1-2-2-1-3l17-10h6l17 10Zm-29 16v3l-17 10h-6l-17-10v-3l17-9h6l17 9Zm-30 17c2 1 2 2 0 3l-17 10h-5l-17-10c-2-1-2-2 0-3l17-10h5l17 10Zm-29 16v3l-17 10h-6l-17-10v-3l17-9h6l17 9Zm-29 17v3l-17 10h-6l-17-10c-2-1-2-2 0-3l17-10h5l18 10Zm-30 16c2 1 2 3 0 3l-17 10h-5l-17-10c-2 0-2-2-1-3l17-9h6l17 9Zm236-98v3l-17 9h-6l-17-9c-2-1-2-3 0-3l17-10h5l18 10Zm-30 16c2 1 2 2 0 3l-17 10h-5l-18-10v-3l17-9h6l17 9Zm-134 79h-6l-17-10c-2-1-2-2 0-3l105-59h6l17 10v3l-105 59Zm-13 3c2 1 2 3 0 4l-17 9h-5l-18-9v-4l17-9h6l17 9Zm-29 17v3l-17 10h-6l-17-10v-3l17-10h6l17 10Z"
          />
          <g id="mousepad">
            <path
              fill="color(display-p3 .8196 .8275 .8314)"
              d="M241 381c-3 2-3 5 0 7l45 25h12l67-38c3-2 3-5 0-7l-45-25h-12l-67 38Z"
            />
            <path
              fill="#000"
              d="m285 413-44-25c-4-2-4-6 0-8l22-12h1v1l-22 13c-3 1-3 3 0 5l44 25h11l67-38c3-1 3-3 0-5l-27-15v-1l1-1 27 15c4 3 4 7 0 9l-67 37c-3 2-9 2-13 0Z"
            />
          </g>
          <path
            id="laptop-ports"
            fill="color(display-p3 .2824 .6 .2039)"
            d="M59 396v9l-16-9v-8l16 8Zm21 13v8l-15-8v-9l15 9Z"
          />
          <g class="laptop-ui">
            <g id="circle-success">
              <path
                id="circle-text"
                class="fill-black"
                d="m104 253 1-1 42-24h1v2l-43 23h-1Zm0 14 1-2 36-20h2l-1 2-37 20h-1Z"
              />
              <g class="circ-icon">
                <path
                  id="circle-bl-fill"
                  fill="color(display-p3 .2824 .6 .2039)"
                  fill-opacity="1"
                  d="M96 275c5-9 5-18 0-20-5-3-13 1-18 10-5 8-5 17 0 20 5 2 13-2 18-10Z"
                />
                <path
                  id="circle-outline"
                  class="fill-black"
                  d="M73 277c0-8 6-18 13-22 8-5 14-1 14 8h-1c0-8-5-10-12-7-6 4-12 13-12 21 0 7 5 10 11 6h2l-1 2c-7 4-14 0-14-8Z"
                />
                <path
                  id="check-on-circle"
                  class="fill-white"
                  d="M85 278h-1l-4-3-1-1h1l5 2 8-14 1-1 1 2-9 15h-1Z"
                />
              </g>
            </g>
            <g id="Vector_3">
              <path
                id="ui-fill-head"
                fill="color(display-p3 1 .9216 .3451)"
                d="m171 121 81-45v17L60 200v-16l86-48"
              />
              <path
                fill="#000"
                d="M59 200v-16l1-1 85-48h2l-1 1-85 48v14L251 92V78l-79 44h-2l1-1 80-46 2 1v17h-1L61 201l-2-1Zm45 3 1-1 42-24h1v2l-43 23h-1Zm0 14 1-2 36-20h2l-1 1-37 21h-1Z"
              />
              <path
                fill="color(display-p3 1 .9216 .3451)"
                d="M96 225c5-9 5-18 0-20-5-3-13 1-18 10-5 8-5 17 0 20 5 2 13-2 18-10Z"
              />
              <path
                fill="#000"
                d="m73 227 1-1 1 1c0 7 5 9 11 6 7-4 13-13 13-21 0-7-5-9-12-6h-1v-1c8-5 14-1 15 7 0 9-6 18-14 23-7 4-14 0-14-8Zm129-79 1-1 42-24h2l-1 2-42 23h-2Zm0 14 1-2 37-20h1v1l-37 21h-2Z"
              />
              <path
                fill="color(display-p3 .8196 .8275 .8314)"
                d="M194 170c5-9 5-18 0-21-5-2-13 2-18 10-5 9-5 18 0 20 5 3 13-1 18-9Z"
              />
              <path
                fill="#000"
                d="M172 172v-1h1v1c0 7 5 9 12 6 6-4 12-13 12-21 0-7-5-9-11-6h-2l1-1c7-5 14-1 14 7s-6 18-13 22c-8 5-14 1-14-7Zm30 26 1-1 42-24h2l-1 2-42 23h-2Zm0 14 1-2 37-20h1v1l-37 21h-2Z"
              />
              <path
                fill="color(display-p3 .8471 .5429 .2941)"
                d="M194 220c5-9 5-18 0-20-5-3-13 1-18 10-5 8-5 17 0 20 5 2 13-2 18-10Z"
              />
              <path
                fill="#000"
                d="M172 222c0-8 5-18 13-22 7-5 14-1 14 7l-1 1-1-1c0-3-1-5-3-7-8-4-21 10-21 22 0 7 5 9 12 6h1v1c-8 5-14 1-14-7Z"
              />
            </g>
          </g>
        </g>
        <g id="clock">
          <g id="Vector_4">
            <path
              fill="color(display-p3 1 .9216 .3451)"
              d="M487 213c0 19-7 33-19 39l-22 12c11-6 19-20 19-39 0-39-29-86-66-105-18-10-34-11-46-4l22-12c12-7 28-6 47 4 36 19 65 66 65 105Z"
            />
            <path
              fill="#000"
              d="M445 264v-1c12-6 19-20 19-38 0-38-29-85-65-104-17-10-34-11-46-5v1l-1-1v-1l22-12c13-7 30-5 48 4 16 9 32 24 44 42v1h-1c-12-18-28-33-44-41-17-10-34-11-46-4l-12 6c11-2 24 1 37 8 36 20 66 67 66 106 0 14-4 25-11 33l12-7c12-6 19-20 19-38 0-12-3-26-9-40l1-1 1 1c6 14 9 27 9 40 0 19-7 33-20 40a200443 200443 0 0 0-23 11Z"
            />
            <path
              fill="color(display-p3 .8471 .5429 .2941)"
              d="M446 264c25-14 25-58-1-99-25-41-67-63-92-49-26 13-26 58 0 99 25 41 67 63 93 49Z"
            />
            <path
              fill="#000"
              d="M398 260c-14-7-27-19-39-34l1-1h1c11 15 24 26 38 34 36 19 65 4 65-34s-29-85-65-104c-17-10-34-11-46-5-12 7-18 20-19 39 0 13 4 29 11 44v1l-2-1c-7-15-10-30-10-44 0-19 7-33 19-40 13-7 30-5 48 4 36 20 66 67 66 106s-31 55-68 35Z"
            />
            <path
              fill="#fff"
              d="M403 253c-33-18-61-63-61-98 0-22 10-36 28-36 38 0 86 59 86 106 0 33-23 44-53 28Z"
            />
            <path
              fill="color(display-p3 .8471 .5429 .2941)"
              d="M416 87v21c0 2-1 3-3 5-8 4-22 1-22-5l1-21c0 2 1 4 3 5 5 3 13 3 18 0 2-1 3-3 3-5Z"
            />
            <path
              fill="#000"
              d="m390 108 1-21h1c0 2 2 3 4 4 4 3 12 3 16 0 2-1 3-2 3-4h2v21c0 2-1 4-4 5-8 5-23 2-23-5Zm2-17v17c0 5 13 8 20 4l3-4V91l-2 2c-5 3-13 3-18 0l-3-2Z"
            />
            <path
              fill="#fff"
              d="M413 83c5 2 5 7 0 9-5 3-13 3-18 0-5-2-5-7 0-9 5-3 13-3 18 0Z"
            />
            <path
              fill="#000"
              d="m404 95-9-2c-3-1-4-3-4-6 0-2 1-4 4-5 5-3 13-3 18 0 3 1 4 3 4 5 0 3-1 5-4 6l-9 2Zm0-13-8 1-4 4c0 2 2 3 4 4 4 3 12 3 16 0 2-1 3-2 3-4l-3-3c-2-2-5-2-8-2Z"
            />
            <path
              fill="color(display-p3 .8471 .5429 .2941)"
              d="m425 79-1 12c0 3-2 5-6 8-8 4-21 4-29 0-4-3-6-5-6-8V79c0 3 2 6 6 8 9 4 22 4 30 0 4-2 6-5 6-8Z"
            />
            <path
              fill="#000"
              d="M404 103c-6 0-11-1-15-4-5-2-7-5-7-8V79l1-1 1 1c0 3 2 5 6 7 8 4 20 4 28 0 4-2 6-4 6-7l1-1 1 1-1 12c0 3-2 6-6 8-4 3-10 4-15 4Zm-20-19v7c0 2 2 5 6 7 8 4 20 4 28 0 3-2 5-5 5-7l1-7-5 4c-8 4-22 4-30 0l-5-4Z"
            />
            <path
              fill="color(display-p3 1 .9216 .3451)"
              d="M419 71c8 5 8 12 0 16s-21 4-30 0c-8-4-8-11 0-16 8-4 21-4 30 0Z"
            />
            <path
              fill="#000"
              d="M404 91c-5 0-11-1-15-3s-7-6-7-9 3-6 7-8h1v1c-4 2-6 5-6 7 0 3 2 5 6 7 8 4 20 4 28 0 4-2 6-4 6-7 0-2-2-5-6-7v-1h1c4 2 7 5 7 8 0 4-3 7-7 9s-9 3-15 3Z"
            />
          </g>
          <g id="clockarrow-and-fill" fill-opacity="1">
            <path
              id="Vector_5"
              fill="color(display-p3 1 .9216 .3451)"
              d="M456 225c0 12-3 25-14 32l-41-64v-63c30 19 55 61 55 95Z"
            />
            <path
              id="Vector_6"
              fill="#000"
              d="m407 198 25 42-1 1-28-41h3l1-2Z"
            />
            <path id="Vector_7" fill="#000" d="m391 182 5-3 4 7h-3l-1 3-5-7Z" />
            <path
              id="Vector_8"
              fill="#000"
              d="M406 191c1 2 2 5 1 7l-1 2h-3l-2-1-4-4c-1-2-2-4-1-6l1-3h3l1 1 5 4Zm-2 5v-4l-3-2h-2v4l2 2h3Z"
            />
            <path id="clockfill" fill="#fff" d="m401 190 3 2v4h-3l-2-2v-4h2Z" />
          </g>
          <path
            id="time-indicators"
            fill="#000"
            d="M402 131v12h-2v-13l2 1Zm0 107v14l-2-1v-13l1-1 1 1Zm-35-102h-2l-8-14 2-1 8 13v2Zm76 120-2 1-8-13c-1-1 1-2 2-1l8 13Zm-89-92-1 1h-1l-10-6v-2l11 6 1 1Zm102 56-12-6-1-2h2l11 6v2Zm-90-13-6 3-1-2 5-3h2v2Zm72-39-11 6c-1 0-2-1-1-2l10-5 2 1Z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>
