import { useRef } from "react"
import { useInView } from "framer-motion"
import aste from "../assets/aste.mov"
import asteW from "../assets/aste.webm"

const Seven = ({ totalY, supportsHEVCAlpha, ios }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    return (
        <div className="w-screen h-[450vh] md:h-[250vh]" ref={container}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-72 md:top-4 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish"
                    d="M375.5 327.5s312.575-84.054 353-56c32.792 22.757 49.5 54 82 74 107.863 66.377 199.66-79.036 334.5-90.5 64.01-5.442 164.5 0 164.5 0l424.5 34"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={185 - totalY / 85 + "%"}
                    >
                        empiezo a nadar y del agua no sé salir
                    </textPath>
                </text>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-80 md:top-14 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish2"
                    d="M375.5 327.5s312.575-84.054 353-56c32.792 22.757 49.5 54 82 74 107.863 66.377 199.66-79.036 334.5-90.5 64.01-5.442 164.5 0 164.5 0l424.5 34"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish2"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={185 - totalY / 85 + "%"}
                    >
                        pongo buena cara, pero ya no sé fingir
                    </textPath>
                </text>
            </svg>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-[22rem] md:top-24 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish3"
                    d="M375.5 327.5s312.575-84.054 353-56c32.792 22.757 49.5 54 82 74 107.863 66.377 199.66-79.036 334.5-90.5 64.01-5.442 164.5 0 164.5 0l424.5 34"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish3"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={190 - totalY / 85 + "%"}
                    >
                        contra mí, va todo contra mí
                    </textPath>
                </text>
            </svg>
            <video
                autoPlay
                loop
                playsInline
                muted
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="right-0 md:right-[20vw] bottom-0 fixed md:h-screen pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={aste} type="video/quicktime"></source>
                ) : (
                    <source src={asteW} type="video/webm"></source>
                )}
            </video>
        </div>
    )
}

export default Seven
