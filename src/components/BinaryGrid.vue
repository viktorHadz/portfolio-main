<!-- BinaryCanvasGrid.vue (lean) -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// function handleWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
// }
// window.addEventListener('resize', handleWindowResize, false)

const props = defineProps({
  cellSize: { type: Number, default: 32 }, // px per cell
  fps: { type: Number, default: 10 }, // flips per second
  flipFraction: { type: Number, default: 0.01 }, // % of cells flipped per tick
  color0: { type: String, default: 'hsl(153, 48%, 49%)' },
  color1: { type: String, default: 'hsl(153, 48%, 49%)' },
  bg: { type: String, default: 'transparent' }, // e.g. 'rgba(0,0,0,0.1)'
  weight: { type: String, default: '600' },
})

const canvas = ref(null)
let ctx, W, H, R, C, dpr, bits, timer, ro

function fit() {
  const el = canvas.value
  const rect = (el.parentElement || el).getBoundingClientRect()
  dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)) // cap DPR
  W = Math.max(1, Math.floor(rect.width))
  H = Math.max(1, Math.floor(rect.height))
  const cs = Math.max(8, props.cellSize)
  C = Math.max(1, Math.floor(W / cs))
  R = Math.max(1, Math.floor(H / cs))

  el.width = Math.floor(W * dpr)
  el.height = Math.floor(H * dpr)
  el.style.width = `${W}px`
  el.style.height = `${H}px`

  ctx = el.getContext('2d', { alpha: true, desynchronized: true })
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const cellW = W / C,
    cellH = H / R
  const fontPx = Math.floor(Math.min(cellW, cellH) * 0.9)
  ctx.font = `${props.weight} ${fontPx}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
}

function drawAll() {
  if (props.bg !== 'transparent') {
    ctx.fillStyle = props.bg
    ctx.fillRect(0, 0, W, H)
  } else {
    ctx.clearRect(0, 0, W, H)
  }
  const cellW = W / C,
    cellH = H / R,
    cx = cellW * 0.5,
    cy = cellH * 0.5
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const i = r * C + c
      ctx.fillStyle = bits[i] ? props.color1 : props.color0
      ctx.fillText(bits[i], c * cellW + cx, r * cellH + cy)
    }
  }
}

function drawCell(i) {
  const r = (i / C) | 0,
    c = i - r * C
  const cellW = W / C,
    cellH = H / R
  const x = c * cellW,
    y = r * cellH

  // clear cell
  if (props.bg !== 'transparent') {
    ctx.fillStyle = props.bg
    ctx.fillRect(x, y, cellW, cellH)
  } else {
    ctx.clearRect(x, y, cellW, cellH)
  }
  // draw bit
  ctx.fillStyle = bits[i] ? props.color1 : props.color0
  ctx.fillText(bits[i], x + cellW * 0.5, y + cellH * 0.5)
}

onMounted(() => {
  fit()
  // seed once
  bits = new Uint8Array(R * C)
  for (let i = 0; i < bits.length; i++) bits[i] = Math.random() < 0.5 ? 0 : 1
  drawAll()

  // flip a tiny random subset each tick (partial redraw only)
  const perTick = () => Math.max(1, Math.floor(bits.length * props.flipFraction))
  const ms = Math.max(16, Math.floor(1000 / props.fps))
  timer = setInterval(() => {
    const flips = perTick()
    for (let k = 0; k < flips; k++) {
      const i = (Math.random() * bits.length) | 0
      bits[i] ^= 1
      drawCell(i)
    }
  }, ms)

  // responsive refit without DOM churn; try to preserve pattern
  ro = new ResizeObserver(() => {
    const prev = { bits, R, C }
    fit()
    const nextBits = new Uint8Array(R * C)
    // map old bits into new grid region
    if (prev.bits) {
      const minR = Math.min(prev.R, R),
        minC = Math.min(prev.C, C)
      for (let r = 0; r < minR; r++)
        for (let c = 0; c < minC; c++) nextBits[r * C + c] = prev.bits[r * prev.C + c]
    } else {
      for (let i = 0; i < nextBits.length; i++) nextBits[i] = Math.random() < 0.5 ? 0 : 1
    }
    bits = nextBits
    drawAll()
  })
  ro.observe(canvas.value.parentElement || canvas.value)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (ro) ro.disconnect()
})
</script>

<template>
  <canvas ref="canvas" class="block h-full w-full"></canvas>
</template>
