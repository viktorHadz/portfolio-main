import gsap from "gsap"

export function withGsapContext(fn, scope) {
    return gsap.context(fn, scope)
}

export function floatUpDown(element, y) {
    return gsap.to(element, {
        y,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1
    })
}

export function blink(element, opacityFill) {
    return gsap.to(element, {
        opacity: opacityFill,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut"
    })
}

export function makeAssembleTimeline(dynamicSelector, bulbSelector, options = {}) {
    const tl = gsap.timeline({ paused: true })

    tl.fromTo(dynamicSelector,
        { x: 40, y: 20, rotate: 90 }, // scrambled
        { x: 0, y: 0, rotate: 0, duration: 0.6, ease: "power2.out", ...options },
        0
    )

    tl.fromTo("#puzz-left",
        { x: -40, y: 60, rotate: -15 }, // scrambled
        { x: 0, y: 0, rotate: 0, duration: 0.6, ease: "power2.out", ...options },
        0
    )

    tl.fromTo("#puzz-right",
        { x: 20, y: 60, rotate: 10 }, // scrambled
        { x: 0, y: 0, rotate: 0, duration: 0.6, ease: "power2.out", ...options },
        0
    )

    tl.to(`${bulbSelector} *`,
        { fill: "#ffeb58", duration: 0.3 },
        "<" // start at same time
    )

    return tl
}



