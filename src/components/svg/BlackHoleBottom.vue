<script setup>
import gsap from 'gsap'
import MorphSVGPlugin from 'gsap/MorphSVGPlugin'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import { onMounted } from 'vue'
gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin)

onMounted(() => {})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-80 -100 380 360"
  >
    <defs>
      <!-- blur filters -->
      <filter id="blur2_5" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
      <filter id="blur3_1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.1" />
      </filter>
      <filter
        id="blur20_8"
        x="-200"
        y="-200"
        width="600"
        height="600"
        filterUnits="userSpaceOnUse"
      >
        <feGaussianBlur stdDeviation="20.8" />
      </filter>
      <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" />
      </filter>

      <!-- gradient -->
      <linearGradient
        id="grad0"
        x1="120.3"
        y1="46.1"
        x2="120.3"
        y2="64"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="rgb(176,248,0)" />
        <stop offset=".6" stop-color="rgb(132,251,67)" />
        <stop offset="1" stop-color="rgb(83,255,141)" />
      </linearGradient>
    </defs>
    <!-- LEFT DISK -->
    <g id="leftDisk">
      <!-- Big Piece -->
      <g id="leftPiece1">
        <path
          fill="rgb(66,113,35)"
          d="m40 46 1-1c-3-1-14 6-16 8-9 14 9 29 40 31 11 1 18 0 7-1-36-4-55-26-32-37Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="m40 46 1-1c-3-1-14 6-16 8-9 14 9 29 40 31 11 1 18 0 7-1-36-4-55-26-32-37Z"
        />
      </g>

      <!-- Small Piece -->
      <g id="leftPiece2">
        <path
          fill="rgb(66,113,35)"
          d="m69 44c0-2-9 2-13 5l-3 3s2 0 3-2l8-4 5-2Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="m69 44c0-2-9 2-13 5l-3 3s2 0 3-2l8-4 5-2Z"
        />
      </g>

      <!-- MediumPiece -->
      <g id="leftPiece3">
        <path
          fill="rgb(66,113,35)"
          d="M29 34c10-4 9-4-3-1-9 3-15 6-19 11l-1 1c4-3 14-8 23-11Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="M29 34c10-4 9-4-3-1-9 3-15 6-19 11l-1 1c4-3 14-8 23-11Z"
        />
      </g>
    </g>
    <!-- RIGHT DISK -->
    <g id="rightDisk">
      <!-- PIECE 1 -->
      <g id="rightPiece1">
        <path
          fill="rgb(66,113,35)"
          d="M207 87c3-3 3-3-3 0-5 3-23 9-33 11s-10 3 0 1c14-1 29-7 36-12Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="M207 87c3-3 3-3-3 0-5 3-23 9-33 11s-10 3 0 1c14-1 29-7 36-12Z"
        />
      </g>

      <!-- PIECE 2 -->
      <g id="rightPiece2">
        <path
          fill="rgb(66,113,35)"
          d="M190 50c-6-4-9-4-4 0 14 15-20 34-62 35h-6l4 1c40 8 91-18 68-36Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="M190 50c-6-4-9-4-4 0 14 15-20 34-62 35h-6l4 1c40 8 91-18 68-36Z"
        />
      </g>

      <!-- PIECE 3 -->
      <g id="rightPiece3">
        <path
          fill="rgb(66,113,35)"
          d="M228 35l-9-3-4-1 6 3c8 4 16 9 19 14s4 5 2 0c-1-4-8-10-14-13Z"
        />
        <path
          fill="rgb(175,216,75)"
          filter="url(#blur2_5)"
          d="M228 35l-9-3-4-1 6 3c8 4 16 9 19 14s4 5 2 0c-1-4-8-10-14-13Z"
        />
      </g>
    </g>
    <!-- CORE -->
    <g id="core">
      <ellipse
        cx="120"
        cy="57.2"
        rx="36.9"
        ry="15.4"
        transform="rotate(-1 120 57)"
        fill="rgba(175,216,75,0.3)"
        filter="url(#blur20_8)"
      />
      <path
        d="M151 64c1-3 0-6-2-9l-6-8-10-5a40 40 0 0 0-24-1l-10 4-8 8-2 9c1 8 18 16 43 12 11-2 14-5 19-10Z"
        fill="rgba(175,216,75,0.2)"
        filter="url(#blur3_1)"
      />
      <circle cx="119" cy="58" r="9" fill="url(#grad0)" />
      <circle
        cx="119"
        cy="58"
        r="9"
        fill="rgb(197,250,149)"
        filter="url(#blur2)"
      />
      <circle
        cx="119"
        cy="58"
        r="8.5"
        stroke="rgb(235,254,183)"
        filter="url(#blur2)"
      />
    </g>
  </svg>
</template>
