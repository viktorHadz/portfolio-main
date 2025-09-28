<script setup>
import { onMounted, onUnmounted } from 'vue'
import { withGsapContext, revolvePlanet } from '@/composables/useGsapFuncs'

let ctx

const rings = [
  {
    path: '#outer-ring',
    duration: 100,
    planets: ['.outer-planet-1', '.outer-planet-2', '.outer-planet-3'],
  },
  {
    path: '#middle-ring',
    duration: 90,
    planets: ['.mid-planet-1', '.mid-planet-2'],
  },
  {
    path: '#inner-ring',
    duration: 80,
    planets: ['.inner-planet-1'],
  },
]
onMounted(() => {
  ctx = withGsapContext(() => {
    rings.forEach(({ path, duration, planets }) => {
      planets.forEach((selector, i) => {
        const offset = i / planets.length
        revolvePlanet(selector, path, duration, offset)
      })
    })
  })
})

onUnmounted(() => ctx?.revert())
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
        <!-- Outer Planets -->
        <g id="outer-60deg" class="">
          <circle
            class="outer-planet-1 fill-[#a3d920] hover:fill-[#b3ff00]"
            cx="780.48"
            cy="212.86"
            r="11.83"
            fill-opacity="1"
          />
        </g>
        <g id="outter-(-58deg)">
          <circle
            id="Ellipse 109"
            class="outer-planet-2 fill-[#a3d920]"
            cx="251.49"
            cy="255.05"
            r="11.83"
            fill-opacity="1"
          />
        </g>

        <g id="outter-(-130deg)">
          <circle
            id="Ellipse 108"
            class="outer-planet-3 fill-[#a3d920]"
            cx="138.32"
            cy="622.85"
            r="11.83"
            fill-opacity="1"
          />
        </g>
        <!-- Middle Ring Planets -->
        <g id="mid-(60deg)">
          <circle
            id="Ellipse 105"
            class="mid-planet-1 fill-[#a3d920]"
            cx="658.54"
            cy="247.29"
            r="11.83"
            fill-opacity="1"
          />
        </g>

        <g id="mid-(-160deg)">
          <circle
            id="Ellipse 107"
            class="mid-planet-2 fill-[#a3d920]"
            cx="316.89"
            cy="579.01"
            r="11.83"
            fill-opacity="1"
          />
        </g>
        <g id="inner-(90deg)">
          <circle
            id="Ellipse 106"
            class="inner-planet-1 fill-[#a3d920]"
            cx="538.21"
            cy="380.18"
            r="11.83"
            fill-opacity="1"
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
<style scoped></style>
