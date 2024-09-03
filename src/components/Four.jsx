import { useRef } from "react"
import { useInView } from "framer-motion"
import unPax from "../assets/1pax.mov"
import dousPax from "../assets/2pax.mov"
import paxPoint from "../assets/paxpoint.mov"
import unPaxW from "../assets/1pax.webm"
import dousPaxW from "../assets/2pax.webm"
import paxPointW from "../assets/paxpoint.webm"

const Four = () => {
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
        <div className="mt-32 md:mt-96 w-screen h-[200vh]" ref={container}>
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
                className="-bottom-6 md:-bottom-10 -left-6 fixed h-1/2 md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={paxPoint} type="video/quicktime"></source>
                ) : (
                    <source src={paxPointW} type="video/webm"></source>
                )}
            </video>
            <video
                autoPlay
                loop
                playsInline
                muted
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="-top-20 md:right-[20vw] -left-20 fixed md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={unPax} type="video/quicktime"></source>
                ) : (
                    <source src={unPaxW} type="video/webm"></source>
                )}
            </video>
            <video
                autoPlay
                loop
                playsInline
                muted
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="top-10 md:top-0 -right-10 md:right-64 fixed md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={dousPax} type="video/quicktime"></source>
                ) : (
                    <source src={dousPaxW} type="video/webm"></source>
                )}
            </video>
        </div>
    )
}

export default Four
