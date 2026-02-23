import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const Background = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, { stiffness: 30, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 30, damping: 30 })

    const shape1X = useTransform(springX, [-1, 1], [-12, 12])
    const shape1Y = useTransform(springY, [-1, 1], [-8, 8])
    const shape2X = useTransform(springX, [-1, 1], [8, -8])
    const shape2Y = useTransform(springY, [-1, 1], [6, -6])
    const shape3X = useTransform(springX, [-1, 1], [-6, 6])
    const shape3Y = useTransform(springY, [-1, 1], [-10, 10])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2
            const y = (e.clientY / window.innerHeight - 0.5) * 2
            mouseX.set(x)
            mouseY.set(y)
        }
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500"
            style={{ background: 'var(--bg-primary)' }}>

            {/* Primary ambient orbs */}
            <motion.div
                style={{ x: shape1X, y: shape1Y }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <motion.div
                style={{ x: shape2X, y: shape2Y }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(79, 70, 229, 0.1) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            <motion.div
                style={{ x: shape3X, y: shape3Y }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
                className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
            />

            {/* Floating geometric shapes — anti-gravity */}
            {/* Hexagon 1 */}
            <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 8, 0], opacity: [0.06, 0.12, 0.06] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[15%] left-[8%] w-16 h-16 dark:border-blue-400/20 border-blue-600/15"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(139, 92, 246, 0.1))',
                    border: '1px solid rgba(96, 165, 250, 0.15)',
                }}
            />
            {/* Triangle */}
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -12, 0], opacity: [0.04, 0.1, 0.04] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute top-[60%] right-[12%] w-20 h-20"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    background: 'linear-gradient(180deg, rgba(167, 139, 250, 0.25), rgba(139, 92, 246, 0.1))',
                }}
            />
            {/* Square rotated = diamond */}
            <motion.div
                animate={{ y: [0, -18, 0], rotate: [45, 55, 45], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
                className="absolute bottom-[25%] left-[15%] w-12 h-12"
                style={{
                    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.1))',
                    border: '1px solid rgba(96, 165, 250, 0.1)',
                    borderRadius: '4px',
                }}
            />
            {/* Small dot cluster */}
            <motion.div
                animate={{ y: [0, -30, 0], opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-[40%] left-[3%] w-3 h-3 rounded-full"
                style={{ background: 'rgba(96, 165, 250, 0.6)', filter: 'blur(1px)' }}
            />
            <motion.div
                animate={{ y: [0, 22, 0], opacity: [0.06, 0.14, 0.06] }}
                transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
                className="absolute top-[20%] right-[5%] w-2 h-2 rounded-full"
                style={{ background: 'rgba(167, 139, 250, 0.8)', filter: 'blur(1px)' }}
            />
            <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 9 }}
                className="absolute bottom-[40%] right-[8%] w-4 h-4 rounded-full"
                style={{ background: 'rgba(6, 182, 212, 0.5)', filter: 'blur(2px)' }}
            />

            {/* Dot grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Subtle vignette at edges */}
            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 60%, rgba(3,7,18,0.15) 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}

export default Background
