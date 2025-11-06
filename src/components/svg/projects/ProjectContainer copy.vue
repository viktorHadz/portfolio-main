<script setup>
defineProps({ project: Object })
</script>

<template>
  <g :id="project.id" class="planet" cursor="pointer">
    <g class="planet-body">
      <image
        :href="project.icon"
        :width="project.size * 2"
        :height="project.size * 2"
        :x="-project.size"
        :y="-project.size"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>

    <text
      y="-38"
      text-anchor="middle"
      class="label fill-acc-prim text-base font-bold"
    >
      {{ project.name }}
    </text>
  </g>
</template>

<style scoped>
.label {
  paint-order: stroke;
  stroke-width: 2.5px;
  letter-spacing: 0.2px;
  pointer-events: none;
}
</style>
