import One from "./One.jsx"
import Two from "./Two.jsx"

const Content = ({ scrollYProgress, offset, totalY }) => {
    return (
        <div className="md:pointer-events-none">
            <One scrollYProgress={scrollYProgress} />
            <Two totalY={totalY} />
            <div className="bg-nepal-500 h-[1000svh]"></div>
            {/* <div className="top-[340svh] left-0 absolute bg-pink-500 bg-opacity-35 w-screen h-[200svh]"></div>
            <div className="h-[1000svh]"></div> */}
            {/* <div className="top-[350svh] left-0 absolute bg-pink-300 bg-opacity-10 w-screen h-[200svh]">
                <p>
                    Soy como una ola, no sé cuando pero voy a romperme Dime si
                    un día caigo en otra playa tú vendrías a verme Soy como una
                    moneda de cobre tirada en una fuente Espero al deseo
                    Impaciente
                </p>
            </div>
            <div className="top-[550svh] left-0 absolute bg-pink-400 bg-opacity-10 w-screen h-[200svh]">
                <p>
                    Rompiendo con todo o va todo contra mí Cuando me despierte
                    que sueño se va a cumplir Empiezo a nadar y del agua no sé
                    salir Pongo buena cara, pero ya no sé fingir Contra mí Va
                    todo contra mí
                </p>
            </div>
            <div className="top-[750svh] left-0 absolute bg-pink-500 bg-opacity-10 w-screen h-[200svh]">
                <p>
                    Porque todavía noto el calor de mi piel Como si fuera ayer
                    mi manera de ser Viendo como todo está a punto de torcer
                    Pero tengo ganas de saltar Me da miedo caer Es tan fácil
                    hacer que nada Parezca doler
                </p>
            </div> */}
        </div>
    )
}

export default Content
