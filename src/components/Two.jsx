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
            className="top-[100svh] left-0 absolute w-screen h-[250svh]"
            ref={container}
        >
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
                className="right-0 md:right-[10vw] bottom-0 fixed md:h-[80vh] pointer-events-none"
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
