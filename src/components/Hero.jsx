import { useRef, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from 'framer-motion'
import { ArrowRight, Download, Layers, Server, Cloud, Database, Globe, Zap, Code2 } from 'lucide-react'
import { Link } from 'react-scroll'

/* ── Animated SVG connection lines ──────────────────────────── */
const ConnectionLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 480" fill="none">
        {/* Frontend → Backend */}
        <motion.path
            d="M 200 120 C 200 160, 280 200, 310 220"
            stroke="url(#lineGrad1)" strokeWidth="1.5" strokeLinecap="round"
            strokeDasharray="120" strokeDashoffset="120"
            animate={{ strokeDashoffset: [120, 0, 120] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        />
        {/* Backend → Cloud */}
        <motion.path
            d="M 310 280 C 310 320, 200 330, 160 350"
            stroke="url(#lineGrad2)" strokeWidth="1.5" strokeLinecap="round"
            strokeDasharray="150" strokeDashoffset="150"
            animate={{ strokeDashoffset: [150, 0, 150] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Floating data packets */}
        <motion.circle r="3" fill="#60a5fa"
            animate={{ offsetDistance: ['0%', '100%'] }}
            style={{ offsetPath: "path('M 200 120 C 200 160, 280 200, 310 220')" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            filter="url(#glow)"
        />
        <motion.circle r="3" fill="#a78bfa"
            animate={{ offsetDistance: ['0%', '100%'] }}
            style={{ offsetPath: "path('M 310 280 C 310 320, 200 330, 160 350')" }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.5 }}
            filter="url(#glow)"
        />
        <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
    </svg>
)

/* ── Panel chip component ───────────────────────────────────── */
const Chip = ({ label, color = 'blue' }) => {
    const colors = {
        blue: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
        violet: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
        cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
        green: 'bg-green-500/15 text-green-400 border-green-500/20',
        orange: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
    }
    return (
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors[color]}`}>
            {label}
        </span>
    )
}

/* ── Floating panel component ───────────────────────────────── */
const FloatingPanel = ({ title, icon: Icon, chips, yAnim, delay, accent = '#60a5fa', className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -25 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
        className={`absolute ${className}`}
    >
        <motion.div
            animate={{ y: yAnim }}
            transition={{ duration: 5 + delay, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="relative p-4 rounded-2xl backdrop-blur-xl border"
            style={{
                background: `linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 100%)`,
                borderColor: `${accent}28`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${accent}15, inset 0 1px 0 ${accent}10`,
                minWidth: '160px',
            }}
        >
            {/* Top bar accent */}
            <div className="absolute top-0 left-4 right-4 h-[1px] rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
            />
            <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
                    <Icon size={12} style={{ color: accent }} />
                </div>
                <span className="text-[11px] font-semibold text-white/80">{title}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {chips.map((c, i) => <Chip key={i} label={c.label} color={c.color} />)}
            </div>
            {/* Live indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)] animate-pulse" />
            </div>
        </motion.div>
    </motion.div>
)

/* ── Main Hero Component ────────────────────────────────────── */
const Hero = () => {
    const sectionRef = useRef(null)
    const { scrollY } = useScroll()
    const scrollIconOpacity = useTransform(scrollY, [0, 100], [1, 0])
    const contentY = useTransform(scrollY, [0, 400], [0, -60])

    // Cursor parallax for panel cluster
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
    const panelX = useTransform(springX, [-1, 1], [-12, 12])
    const panelY = useTransform(springY, [-1, 1], [-8, 8])

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const handleMove = (e) => {
            const rect = el.getBoundingClientRect()
            mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
            mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
        }
        el.addEventListener('mousemove', handleMove, { passive: true })
        return () => el.removeEventListener('mousemove', handleMove)
    }, [mouseX, mouseY])

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } }
    }
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    }

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* ── Left: Text Content ── */}
                    <motion.div
                        style={{ y: contentY }}
                        className="flex-1 z-10 text-center lg:text-left"
                    >
                        <motion.div variants={container} initial="hidden" animate="show">

                            {/* Status pill */}
                            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-sm"
                                style={{
                                    background: 'rgba(59,130,246,0.08)',
                                    borderColor: 'rgba(96,165,250,0.25)',
                                }}>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                                </span>
                                <span className="text-blue-400 font-semibold text-sm tracking-wide">Available for work</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1 variants={item}
                                className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-extrabold mb-6 leading-[1.05] tracking-tight"
                                style={{ color: 'var(--text-primary)' }}>
                                Hi, I'm{' '}
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text"
                                        style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #818cf8 100%)' }}>
                                        Anees M
                                    </span>
                                    {/* Glow underline */}
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full origin-left"
                                        style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }}
                                    />
                                </span>
                            </motion.h1>

                            {/* Typewriter */}
                            <motion.div variants={item} className="h-16 md:h-20 mb-6 flex items-center justify-center lg:justify-start">
                                <span className="text-2xl md:text-4xl font-heading font-bold" style={{ color: 'var(--text-secondary)' }}>
                                    <Typewriter
                                        words={['Full Stack Developer', 'MERN Stack Expert', 'Backend Specialist', 'Real-time Systems']}
                                        loop={0} cursor cursorStyle='_'
                                        typeSpeed={70} deleteSpeed={45} delaySpeed={1200}
                                    />
                                </span>
                            </motion.div>

                            {/* Description */}
                            <motion.p variants={item}
                                className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg mb-10 leading-relaxed font-medium"
                                style={{ color: 'var(--text-secondary)' }}>
                                Full-Stack Developer specialized in secure, scalable, API-driven applications with real-time
                                features. Building production-ready systems with the MERN stack and clean architecture.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link to="projects" smooth offset={-80} className="w-full sm:w-auto">
                                    <button className="btn-primary flex items-center justify-center gap-2 w-full group text-sm">
                                        View Projects
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <a href="/resume.pdf" download="Anees_M_Resume.pdf" className="w-full sm:w-auto">
                                    <button className="btn-outline flex items-center justify-center gap-2 w-full group text-sm">
                                        Download Resume
                                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </a>
                            </motion.div>

                            {/* Stack badges */}
                            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                                {['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'].map((t, i) => (
                                    <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                                        style={{
                                            background: 'rgba(96,165,250,0.06)',
                                            borderColor: 'rgba(96,165,250,0.15)',
                                            color: 'var(--text-secondary)',
                                        }}>
                                        {t}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Profile Avatar + Floating Panels (desktop only) ── */}
                    <motion.div
                        style={{ x: panelX, y: panelY, width: 440, height: 520 }}
                        className="hidden lg:block flex-shrink-0 relative"
                    >
                        {/* ── Hero Avatar — glowing neon ring centerpiece ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ zIndex: 10 }}
                        >
                            {/* Outer slow-spin gradient ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                    width: 210, height: 210,
                                    top: -5, left: -5,
                                    background: 'conic-gradient(from 0deg, #60a5fa, #a78bfa, #06b6d4, #60a5fa)',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    filter: 'blur(0px)',
                                }}
                            />
                            {/* Glow halo */}
                            <motion.div
                                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute rounded-full"
                                style={{
                                    width: 230, height: 230,
                                    top: -15, left: -15,
                                    background: 'radial-gradient(circle, rgba(96,165,250,0.25) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)',
                                    filter: 'blur(12px)',
                                }}
                            />
                            {/* Avatar image */}
                            <div className="relative rounded-full overflow-hidden"
                                style={{
                                    width: 200, height: 200,
                                    border: '3px solid transparent',
                                    background: 'linear-gradient(#030712, #030712) padding-box, linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4) border-box',
                                    boxShadow: '0 0 40px rgba(96,165,250,0.3), 0 20px 60px rgba(0,0,0,0.5)',
                                }}>
                                <img
                                    src="/profile.jpg"
                                    alt="Anees M — MERN Stack Developer"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Online availability badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 1.4, type: 'spring', bounce: 0.5 }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap"
                                style={{
                                    background: 'rgba(15,23,42,0.95)',
                                    border: '1px solid rgba(74,222,128,0.35)',
                                    boxShadow: '0 0 16px rgba(74,222,128,0.2)',
                                }}>
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                                    style={{ boxShadow: '0 0 8px rgba(74,222,128,0.9)' }} />
                                <span className="text-[11px] font-bold text-green-400">Open to Work</span>
                            </motion.div>
                        </motion.div>

                        {/* Frontend panel — top-left */}
                        <FloatingPanel
                            title="Frontend"
                            icon={Layers}
                            chips={[
                                { label: 'React', color: 'blue' },
                                { label: 'TypeScript', color: 'violet' },
                                { label: 'Redux', color: 'violet' },
                            ]}
                            yAnim={[0, -14, 0]}
                            delay={0.5}
                            accent="#60a5fa"
                            className="top-8 left-0"
                        />

                        {/* Backend panel — top-right */}
                        <FloatingPanel
                            title="Backend"
                            icon={Server}
                            chips={[
                                { label: 'Node.js', color: 'green' },
                                { label: 'Express', color: 'green' },
                                { label: 'Socket.io', color: 'cyan' },
                            ]}
                            yAnim={[0, 16, 0]}
                            delay={0.7}
                            accent="#a78bfa"
                            className="top-8 right-0"
                        />

                        {/* Cloud panel — bottom center */}
                        <FloatingPanel
                            title="Cloud & Infra"
                            icon={Cloud}
                            chips={[
                                { label: 'AWS', color: 'orange' },
                                { label: 'Redis', color: 'orange' },
                                { label: 'MongoDB', color: 'blue' },
                            ]}
                            yAnim={[0, -10, 0]}
                            delay={0.9}
                            accent="#06b6d4"
                            className="bottom-12 left-1/2 -translate-x-1/2"
                        />

                        {/* Floating metric badge — left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                            transition={{ duration: 0.6, delay: 1.4, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-1/2 left-0 px-3 py-2 rounded-xl backdrop-blur-xl border text-center"
                            style={{
                                background: 'rgba(15,23,42,0.92)',
                                borderColor: 'rgba(74,222,128,0.25)',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(74,222,128,0.08)',
                            }}>
                            <div className="text-[10px] text-green-400/70 font-semibold uppercase tracking-wider mb-0.5">API Response</div>
                            <div className="text-sm font-bold text-green-400">{'<'} 120ms</div>
                        </motion.div>

                        {/* DB badge — right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                            transition={{ duration: 0.6, delay: 1.6, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
                            className="absolute top-1/2 right-0 px-3 py-2 rounded-xl backdrop-blur-xl border"
                            style={{
                                background: 'rgba(15,23,42,0.92)',
                                borderColor: 'rgba(96,165,250,0.2)',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                            }}>
                            <div className="flex items-center gap-1.5">
                                <Database size={10} className="text-blue-400" />
                                <span className="text-[10px] font-semibold text-blue-400">MongoDB Atlas</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: scrollIconOpacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
            >
                <Link to="about" smooth duration={500} offset={-80}>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40 group-hover:opacity-80 transition-opacity"
                            style={{ color: 'var(--text-secondary)' }}>
                            Scroll
                        </span>
                        <div className="relative w-6 h-10 border rounded-full flex justify-center p-1 overflow-hidden"
                            style={{ borderColor: 'rgba(148,163,184,0.4)' }}>
                            <motion.div
                                animate={{ y: [0, 18, 0], opacity: [1, 0, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-1 h-1 rounded-full bg-blue-400"
                            />
                        </div>
                    </div>
                </Link>
            </motion.div>
        </section>
    )
}

export default Hero
