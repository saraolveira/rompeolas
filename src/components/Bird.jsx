import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

const Bird = () => {
    const model = useGLTF("./pigeon.glb")
    const animations = useAnimations(model.animations, model.scene)

    useEffect(() => {
        const action = animations.actions["Take 001"]
        // // action["_clip"].duration = 2
        // console.log(action["_clip"].duration)
        action.play()
    }, [])

    return (
        <primitive
            object={model.scene}
            scale={0.5}
            rotation-y={-0.6}
            position={[20, -10, 0]}
        />
    )
}

export default Bird
