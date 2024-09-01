import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { ReactLenis } from "lenis/react"
import Experience from "./components/Experience.jsx"
import Content from "./components/Content.jsx"

const App = () => {
    const [offset, setOffset] = useState(0)

    const [totalY, setTotalY] = useState(0)
    const { scrollYProgress } = useScroll()
    const { scrollY } = useScroll()
    const [rompeolasColor, setRompeolasColor] = useState("#fec922")
    const [rompeolasOpacity, setRompeolasOpacity] = useState(1)

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.04, 0.06, 0.5, 0.53, 0.7, 0.73],
        [
            "#fec922",
            "#fec922",
            "#8fb4d2",
            "#8fb4d2",
            "#fc2124",
            "#fc2124",
            "#8fb4d2",
        ]
    )

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.04, 0.06, 0.5, 0.53, 0.7, 0.73],
        ["1", "1", "0.2", "0.2", "1", "1", "1"]
    )

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setOffset(latest)
    })

    useMotionValueEvent(scrollY, "change", (latest) => {
        setTotalY(latest)
    })

    useMotionValueEvent(textColor, "change", (latest) => {
        setRompeolasColor(latest)
    })
    useMotionValueEvent(opacity, "change", (latest) => {
        setRompeolasOpacity(latest)
    })

    return (
        <ReactLenis root>
            <Canvas
                className="!fixed !w-screen !h-screen"
                camera={{
                    position: [0, 5, 100],
                    fov: 55,
                    near: 1,
                    far: 20000,
                }}
            >
                <Experience
                    offset={offset}
                    rompeolasColor={rompeolasColor}
                    rompeolasOpacity={rompeolasOpacity}
                />
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
