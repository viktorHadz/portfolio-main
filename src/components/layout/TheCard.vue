<script setup></script>
<template>
  <div class="card max-w-3xs p-4">
    <h2 class="text-2xl font-bold tracking-tight">Animate Borders</h2>
    <p class="mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem
      ullam et, natus impedit quae veniam optio a doloremque officiis beatae, itaque nesciunt
      nostrum quasi molestiae laudantium dolor asperiores soluta sint sed ratione cupiditate.
      Laudantium earum reiciendis enim.
    </p>
  </div>
</template>

<style scoped>
.card {
  margin: 0 auto;
  width: 300px;
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
.card::after,
.card::before {
  content: '';
  position: absolute;
  inset: -2px; /* expands outward evenly */
  background-image: conic-gradient(
    from var(--angle),
    var(--color-acc-prim) 0%,
    var(--color-bg-ter) 20%,
    var(--color-bg-ter) 50%,

    var(--color-acc-sec) 60%,
    var(--color-bg-ter) 70%
  );
  z-index: -1;
  border-radius: 12px; /* slightly larger to match expansion */
  animation: 5s spin linear infinite;
}
/* .card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
} */
@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
</style>
