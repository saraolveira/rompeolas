import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import Bird from "./Bird.jsx"
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

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    return (
        <div className="mt-32 md:mt-96 w-screen h-[200vh]" ref={container}>
            <Canvas
                className="top-0 left-0 !fixed !w-screen !h-screen"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                camera={{
                    position: [0, 5, 100],
                    fov: 55,
                    near: 1,
                    far: 20000,
                }}
            >
                <Bird />
                {/* <ambientLight intensity={0.7} />
                <directionalLight position={[0, 0, 10]} /> */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI * 0.47}
                    maxPolarAngle={Math.PI * 0.495}
                />
                <Environment preset="sunset" environmentIntensity={0.5} />
            </Canvas>
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="top-0 right-0 fixed flex flex-col justify-center gap-2 w-screen h-screen font-body font-bold text-3xl text-center text-supernova-400"
            >
                <div>soy como una ola</div>
                <div className="italic">no sé cuando pero voy a romperme</div>
                <div>dime si un día caigo en otra playa</div>
                <Write isInView={isInView}>
                    tú&nbsp; vendrías&nbsp; a&nbsp; verme
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
                className="top-10 md:-top-20 -right-10 md:right-36 fixed md:h-[80vh] pointer-events-none"
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
