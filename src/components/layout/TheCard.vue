<script setup>
import MenchDontKnow from '../svg/MenchDontKnow.vue'
defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
})
</script>
<template>
  <div class="group">
    <div
      class="bg-bg-prim border-brdr group-hover:border-acc-prim flex h-full w-full items-center rounded-2xl border p-4 text-center md:flex-col"
    >
      <div class="select-none group-hover:opacity-100 md:opacity-70">
        <slot name="graphic">
          <div>
            <MenchDontKnow></MenchDontKnow>
          </div>
        </slot>
        <h2 class="mt-8 text-3xl font-bold tracking-tight">{{ title ? title : 'Card Title' }}</h2>
        <hr class="group-hover:text-acc-prim mx-auto w-1/2 border-1" />
        <p class="text-fg-sec mt-2">
          {{ text ? text : 'Card body placeholder.' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 0 auto;
  background: var(--color-bg-prim);
  text-align: center;
  border-radius: 10px;
  position: relative;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.card::after {
  content: '';
  position: absolute;
  inset: -12px;
  background-image: conic-gradient(
    from var(--angle),
    var(--color-acc-prim) 0%,
    var(--color-bg-ter) 20%,
    var(--color-bg-ter) 50%,

    var(--color-acc-sec) 60%,
    var(--color-bg-ter) 70%
  );
  z-index: -1;
  border-radius: 12px; /* must match inset */
  animation: 5s spin linear infinite;
}
@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
</style>
