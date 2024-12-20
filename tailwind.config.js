/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                supernova: {
                    50: "#fefbe8",
                    100: "#fff8c2",
                    200: "#ffed88",
                    300: "#ffdb44",
                    400: "#fec922",
                    500: "#eeac04",
                    600: "#cd8301",
                    700: "#a45c04",
                    800: "#87480c",
                    900: "#733b10",
                    950: "#431e05",
                },
                "red-orange": {
                    50: "#fff1f1",
                    100: "#ffe0e0",
                    200: "#ffc6c7",
                    300: "#ff9e9f",
                    400: "#ff6769",
                    500: "#fc2124",
                    600: "#ea181b",
                    700: "#c51012",
                    800: "#a31113",
                    900: "#871517",
                    950: "#4a0506",
                },
                nepal: {
                    50: "#f3f8fb",
                    100: "#e5edf4",
                    200: "#d0e0ed",
                    300: "#b0cce0",
                    400: "#8fb4d2",
                    500: "#6e97c3",
                    600: "#5b80b5",
                    700: "#506fa5",
                    800: "#465c87",
                    900: "#3b4d6d",
                    950: "#283143",
                },
            },
            fontFamily: {
                body: "Anybody",
                title: "Permanent Marker",
            },
        },
    },
    plugins: [],
}
