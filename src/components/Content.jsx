import One from "./One.jsx"
import Two from "./Two.jsx"
import Three from "./Three.jsx"
import Four from "./Four.jsx"
import Five from "./Five.jsx"
import Six from "./Six.jsx"
import Seven from "./Seven.jsx"
import Eight from "./Eight.jsx"

const Content = ({ scrollYProgress, offset, totalY }) => {
    const supportsHEVCAlpha = () => {
        const navigator = window.navigator
        const ua = navigator.userAgent.toLowerCase()
        const hasMediaCapabilities = !!(
            navigator.mediaCapabilities &&
            navigator.mediaCapabilities.decodingInfo
        )
        const isSafari =
            ua.indexOf("safari") != -1 &&
            !(ua.indexOf("chrome") != -1) &&
            ua.indexOf("version/") != -1
        return isSafari && hasMediaCapabilities
    }

    const ios = () => {
        if (typeof window === `undefined` || typeof navigator === `undefined`)
            return false

        return /iPhone|iPad|iPod/i.test(
            navigator.userAgent ||
                navigator.vendor ||
                (window.opera && opera.toString() === `[object Opera]`)
        )
    }

    return (
        <div className="top-0 left-0 absolute md:pointer-events-none">
            <One scrollYProgress={scrollYProgress} />
            <Two
                totalY={totalY}
                supportsHEVCAlpha={supportsHEVCAlpha}
                ios={ios}
            />
            <Three supportsHEVCAlpha={supportsHEVCAlpha} ios={ios} />
            <Four supportsHEVCAlpha={supportsHEVCAlpha} ios={ios} />
            <Five />
            <Six supportsHEVCAlpha={supportsHEVCAlpha} ios={ios} />
            <Seven
                totalY={totalY}
                supportsHEVCAlpha={supportsHEVCAlpha}
                ios={ios}
            />
            <Eight />
        </div>
    )
}

export default Content
