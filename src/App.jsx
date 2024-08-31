import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { ReactLenis } from "lenis/react"
import Experience from "./components/Experience.jsx"
import Content from "./components/Content.jsx"

const App = () => {
    const [offset, setOffset] = useState(0)
    const [totalY, setTotalY] = useState(0)
    const { scrollYProgress } = useScroll()
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setOffset(latest)
    })

    useMotionValueEvent(scrollY, "change", (latest) => {
        setTotalY(latest)
    })

    return (
        <ReactLenis root>
            <Canvas
                className="!fixed !w-screen !h-svh"
                camera={{
                    position: [0, 5, 100],
                    fov: 55,
                    near: 1,
                    far: 20000,
                }}
            >
                <ScrollControls>
                    <Experience offset={offset} />
                </ScrollControls>
            </Canvas>
            <Content
                scrollYProgress={scrollYProgress}
                offset={offset}
                totalY={totalY}
            />
        </ReactLenis>
    )
}

export default App
