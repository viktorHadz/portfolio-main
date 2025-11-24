<script setup>
defineProps({
  project: Object,
})
</script>

<template>
  <g
    :id="project.id"
    class="planet group cursor-pointer select-none"
    overflow="visible"
  >
    <!-- LABEL -->
    <foreignObject
      x="-60"
      y="-85"
      width="120"
      height="36"
      class="project-label pointer-events-none"
    >
      <div
        class="pointer-events-none flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 text-[0.75rem] font-semibold tracking-wide text-white"
      >
        {{ project.name }}
      </div>
    </foreignObject>

    <!-- PLANET ICON -->
    <image
      :href="project.icon"
      :width="project.size * 2"
      :height="project.size * 2"
      :x="-project.size"
      :y="-project.size"
      class="planet-img"
    />
    <!-- TINY INITIAL IN PLANET -->
    <!-- <text
      class="planet-initial pointer-events-none fill-black text-[0.8rem]"
      text-anchor="middle"
    >
      <tspan
        v-for="(word, i) in project.name.split(' ')"
        :key="i"
        x="0"
        y="-3"
        :dy="i === 0 ? 0 : '1.2em'"
      >
        {{ word }}
      </tspan>
    </text> -->
  </g>
</template>
