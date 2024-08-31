import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import romepolasVid from "../assets/rompeolasStart.webm"

const Two = ({ offset, totalY }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    return (
        <div className="top-[100svh] left-0 absolute w-screen h-[250svh]">
            <div className="h-[200svh]" ref={container}>
                {/* <p>
                "todavía noto el calor de mi piel", "como si fuera ayer", "mi
                manera de ser", "viendo como todo está a punto de torcer", Pero
                tengo ganas de saltar Me da miedo caer Es tan fácil hacer que
                nada parezca doler
            </p> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1854 845"
                    className="top-12 left-0 fixed w-screen"
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                >
                    <path
                        id="curve"
                        d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                    ></path>

                    <text className="font-body text-3xl fill-supernova-400">
                        <textPath
                            href="#curve"
                            // startOffset={100 - offset * 370 + "%"}
                            startOffset={97 - totalY / 20 + "%"}
                        >
                            todavía noto el calor de mi
                            piel,&nbsp;&nbsp;&nbsp;&nbsp; como si fuera
                            ayer,&nbsp;&nbsp;&nbsp;&nbsp; en mi manera de
                            ser,&nbsp;&nbsp;&nbsp;&nbsp; viendo como todo está a
                            punto de torcer
                        </textPath>
                    </text>
                </svg>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        transform: isInView ? "none" : "translateY(200px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                    }}
                    className="right-0 bottom-0 fixed h-[80svh] pointer-events-none"
                >
                    <source src={romepolasVid} type="video/webm"></source>
                </video>
            </div>
        </div>
    )
}

export default Two
