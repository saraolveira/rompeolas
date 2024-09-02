import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const Three = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })
    return (
        <div
            ref={container}
            className="top-[600vh] md:top-[450svh] left-0 absolute place-content-center gap-6 grid p-6 w-screen h-[screen] font-body text-3xl text-center text-supernova-400 italic"
        >
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="right-0 bottom-0 fixed flex flex-col justify-center gap-8 w-screen h-screen"
            >
                <div>pero tengo ganas de saltar</div>
                <div>
                    <Flip isInView={isInView}>
                        me&nbsp; da&nbsp; miedo&nbsp; caer
                    </Flip>
                </div>
                <div>es tan fácil hacer que nada parezca doler</div>
            </div>
        </div>
    )
}

const Flip = ({ children, isInView }) => {
    return (
        <motion.span className="block relative font-title text-4xl whitespace-nowrap overflow-hidden">
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        className="inline-block"
                        style={{
                            transform: isInView
                                ? "translateY(0)"
                                : "translateY(-100%)",
                            color: isInView ? "#fec922" : "#87480c",
                            transition: `all 0.5s ease-in-out ${0.1 * i}s`,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        style={{
                            transform: isInView
                                ? "translateY(100%)"
                                : "translateY(0)",
                            transition: `all 0.5s ease-in-out ${0.1 * i}s`,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.span>
    )
}

export default Three
