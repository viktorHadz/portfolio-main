<template>
  <div class="bg-bg-prim flex min-h-screen items-center justify-center p-8">
    <div class="blob grad-tr-prim-sec relative"></div>
  </div>
</template>

<style scoped>
.blob {
  --size: ;
  --glow-spread: 22px;
  --inner-bloom: 18px;

  width: 13rem;
  height: 13rem;
  border-radius: 50%;

  will-change: border-radius, transform, filter;
  transform: translateZ(0);

  /* morph and wobble */
  animation:
    blob-morph 10s ease-in-out infinite alternate,
    blob-wobble 9s ease-in-out infinite;

  filter: drop-shadow(0 0 calc(var(--glow-spread) * 0.6) var(--color-acc-prim));

  /* Crisp edges and nicer color bleed on high-DPI */
  backface-visibility: hidden;
}

@keyframes blob-morph {
  0% {
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  }
  12.5% {
    border-radius: 46% 54% 66% 34% / 53% 67% 33% 47%;
  }
  25% {
    border-radius: 36% 64% 35% 65% / 43% 72% 28% 57%;
  }
  37.5% {
    border-radius: 76% 24% 47% 53% / 68% 29% 71% 32%;
  }
  50% {
    border-radius: 47% 53% 29% 71% / 73% 36% 64% 27%;
  }
  62.5% {
    border-radius: 88% 12% 49% 51% / 42% 78% 22% 58%;
  }
  75% {
    border-radius: 40% 60% 74% 26% / 64% 35% 65% 36%;
  }
  87.5% {
    border-radius: 35% 65% 27% 73% / 49% 81% 19% 51%;
  }
  100% {
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  }
}

@keyframes blob-wobble {
  0% {
    transform: translateZ(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateZ(0) rotate(2deg) scale(1.015);
  }
  50% {
    transform: translateZ(0) rotate(0deg) scale(1);
  }
  75% {
    transform: translateZ(0) rotate(-2deg) scale(0.985);
  }
  100% {
    transform: translateZ(0) rotate(0deg) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: blob-morph 16s ease-in-out infinite paused;
  }
  .blob::before,
  .blob::after {
    filter: none;
  }
}
</style>
