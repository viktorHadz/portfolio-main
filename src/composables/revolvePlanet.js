import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
gsap.registerPlugin(MotionPathPlugin)


export function revolvePlanet(selector, pathSelector, duration = 40, offset = 0) {
    const el = document.querySelector(selector)
    const ring = document.querySelector(pathSelector)
    const label = el?.querySelector(".project-label > div")
    // const initial = el?.querySelector(".planet-initial")
    const img = el?.querySelector(".planet-img")

    // if (!el || !ring || !label || !initial || !img) return
    if (!el || !ring || !label || !img) return

    // Orbit 
    const orbitTl = gsap.to(el, {
        duration,
        repeat: -1,
        ease: "none",
        motionPath: {
            path: pathSelector,
            align: pathSelector,
            alignOrigin: [0.5, 0.5],
            start: offset,
            end: offset + 1
        }
    })

    // Text label popup
    const labelTl = gsap.timeline({ paused: true })
        .fromTo(label,
            { opacity: 1, y: 0, scale: 0.7, },
            { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
        )
    const labelGlowTl = gsap.timeline({ paused: true })
        .to(label, {
            borderColor: "rgba(163, 217, 32, 0.8)",
            borderWidth: "2px",
            duration: 0.25,
            ease: "power2.out"
        })

    // Small initial fade
    // const initialTl = gsap.timeline({ paused: true })
    //     .to(initial, {
    //         opacity: 0,
    //         scale: 1.3,
    //         duration: 0.2,
    //         ease: "power1.out"
    //     })

    // Planet img hov
    const imgTl = gsap.timeline({ paused: true })
        .to(img, {

            // scale: 1.15,
            duration: 0.25,
            ease: "power2.out"
        })
        .to(img, {
            filter: "drop-shadow(0px 0px 14px #00ff75aa)",
            duration: 0.25,
            ease: "power2.out"
        }, 0)

    // Ring glow
    const brightenRing = () =>
        gsap.to(ring, { stroke: "#b2ff5f", strokeWidth: 2, duration: 0.25 })

    const dimRing = () =>
        gsap.to(ring, { stroke: "#7f7762", strokeWidth: 1, duration: 0.35 })

    // Events 
    el.addEventListener("pointerenter", () => {
        imgTl.play()
        labelTl.play()
        labelGlowTl.play()
        brightenRing()
        gsap.to(orbitTl, { timeScale: 0.3, duration: 0.3 })
    })

    el.addEventListener("pointerleave", () => {
        imgTl.reverse()
        labelTl.reverse()
        labelGlowTl.reverse()
        dimRing()
        gsap.to(orbitTl, { timeScale: 1, duration: 0.3 })
    })

    return orbitTl
}

