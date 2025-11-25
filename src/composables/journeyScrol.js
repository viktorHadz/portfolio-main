import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export function scrollLine() {
    const port = document.querySelector(".portal-scroll")
    const ball = document.querySelector("#ball")

    gsap.set(port, { x: 40, scaleY: 0 })
    gsap.set(ball, { x: 74, y: 40, scale: 0 })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".portal-scroll",
            scrub: 2,
            start: "top 50%",
            end: "bottom top",
        },
    })

    // Portal opens
    tl.to(port,
        {
            scaleY: 1.2,
            duration: 0.6,
            ease: "elastic.out(1, 0.8)",
        },
        "open"
    )
    tl.to(
        port,
        {
            scaleY: 1,
            duration: 0.2,
            ease: "power1.out",
        },
        "open+=0.5"
    )

    // Ball emerges
    tl.to(
        ball,
        {
            scale: 2,
            x: -50,
            y: 60,
            duration: 0.4,
            ease: "power2.out",
        },
        "open+=0.1"
    )

    // Portal closes
    tl.to(
        port,
        {
            scaleY: 0,
            duration: 0.3,
            ease: "power1.in",
        },
        "close"
    )

    //  Single ball motion
    tl.to(ball, {
        duration: 2,
        ease: "power1.inOut",
        scale: 0.2,
        motionPath: {
            path: [
                { x: -50, y: 20 },
                { x: -70, y: 200 },
                { x: 50, y: 330 },
                { x: 130, y: 350 }
            ],
            // curviness: 1.4,
            autoRotate: false
        }
    })
}
