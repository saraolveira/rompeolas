import { motion, useTransform } from "framer-motion"

const One = ({ scrollYProgress }) => {
    const fillColor = useTransform(
        scrollYProgress,
        // [0, 0.04, 0.06, 0.5, 0.53, 0.7, 0.73],
        [0, 0.04, 0.06, 0.9, 0.93],
        ["#fec922", "#fec922", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "#fc2124"]
    )

    return (
        <div className="w-screen h-screen">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2183 1293"
                className="top-20 left-10 fixed w-64"
                fill={fillColor}
            >
                <g id="mu" clipPath="url(#clip0_137_6348)">
                    <g id="rrutia">
                        <path d="M1679.97 942.615c0 1.24.07 2.49-.02 3.73-.1 1.41.25 3.21-1.66 3.66-1.41.34-2.27-.9-2.98-1.88-5.39-7.41-12.62-12.58-20.55-16.9-.65-.36-1.32-.71-1.9-1.17-2.38-1.88-4.82-3.74-3.63-7.39 1.25-3.84 4.26-4.28 7.74-4.3 12.59-.08 22.65 10.46 23 24.25z"></path>
                        <path d="M1194.91 1052.14c-8.28 9.03-13.98 18.41-20.19 27.4-7.76 11.23-15.84 22.17-24.49 32.79-10.55 12.94-23.48 22.91-36.46 32.92-8.65 6.67-18.43 10.63-29.75 10.54-8.32-.07-16.41-.07-23.76-4.87-2.39-1.56-4.52-3.18-5.75-5.67-7.3-14.77-11.73-29.97-8.64-46.8 2.88-15.68 6.67-31.13 11.09-46.41 7.32-25.32 12.95-51.12 21.64-76.046 2.22-6.36 1.31-7.429-5.39-7.649-2.25-.07-4.5-.061-6.75-.031-6.32.08-8.88 1.89-9.53 7.98-1.12 10.59-5.6 20.07-9.09 29.876-4.36 12.22-10.37 23.71-16.81 34.87-5.68 9.85-11.31 19.88-19.42 28.2-4.5 4.61-7.82 10.4-12.46 14.84-10.24 9.8-19.12 20.93-30.19 29.92-7.34 5.96-14.26 12.46-21.09 19.01-9.19 8.82-18.6 17.32-29.77 23.63-6.31 3.56-13.22 5.82-19.84 8.64-8.97 3.82-21.16-4.18-22.52-13.72-1.98-13.9-1.17-27.73-.27-41.71.95-14.71 3.13-29.2 5.02-43.76 1.15-8.86 4.04-17.32 6.37-25.91 2.27-8.4 4.68-16.74 7.35-25.01 5.15-15.936 12.78-30.776 20.42-45.606.34-.66.99-1.16 1.28-1.83.76-1.74 2.6-3.509.89-5.449-1.32-1.49-3.24-.731-4.96-.411-9.53 1.78-19.06 3.6-28.61 5.26-3.65.641-5.59 3.05-7.03 6.06-8.76 18.38-22.49 32.826-37.08 46.526-3.78 3.55-8.31 6.35-12.67 9.22-1.61 1.06-3.68 1.61-5.62 1.92-2.43.4-3.89-1.71-2.61-3.75 1.04-1.66 2.56-3.03 3.97-4.44 9.34-9.31 19.13-18.23 27.09-28.806 4.01-5.33 7.59-11.05 10.32-17.19 1.6-3.59.94-5.019-2.75-6.029-2.13-.58-4.43-.51-6.66-.74-8.98-.921-17.82-2.341-25.35-7.911-11.82-8.74-14.8-17.99-13.03-30.45 1.68-11.85 14.83-19.649 27.82-17.67 16.23 2.48 27.39 12.011 35.64 25.471 1.78 2.9 2.82 6.389 3.59 9.74 1.01 4.39 3.59 5.45 7.65 5.01 8.69-.94 17.16-2.891 25.47-5.521 11.44-3.609 22.98-6.67 35.13-6.34 10.15.27 14.1 7.351 8.61 16.22a127.958 127.958 0 01-11.93 16.23c-6.44 7.46-11.45 15.73-15.34 24.67-10.46 24.026-17.91 49.066-23.8 74.546-2.41 10.4-4.48 20.95-4.06 31.77.38 9.69-2.06 19.31-.31 29.1 1.23 6.87 2.15 7.86 8.83 8.39 8.41.66 14.28-4.02 19.91-8.88 17.58-15.13 33.39-32.1 49.42-48.8 11.17-11.64 21.96-23.75 30.71-37.47 5.78-9.06 10.8-18.52 15.34-28.24 6.54-14.01 12.23-28.315 15.56-43.485 1.59-7.21.8-8.801-6.69-9.831-8.43-1.16-16.9-2.32-24.56-6.13-6.75-3.359-13.56-7.92-15.47-15.34-2.25-8.76-1.15-17.709 5.18-25.399 7.37-8.95 16.44-15.851 25.83-22.351 5.06-3.51 11.48-2.88 16.65-1.01 6.16 2.22 12.49 4.841 17.38 9.861 3.9 4.01 6.04 8.519 5.89 14.029-.22 8.21.77 16.44-1.01 24.63-.91 4.18.81 6.251 5.19 6.21 9.97-.089 19.96.8 29.91-.78 4.17-.66 8.47-.769 12.7-.66 6.92.18 9.88 3.29 10.14 10.23.38 10.2-2.91 19.68-6.2 29.06-6.03 17.126-13.69 33.646-19.17 50.996-3.68 11.65-6.38 23.55-8.95 35.46-1.94 8.97-4.84 17.75-5.42 27.04-.53 8.46-1.71 16.9.62 25.23 1.9 6.78 5.15 8.37 11.77 5.61 7.17-2.99 13.66-7.22 19.63-12.21 6.26-5.25 11.79-11.42 19.34-15.03 1.07-.51 1.93-1.6 2.69-2.57 9.91-12.77 20.06-25.37 29.57-38.43 8.2-11.25 17.5-21.52 26.47-32.1 6.9-8.12 14.36-15.75 19.95-24.95 3.88-6.38 9.01-11.996 13.91-17.486 10.6-11.91 20.38-24.59 31.94-35.64 1.83-1.75 3.56-3.469 6.37-3.439 4.62.06 6.97 3.369 5 7.469-7 14.55-14.9 28.56-23.61 42.186-6.14 9.6-12.48 19.11-17.7 29.36-5.95 11.69-6.67 23.89-5.84 36.39.5 7.59 6.33 11.62 13.7 13.37 12.57 2.98 21-3.71 29.16-11.02 6.82-6.1 13.48-12.39 19.49-19.44 4.76-5.58 9.8-11.15 15.38-16.07.74-.65 1.61-1.25 2.14-2.05 9.89-15 22.64-27.74 33.35-42.106 9.31-12.5 19.66-24.229 29.66-36.219 4.61-5.52 13.93-4.241 20.76-.271 1.92 1.12 3.65 2.59 5.38 4.011 4.48 3.679 4.75 6.909.62 11.359-9.86 10.61-18.08 22.531-27.12 33.776-4.99 6.21-10.19 12.28-14.91 18.69-4.24 5.77-8.61 11.46-11.9 17.94-3.57 7.05-8.1 13.61-11.84 20.58-7.45 13.86-10.88 28.81-10.98 44.49-.07 11.29 6.62 15.63 17.31 11.56 10.63-4.04 19.4-10.93 27.7-18.4 5.18-4.67 10.28-9.45 15.34-14.23 11-10.39 21.34-21.45 29.63-34.31 3.47-5.38 8.31-9.92 12.6-14.72 8.33-9.32 15.72-19.34 22.95-29.44 8.57-11.966 18.36-22.906 27.42-34.456 7.35-9.36 13.97-19.34 21.54-28.43 9.12-10.96 16.03-23.32 24.26-34.799 7.36-10.28 14.51-20.81 21.67-31.29 8.7-12.73 18.15-24.91 27.53-37.151 7.36-9.6 16-18.299 21.86-29.109 1.45-2.68 4.53-4.501 5.65-7.7 1.31-3.75.63-5.14-3.41-5.25-4.74-.13-9.55-.221-14.21.469-4.49.66-8.93.831-13.42.851-17.22.09-34.35 1.36-51.5 2.87-10.4.92-20.92.569-31.33 1.919-13.33 1.74-26.86 1.071-40.15 3.721-8.54 1.71-17.38.799-26.09 1.769-17.07 1.89-34.25 2.761-51.35 4.601-16.58 1.78-33.22 3.03-49.81 4.68-21.58 2.15-43.18 3.78-64.84 5.06-18.23 1.08-36.42.699-54.63 1.229-5.22.15-10.47-.379-15.64 1.021-1.64.44-3.48.249-5.22.169-1.72-.08-3.83-.19-3.75-2.55.07-2.279 2.19-2.23 3.89-2.52 11.06-1.92 22.22-2.559 33.41-3.329 17.42-1.21 34.91-.95 52.27-2.82 14.6-1.57 29.15-3.701 43.78-4.981 13.16-1.15 26.17-3.45 39.39-4.18 10.41-.57 20.74-2.429 31.13-3.479 19.82-2.011 39.5-5.24 59.42-6.48 13.67-.85 27.29-2.59 40.92-4 7.44-.77 14.94-.89 22.39-1.45 9.44-.71 18.88-1.581 28.33-2.161 17.16-1.05 34.3-2.63 51.46-3.75 7.22-.47 14.48-.53 21.72-.42 7.08.1 11.94-2.569 16.29-8.479 7.5-10.2 16.23-19.48 24.24-29.32 9.26-11.38 18.39-22.87 27.42-34.43 8.91-11.41 18.23-22.4 28.68-32.48 4.5-4.34 9.46-4.221 14.56-2.991 5.25 1.27 7.8 6.631 5.47 11.861-2.62 5.88-5.46 11.72-9.87 16.63-4.99 5.56-10.86 10.389-14.94 16.72-5.08 7.87-12.04 14.199-17.97 21.299-6.64 7.95-12.22 16.821-19.72 24.101-2.28 2.21-4 5.099-5.59 7.899-2.24 3.94-1.41 5.471 2.93 5.911 1.98.2 3.99.09 5.99.13 28.73.54 57.38-1.741 86.1-2.101 18.2-.23 36.43-.819 54.66-1.089 38.95-.57 77.89-1.86 116.84-1.07 15.43.32 30.85 1.279 46.28 1.779 3.43.11 6.89-.65 10.34-.75 19.99-.53 39.91 1.38 59.87 2.05 18.42.62 36.85 1.881 55.24 3.121 18.13 1.22 36.29 2.479 54.33 5.079 11.82 1.7 23.78 2.331 35.67 3.541 3.71.38 7.39 1.06 11.08 1.67 1.26.21 2.56.77 2.34 2.31-.16 1.1-1.33 1.36-2.35 1.25-11.64-1.28-23.49-.31-35-3.1-1.2-.29-2.48-.3-3.72-.32-29.96-.38-59.84-2.79-89.79-3.77-30.48-1-60.93-.631-91.39-.821-32.98-.21-65.98-.61-98.94.18-29.96.72-59.94.551-89.87 1.651-28.18 1.04-56.36 2.179-84.56 2.859-18.7.45-37.38 1.82-56.07 2.66-5.12.23-8.51 2.4-11.82 6.5-9.4 11.62-17.62 24.05-26.25 36.19-4.14 5.81-7.14 12.43-11.18 18.32-6.61 9.65-10.56 20.721-16.78 30.541-9.52 15.01-17.01 30.999-23.78 47.409-3.6 8.72-8.16 17.041-12.19 25.591-7.33 15.54-15.73 30.609-20.57 47.235-4.13 14.18-7.22 28.47-7.52 43.35-.17 8.21-1.45 16.38-1.26 24.64.08 3.56.61 6.97 2.07 10.19 2.4 5.29 5.86 6.77 11.48 5.21 5.67-1.57 10.66-4.6 14.81-8.5 17.44-16.39 34.27-33.34 49.64-51.77 15.85-19.01 28.95-39.936 43.8-59.626 5.96-7.91 11.95-16.26 21.76-19.9 8.31-3.08 16.75-1.639 24.79 1.421 3.43 1.31 3.14 4.799 2.45 7.829-1.01 4.44-3.28 8.38-5.64 12.19-7.24 11.65-14.02 23.65-22.16 34.646-9.17 12.39-15.97 25.76-21.27 40.1-3.83 10.37-5.3 21.25-7.42 31.99-1.25 6.33-1.75 12.8-2.66 19.19-.83 5.83.15 11.37 5.19 14.69 5.06 3.33 10.41 3.04 16.11-.26 13.51-7.81 24.88-18.29 36.66-28.24 9.56-8.07 20.28-14.49 30.16-22.1 9.31-7.17 17.88-15.14 26.78-22.74a253.46 253.46 0 0129.46-21.65c15.61-9.83 31.03-19.906 44.89-32.226 4.06-3.6 8.8-6.689 13.7-9.039 11.51-5.54 22.07-12.651 33.09-18.981 10.37-5.96 21.46-9.06 33.43-9.45 10.09-.33 19.83.53 29.36 4.33 13.35 5.33 22.4 13.68 23.22 28.971.24 4.48 2.2 5.439 5.58 2.419 7.8-6.96 16.09-13.53 22.18-22.15 3.64-5.15 7.8-8.849 14.41-9.519 3.65-.37 6.88-2.651 10.86-2.361 8.92.66 12.25 4.57 10.52 13.26-.68 3.42-1.41 6.911-2.79 10.09-6.76 15.59-10.84 32.096-16.75 47.956-3.93 10.55-7.47 21.08-9.11 32.26-1.71 11.7-1.53 23.39-.78 35.1.13 1.95.87 3.89 1.56 5.75 1.59 4.32 3.28 5.47 7.93 4.85 5.22-.69 10.18-2.27 14.72-5.1 8.02-5 16.18-9.74 24.75-13.75 4.37-2.04 8.9-3.23 13.7-3.3 3.35-.05 6.74.55 8.45 3.76 1.93 3.62 1.05 7.35-1.17 10.62-1.4 2.07-3.32 3.72-5.46 5.06-9.71 6.08-19.19 12.56-29.17 18.17-16.18 9.09-33.37 11.74-50.91 4.4-9.48-3.97-14.81-11.98-14.87-22.37-.1-16.18 0-32.28 2.19-48.49 1.42-10.52 4.37-21.01 3.87-31.79-.07-1.61.79-3.78-1.49-4.51-1.89-.61-3.36.62-4.55 1.97-5.29 5.97-11.57 10.9-17.06 16.69-6.85 7.22-14.35 13.85-21.78 20.5-9.83 8.78-19.87 17.35-29.84 25.98-9.78 8.47-19.87 16.56-30.01 24.61-7.7 6.11-16.19 10.55-24.67 15.21-7.99 4.39-16.52 3.42-24.84 2.21-5.21-.76-12.49-9.73-12.71-16.87-.63-20.4 4.73-39.38 11.93-58 1.54-3.98 2.12-8.12 3.41-12.11 1.74-5.37 5.48-9.79 6.52-15.42.36-1.95 1.72-4-.15-5.52-2.11-1.71-4.15-.37-6.05 1.04-9.19 6.78-18.11 14.01-27.73 20.11-11.22 7.11-20.05 16.94-30.46 24.91-9.67 7.42-19.3 14.87-28.1 23.33-4.53 4.35-10.42 6.71-15.4 10.5-9.47 7.21-19.29 13.96-28.02 22.12-1.08 1.01-2.41 1.78-3.72 2.51-10.85 6.06-21.32 12.98-33.15 17-10.07 3.42-19.7.75-28.61-4.25-9.73-5.47-13.09-14.72-13.06-25.25.03-11.71-1.03-23.46.96-35.12.17-.97.07-2 .02-2.99-.18-4.06-2.35-5.24-5.67-2.98-1.22.83-2.17 2.05-3.26 3.09-11.68 11.14-23.06 22.61-35.14 33.31-8.78 7.78-19.02 13.54-30.78 15.82-14 2.7-29.38-5.6-34.53-18.93-3.68-9.52-6.69-19.16-6.06-29.75.83-13.92-.72-27.95 1.69-41.83 1.11-6.36 2.08-12.75 2.92-19.15.2-1.56 1.06-3.725-1.16-4.616-1.95-.78-3.19.74-4.47 1.966-4.11 3.95-7.21 8.75-10.93 13.03-13.87 15.97-27.21 32.41-40.61 48.79-11.74 14.35-26.32 25.75-39.57 38.52-7.73 7.45-15.66 14.65-24.36 20.93-11.38 8.22-24.1 11.58-38.1 9.75-2.51-.33-4.92-1.09-6.86-2.76-10.22-8.8-15.6-19.48-14.18-33.43.91-8.94 1.66-17.82 4.42-26.43.46-1.44.58-3.1-.94-4.05-1.62-1.02-2.79.22-3.88 1.24-1.64 1.53-3.39 2.99-4.85 4.68-8.74 10.09-19.27 18.15-30.34 25.32-11.29 7.31-23.83 11.34-37.64 9.93-13.48-1.37-26.06-14.57-26.53-28.26-.17-4.96-.24-9.93.79-14.91.63-3.09.12-6.41.12-11.05l.11.12zm616.11 25.22c0 1.38-.02 2.13 0 2.88.17 7.3 3.37 9.25 9.99 6 1.11-.54 2.05-1.4 3.11-2.06 5.75-3.55 10.58-8.28 15.9-12.35 17.57-13.43 34.07-28.13 50.76-42.58 11.45-9.91 22.17-20.66 33.15-31.105 2.33-2.221 4.4-4.741 6.48-7.211 1.87-2.23 2-4.23-1.51-4.58-3.67-.36-6.6-2.219-9.25-4.389-7.9-6.47-16.79-10.221-27.04-10.461-3.99-.09-8-.05-11.98.23-10.3.73-19.15 4.97-26.74 11.82-7.31 6.61-11.67 15.5-17.42 23.306-2.8 3.79-5.37 7.86-7.33 12.14-6.02 13.15-10.59 26.86-14.44 40.78-1.65 5.96-4.34 11.76-3.67 17.58h-.01zm-762.06-148.355c.01-12.75.24-11.371-7.98-18.201-5.99-4.97-10.34-4.86-17.01-.76-6.77 4.16-11.61 10.27-15.55 16.81-5.43 9.03-2.78 14.1 6.71 18.87 4.55 2.28 9.68 1.92 14.47 3.15 3.6.93 7.29 1.52 11.08 1.19 3.04-.26 4.99-1.369 5.69-4.719 1.31-6.34 2.51-12.661 2.6-16.351l-.01.011zm-195.25 27.479c1 0 2-.06 2.99 0 8.36.6 8.97-2.5 5.83-9.47-4.66-10.32-13.41-15.639-23.85-18.749-3.39-1.01-4.76.699-4.91 3.659-.18 3.73-.05 7.48 0 11.21.06 3.701 1.81 5.99 4.74 8.56 4.64 4.08 9.61 4.831 15.19 4.771l.01.019z"></path>
                    </g>
                    <path
                        id="u"
                        d="M421.19 841.794c-8.49.38-14.29 6.511-21.33 9.831-15.53 7.31-30.54 15.72-46.51 22.12-8.79 3.52-16.89 8.42-25.45 12.4-11.7 5.44-23.45 10.779-35.13 16.269-12.63 5.93-25.95 10.18-38.53 16.26-7.02 3.4-13.05 8.201-19.73 12.041-11.84 6.81-23.38 14.2-34.77 21.69-18.56 12.19-35.53 26.46-49.61 43.94-4.53 5.615-9.06 11.115-12.89 17.285-5.48 8.82-4.67 18.14-3.4 27.54.66 4.92 2.11 9.73 2.22 14.75.35 15.05-8.84 26.67-23.56 30-10.71 2.42-21.41 4.82-32.5 4.1-8.86-.57-15.68-3.7-21.07-11.79-7.56-11.35-7.8-22.5-5.67-35.44 2.67-16.27 12.34-27.9 21.38-40.38 10.51-14.496 24.26-25.775 37.88-36.825 8.92-7.23 18.61-14 28.95-19.62 12.23-6.65 24.09-13.93 36.98-19.32 13.51-5.66 26.84-11.72 40.35-17.37 17.38-7.27 34.78-14.48 51.9-22.37 10.83-4.99 22.04-9.15 33.02-13.82 14.65-6.23 29.4-12.26 43.82-19 19.53-9.14 38.54-19.37 58.27-28.09 18.13-8 35.59-17.19 52.54-27.5 8.02-4.88 17.28-7.66 25.56-12.17 10.76-5.86 22.23-9.98 33.63-14.12a26.611 26.611 0 0119.09.399c4.88 2 9.26 4.941 13.07 8.601 7.21 6.94 6.64 15.099-1.74 20.709a393.283 393.283 0 00-25.87 18.861c-8.32 6.6-16.79 13.13-24.64 20.38-11.71 10.81-24.29 20.73-35.41 32.1-7.1 7.26-14.61 14.25-20.89 22.38-3.95 5.1-9.11 9.25-13.37 14.14-10.95 12.55-22.02 25-32.36 38.11-4.52 5.73-8.91 11.789-14.55 16.789-4.02 3.571-6.8 8.521-10.23 12.791-10.28 12.8-20.76 25.435-30.88 38.365-12.06 15.42-24.47 30.64-35.52 46.77-9.65 14.09-18.74 28.66-26.23 44.14-3.03 6.25-6.96 12.05-10.35 18.14-10.96 19.71-21.61 39.58-31.33 59.94-1.53 3.19-1.77 6.68-2.9 9.98-5.19 15.1-6.2 30.91-3.79 46.41 1.23 7.9 2.97 16.7 9.32 23.05 1.01 7.67 6.94 6.95 12.36 7.4 12.34 1.04 24.67-.68 36.29-3.72 11.29-2.95 22.62-6.96 32.71-13.84 7.96-5.43 16.95-9.38 25.38-14.19 4.36-2.49 8.64-5.14 12.35-8.33 4.54-3.91 9.8-6.69 14.51-10.3 8.03-6.16 16.31-12.36 25.35-16.74 12.62-6.11 22.62-16.24 35.52-21.78 2.17-.93 3.81-3.17 5.58-4.93 7.08-7.03 14.34-13.84 23-18.97 1.05-.63 2.11-1.47 2.79-2.46 3.89-5.67 9.55-9.33 14.96-13.26 8.53-6.21 15.28-14.2 22.53-21.75 5.3-5.52 10.01-11.73 16.4-16.22 2.22-1.56 4.07-3.67 6.02-5.6 10.25-10.14 20.57-20.21 31.01-30.16 10-9.53 20.32-19.04 28.68-30.26 1.04-1.39 2.19-2.86 3.63-3.76 14.7-9.13 24.44-23.17 35.67-35.735 6.81-7.62 14.22-14.69 20.78-22.57 9.06-10.89 18.51-21.44 27.74-32.19 4.23-4.92 8.85-9.511 13.39-14.101 10.35-10.45 19.92-21.539 29.52-32.639 12.38-14.31 25.22-28.22 37.46-42.66 4.73-5.58 10.27-10.13 15.49-15.11 9.39-8.96 18.02-18.791 27.86-27.211 12.06-10.32 23.82-21.17 37.77-29.07 3.69-2.09 7.21-4.529 10.63-6.919 6.01-4.21 12.81-6.44 19.37-9.22 15.79-6.71 31.26-4.54 46.2 2.99 4.49 2.26 6.15 7.41 4.24 12.18-2.37 5.94-6.11 10.83-11.51 14.38-5.6 3.69-11.19 7.39-16.79 11.08-15.83 10.44-30.39 22.469-44.36 35.259-14.9 13.64-30.03 27.041-44.42 41.231-.36.35-.67.779-1.1 1.019-16.08 8.89-26.4 24.001-39.04 36.541-18.24 18.08-34.71 37.79-49.64 58.73-19.84 27.815-38.73 56.235-54.98 86.355-9.11 16.89-18.6 33.59-26.94 50.89-5.65 11.72-9.36 24.16-13.58 36.41-3.66 10.61-6.74 21.42-10.07 32.15-.3.95-.73 1.91-.77 2.88-.6 16.93-2.27 33.94 2.97 50.52 3.27 10.35 10.03 15.27 21.08 15.42.5 0 1.01-.04 1.5.03 16.28 2.1 29.66-4.28 42.04-14.03 7.04-5.54 14.31-10.81 21.67-15.91 10.57-7.33 19-16.92 27.91-25.98 12.05-12.26 23.81-24.84 34.81-38.06 14.35-17.23 28.22-34.86 42.58-52.08 8.6-10.31 16.99-20.84 27.19-29.73 2.85-2.48 5.75-4.72 9.12-6.46 7.3-3.77 14.81-7.11 21.8-11.5 4.96-3.11 10.51-3.82 17.69-2.19-4.6 3.24-8.03 5.97-11.76 8.22-17.76 10.73-31.98 25.3-45.27 40.98-11.19 13.21-20.04 27.85-28.39 42.94-10.89 19.7-24.37 37.7-38.35 55.3-6.81 8.57-14.22 16.64-21.66 24.69-10.07 10.89-22.25 19.2-33.8 28.27-8.61 6.76-17.56 13.11-26.86 18.95-6.87 4.31-13.95 7.77-22.1 8.63-10.9 1.15-21.73 2.63-32.78 2.63-14.61 0-24.56-7.26-32.44-18.29-3.03-4.25-6-8.57-8.94-12.9-11.28-16.59-13.67-35.13-11.29-54.47.7-5.71.35-11.46 1.53-17.12 3.39-16.36 7.66-32.48 13.07-48.29 5.17-15.1 10.42-30.17 15.58-45.27 2.61-7.63 7.36-14.16 10.73-21.39 1.11-2.38 3.71-5.51 1.17-7.44-2.89-2.2-4.49 1.88-6.39 3.46-10.38 8.64-19.63 18.49-29.05 28.12-15.01 15.34-30.71 29.94-46.22 44.75-14.99 14.31-30.3 28.26-46.91 40.64-11.79 8.78-22.49 18.82-33.99 27.92-4.32 3.42-8.91 6.39-14.25 8.05-4.14 1.29-7.43 4.07-10.81 6.61-21.65 16.24-45.06 29.55-69.81 40.29-14.16 6.15-27.96 13.18-42.58 18.29-19.56 6.85-39.57 10.46-60.32 8.27-12.21-1.29-23.28-5.3-31.67-14.92-5.03-5.76-7.76-12.7-10.45-19.67-1.16-3.01-1.79-6.24-2.96-9.25-3.84-9.87-3.73-20.05-2.36-30.27 1.06-7.9 2.48-15.75 3.86-23.6.48-2.69.96-5.48 2.1-7.93 6.7-14.48 11.02-29.91 18.02-44.29 8.28-17 17.62-33.43 26.45-50.13.7-1.32 1.55-2.57 2.2-3.91 7.37-15.33 17.18-29.11 26.64-43.16 5.95-8.83 11.06-18.28 16.86-27.26 4.7-7.28 9.39-14.57 14.01-21.885 5.97-9.45 13.4-17.851 18.85-27.741 3.91-7.11 9.62-13.219 14.51-19.789 3.86-5.19 8.49-9.99 11.35-15.68 3.41-6.79 8.9-11.8 13.03-17.95 7.59-11.29 16.38-21.75 25.47-31.92 2.16-2.42 4.53-4.65 6.76-7 8.41-8.87 16.76-17.781 25.23-26.601 1.96-2.04 3.53-4.139 3.88-7.139l-.01-.041z"
                    ></path>
                    <path
                        id="m"
                        d="M869.12 98.585c-21.87 11.71-39.58 28.08-56.8 45.17-14.71 14.6-28.81 29.75-42.1 45.62-15.18 18.13-30.06 36.56-43.36 56.11-15.13 22.24-29.25 45.17-43.93 67.72-4.75 7.3-10.17 14.16-14.73 21.57-6.27 10.179-13.37 19.78-19.99 29.71-8.71 13.06-17.43 26.12-26.59 38.86-9.61 13.35-18.53 27.16-27.45 40.96-5.95 9.209-11.75 18.53-17.4 27.93-6.66 11.09-12.76 22.52-19.68 33.44-7.86 12.41-15.92 24.749-24.68 36.53-7.44 10-14.04 20.58-21.71 30.39-13.19 16.88-26.51 33.639-40.94 49.53-10.55 11.63-20.49 23.819-30.9 35.599-10.28 11.63-21.28 22.351-33.2 32.171-8.16 6.73-14.98 14.62-21.35 22.95-2.01 2.63-4 5.119-7.08 6.449-9.01 3.88-18.27-2.469-19.42-13.31-.73-6.919 2.55-12.69 6.04-18.07 6.66-10.24 13.97-20.06 20.84-30.159 6.33-9.29 11.96-18.94 16.17-29.47 2.58-6.45 6.42-12.381 9.57-18.611 7.66-15.19 13.56-31.099 18.02-47.479 3.6-13.211 6.01-26.74 9.51-39.99 5.54-20.97 10.99-41.97 16.69-62.91 7.46-27.4 13.67-55.13 17.13-83.41 2-16.35 5.37-32.45 10.58-48.14.66-2 2.51-5.16.21-6.1-3.16-1.29-3.52 2.65-4.45 4.64-5.15 11.08-10.07 22.27-15.13 33.4a1075.87 1075.87 0 01-17.41 36.45c-7.82 15.62-15.94 31.08-24.15 46.49-7.61 14.29-15.59 28.39-22.98 42.79-5 9.75-8.44 20.3-14.76 29.39-10.96 15.77-19.18 33.289-30.8 48.609-13.1 17.271-25.88 34.951-41.58 49.94-16.36 15.63-31.8 32.361-50.51 45.431-5.72 4-9.91 9.82-15.53 14.06-13.34 10.07-27.21 19.06-42.32 26.48-17.8 8.73-36.12 15.68-55.17 20.839-13.82 3.74-27.89 5.221-42.24 4.231-9.72-.67-19.44-1.121-28.9-3.671-14.11-3.8-26.9-10.25-38.94-18.539-14.95-10.3-23.38-25.04-31.01-40.98-8.33-17.39-6.14-34.99-4.1-52.82.71-6.18 2.25-12.24 3.7-18.31 2.28-9.54 7.19-17.41 13.64-24.55 4.5-4.99 8.91-10 14.55-13.87 9.72-6.68 27.56-5.991 36.52 1.509 12.73 10.66 16.71 24.301 14.21 40.271-.54 3.45-1.23 6.88-1.78 10.33-1.35 8.39-5.82 14.92-12.65 19.589-7.23 4.94-15.1 8.75-23.72 10.81-3.97.951-7.9.841-11.88.031-3.29-.67-4.72 1.02-4.47 4.14.16 1.97.54 3.949 1.08 5.85 1.56 5.52 3.08 11.06 4.92 16.489 4.3 12.68 12.4 22.021 25.01 26.951 7.18 2.799 13.59 7.21 21.36 8.87 15.16 3.229 30.34 3.07 45.38.419 16.95-2.979 33.47-7.89 49.89-13.12 8.19-2.609 15.26-7.349 23.15-10.389 18.77-7.22 33.64-20.15 48.95-32.58 16.2-13.14 29.92-28.57 43.02-44.63 11.66-14.29 22.35-29.341 33.73-43.841 18.32-23.34 31.8-49.409 44.51-76.009 6.34-13.27 13.19-26.29 19.94-39.36 12.23-23.71 25.63-46.781 37.07-70.93 7.88-16.65 17.45-32.49 26.03-48.82 10.45-19.9 19.26-40.49 27.7-61.27.28-.69.68-1.35.85-2.07.4-1.66 1.19-3.6-.72-4.72-1.49-.87-2.82.35-4.05 1.2-7.8 5.36-15.71 10.58-23.38 16.13-11.93 8.64-24.54 13.79-39.84 11.42-7.42-1.15-14.78-1.54-21.57-5.26-13.7-7.5-19.65-20.14-22.59-34.41-2.32-11.28-2.21-22.94-1.09-34.34 1.12-11.44 5.58-22.19 9.69-32.91 4.19-10.95 8.35-21.92 12.61-32.85 1.3-3.34 1.62-6.81 1.6-10.3-.04-8.49-.24-16.98-.38-25.47-.22-13.13-4.68-25.46-7.45-38.1-1.16-5.3-2.24-10.7-5.06-15.59-2.04-3.53-4.29-6.85-7.57-9.15-10.38-7.28-21.59-11.72-34.61-12.63-23.99-1.68-46.16 4.93-67.62 13.91-21.77 9.11-40.58 23.03-57.6 39.53-17.62 17.08-33.44 35.66-48.28 55.09-14.05 18.38-24.96 38.8-31.72 60.79-5.1 16.58-7.07 34.12-8.85 51.52-1.76 17.25 3.03 33.63 5.34 50.38 2.39 17.27 8.45 33.379 14.37 49.48 6.19 16.85 17.78 28.16 36.24 32.3 22.61 5.07 43.9 2.17 65.08-6.51 12.87-5.27 23.93-13.35 35.66-20.39 6.11-3.66 9.56-8.92 8.62-16.8-.84-7.011.73-13.981 3.95-20.34 3.15-6.23 7.46-11.171 15.18-11.76 8.52-.65 15.32 2.54 19.86 9.54 3.17 4.89 2.24 10.69.88 16-2.02 7.84-6.59 14.52-11.48 20.8-4.13 5.29-9.04 9.969-13.47 15.04-7.06 8.079-16.65 12.59-25.4 18.31-14.96 9.78-31.63 15.75-48.49 21.04-16.42 5.16-33.35 5.47-50.18 2.15-8.76-1.731-17.71-2.66-26.06-6.53-15.7-7.27-27.64-17.7-35.54-33.61-5.62-11.32-9.08-23.06-12.51-35-4.49-15.65-6.5-31.73-8.75-47.77-1.14-8.141-2.65-16.231-2.8-24.5-.32-18.381 3.13-36.23 7.3-53.98 6.65-28.3 19.59-53.74 35.73-77.7 9.9-14.7 20.82-28.61 32.22-42.16 6.47-7.69 14.62-13.58 21.59-20.71 18.85-19.29 40.25-35.08 64.8-46.32 13.84-6.34 28.34-10.96 43.23-14.29 12.69-2.81 25.45-4.54 38.55-4.42 20.03.19 37.31 6.82 53.15 18.94 16.29 12.46 23.84 29.64 28.08 48.61 3.26 14.62 4.04 29.59 3.86 44.62-.19 15.01-4.06 29.23-9.7 42.8-5.55 13.37-12.41 26.36-15.72 40.4-3.32 14.07-2.94 28.77.4 42.96 1.27 5.4 4.21 10.61 8.79 14.53 4.6 3.93 8.46 4.76 13.51 1.51 11.87-7.63 21.54-17.36 29.79-28.99 7.88-11.1 14.08-23.51 24.39-32.87 7.08-6.42 14.18-12.63 23.76-14.97 5.5-1.34 10.92-1.82 15.56 2.33 2.76 2.47 4.62 1.13 5.89-1.41 9.06-18.1 21.74-33.96 31.6-51.63 11.15-19.99 24.37-38.97 43.25-52.88 6.2-4.56 12.73-8.78 20.09-11.45 2.9-1.05 5.76-1.7 8.76-.8 3.37 1.01 5.22 2.79 5.5 6.86.75 10.95-3 20.76-7.43 30.21-6.11 13.05-13.65 25.38-20.58 38.02-6.79 12.39-13.79 24.7-16.42 39.08-2.79 15.18-7.7 29.93-10.73 45.1-1.13 5.66-1.76 11.35-2.08 17.05-1.49 26.91-4.63 53.66-7.44 80.45-2.18 20.84-4.77 41.58-9.45 62.02a999.882 999.882 0 01-14.03 54.33c-4.36 15.1-9.41 29.96-14.19 44.91-3.26 10.17-8.06 19.839-11.93 29.82-1.24 3.2-5.01 7.7-1.51 9.75 2.97 1.739 4.95-3.821 7.08-6.37 11.54-13.81 21.38-28.84 30.4-44.36 9.92-17.07 21.24-33.2 32.33-49.48 12.37-18.171 23.92-36.83 34.85-55.87 13.8-24.03 29.44-46.89 44.32-70.23 8.05-12.61 15.96-25.31 23.93-37.98 12.77-20.28 26.83-39.61 42.05-58.13 12.66-15.41 24.84-31.24 38.52-45.76 10.94-11.61 22.86-22.33 34-33.72 21.48-21.95 47.05-38.43 71.92-55.83 18.45-12.91 39.34-20.62 61.61-23.86 10.6-1.54 21.39-.52 32.11.73 23.37 2.72 45.44 8.94 65.42 21.8 12.95 8.34 23.17 19.61 33.64 30.59 11.16 11.7 18.81 25.7 25.15 40.46.98 2.29 1.78 4.69 3.01 6.85 8.5 14.91 11.28 31.44 12.87 48.08 1.26 13.14 1.72 26.46 1.11 39.63-.69 14.88-4.62 29.02-15.57 40.21-3.09 3.15-7.03 4.75-11.03 6.11-3.23 1.1-5.34-.48-5.63-3.93-.14-1.701.03-3.55.58-5.15 8.3-24.47 10.13-49.8 9.21-75.32-.41-11.46-3.82-22.67-7.68-33.46-5.21-14.59-11.89-28.48-21.58-40.82-13.56-17.26-29.09-31.85-48.54-42.65-11.18-6.21-22.59-8.73-34.89-9.39-4.74-.25-9.51-.26-14.2-.86-19.02-2.41-33.73 5.04-46.47 18.71-10.2 10.95-19.19 22.89-29.41 33.79-7.91 8.44-13.36 18.61-19.56 28.26-14.58 22.66-27.7 46.18-41.12 69.53-10.4 18.1-16.54 37.91-23.58 57.38-11.28 31.21-21.62 62.73-31.89 94.28-6.17 18.93-13.24 37.6-21.69 55.74-9.36 20.11-17.93 40.59-26.63 60.99-13.8 32.34-29.11 63.97-44.84 95.399-5.24 10.47-11.68 20.151-19.01 29.451-18.42 23.4-38.95 44.77-60.41 65.27-11.7 11.17-24.48 21.209-38.29 29.779-.63.391-1.37.661-1.92 1.141-1.72 1.5-1.85 2.99.52 3.849 1.39.51 2.92.731 4.4.841 14.41 1.06 28.75 3.74 43.26 2.44 15.25-1.37 29.04-6.06 40.6-16.901 14.5-13.609 27.36-28.299 36.13-46.349 8.27-17.031 16.02-34.43 26.65-50.12 9.21-13.6 19.63-26.41 32.3-37.11 1.12-.95 2.52-1.62 3.88-2.21.84-.37 1.86-.341 2.92-.51.54 3-1.01 4.82-2.39 6.9-9.82 14.71-19.72 29.36-28.5 44.74-6.63 11.62-10.09 24.44-14.14 36.98-4.97 15.38-12.73 29.359-21.53 42.57-7.02 10.539-16.86 19.01-27.09 26.69-3.39 2.539-6.91 4.91-10.25 7.51-5.31 4.14-11.72 5.51-17.98 7.01-16.82 4.03-33.9 5.83-51.23 4.82-10.46-.61-20.81-2.181-31.2-3.4-17.53-2.06-34.85-6.16-52.7-5.44-5.53.219-10.9.93-16.21 2.479-6.48 1.891-13.18 2.6-19.87 3.31-6.52.69-10.25-3.279-13.16-8.089-2.58-4.26-1.52-7.07 2.43-10.151 6.51-5.059 13.89-7.039 22.01-8.169 11.47-1.6 22.91-1.091 34.36-1.25 5.82-.081 11.16-.481 16.28-4.021 6.09-4.219 13.03-7.209 19.24-11.279 7.33-4.8 12.61-11.851 18.17-18.46 8.48-10.071 16.57-20.47 24.92-30.65 4.25-5.19 8.11-10.68 13.19-15.21 1.9-1.69 2.5-4.77 3.87-7.11 4.64-7.91 9.76-15.57 13.96-23.71 7.97-15.44 17.4-30.15 24.1-46.22 4.26-10.22 9.29-20.22 11.65-31.15 1.59-7.35 4.77-14.11 7.62-20.95 3.82-9.171 7.46-18.36 10.08-27.95.65-2.36 1.92-4.56 2.94-6.81 3.93-8.64 5.91-17.93 9.05-26.83 3.7-10.47 8.18-20.68 11.9-31.14 6.19-17.4 14.74-33.74 22.36-50.49 3.91-8.61 7.66-17.28 11.49-25.91 4.32-9.74 10.02-18.87 14.74-28.44 6.94-14.09 14.87-27.61 22.99-41.02 8.24-13.63 17.5-26.57 27.02-39.33 7.13-9.56 13.67-19.6 21.27-28.76 6.99-8.43 13.97-16.89 19.86-26.05 11.75-18.26 25.29-35.12 38.96-51.9 2.32-2.84 3.31-6.6 6.18-8.78h-.01zM513.04 521.984c.33-1.01-.53-1.169-1.11-1.329-.2-.06-.74.55-.88.94-.25.71.01 1.5.77 1.61.66.1 1.19-.44 1.21-1.221h.01z"
                    ></path>
                    <g id="artin">
                        <path d="M1465.07 475.705c6.42-4.4 10.47-10.78 14.98-16.48 21.4-27 44.14-52.78 69.55-76.04 18.4-16.85 36.4-34.11 54.45-51.33 7.78-7.42 17.56-12.21 27.35-16.62 3.73-1.68 7.93-1.24 11.82-.4 4.5.97 7.49 7.21 6.41 12.93-.51 2.68-1.14 5.53-2.53 7.8-5.45 8.86-8.58 18.81-13.58 27.95-5.11 9.34-11.72 18.33-14.01 29.25-.63 3.01-2.59 6.02-4.34 8.6-3.83 5.64-6.12 11.899-8.17 18.19-1.65 5.06-5.19 8.88-7.53 13.47-4.6 9.019-9.46 18.1-13.67 27.17-4.35 9.38-9.03 18.96-11.73 29.28-2.26 8.63-5.13 17.149-7.64 25.749-2.96 10.12-4.22 20.471-4.47 30.971-.08 3.31.59 6.47 1.79 9.5 2.54 6.39 5.39 7.43 11.61 4.62 5.28-2.391 9.75-5.981 14.38-9.341 17.91-13.01 35.01-27.119 53.3-39.619 3.47-2.37 6.93-3.841 11.1-3.61 4.83.269 9.27 4.35 9.52 8.79.24 4.34-2.31 7.309-7.99 7.879-8.43.85-13.65 6.8-19.66 11.5-15.7 12.27-31.02 25.051-47.36 36.481-6.16 4.31-12.69 7.679-20.71 7.47-11.58-.31-19.53-6.071-23.12-17.321-3.27-10.23-2.75-20.66-1.99-31.13 1.58-21.769 9.92-41.59 18.1-61.389 7.42-17.97 14.14-36.231 22.22-53.94 7.75-17 14.44-34.48 23.31-50.98 1.88-3.5 3.39-7.22 4.84-10.93.77-1.96 2.29-4.41-.3-5.99-2.16-1.32-3.62.75-5.09 2.06-3.17 2.81-6.53 5.44-9.49 8.46-20.9 21.36-43.23 41.3-63.58 63.2-7.27 7.829-14.8 15.48-21.06 24.26-4.62 6.48-9.93 12.46-14.95 18.64-21.21 26.109-41.91 52.58-58.06 82.26-1.95 3.58-4.43 6.68-8.51 8.01-7.17 2.33-12.64-1.81-12.09-9.37.61-8.47 1.84-16.86 5.43-24.68 1.58-3.45 2.68-7.1 2.98-10.77.78-9.35 4.24-17.96 7.03-26.71 1.75-5.47 3.38-10.98 4.67-16.52 2.1-9 4.44-17.891 7.35-26.66 1.45-4.381 2.53-8.92 2.17-14.15-3.71 4.299-7.46 8.27-10.77 12.58-12.28 16.01-25.04 31.61-38.43 46.73-9.62 10.859-19.94 20.99-30.2 31.19-8.85 8.79-18.41 16.81-28.02 24.74-3.67 3.03-6.89 6.35-10.04 9.92-5.78 6.54-12.04 12.76-22.13 11.9-3.5-.3-6.4-1.27-8.5-3.96-4.53-5.81-7.43-12.27-7.9-19.79-.78-12.41 2.18-24.28 4.75-36.23.24-1.13 1.17-2.21 0-3.81-5.18 4.08-8.52 9.67-12.26 14.78-10.65 14.56-22.48 28.149-36.3 39.6-13.67 11.329-29.02 20.28-46.49 24.88-.48.13-.95.32-1.44.429-14.4 3.101-23.15-2.38-26.44-16.63-2.05-8.88-1.46-17.919-1.07-26.87.95-21.839 5.84-42.94 12.91-63.549 1.86-5.421 4.19-10.671 6.31-16 .54-1.35 1.29-2.69-.12-4.83-4.3 5.71-8.54 11.129-12.56 16.7-8.02 11.12-16.43 21.91-25.05 32.57-14.39 17.81-28.53 35.81-42.81 53.71-9.01 11.3-18.09 22.539-28.68 32.459-2.62 2.451-5.38 4.441-8.76 5.541-6.7 2.17-13.25-.681-15.92-7.171-1.22-2.97-2.54-6.18-2.6-9.299-.12-6.03-1.2-11.94-2.08-17.81-1.64-10.84-.33-21.36 1.75-31.9 1.74-8.8 2.99-17.75 5.46-26.34 6.76-23.52 15.64-46.27 26.28-68.34 7.37-15.29 15.03-30.39 24.43-44.56 1.63-2.46 3.14-5.16 1.21-8.81-7.94 3.64-15.9 7.16-23.74 10.92-5.65 2.709-11.41 5.049-17.48 6.59-4.15 1.06-7.14 3.39-8.49 7.62-5.5 17.27-14.68 32.7-24.35 47.84-16.24 25.42-32.98 50.52-52.55 73.52-11.62 13.65-24.54 26.1-38.26 37.71-7.62 6.45-15.2 12.929-23.72 18.12-6.48 3.94-13.49 6.64-21.36 4.26-6.26-1.891-11.29-5.57-11.32-14.49-.04-14.35 1.95-28.33 5.21-42.19.81-3.42 1.48-6.73.32-10.54-3.47.27-5.26 2.78-7.3 4.8-7.63 7.56-15.36 15.02-22.76 22.79-12.11 12.709-26.3 22.9-40.17 33.46-7.34 5.58-15.12 10.58-22.48 16.13-3.6 2.71-7.7 3.39-11.84 4.23-2.64.54-4.98-.51-6.99-2.05-2.98-2.3-6.11-4.9-7.19-8.45-4.93-16.11-12.07-31.77-11.94-49.04.07-8.72 1.54-17.39 4.58-25.64 7.44-20.21 17.22-39.01 30.93-55.94 7.03-8.68 14.97-15.78 23.83-22.23 3.81-2.78 7.5-5.78 10.95-9 7.76-7.261 17.15-11.87 26.57-16.27 9.23-4.31 19.03-5.99 29.05-2.56 6.48 2.22 13.35 1.23 19.94 2.9 10.74 2.73 19.17 8.17 24.26 18.2 1.85 3.65 4.61 5.08 8.6 3.95 1.44-.4 2.86-.93 4.33-1.13 13.22-1.84 16.85 7.78 13.08 17.12-3.27 8.11-8.13 15.39-12.57 22.89-5.43 9.19-11.61 18-16.29 27.55-4.59 9.35-7.34 19.579-11.57 29.119-4.51 10.19-7.01 20.641-7.15 31.761-.03 2.38-.24 4.67 2.02 5.91 2.04 1.12 3.87-.171 5.4-1.54 6.5-5.8 14.37-9.861 20.44-16.201 9.3-9.71 19.68-18.289 28.68-28.359 10.99-12.291 20.56-25.62 30.12-38.96 7.68-10.72 15.13-21.65 21.95-32.93 6.19-10.22 14.27-19.24 19.13-30.28 1.81-4.11 3.68-8.19 5.28-12.39 1.67-4.4.93-6.59-3.39-7.13-5.03-.62-9.62-2.58-14.35-3.9-9.08-2.55-16.25-8.56-22.01-15.91-5-6.381-4.65-14.07-3.6-21.56 1.52-10.9 7.06-19.85 13.58-28.58 6.87-9.2 15.02-16.42 25.2-21.62 4.85-2.47 9.97-3.32 15.18-3.47 12.7-.37 18.27 9.51 18.84 18.15.41 6.21.47 12.51 0 18.71-.86 11.17-2.17 22.31-4.94 33.23-.59 2.31-1.84 5.19.56 6.93 1.91 1.39 4.31.18 6.4-.77 5.66-2.59 11.42-4.96 16.99-7.71 14.96-7.39 29.85-14.93 44.76-22.41 3.36-1.69 6.66-3.32 10.64-3.04 5.16.36 6.42 1.58 7.03 6.7 1.14 9.429-3.37 16.899-8.19 24.25-2.45 3.74-6.03 6.9-7.79 10.89-8.01 18.18-18.88 34.86-27.05 52.96-7.86 17.42-17 34.27-23.11 52.46-6.73 5.81-3.76 15.88-9.68 22.04-2.46 17.78-11.36 34.04-12.32 52.17-.03.5-.14 1-.1 1.49.14 2.15-.73 4.829 2.04 5.849 2.3.84 3.64-1.199 5-2.569 10.56-10.61 19.51-22.56 29.04-34.06 7.31-8.82 13.41-18.641 21.48-26.73 7.97-7.981 14.81-16.92 21.69-25.69 7.65-9.74 15.11-19.72 22.41-29.78 8.18-11.28 16.89-22.21 24.7-33.74 3.89-5.75 8.28-11.141 11.9-17.13 3.32-5.5 8.04-10.14 11.7-15.46 8.15-11.88 17.3-23.07 24.75-35.44 2.85-4.74 7.24-8.16 10.33-12.76 5.54-8.241 11.8-15.97 16.13-25.03 3.87-8.101 10.35-14.57 14.75-22.43 4.85-8.67 10.39-16.97 15.85-25.29 2.59-3.941 5.7-7.541 8.55-11.311.9-1.19 1.92-2.339 2.55-3.659 2.38-5.02.89-7.49-4.69-7.61-8.24-.18-16.49-.2-24.73-.26-12.98-.1-25.88-1.09-38.77-2.59-5.92-.691-11.98-.43-17.97-.31-12.03.23-23.85-1.72-35.72-3.24-4.29-.55-8.01-2.68-11.45-5.24-1.22-.91-2.19-2.05-1.62-3.79.46-1.42 1.69-1.89 2.92-1.91 3.44-.06 7.09-1.09 10.17 1.22 2.43 1.83 5.15 1.72 7.88 1.69 36.46-.45 72.88 2.1 109.34 1.4 4.49-.09 9 .21 13.49.04 4.77-.17 8.55-1.02 11.31-6.39 3.23-6.301 8.87-11.31 13.11-17.15 6.27-8.64 13.61-16.5 19.83-25.02 9.3-12.74 20.54-23.58 30.76-35.39 5.82-6.72 13.87-11.29 21.62-15.67 4.49-2.53 10.23-1.87 15.34-1.87 5.07 0 7.06 5.03 3.97 9.25-5.29 7.22-10.67 14.38-16.55 21.17-7.16 8.27-14.13 16.67-20.43 25.68-8.65 12.39-16.57 25.25-25.26 37.6-1.7 2.42-3.25 4.71-1.71 7.44 1.52 2.69 4.52 1.55 6.88 1.58 17.99.19 35.99-.17 53.96.48 18.46.67 36.96.32 55.35 1.52 15.98 1.04 31.99-.08 47.85 1.4 12.93 1.2 25.89 1.05 38.8 1.73 7.1.38 14.3.94 21.47.97 11.97.05 23.85 1.22 35.75 2.58 8.15.93 16.47.39 24.71.59 7.47.18 14.91.51 22.38 1.23 18.83 1.81 37.6 4.42 56.56 4.72 3.44.06 6.88 1.07 10.29 1.77 1.19.25 2.41.83 2.38 2.39-.04 1.94-1.52 2.48-3.02 2.58-2.24.15-4.58.43-6.72-.04-7.41-1.63-14.92-.94-22.38-1.44-18.64-1.24-37.27-2.62-55.91-3.95-.75-.05-1.5-.16-2.24-.14-20.48.53-40.9-1.4-61.34-2.08-72.93-2.43-145.86-.17-218.79-1.19-3.48-.05-6.92-.221-10.42-.74-5.42-.801-9.98 1.01-13.61 5.71-6.53 8.46-12.66 17.23-19.87 25.21-4.45 4.93-7.72 10.95-11.59 16.44-3.44 4.88-6.44 9.87-11.04 13.91-3.51 3.08-4.82 7.98-7.64 11.81-9.43 12.81-17.84 26.34-27.04 39.34-13.63 19.26-26.15 39.3-39.13 59.02-.41.62-.95 1.27-1.06 1.97-1.64 10.15-9.01 17.609-12.59 26.8-5.69 14.6-10.96 29.369-16.15 44.16-2.5 7.12-5.65 14.35-6.26 21.709-.57 6.86-1.71 13.811-1.28 20.781.32 5.22.78 10.439.98 15.67.13 3.28 1.21 5.109 4.87 4.979 8.15-.28 16.87 1.621 23.77-4.199 8.09-6.82 17.22-12.21 24.3-20.51 9.21-10.8 18.72-21.36 26.63-33.13 8.87-13.18 18.09-26.11 26.29-39.77 4.6-7.671 9.64-15.62 16.56-21.87 4.32-3.91 5.82-9.741 9.24-14.35 10.08-13.571 19.73-27.45 29.68-41.12 2.64-3.62 5.61-7.03 8.7-10.27 3.44-3.61 8.13-4.98 12.89-5.18 7.38-.31 12.78 8.96 9.34 15.52-5.42 10.33-10.47 20.87-18.05 29.9-.63.75-1.12 1.68-1.45 2.61-6.87 19.16-19.54 35.14-29.07 52.84-3.21 5.97-4.98 12.51-8.32 18.36-5.69 9.97-8.8 21.04-13.34 31.5-2.01 4.62-2.48 9.639-3.58 14.489-.58 2.571-1.5 5.87 1.24 7.62 2.84 1.81 6.19 1.56 9.18-.37 5.66-3.66 10.79-7.959 15.42-12.849 6.11-6.47 12.87-12.37 18.83-18.9 10.05-11.01 21.29-20.91 30.32-32.89 6.43-8.53 13.69-16.44 20.12-24.98 7.02-9.31 13.32-19.18 20.3-28.52 7.58-10.141 15.98-19.66 23.44-29.91 2.05-2.81 4.47-5.53 5.83-8.61 2.54-5.78 7.15-9.57 11.57-13.5 6.3-5.59 14.09-4.29 21.42-3.24 3.51.5 3.25 4.55 2.25 6.87-3.61 8.35-4.84 17.71-10.57 25.17-1.57 2.04-1.91 4.59-2.4 6.96-.71 3.47-1.44 6.74-4.15 9.37-1.42 1.37-1.81 3.45-2.09 5.5-.34 2.48-.96 5.03-2.91 6.74-1.69 1.48-2.01 3.55-2.34 5.35-1.78 9.86-5.81 18.99-8.75 28.47-1.78 5.73-5.42 11.23-3.2 18.14l-.02.05zm-654.39 69.45c3.63.42 7.36-.641 10.63-2.29 7.15-3.601 14.89-5.82 21.92-9.55 3.32-1.76 7.37-1.28 10.26-4.16 12.18-12.13 24.6-23.97 35.15-37.68 7.59-9.86 14.52-20.22 22.68-29.68 5.35-6.21 10.1-12.95 14.01-20.26 2.1-3.94 2.17-7.581-.15-11.29-2.32-3.72-6.11-2.96-9.48-2.67-2.68.23-5.37 1.08-7.92 2.03-10.3 3.8-20.57 7.69-30.38 12.63-28.55 14.38-51.92 34.14-65.32 63.96-3.98 8.86-7.5 17.99-9.67 27.45-1.84 8.06-.87 12.149 8.26 11.519l.01-.009zm253.84-213.41c0-1.24.06-2.49-.01-3.73-.26-4.47.04-10.06-4.29-12-4.6-2.06-8.93 1.56-12.54 4.74-5.81 5.12-11.06 10.8-14.98 17.48-5.02 8.56-10.02 17.23-12.08 27.07-1.67 7.96.17 11.32 7.25 15.19 5.57 3.04 11.68 4.03 17.89 4.71 6.45.71 7.91.08 10.05-6.01 5.39-15.34 7.43-31.33 8.7-47.44l.01-.01zm-153.67 90.16c-10.33-5.75-33.31 2.58-39.62 14.27 13.4-4.82 26.26-9.46 39.62-14.27zM797.28 575.924v.12c-2.48 0-4.96-.079-7.44.031-1.62.07-2.7.989-3.1 2.659-1.23 5.161 3.16 9.681 8.14 8.111 4.08-1.28 7.48-3.88 10.45-6.9 1.98-2.02 1.39-3.661-1.36-3.971-2.2-.25-4.46-.05-6.69-.05z"></path>
                        <path d="M1391.15 340.235c13.28.83 18.97 8.119 20.36 18.139.19 1.4.39 3.121-1.19 4.011-1.83 1.03-3.56.27-4.62-1.19-3.78-5.23-9.31-6.061-15.13-6.581-2.17-.19-4.49-.279-6.48-1.49-1.91-1.16-4.06-2.149-3.96-4.899.1-2.64 1.15-4.92 3.53-6.161 2.67-1.39 5.61-1.989 7.49-1.829zM1765.02 258.325c-3-.19-5.25-.24-7.46-.52-1.23-.16-2.38-.74-2.46-2.29-.08-1.59 1.07-2.3 2.28-2.43 4.77-.5 9.3 1.09 13.91 1.93.31.06.79.84.7 1.16-.17.61-.62 1.54-1.06 1.61-2.2.33-4.43.43-5.9.55l-.01-.01z"></path>
                    </g>
                </g>
            </motion.svg>
        </div>
    )
}

export default One
