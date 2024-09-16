import { useRef } from "react"
import { useInView } from "framer-motion"

const Seven = ({ totalY, supportsHEVCAlpha, ios }) => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })

    return (
        <div className="w-screen h-[450vh] md:h-[250vh]" ref={container}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-72 md:top-12 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish"
                    d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={190 - totalY / 85 + "%"}
                    >
                        empiezo a nadar y del agua no sé salir
                    </textPath>
                </text>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-80 md:top-32 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish2"
                    d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish2"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={190 - totalY / 85 + "%"}
                    >
                        pongo buena cara, pero ya no sé fingir
                    </textPath>
                </text>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1854 845"
                className="top-[22rem] md:top-52 -left-40 md:left-0 fixed w-screen scale-[2.5] md:scale-[1]"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                <path
                    id="curvish3"
                    d="M.172 624.33s284.862 40.275 459.884 0c284.459-65.456 296.504-421.56 617.214-421.56 320.71 0 340.88 369.117 776.56 409.458"
                ></path>

                <text className="font-body font-bold text-5xl md:text-3xl fill-red-orange-500">
                    <textPath
                        href="#curvish3"
                        // startOffset={100 - offset * 370 + "%"}
                        // startOffset={97 - totalY / 20 + "%"}
                        startOffset={195 - totalY / 85 + "%"}
                    >
                        contra mí, va todo contra mí
                    </textPath>
                </text>
            </svg>
            {/* <video
                autoPlay
                loop
                playsInline
                muted
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="right-0 md:right-[20vw] bottom-0 fixed md:h-[80vh] pointer-events-none"
            >
                {ios() || supportsHEVCAlpha() ? (
                    <source src={rompeolasMac} type="video/quicktime"></source>
                ) : (
                    <source src={romepolasVid} type="video/webm"></source>
                )}
            </video> */}
        </div>
    )
}

export default Seven
