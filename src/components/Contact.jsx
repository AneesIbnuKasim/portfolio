import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !message) return
        console.log('Contact form submitted:', { name, email, message })
        setSent(true)
        setName(""); setEmail(""); setMessage("")
        setTimeout(() => setSent(false), 4000)
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    }
    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    const contactItems = [
        {
            icon: <Mail size={22} />,
            label: 'Email',
            value: <a href="mailto:aneesdropz@gmail.com" className="font-medium text-lg hover:text-blue-400 transition-colors" style={{ color: 'var(--text-primary)' }}>aneesdropz@gmail.com</a>,
        },
        {
            icon: <Phone size={22} />,
            label: 'Phone',
            value: <p className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>+91 9562390326</p>,
        },
        {
            icon: <MapPin size={22} />,
            label: 'Location',
            value: <p className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>Kerala, India <span className="text-sm text-blue-400">(Open to Relocate)</span></p>,
        },
    ]

    return (
        <section id="contact" className="section-padding min-h-screen flex items-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full -z-10"
                style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20">

                {/* Left — Info */}
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.span variants={fadeInUp}
                        className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
                        style={{ color: 'var(--accent-primary)', borderColor: 'rgba(96,165,250,0.25)', background: 'rgba(96,165,250,0.06)' }}>
                        Get In Touch
                    </motion.span>

                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Let's{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                            Connect
                        </span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-lg mb-10 leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                        I'm currently available for full-time opportunities. Whether you have a question about my stack,
                        want to collaborate, or just want to say hi — I'd love to hear from you!
                    </motion.p>

                    <motion.div variants={stagger} className="space-y-5">
                        {contactItems.map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-3.5 rounded-xl border backdrop-blur-sm text-blue-400 group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        background: 'rgba(96,165,250,0.06)',
                                        borderColor: 'rgba(96,165,250,0.15)',
                                        boxShadow: 'var(--glass-shadow)',
                                    }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-50" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                                    {item.value}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
                        <a href="https://github.com/AneesIbnuKasim" target="_blank" rel="noreferrer"
                            className="p-4 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            style={{
                                background: 'var(--glass-bg)',
                                borderColor: 'var(--glass-border)',
                                color: 'var(--text-secondary)',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff' }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = 'var(--text-secondary)' }}>
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/anees-mangalodan-5b38ba240/" target="_blank" rel="noreferrer"
                            className="p-4 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            style={{
                                background: 'var(--glass-bg)',
                                borderColor: 'var(--glass-border)',
                                color: '#60a5fa',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff' }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = '#60a5fa' }}>
                            <Linkedin size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right — Contact form */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="p-8 md:p-10 rounded-3xl border backdrop-blur-xl"
                        style={{
                            background: 'var(--glass-bg)',
                            borderColor: 'var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                        }}>
                        {/* Top accent */}
                        <div className="absolute top-0 left-8 right-8 h-[1px] rounded-full"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent)' }}
                        />

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-64 text-center"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                    style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)' }}>
                                    <Send size={28} className="text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>I'll get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>Name</label>
                                    <input type="text" className="input-field" placeholder="John Doe"
                                        value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>Email</label>
                                    <input type="email" className="input-field" placeholder="john@example.com"
                                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>Message</label>
                                    <textarea rows="4" className="input-field resize-none" placeholder="Your message here..."
                                        value={message} onChange={(e) => setMessage(e.target.value)} required />
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
