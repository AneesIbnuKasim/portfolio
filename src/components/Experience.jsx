import { useRef } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Zap, CheckCircle } from 'lucide-react'

const experiences = [
    {
        role: "Software Development Trainee",
        company: "Mentor Bro",
        period: "June 2025 — Present",
        location: "Ramanatukara, Kerala",
        status: "Active",
        bullets: [
            "Built and deployed scalable backend services for a real-time learning management platform using Node.js, Express, and MongoDB.",
            "Designed and implemented secure RESTful APIs with JWT-based authentication and role-based access control for admins, instructors, and students.",
            "Integrated real-time communication using Socket.io for live chat, instructor broadcasts, and student interactions.",
            "Modeled and optimized MongoDB schemas with Mongoose, improving performance through indexing and population.",
            "Established centralized middleware for token validation, error handling, and request validation.",
            "Structured the backend using clean MVC architecture with modular routes, controllers, services, and socket handlers.",
            "Integrated Nodemailer for OTP-based email verification and secure account recovery workflows.",
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Mongoose", "Nodemailer", "MVC"],
    }
]

/* ── 3D Tilt card hook ── */
const TiltCard = ({ children }) => {
    const cardRef = useRef(null)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const springRX = useSpring(rotateX, { stiffness: 100, damping: 20 })
    const springRY = useSpring(rotateY, { stiffness: 100, damping: 20 })

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        animate(rotateX, ((e.clientY - rect.top) / rect.height - 0.5) * -6, { duration: 0.2 })
        animate(rotateY, ((e.clientX - rect.left) / rect.width - 0.5) * 6, { duration: 0.2 })
    }
    const handleLeave = () => {
        animate(rotateX, 0, { duration: 0.5 })
        animate(rotateY, 0, { duration: 0.5 })
    }

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleLeave}
            style={{ perspective: 1000 }}>
            <motion.div style={{ rotateX: springRX, rotateY: springRY, transformStyle: 'preserve-3d' }}>
                {children}
            </motion.div>
        </div>
    )
}

const ExperienceItem = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative pl-10 pb-12 border-l-2 last:border-0"
        style={{ borderColor: 'rgba(96,165,250,0.2)' }}
    >
        {/* Glowing timeline node */}
        <div className="absolute left-[-9px] top-1">
            <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(96,165,250,0.5)', '0 0 0 8px rgba(96,165,250,0)', '0 0 0 0 rgba(96,165,250,0.5)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-4 h-4 rounded-full border-2 border-blue-400 bg-blue-500 relative"
                style={{ boxShadow: '0 0 12px rgba(96,165,250,0.6)' }}
            >
                <span className="absolute inset-0.5 rounded-full bg-blue-300 opacity-80" />
            </motion.div>
        </div>

        <TiltCard>
            <div className="p-6 md:p-8 rounded-2xl backdrop-blur-xl border"
                style={{
                    background: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                        <h3 className="text-xl font-heading font-bold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            <Briefcase size={13} />
                            <span>{exp.company}</span>
                            <span className="opacity-40">·</span>
                            <MapPin size={13} />
                            <span>{exp.location}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-400">
                            <Calendar size={13} />
                            <span>{exp.period}</span>
                        </div>
                        {exp.status === 'Active' && (
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
                                style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)' }}>
                                <Zap size={10} className="text-green-400" />
                                <span className="text-green-400">Live System</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex gap-2.5 text-sm leading-relaxed font-medium"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <CheckCircle size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                        </motion.li>
                    ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                        <span key={i}
                            className="text-xs px-3 py-1.5 rounded-lg font-semibold border"
                            style={{
                                background: 'rgba(96,165,250,0.08)',
                                borderColor: 'rgba(96,165,250,0.15)',
                                color: 'var(--text-primary)',
                            }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </TiltCard>
    </motion.div>
)

const Experience = () => (
    <section id="experience" className="section-padding min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
                    style={{
                        color: 'var(--accent-primary)',
                        borderColor: 'rgba(96,165,250,0.25)',
                        background: 'rgba(96,165,250,0.06)',
                    }}>
                    Professional Journey
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold" style={{ color: 'var(--text-primary)' }}>
                    Work{' '}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                        History
                    </span>
                </h2>
            </motion.div>

            <div className="ml-4 md:ml-0">
                {experiences.map((exp, i) => <ExperienceItem key={i} exp={exp} index={i} />)}
            </div>
        </div>
    </section>
)

export default Experience
