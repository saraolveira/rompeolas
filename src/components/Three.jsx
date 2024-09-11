import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
// import caerUn from "../assets/caer1.mov"
import caerDous from "../assets/caer2.mov"
import caerTres from "../assets/caer3.mov"
import caerCatro from "../assets/caer4.mov"
// import caerUnW from "../assets/caer1.webm"
import caerDousW from "../assets/caer2.webm"
import caerTresW from "../assets/caer3.webm"
import caerCatroW from "../assets/caer4.webm"

const Three = ({ supportsHEVCAlpha, ios }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })
    return (
        <div
            ref={container}
            className="place-content-center gap-6 grid mt-32 md:mt-96 p-6 w-screen h-[200vh] font-body text-3xl text-center text-supernova-400 italic"
        >
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="right-0 bottom-0 z-10 fixed flex flex-col justify-center gap-8 w-screen h-screen"
            >
                <div>pero tengo ganas de saltar</div>
                <div>
                    <Flip isInView={isInView}>
                        me&nbsp; da&nbsp; miedo&nbsp; caer
                    </Flip>
                </div>
                <div>es tan fácil hacer que nada parezca doler</div>
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
                className="bottom-0 left-0 fixed h-64 md:h-[60vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={caerDous} type="video/quicktime"></source>
                ) : (
                    <source src={caerDousW} type="video/webm"></source>
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
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="-right-12 bottom-0 fixed h-72 md:h-[72vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={caerCatro} type="video/quicktime"></source>
                ) : (
                    <source src={caerCatroW} type="video/webm"></source>
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
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="-top-48 md:top-24 left-0 md:left-[60vh] fixed h-92 md:h-[92vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={caerTres} type="video/quicktime"></source>
                ) : (
                    <source src={caerTresW} type="video/webm"></source>
                )}
            </video>
        </div>
    )
}

const Flip = ({ children, isInView }) => {
    return (
        <motion.span className="block relative font-title text-4xl whitespace-nowrap overflow-hidden">
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        className="inline-block"
                        style={{
                            transform: isInView
                                ? "translateY(0)"
                                : "translateY(-100%)",
                            color: isInView ? "#fec922" : "#87480c",
                            transition: `all 0.5s ease-in-out ${0.1 * i}s`,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        style={{
                            transform: isInView
                                ? "translateY(100%)"
                                : "translateY(0)",
                            transition: `all 0.5s ease-in-out ${0.1 * i}s`,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.span>
    )
}

export default Three
