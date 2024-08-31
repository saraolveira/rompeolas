import * as THREE from "three"
import React, { useEffect, useMemo, useState } from "react"
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber"
import { Water } from "three/examples/jsm/objects/Water.js"

extend({ Water })
const Ocean = ({ ocean, offset }) => {
    const gl = useThree((state) => state.gl)

    const [waterColor, setWaterColor] = useState(0x8fb4d2)
    const [sunColor, setSunColor] = useState(0xf9f2cc)

    const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpg")
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
        () => ({
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: sunColor,
            waterColor: waterColor,
            distortionScale: 50.0,
            alpha: 1.0,
            fog: false,
            format: gl.encoding,
        }),
        [waterNormals, waterColor]
    )

    useFrame((state, delta) => {
        ocean.current.material.uniforms.time.value += delta
        ocean.current.material.uniforms.size.value = 1 + offset * 2
        if (offset > 0.5) {
            setWaterColor(0xfa2125)
            setSunColor(0x3b4d6d)
        }

        if (offset < 0.5) {
            setWaterColor(0x8fb4d2)
            setSunColor(0xf9f2cc)
        }
    })

    return (
        <water
            ref={ocean}
            args={[geom, config]}
            rotation-x={-Math.PI / 2}
            className="ocean"
        />
    )
}

export default Ocean
