import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import unPax from "../assets/1pax.mov"
import dousPax from "../assets/2pax.mov"
import paxPoint from "../assets/paxpoint.mov"
import unPaxW from "../assets/1pax.webm"
import dousPaxW from "../assets/2pax.webm"
import paxPointW from "../assets/paxpoint.webm"

const Four = ({ supportsHEVCAlpha, ios }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })
    // const isInView = useInView(container, {
    //     margin: "0px 100px -200px 0px",
    // })

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <div className="mt-32 md:mt-96 w-screen h-[200vh]" ref={container}>
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="top-0 right-0 fixed flex flex-col justify-center gap-2 w-screen h-screen font-body font-bold text-3xl text-center text-supernova-400"
            >
                <div>dime si un día caigo en otra playa</div>
                <Write isInView={isInView}>
                    tu&nbsp; vendrías&nbsp; a&nbsp; verme
                </Write>
            </div>

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

const Write = ({ children, isInView }) => {
    return (
        <span className="block relative italic whitespace-nowrap overflow-hidden">
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        className="inline-block"
                        style={{
                            opacity: isInView ? "1" : "0",
                            transition: `all 0.5s ease-in-out ${0.1 * i}s`,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </span>
    )
}

export default Four
