<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { MorphSVGPlugin } from 'gsap/all'
import TheButton from '@/components/layout/TheButton.vue'
import TheContainer from '@/components/layout/TheContainer.vue'
import TheSvgHero from '@/components/svg/TheSvgHero.vue'

gsap.registerPlugin(Draggable, InertiaPlugin, MorphSVGPlugin)

// GSAP animation template refs
const heroImage = ref(null)
const nameTitle = ref(null)
const description = ref(null)
const buttonGroup = ref(null)

const skillsData = [
  { name: 'Vue.js', icon: '⚡', color: '#4FC08D' },
  { name: 'Node.js', icon: '🟢', color: '#68A063' },
  { name: 'Git', icon: '📁', color: '#F05032' },
  { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
]

onMounted(() => {
  gsap.set([heroImage.value, nameTitle.value, description.value, buttonGroup.value], {
    opacity: 1,
    y: 0,
    scale: 1,
    rotationX: 0,
  })

  // Create floating particles effect
  const createParticles = () => {
    const particles = []
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute size-2 bg-acc-prim rounded-full opacity-70'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      heroImage.value.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    gsap.to(particles, {
      duration: 3,
      x: () => (Math.random() - 0.5) * 200,
      y: () => (Math.random() - 0.5) * 200,
      opacity: 0,
      scale: () => Math.random() * 2 + 0.5,
      ease: 'power2.out',
      stagger: 0.1,
      onComplete: () => particles.forEach((p) => p.remove()),
    })
  }

  // Main animation sequence
  const tl = gsap.timeline({ delay: 0.4 })

  // 1. Greeting materializes
  tl.fromTo(
    heroImage.value,
    { opacity: 0, scale: 0, rotation: -180 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.4,
      ease: 'elastic.out(1, 0.6)',
      onStart: createParticles,
    },
    '-=0.2',
  )

    // 2. Hero image dramatic entrance with particles
    // .fromTo(
    //   heroImage.value,
    //   { opacity: 0, scale: 0, rotation: -180 },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     rotation: 0,
    //     duration: 1.4,
    //     ease: 'elastic.out(1, 0.6)',
    //     onStart: createParticles,
    //     onComplete: () => {
    //       // Trigger SVG smile + return to neutral
    //       const svg = heroImage.value?.querySelector('svg')
    //       if (svg) {
    //         svg.dispatchEvent(new CustomEvent('smile'))
    //         setTimeout(() => {
    //           svg.dispatchEvent(new CustomEvent('neutral'))
    //         }, 2000)
    //       }
    //     },
    //   },
    //   '-=0.2',
    // )

    // 3. Name letters cascade with morphing effect
    .to(nameTitle.value, { opacity: 1, duration: 0.1 }, '-=0.8')
    .fromTo(
      nameTitle.value.children,
      { opacity: 0, y: 50, rotationY: -90, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'back.out(1.4)',
      },
      '-=0.1',
    )

    // 4. Description slides with wave effect
    .fromTo(
      description.value,
      { opacity: 0, y: 30, skewX: -10 },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 1,
        ease: 'power3.out',
      },

      '-=0.6',
    )

    // 5. Buttons bounce in with hover preparation
    .fromTo(
      buttonGroup.value,
      { opacity: 0, y: 40, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.5)',
      },
      '-=0.4',
    )
})
</script>

<template>
  <TheContainer
    width="full"
    :center-mobile="true"
    class="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
  >
    <div class="relative z-20 mx-auto w-full max-w-2xl text-center">
      <!-- SVG HERO -->
      <!-- Greeting -->
      <div class="space-y-4">
        <div
          ref="heroImage"
          class="mx-auto h-48 w-48 scale-95 opacity-0 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
        >
          <TheSvgHero class="text-fg-prim h-full w-full" />
        </div>

        <h1
          ref="nameTitle"
          class="text-fg-prim text-4xl font-light tracking-tight opacity-0 sm:text-5xl lg:text-6xl"
        >
          <div class="grad-tr-prim-sec inline-block bg-clip-text pb-1 text-transparent">
            Hi, my name is Viktor
          </div>
        </h1>
      </div>

      <div ref="description" class="translate-y-4 transform opacity-0">
        <div class="mx-auto max-w-lg text-lg leading-relaxed font-light sm:text-xl lg:text-2xl">
          ...and I love programming and building software
        </div>
      </div>

      <div
        ref="buttonGroup"
        class="flex translate-y-4 transform flex-col items-center justify-center gap-4 pt-8 opacity-0 sm:flex-row sm:gap-6"
      >
        <TheButton variant="primary" class=""> View My Work </TheButton>
        <TheButton variant="secondary" class=""> Get In Touch </TheButton>
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
