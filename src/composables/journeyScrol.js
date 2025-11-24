import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function scrollLine() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#beam-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
    })

    // Horizontal + grow
    tl.to("#beam-head", {
        x: 200,
        duration: 1,
        ease: "none",
    }, 0)
        .to("#beam-line", {
            width: 200,       // horizontal growth
            duration: 1,
            ease: "none",
        }, 0)

    // Pivot downward
    tl.to("#beam-container", {
        rotation: 90,
        transformOrigin: "left top",
        duration: 0.2,
        ease: "none"
    })

    // Vertical growth
    tl.to("#beam-head", {
        y: 400,
        duration: 1,
        ease: "none",
    })
        .to("#beam-line", {
            height: 400,       // vertical growth behind head
            duration: 1,
            ease: "none",
        }, "-=1")
}

