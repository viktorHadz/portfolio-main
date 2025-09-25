import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

// Provide Gsap context
export function withGsapContext(fn, scope) {
  return gsap.context(fn, scope)
}

// Full stack
export function floatUpDown(element, y, dur) {
  return gsap.to(element, {
    y,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    duration: dur,
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
// Rocket stuff
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


// Projects 

export function revolveTween(planets, path, startPos) {
  return gsap.to(planets, {
    transformOrigin: '50% 50%',
    duration: 5,
    ease: 'none',
    repeat: -1,
    motionPath: {
      path: path,
      start: startPos,
      alignOrigin: [0.5, 0.5],
      align: '#outer-ring',
      autoRotate: true,
    },
  })
}