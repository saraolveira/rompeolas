import { useRef } from "react"
import { useInView } from "framer-motion"
import publico from "../assets/publico.mov"
import publicoW from "../assets/publico.webm"
import jere from "../assets/jere.mov"

const Six = ({ supportsHEVCAlpha, ios }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    return (
        <div className="mt-32 md:mt-96 w-screen h-[300vh]" ref={container}>
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="top-20 md:top-44 right-0 z-10 fixed flex flex-col justify-center gap-2 p-2 w-screen font-body font-bold text-3xl text-center text-red-orange-500"
            >
                <div
                    style={{
                        transform: isInView
                            ? "translateX(0px)"
                            : "translateX(-1000px)",
                        transition:
                            "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                >
                    rompiendo con todo o va todo contra mí
                </div>
                <div
                    style={{
                        transform: isInView
                            ? "translateX(0px)"
                            : "translateX(1000px)",
                        transition:
                            "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                >
                    cuando me despierte que sueño se va a cumplir
                </div>
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
                className="bottom-0 md:-bottom-10 fixed md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={publico} type="video/quicktime"></source>
                ) : (
                    <source src={publicoW} type="video/webm"></source>
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
                className="-right-24 bottom-0 md:-bottom-10 md:left-[25vw] fixed md:h-screen pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={jere} type="video/quicktime"></source>
                ) : (
                    <source src={jere} type="video/webm"></source>
                )}
            </video>
        </div>
    )
}

export default Six
