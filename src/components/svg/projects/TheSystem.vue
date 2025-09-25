<script setup>
import { onMounted, onUnmounted } from 'vue'
import { withGsapContext, revolveTween } from '@/composables/useGsapFuncs'

let ctx
const planets = ['.outer-planet-1', '.outer-planet-2', '.outer-planet-3']
let start = 0
onMounted(() => {
  ctx = withGsapContext(() => {
    planets.forEach((planet) => {
      revolveTween(planet, '#outer-ring', (start += 0.25))
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 901 806">
    <g id="projects">
      <g id="core">
        <g id="Ellipse 94" filter="url(#filter0_f_974_709)">
          <circle
            cx="435.7"
            cy="371.78"
            r="60.22"
            fill="color(display-p3 1 .9216 .3451)"
            fill-opacity=".05"
          />
        </g>
        <circle
          id="Ellipse 93"
          cx="435.7"
          cy="371.79"
          r="37.74"
          fill="color(display-p3 1 .9216 .3451)"
          fill-opacity=".2"
        />
        <circle
          id="Ellipse 90"
          cx="435.7"
          cy="371.79"
          r="31.51"
          fill="color(display-p3 1 .947 .5577)"
          fill-opacity="1"
          stroke="#000"
          stroke-opacity="1"
          stroke-width=".8"
        />
        <circle
          id="Ellipse 91"
          cx="435.7"
          cy="371.79"
          r="24.93"
          fill="color(display-p3 1 .9216 .3451)"
          fill-opacity="1"
        />
        <ellipse
          id="Ellipse 92"
          cx="434.13"
          cy="359.7"
          fill="color(display-p3 .9926 .9679 .7863)"
          fill-opacity="1"
          rx="8.85"
          ry="5.9"
          transform="rotate(20.6 434.13 359.7)"
        />
      </g>

      <g
        id="paths"
        stroke="color(display-p3 1 .9373 .7804)"
        stroke-opacity=".5"
        stroke-width="1.21"
      >
        <path
          id="outer-ring"
          d="M775.21 202.2c34.22 55.49 28.96 128.17-7.38 200.92-36.34 72.73-103.71 145.43-193.53 200.81-89.82 55.4-185.03 82.95-266.33 82.76-81.32-.19-148.62-28.12-182.84-83.6-34.21-55.49-28.96-128.18 7.38-200.92 36.34-72.73 103.72-145.43 193.53-200.82 89.82-55.38 185.03-82.94 266.34-82.76 81.31.2 148.62 28.13 182.83 83.62Z"
        />
        <path
          id="middle-ring"
          d="M658.88 246.88c23.46 38.05 19.87 87.92-5.08 137.87-24.95 49.94-71.22 99.87-132.91 137.9-61.7 38.05-127.08 56.98-182.9 56.85-55.84-.13-102.01-19.32-125.47-57.36-23.47-38.05-19.88-87.92 5.08-137.87 24.95-49.94 71.21-99.87 132.9-137.91 61.7-38.04 127.08-56.97 182.9-56.84 55.84.13 102.01 19.32 125.48 57.36Z"
        />

        <path
          id="inner-ring"
          d="M548.46 298.75c12.41 20.11 10.53 46.52-2.71 73.03-13.24 26.5-37.8 53.02-70.57 73.22-32.77 20.21-67.49 30.25-97.11 30.19-29.64-.07-54.08-10.25-66.48-30.37-12.41-20.12-10.53-46.53 2.71-73.04 13.24-26.5 37.8-53.01 70.57-73.22 32.77-20.2 67.49-30.25 97.11-30.18 29.64.07 54.08 10.25 66.48 30.37Z"
        />
      </g>
      <g id="planets">
        <g id="outer-60deg">
          <circle
            class="outer-planet-1"
            cx="780.48"
            cy="212.86"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            class="outer-planet-1"
            id="Ellipse 111"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M786.4 223.1a11.83 11.83 0 0 0-11.84-20.49l5.92 10.25 5.92 10.24Z"
          />
        </g>
        <g id="outter-(-58deg)">
          <circle
            id="Ellipse 109"
            class="outer-planet-2"
            cx="251.49"
            cy="255.05"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            id="Ellipse 110_3"
            class="outer-planet-2"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M257.75 245.02a11.83 11.83 0 1 0-12.53 20.07l6.27-10.04 6.26-10.03Z"
          />
        </g>
        <g id="outter-(-130deg)">
          <circle
            id="Ellipse 108"
            class="outer-planet-3"
            cx="138.32"
            cy="622.85"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            id="Ellipse 110_5"
            class="outer-planet-3"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M130.72 613.79a11.83 11.83 0 1 0 15.2 18.12l-7.6-9.06-7.6-9.06Z"
          />
        </g>
        <g id="mid-(60deg)">
          <circle
            id="Ellipse 105"
            cx="658.54"
            cy="247.29"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            id="Ellipse 110"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M664.46 257.54a11.83 11.83 0 1 0-11.83-20.5l5.91 10.25 5.92 10.25Z"
          />
        </g>

        <g id="mid-(-160deg)">
          <circle
            id="Ellipse 107"
            cx="316.89"
            cy="579.01"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            id="Ellipse 110_4"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M305.77 574.96a11.83 11.83 0 0 0 22.23 8.1L316.9 579l-11.12-4.05Z"
          />
        </g>
        <g id="inner-(90deg)">
          <circle
            id="Ellipse 106"
            cx="538.21"
            cy="380.18"
            r="11.83"
            fill="color(display-p3 .6392 .851 .1255)"
            fill-opacity="1"
          />
          <path
            id="Ellipse 110_2"
            fill="color(display-p3 .1765 .2275 .051)"
            fill-opacity=".5"
            d="M538.2 392a11.83 11.83 0 0 0 0-23.66v23.67Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_974_709"
        width="128.44"
        height="128.44"
        x="371.48"
        y="307.56"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_974_709"
          stdDeviation="2"
        />
      </filter>
    </defs>
  </svg>
</template>
