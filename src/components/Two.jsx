import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import romepolasVid from "../assets/rompeolasStart.webm"
import rompeolasMac from "../assets/rompeolasStart.mov"

const Two = ({ totalY }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })
    // const isInView = useInView(container, {
    //     margin: "0px 100px -200px 0px",
    // })

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    const supportsHEVCAlpha = () => {
        const navigator = window.navigator
        const ua = navigator.userAgent.toLowerCase()
        const hasMediaCapabilities = !!(
            navigator.mediaCapabilities &&
            navigator.mediaCapabilities.decodingInfo
        )
        const isSafari =
            ua.indexOf("safari") != -1 &&
            !(ua.indexOf("chrome") != -1) &&
            ua.indexOf("version/") != -1
        return isSafari && hasMediaCapabilities
    }

    const ios = () => {
        if (typeof window === `undefined` || typeof navigator === `undefined`)
            return false

        return /iPhone|iPad|iPod/i.test(
            navigator.userAgent ||
                navigator.vendor ||
                (window.opera && opera.toString() === `[object Opera]`)
        )
    }

    return (
        <div
            className="top-[100svh] left-0 absolute w-screen h-[450svh] md:h-[250svh]"
            ref={container}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-72 md:top-12 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curve"
                    d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                ></path>

                <text className="font-body text-5xl md:text-3xl fill-supernova-400">
                    <textPath
                        href="#curve"
                        // startOffset={100 - offset * 370 + "%"}
                        startOffset={97 - totalY / 20 + "%"}
                    >
                        todavía noto el calor de mi piel&nbsp;&nbsp;&nbsp;&nbsp;
                        como si fuera ayer&nbsp;&nbsp;&nbsp;&nbsp; en mi manera
                        de ser&nbsp;&nbsp;&nbsp;&nbsp; viendo como todo está a
                        punto de torcer
                    </textPath>
                </text>
            </svg>
            <video
                autoPlay
                loop
                playsInline
                muted
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="right-0 md:right-[20vw] bottom-0 fixed md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={rompeolasMac} type="video/quicktime"></source>
                ) : (
                    <source src={romepolasVid} type="video/webm"></source>
                )}
            </video>
        </div>
    )
}

export default Two
