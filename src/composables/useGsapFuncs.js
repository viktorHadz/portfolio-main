import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import Draggable from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { portalState } from '@/stores/portalState'

gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin, ScrollTrigger)

export function withGsapContext(fns, scope) {
  const list = Array.isArray(fns) ? fns : [fns]
  return gsap.context(
    () => list.forEach((fn) => typeof fn === 'function' && fn()),
    scope,
  )
}

// --- Cards ---
// Full stack
export function floatUpDown(element, y, durrr) {
  return gsap.to(element, {
    y,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    duration: durrr,
  })
}
export function blink(element, opacityFill) {
  return gsap.to(element, {
    opacity: opacityFill,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'sine.inOut',
  })
}
// Easy to use
export function makeAssembleTimeline(pieceTop, bulbSelector, options = {}) {
  const tl = gsap.timeline({ paused: true })

  tl.fromTo(
    pieceTop,
    { x: 40, y: -5, rotate: 90 },
    { x: 0, y: 0, rotate: 0, duration: 1, ease: 'power2.out', ...options },
    0,
  )

  tl.fromTo(
    '#puzz-left',
    { x: -40, y: 130, rotate: -15 },
    { x: 0, y: 0, rotate: 0, duration: 1, ease: 'power2.out', ...options },
    0,
  )

  tl.fromTo(
    '#puzz-right',
    { x: -20, y: 60, rotate: -40 },
    { x: 0, y: 0, rotate: 0, duration: 1, ease: 'power2.out', ...options },
    0,
  )

  tl.to(
    `${bulbSelector} *`,
    { fill: '#ffeb58', duration: 1, ease: 'sine.inOut' },
    '<',
  )
  tl.to('#move-piece', {
    fill: '#a3d920',
    duration: 0.3,
    ease: 'power2',
  })

  return tl
}
// Rocket
export function flyRocket(rocketSelector) {
  const tl = gsap.timeline({ repeat: -1, yoyo: true })

  tl.to(rocketSelector, {
    y: -10,
    duration: 1.5,
    ease: 'sine.inOut',
  })

  gsap.to(rocketSelector, {
    rotation: 2,
    transformOrigin: '50% 50%',
    yoyo: true,
    repeat: -1,
    duration: 1.5,
    ease: 'sine.inOut',
  })

  return tl
}
export function flameFlicker(flameSelector) {
  return gsap.to(flameSelector, {
    scaleY: 1.1,
    scaleX: 0.9,
    transformOrigin: '50% 100%',
    yoyo: true,
    repeat: -1,
    duration: 0.4,
    ease: 'sine.inOut',
  })
}
export function riderBounce(characterSelector) {
  return gsap.to(characterSelector, {
    y: -3,
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    ease: 'sine.inOut',
  })
}

// --- Projects ---
/**
 * The key to motionPath working properly is setting each planet's start and end properties as dynamic. GSAP will then map them modulo and allow ffor values grater than 1...
 */
function createOrbitTimeline(planetSelector, pathSelector, duration, offset) {
  return gsap.to(planetSelector, {
    duration,
    ease: 'none',
    repeat: -1,
    id: `${planetSelector}-${pathSelector}`,
    motionPath: {
      path: pathSelector,
      align: pathSelector,
      alignOrigin: [0.5, 0.5],
      start: offset,
      end: 1 + offset,
    },
  })
}

function createHoverFx(el) {
  return gsap.timeline({ paused: true }).to(el, {
    scale: 1.3,
    rotation: 180,
    duration: 0.5,
    ease: 'power2.out',
  })
}

function createDraggable(el, orbitTimeline) {
  let savedProgress = 0

  const draggable = Draggable.create(el, {
    type: 'x,y',
    bounds: '#planet-drag-bound',
    inertia: true,
    edgeResistance: 0.9,
    activeCursor: 'grabbing',

    onPress(event) {
      event.target.setPointerCapture?.(event.pointerId)
    },

    onDragStart() {
      savedProgress = orbitTimeline.progress()
      orbitTimeline.pause()
      document.querySelector('#projects').style.pointerEvents = 'none'
      this.target.style.pointerEvents = 'auto'

      this.startX = this.x
      this.startY = this.y
    },

    onRelease() {
      document.querySelector('#projects').style.pointerEvents = 'auto'
      if (this.tween) this.tween.kill()

      gsap.to(this.target, {
        duration: 1.2,
        x: this.startX,
        y: this.startY,
        ease: 'elastic.out(1,0.3)',
        onComplete: () => {
          orbitTimeline.progress(savedProgress)
          orbitTimeline.resume()
        },
      })
    },
  })[0]

  draggable.disable()
  return draggable
}

// Main orchestrator
export function revolvePlanet(
  planetSelector,
  pathSelector,
  duration = 40,
  offset = 0,
) {
  const orbitTimeline = createOrbitTimeline(
    planetSelector,
    pathSelector,
    duration,
    offset,
  )

  const el = document.querySelector(planetSelector)
  if (!el) return orbitTimeline

  const hoverTl = createHoverFx(el)
  const draggable = createDraggable(el, orbitTimeline)

  // Hover handlers
  el.addEventListener('mouseenter', () => {
    draggable.enable()
    orbitTimeline.pause()
    el.classList.add('planet-hovered')
    hoverTl.play()
  })

  el.addEventListener('mouseleave', () => {
    draggable.disable()
    orbitTimeline.resume()
    el.classList.remove('planet-hovered')
    hoverTl.reverse()
  })

  return orbitTimeline
}

// --- Little mench ---
let littleMenchTl
export function showLitttleMench(
  menchSelector,
  handSelector,
  speechBubblePresent = false,
) {
  gsap.set(menchSelector, { opacity: 0, y: 50 })
  littleMenchTl?.kill() // kills the little mench if it exists - allows restart on click

  littleMenchTl = gsap.timeline({ paused: true })
  littleMenchTl.to(menchSelector, { opacity: 1, y: 0, duration: 0.3 })

  littleMenchTl.to(handSelector, {
    rotation: 20,
    transformOrigin: 'bottom, bottom',
    yoyo: true,
    repeat: 4,
    duration: 0.3,
  })

  if (speechBubblePresent) {
    littleMenchTl.fromTo(
      '#speech-bubble',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '<+=1',
    )
  }

  littleMenchTl.to(handSelector, { rotation: 90, x: -190, scale: 0.5 })

  if (speechBubblePresent) {
    littleMenchTl.to(
      '#speech-bubble',
      {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'back.in(2)',
      },
      '+=3.5',
    )
  }

  // mench hide after bubble out
  littleMenchTl.add(() => hideLittleMench(menchSelector, handSelector))

  return littleMenchTl.play()
}

export function hideLittleMench(menchSelector, handSelector) {
  const tl = gsap.timeline({ paused: true })
  tl.set(handSelector, { opacity: 0 })
  tl.to(menchSelector, { opacity: 0, y: 50, duration: 0.3 })
  tl.set(handSelector, { rotation: 0, x: 0, scale: 1, opacity: 1 })
  return tl.play()
}

// // public restart
// export function restartLittleMench() {
//   if (littleMenchTl) {
//     littleMenchTl.restart()
//     return littleMenchTl
//   } else {
//     return showLitttleMench('#little-mench', '#arm-rotate', true)
//   }
// }
// --- Lil Mench ---
let lilMenchTl
export function showLilMench(restart = false) {
  // clean up any existing
  if (restart && lilMenchTl) {
    lilMenchTl.restart()
    return lilMenchTl
  }
  if (lilMenchTl) lilMenchTl.kill()

  gsap.set('#lil-mench', { opacity: 0, y: 50, scale: 1 })
  gsap.set('#menchen-arm', { rotation: 0, x: 0, y: 5, scale: 0.9, opacity: 1 })
  gsap.set('#speech-bubble', { opacity: 0, scale: 0.5 })

  lilMenchTl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: {
      id: 'menchTrigger',
      trigger: '#lil-mench',
      start: 'top 80%',
      once: true,
    },
  })

  lilMenchTl
    .to('#lil-mench', { opacity: 1, y: 0, duration: 0.4 })
    .to(
      '#menchen-arm',
      {
        rotation: 20,
        transformOrigin: '10% 90%',
        yoyo: true,
        repeat: 3,
        duration: 0.25,
        ease: 'sine.inOut',
      },
      '-=0.1',
    )
    .to(
      '#speech-bubble',
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(2)',
      },
      '<+=0.1',
    )
    .to(
      '#menchen-eyes',
      {
        scaleY: 0.05,
        transformOrigin: 'center center',
        duration: 0.06,
        yoyo: true,
        repeat: 3,
        repeatDelay: 0.1,
        ease: 'power2.inOut',
      },
      '<+=0.3',
    )
    .to({}, { duration: 3 })
    .to('#menchen-arm', {
      rotation: 90,
      x: 0,
      y: 30,
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    })
    .to(
      ['#speech-bubble', '#lil-mench'],
      {
        opacity: 0,
        scale: 0.8,
        y: 60,
        duration: 0.6,
        ease: 'power1.inOut',
      },
      '<',
    )

  return lilMenchTl
}

// --- Obrit & Dragable ---
// export function orbitProject(el, pathSelector, duration, offset = 0) {
//   const buildOrbit = () =>
//     gsap.to(el, {
//       duration,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//       motionPath: {
//         path: pathSelector,
//         align: pathSelector,
//         alignOrigin: [0.5, 0.6],
//         start: offset,
//         end: offset + 1,
//       },
//     })

//   const orbitProxy = {
//     instance: null,
//     play() {
//       this.instance?.play()
//     },
//     pause() {
//       this.instance?.pause()
//     },
//     kill() {
//       this.instance?.kill()
//     },
//     totalProgress(v) {
//       if (v !== undefined) this.instance?.totalProgress(v)
//       return this.instance?.totalProgress()
//     },
//   }

//   orbitProxy.instance = buildOrbit()
//   let savedProgress = 0
//   let startX = 0
//   let startY = 0
//   let isDragging = false

//   Draggable.create(el, {
//     type: 'x,y',
//     inertia: true,
//     edgeResistance: 0.9,
//     activeCursor: 'grabbing',

//     onPress() {
//       isDragging = false
//     },
//     onDrag() {
//       isDragging = true
//     },
//     onDragStart() {
//       savedProgress = orbitProxy.instance.totalProgress()
//       startX = this.x
//       startY = this.y
//       orbitProxy.pause()
//     },
//     onRelease() {
//       if (isDragging) {
//         orbitProxy.kill()
//         gsap.to(el, {
//           x: startX,
//           y: startY,
//           duration: 1.2,
//           ease: 'elastic.out(1, 0.3)',
//           overwrite: 'auto',
//           onComplete: () => {
//             gsap.set(el, { x: 0, y: 0 })
//             orbitProxy.instance = buildOrbit()
//             orbitProxy.instance.totalProgress(savedProgress).play()
//           },
//         })
//       } else {
//         orbitProxy.play()
//       }
//     },
//   })

//   orbitProxy.play()
//   return orbitProxy
// }

// const planetOrbits = new Map()

// export function registerOrbit(el, orbit) {
//   planetOrbits.set(el, orbit)
// }

// --- Projects Portal ---
// export function openPortal(el, project) {
//   // if portal already open, ignore
//   if (portalState.isOpen) return

//   const orbit = planetOrbits.get(el)
//   if (orbit) orbit.pause()

//   portalState.open(project.name)
//   showPortalAnimation()
// }

// function showPortalAnimation() {
//   const modal = document.querySelector('#project-portal-modal')
//   if (!modal) return

//   gsap.fromTo(
//     modal,
//     {
//       opacity: 0,
//       scale: 0.5,
//       rotateZ: 45,
//       filter: 'hue-rotate(90deg) blur(4px)',
//     },
//     {
//       opacity: 1,
//       scale: 1,
//       rotateZ: 0,
//       filter: 'hue-rotate(0deg) blur(0)',
//       duration: 0.7,
//       ease: 'elastic.out(1, 0.5)',
//     }
//   )
// }

// export function closePortal() {
//   const modal = document.querySelector('#project-portal-modal')
//   if (!modal) return

//   gsap.to(modal, {
//     opacity: 0,
//     scale: 0.8,
//     rotateZ: -30,
//     duration: 0.5,
//     ease: 'power2.inOut',
//     onComplete: () => {
//       portalState.close()
//       resumeAllOrbits()
//     },
//   })
// }

// function resumeAllOrbits() {
//   planetOrbits.forEach((orbit) => {
//     if (orbit && orbit.instance && !orbit.instance.isActive()) {
//       orbit.play()
//     }
//   })
// }
