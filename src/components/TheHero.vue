<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { MorphSVGPlugin } from 'gsap/all'
import TheButton from '@/components/layout/TheButton.vue'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheSvgHero from '@/components/svg/TheSvgHero.vue'

// Register GSAP plugins
gsap.registerPlugin(Draggable, InertiaPlugin, MorphSVGPlugin)

// Template refs for GSAP animation
const greeting = ref(null)
const heroImage = ref(null)
const nameTitle = ref(null)
const description = ref(null)
const buttonGroup = ref(null)

// Reactive skill icons state
const skillsData = [
  { name: 'Vue.js', icon: '⚡', color: '#4FC08D' },
  { name: 'Node.js', icon: '🟢', color: '#68A063' },
  { name: 'Git', icon: '📁', color: '#F05032' },
  { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
]

onMounted(() => {
  // Create animation timeline
  const tl = gsap.timeline({ delay: 0.5 })

  // 1. greeting appears with fade up
  tl.to(greeting.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  })

    // 2. hero image scales in with bounce
    .to(
      heroImage.value,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      },
      '-=0.3',
    )

    // 3. Name appears with word animation
    .to(
      nameTitle.value,
      {
        opacity: 1,
        duration: 0.1,
      },
      '-=0.2',
    )
    .from(
      nameTitle.value.children,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.1',
    )

    // 4. Description slides up smoothly
    .to(
      description.value,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.4',
    )

    // 5. Buttons fade in last
    .to(
      buttonGroup.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.3',
    )
})
</script>

<template>
  <TheContainer
    width="full"
    :center-mobile="true"
    class="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
  >
    <!-- Single Column Centered Layout -->
    <div class="relative z-20 mx-auto w-full max-w-2xl space-y-12 text-center">
      <!-- Animated Hero Section -->
      <div class="space-y-8">
        <!-- Animated greeting and name -->
        <div class="space-y-4">
          <p
            ref="greeting"
            class="text-fg-sec text-sm font-medium tracking-wide opacity-0 sm:text-base"
          >
            Hi, I'm
          </p>

          <!-- Hero Image with better sizing -->
          <div
            ref="heroImage"
            class="mx-auto h-48 w-48 scale-95 opacity-0 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          >
            <TheSvgHero class="text-fg-prim h-full w-full" />
          </div>

          <!-- Name with character animation setup -->
          <h1
            ref="nameTitle"
            class="text-fg-prim text-4xl font-light tracking-tight opacity-0 sm:text-5xl lg:text-6xl"
          >
            <span class="inline-block">Viktor</span>
            <span class="ml-4 inline-block">Hadzhiyski</span>
          </h1>
        </div>

        <!-- Animated description -->
        <div ref="description" class="translate-y-4 transform opacity-0">
          <p
            class="text-fg-sec mx-auto max-w-lg text-lg leading-relaxed font-light sm:text-xl lg:text-2xl"
          >
            I love programming and building software
          </p>
        </div>
      </div>

      <!-- Clean Button Group -->
      <div
        ref="buttonGroup"
        class="flex translate-y-4 transform flex-col items-center justify-center gap-4 pt-8 opacity-0 sm:flex-row sm:gap-6"
      >
        <TheButton class="min-w-[140px]"> View My Work </TheButton>
        <TheButton variant="secondary" class="min-w-[140px]">
          Get In Touch
        </TheButton>
      </div>
    </div>
  </TheContainer>
</template>

<style scoped>
/* Optional: Add subtle animations for a polished feel */
h1 {
  animation: fadeInUp 0.8s ease-out;
}

p {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.space-y-12 > * + * {
  margin-top: 3rem;
}

@media (min-width: 640px) {
  .space-y-12 > * + * {
    margin-top: 3rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
