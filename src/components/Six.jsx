import { useRef } from "react"
import { useInView } from "framer-motion"

const Six = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    return (
        <div className="mt-32 md:mt-96 w-screen h-[300vh]" ref={container}>
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="top-0 right-0 fixed flex flex-col justify-center gap-2 p-2 w-screen h-screen font-body font-bold text-3xl text-center text-red-orange-500"
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
        </div>
    )
}

export default Six
