import { useRef } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
import { Code, Database, Server, Cloud, Globe, Cpu, Smartphone, Layout, GitBranch, Layers } from 'lucide-react'

const skills = [
    { name: "JavaScript & TypeScript", icon: <Code size={18} />, level: 95, color: '#f59e0b' },
    { name: "React.js & Redux", icon: <Layout size={18} />, level: 92, color: '#60a5fa' },
    { name: "Node.js & Express.js", icon: <Server size={18} />, level: 90, color: '#4ade80' },
    { name: "MongoDB & Firebase", icon: <Database size={18} />, level: 87, color: '#4ade80' },
    { name: "Socket.io & REST APIs", icon: <Globe size={18} />, level: 88, color: '#22d3ee' },
    { name: "AWS & CI/CD DevOps", icon: <Cloud size={18} />, level: 82, color: '#f97316' },
    { name: "Tailwind & Shadcn UI", icon: <Smartphone size={18} />, level: 92, color: '#38bdf8' },
    { name: "System Design & MVC", icon: <Cpu size={18} />, level: 83, color: '#a78bfa' },
]

/* ── 3D tilt skill card ─────────────────────────────────────── */
const SkillCard = ({ skill }) => {
    const cardRef = useRef(null)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const springRX = useSpring(rotateX, { stiffness: 120, damping: 20 })
    const springRY = useSpring(rotateY, { stiffness: 120, damping: 20 })

    const handleMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        animate(rotateX, y * -6, { duration: 0.2 })
        animate(rotateY, x * 6, { duration: 0.2 })
    }
    const handleLeave = () => {
        animate(rotateX, 0, { duration: 0.5 })
        animate(rotateY, 0, { duration: 0.5 })
    }

    return (
        <div ref={cardRef} onMouseMove={handleMove} onMouseLeave={handleLeave}
            style={{ perspective: 800 }}>
            <motion.div
                style={{ rotateX: springRX, rotateY: springRY, transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 p-4 rounded-xl border cursor-default"
                style={{
                    background: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    backdropFilter: 'blur(12px)',
                }}>
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg flex-shrink-0"
                        style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30`, color: skill.color }}>
                        {skill.icon}
                    </div>
                    <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(148,163,184,0.15)' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 0.2, ease: 'circOut' }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})` }}
                    />
                </div>
            </motion.div>
        </div>
    )
}

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.07 } }
    }
    const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

    return (
        <section id="about" className="section-padding min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

                {/* Left — Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
                        style={{
                            color: 'var(--accent-primary)',
                            borderColor: 'rgba(96,165,250,0.25)',
                            background: 'rgba(96,165,250,0.06)',
                        }}>
                        About Me
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Who{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                            I Am
                        </span>
                    </h2>

                    <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                        <p>
                            Full-Stack Developer with strong expertise in the MERN stack and modern web development.
                            Specialized in building secure, scalable, and API-driven applications with real-time features
                            and clean architecture.
                        </p>
                        <p>
                            Proven ability to design production-ready systems including AI-powered e-commerce platforms
                            and learning management systems. Committed to continuous learning, performance optimization,
                            and writing maintainable industry-standard codebases.
                        </p>
                    </div>

                    {/* Education badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-xl border inline-block backdrop-blur-sm"
                        style={{
                            background: 'rgba(96,165,250,0.05)',
                            borderColor: 'rgba(96,165,250,0.15)',
                        }}>
                        <span className="font-bold text-sm block mb-1" style={{ color: 'var(--text-primary)' }}>🎓 Education</span>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            B.E. in Electronics & Communication Engineering (2013–2017)
                        </span>
                        <span className="text-xs block mt-0.5 opacity-60" style={{ color: 'var(--text-secondary)' }}>
                            HMSIT, VTU — Bengaluru, India
                        </span>
                    </motion.div>

                    {/* Profile photo card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mt-8 flex items-center gap-5"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative flex-shrink-0"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="absolute rounded-full"
                                style={{
                                    inset: -3,
                                    background: 'conic-gradient(from 0deg, #60a5fa, #a78bfa, #06b6d4, #60a5fa)',
                                    borderRadius: '50%',
                                    filter: 'blur(1px)',
                                    zIndex: 0,
                                }}
                            />
                            <div className="relative rounded-full overflow-hidden"
                                style={{
                                    width: 88, height: 88,
                                    zIndex: 1,
                                    boxShadow: '0 0 24px rgba(96,165,250,0.25)',
                                }}>
                                <img
                                    src="/profile.jpg"
                                    alt="Anees M"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#030712] z-10 animate-pulse"
                                style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
                        </motion.div>
                        <div>
                            <p className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>Anees M</p>
                            <p className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</p>
                            <p className="text-xs mt-1 font-medium opacity-60" style={{ color: 'var(--text-secondary)' }}>Kerala, India · Open to Relocate</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right — Skills grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div key={i}
                            animate={{ y: [0, -(12 + i * 6), 0], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 4 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
                            className="absolute w-2 h-2 rounded-full pointer-events-none"
                            style={{
                                top: `${20 + i * 30}%`,
                                left: i % 2 === 0 ? '-16px' : 'calc(100% + 12px)',
                                background: i === 0 ? '#60a5fa' : i === 1 ? '#a78bfa' : '#22d3ee',
                                filter: 'blur(1px)',
                            }}
                        />
                    ))}

                    <div className="p-6 rounded-3xl border backdrop-blur-xl"
                        style={{
                            background: 'var(--glass-bg)',
                            borderColor: 'var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                        }}>
                        <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                            Technical Arsenal
                            <motion.span
                                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                style={{ boxShadow: '0 0 8px rgba(96,165,250,0.8)' }}
                            />
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                            {skills.map((skill, i) => (
                                <motion.div key={i} variants={item}>
                                    <SkillCard skill={skill} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
