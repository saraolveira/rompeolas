import ScrollSection from "./ScrollSection.jsx"
import Section1 from "./Section1.jsx"
import Section2 from "./Section2.jsx"
import romepolasVid from "../assets/rompeolasStart.webm"
const ScrollSections = ({ offset }) => {
    return (
        <>
            <Section1 />

            <Section2 offset={offset} />

            <ScrollSection>
                <div className="border-8 w-screen !h-[100svh]">
                    <p>
                        Todavía noto el calor de mi piel Como si fuera ayer Mi
                        manera de ser Viendo como todo está a punto de torcer
                        Pero tengo ganas de saltar Me da miedo caer Es tan fácil
                        hacer que nada parezca doler
                    </p>
                    <video
                        autoPlay
                        loop
                        muted
                        className="right-0 bottom-0 absolute h-[80svh] pointer-events-none"
                    >
                        <source src={romepolasVid} type="video/webm"></source>
                    </video>
                </div>
            </ScrollSection>
            <ScrollSection>
                <div className="border-8 w-screen !h-[100svh]">
                    <p>
                        Todavía noto el calor de mi piel Como si fuera ayer Mi
                        manera de ser Viendo como todo está a punto de torcer
                        Pero tengo ganas de saltar Me da miedo caer Es tan fácil
                        hacer que nada parezca doler
                    </p>
                    <video
                        autoPlay
                        loop
                        muted
                        className="right-0 bottom-0 absolute h-[80svh] pointer-events-none"
                    >
                        <source src={romepolasVid} type="video/webm"></source>
                    </video>
                </div>
            </ScrollSection>
            <ScrollSection>
                <div className="border-8 w-screen !h-[100svh]">
                    <p>
                        Todavía noto el calor de mi piel Como si fuera ayer Mi
                        manera de ser Viendo como todo está a punto de torcer
                        Pero tengo ganas de saltar Me da miedo caer Es tan fácil
                        hacer que nada parezca doler
                    </p>
                    <video
                        autoPlay
                        loop
                        muted
                        className="right-0 bottom-0 absolute h-[80svh] pointer-events-none"
                    >
                        <source src={romepolasVid} type="video/webm"></source>
                    </video>
                </div>
            </ScrollSection>
        </>
    )
}

export default ScrollSections
