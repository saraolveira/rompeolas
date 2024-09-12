import { useRef } from "react"
import { useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import Monedas from "./Monedas.jsx"

const Five = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    return (
        <div className="mt-32 md:mt-96 w-screen h-[200vh]" ref={container}>
            <Canvas
                className="top-[20vh] md:top-0 left-0 !fixed !w-screen !h-[60vh] md:!h-screen"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                    zIndex: isInView ? 10 : 0,
                    pointerEvents: isInView ? "all" : "none",
                }}
                camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }}
            >
                <Monedas />
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
                <div>soy como una moneda de cobre tirada en una fuente</div>
                <div>espero al deseo</div>
                <div className="italic">impaciente</div>
            </div>
        </div>
    )
}

export default Five
