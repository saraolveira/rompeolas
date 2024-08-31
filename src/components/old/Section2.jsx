import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import romepolasVid from "../assets/rompeolasStart.webm"
const Section2 = ({ offset }) => {
    const sec2 = useRef(null)
    const isInView = useInView(sec2)

    const frases = [
        "todavía noto el calor de mi piel",
        "como si fuera ayer",
        "mi manera de ser",
        "viendo como todo está a punto de torcer",
    ]

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <div className="w-screen !h-svh" ref={sec2}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-36 left-0 absolute w-screen"
            >
                <path
                    id="curve"
                    d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                ></path>

                <text className="font-body text-3xl fill-supernova-400">
                    {frases.reverse().map((frase, i) => {
                        return (
                            <textPath
                                key={i}
                                href="#curve"
                                startOffset={-40 + i * 20 + offset * 80 + "%"}
                            >
                                {frase}
                            </textPath>
                        )
                    })}
                </text>
            </svg>
            <video
                autoPlay
                loop
                muted
                className="right-0 bottom-0 absolute h-[80svh] pointer-events-none"
            >
                <source src={romepolasVid} type="video/webm"></source>
            </video>
        </div>
    )
}

export default Section2
