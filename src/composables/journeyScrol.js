import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export function scrollLine() {
    const port = document.querySelector(".portal-scroll")

    gsap.set(port, { x: 40, scaleY: 0 })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".portal-scroll",
            scrub: 1.5,
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


}
