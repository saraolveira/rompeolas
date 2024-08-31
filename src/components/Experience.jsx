import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls, Sky, Text3D, Center, Float } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import Ocean from "./Ocean.jsx"

const Experience = ({ offset }) => {
    const [sunPosition, setSunPosition] = useState([1500, 100, -1000])
    const [rayleigh, setRayleigh] = useState(0.3)
    const ocean = useRef()

    useFrame(() => {
        if (offset > 0.5) {
            setSunPosition([1500, -2, -1000])
            setRayleigh(0.1)
        }

        if (offset < 0.5) {
            setSunPosition([1500, 100, -1000])
            setRayleigh(0.3)
        }
    })

    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight position={[0, 0, 10]} />
            <Ocean ocean={ocean} offset={offset} />
            <Sky
                scale={1000}
                sunPosition={sunPosition}
                turbidity={0.1}
                rayleigh={rayleigh}
            />
            <motion.group position={[0, 2 + offset * 600, 0]}>
                {/* <motion.group position={[0, 2, 7 - offset * 700]}> */}
                <Center top>
                    <Float speed={3} rotationIntensity={1.2}>
                        <Text3D
                            font="/fonts/permanent-marker.json"
                            size={7}
                            height={2}
                        >
                            rompeolas
                            <meshStandardMaterial color="#fec922" />
                        </Text3D>
                    </Float>
                </Center>
            </motion.group>

            {/* <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI * 0.47}
                maxPolarAngle={Math.PI * 0.495}
            /> */}
        </>
    )
}

export default Experience
