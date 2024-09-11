import { useRef, useMemo } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { BallCollider, Physics, RigidBody } from "@react-three/rapier"

const Monedas = () => {
    return (
        <Physics timeStep="vary" gravity={[0, 0, 0]}>
            <Pointer />
            {[...Array(30)].map((a, i) => (
                <Moneda key={i} />
            ))}
        </Physics>
    )
}

const Moneda = ({
    position,
    vec = new THREE.Vector3(),

    r = THREE.MathUtils.randFloatSpread,
}) => {
    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/coin/model.gltf"
    )

    const { nodes, materials } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/coin/model.gltf"
    )

    const api = useRef()
    const ref = useRef()
    const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
    useFrame((state, delta) => {
        delta = Math.min(0.1, delta)
        api.current?.applyImpulse(
            vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
        )
        ref.current.rotation.x += delta
    })

    return (
        <RigidBody
            linearDamping={4}
            angularDamping={1}
            friction={0.1}
            position={pos}
            ref={api}
            colliders={false}
        >
            <BallCollider args={[1]} />

            <mesh
                ref={ref}
                castShadow
                receiveShadow
                geometry={nodes.coin.geometry}
                material={materials["Gold.009"]}
                scale={1.5}
            >
                {/* <sphereGeometry args={[1, 64, 64]} scale={20} /> */}
            </mesh>
        </RigidBody>
    )
}

const Pointer = ({ vec = new THREE.Vector3() }) => {
    const ref = useRef()
    useFrame(({ mouse, viewport }) =>
        ref.current?.setNextKinematicTranslation(
            vec.set(
                (mouse.x * viewport.width) / 2,
                (mouse.y * viewport.height) / 2,
                0
            )
        )
    )
    return (
        <RigidBody
            position={[0, 0, 0]}
            type="kinematicPosition"
            colliders={false}
            ref={ref}
        >
            <BallCollider args={[1]} />
        </RigidBody>
    )
}

export default Monedas
