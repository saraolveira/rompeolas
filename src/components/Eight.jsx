import { useRef } from "react"
import { useInView } from "framer-motion"
const Eight = () => {
    const container = useRef(null)
    const isInView = useInView(container, { amount: 0.17 })
    return (
        <div
            className="flex justify-center items-center mt-32 md:mt-96 p-4 w-screen h-screen"
            ref={container}
        >
            <div
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                className="flex justify-center items-center gap-4 border-2 p-4 border-red-orange-500 rounded-3xl md:w-2/6 h-1/4"
            >
                <img
                    src="/rompeolas.jpg"
                    alt="Rompeolas"
                    className="w-28 md:w-44"
                />
                <div className="flex flex-col w-3/4 font-body text-white">
                    <p className="font-black text-2xl md:text-4xl">rompeolas</p>
                    <p className="text-base md:text-lg">
                        Martin Urrutia • 2024 • 2:42
                    </p>
                    <a
                        href="https://open.spotify.com/track/6vJk7b4edT52HIWqclNB6l?si=825accfd1c6e4ff7 "
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white hover:fill-[#1ed760] mt-4 w-12 h-12 transition-colors duration-300 cursor-pointer pointer-events-auto"
                        >
                            <path d="M25.009 1.982C12.322 1.982 2 12.304 2 24.991S12.322 48 25.009 48s23.009-10.321 23.009-23.009S37.696 1.982 25.009 1.982zm9.739 33.351a1.498 1.498 0 01-2.081.416C30.194 34.1 26 33 22.5 33.001c-3.714.002-6.498.914-6.526.923a1.5 1.5 0 11-.948-2.845c.132-.044 3.279-1.075 7.474-1.077 3.5-.002 8.368.942 11.832 3.251.69.46.876 1.391.416 2.08zm2.992-6.14a1.716 1.716 0 01-2.365.549c-4.484-2.794-9.092-3.385-13.062-3.35-4.482.04-8.066.895-8.127.913a1.716 1.716 0 11-.936-3.303c.277-.079 3.854-.959 8.751-1 4.465-.037 10.029.61 15.191 3.826.803.5 1.05 1.56.548 2.365zm2.985-7.18a2 2 0 01-2.738.712c-5.226-3.068-11.58-3.719-15.99-3.725h-.063c-5.333 0-9.44.938-9.481.948a1.999 1.999 0 01-.909-3.895C11.729 16.01 16.117 15 21.934 15h.069c4.905.007 12.011.753 18.01 4.275a2.002 2.002 0 01.712 2.738z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Eight
