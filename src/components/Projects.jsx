import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Github, ExternalLink, ShoppingCart, Tag, CheckCircle, Star, Cpu, Globe, Layers, Package } from 'lucide-react'
import tshirtStoreImg from '../assets/TshirtStore.png'

const projects = [
    {
        title: "E-Commerce Web Application",
        description: "Production-ready, cloud-hosted e-commerce platform with AI-powered chat support, Razorpay/COD/wallet payments, real-time order tracking, coupon system, dynamic admin dashboard, and CI/CD with GitHub Actions → AWS Elastic Beanstalk.",
        tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS S3", "EC2", "JWT", "Razorpay", "ChatGPT API"],
        link: "#",
        github: "https://github.com/AneesIbnuKasim",
        ecommerce: true,
        highlights: [
            "JWT auth + role-based access control",
            "AI-powered customer support (ChatGPT API)",
            "CI/CD → AWS Elastic Beanstalk",
            "AWS S3 + CloudFront CDN for media",
        ]
    },
    {
        title: "AmCloths — Custom Apparel Platform",
        description: "Scalable, design-driven e-commerce solution enabling users to design and purchase personalized apparel. Features a live customization Studio, TypeScript frontend, Redux cart/auth state, role-based admin dashboard, and Cloudinary media management.",
        tags: ["TypeScript", "React", "Redux", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
        link: "#",
        github: "https://github.com/ajmalsabith/print-cloth-backend-",
        ecommerce: false,
        image: tshirtStoreImg,
        highlights: [
            "Live design Studio with custom uploads",
            "TypeScript type-safe frontend",
            "Admin dashboard — full platform mgmt",
            "Cloudinary image optimization",
        ]
    },
]

const miniProjects = [
    {
        title: "Chat App",
        icon: Globe,
        tags: ["React", "Node.js", "Socket.io"],
        desc: "Customer-agent real-time chat with queue system using Socket.io rooms.",
        github: "https://github.com/AneesIbnuKasim",
        live: "#",
    },
    {
        title: "Weather App",
        icon: Cpu,
        tags: ["React", "OpenWeather API"],
        desc: "Sleek SPA delivering real-time weather via OpenWeather API.",
        github: "https://github.com/AneesIbnuKasim",
        live: "#",
    },
    {
        title: "Finance Tracker",
        icon: Layers,
        tags: ["React", "LocalStorage"],
        desc: "Daily finance recorder with add, edit, delete and persistent local storage.",
        github: "https://github.com/AneesIbnuKasim",
    },
    {
        title: "Contacts Manager",
        icon: Package,
        tags: ["Node.js", "Express", "MongoDB"],
        desc: "Backend REST API with login auth and role-based CRUD on contacts.",
        github: "https://github.com/AneesIbnuKasim",
    }
]

/* ── Animated E-Commerce Scene ──────────────────────────────── */
const EcommerceScene = () => {
    const [couponVisible, setCouponVisible] = useState(false)
    const price = useMotionValue(99.99)
    const [displayPrice, setDisplayPrice] = useState('99.99')

    useEffect(() => {
        const t1 = setTimeout(() => setCouponVisible(true), 2000)
        return () => clearTimeout(t1)
    }, [])

    useEffect(() => {
        if (couponVisible) {
            const controls = animate(price, 69.99, {
                duration: 1.2, ease: 'easeOut',
                onUpdate: (v) => setDisplayPrice(v.toFixed(2))
            })
            return () => controls.stop()
        }
    }, [couponVisible, price])

    return (
        <div className="relative h-52 w-full overflow-hidden rounded-xl"
            style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 100%)' }}>
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }} />

            {/* Product card */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 left-4 p-3 rounded-xl border w-36"
                style={{ background: 'rgba(15,23,42,0.9)', borderColor: 'rgba(96,165,250,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                <div className="w-full h-14 rounded-lg mb-2 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.15))' }}>
                    <ShoppingCart size={22} className="text-blue-400 opacity-80" />
                </div>
                <div className="text-[10px] font-semibold text-white/70 mb-1">Premium T-Shirt</div>
                <div className="flex items-center gap-1">
                    <motion.span className="text-sm font-bold text-white">${displayPrice}</motion.span>
                    {couponVisible && (
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                            className="text-[10px] line-through text-white/30">$99.99</motion.span>
                    )}
                </div>
                <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />)}
                </div>
            </motion.div>

            {/* Checkout panel */}
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-6 right-3 p-3 rounded-xl border w-40"
                style={{ background: 'rgba(15,23,42,0.9)', borderColor: 'rgba(167,139,250,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-2">Order Summary</div>
                <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px]">
                        <span className="text-white/50">Subtotal</span>
                        <span className="text-white/80 font-semibold">${displayPrice}</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                        <span className="text-white/50">Shipping</span>
                        <span className="text-green-400 font-semibold">Free</span>
                    </div>
                    <div className="border-t border-white/10 pt-1.5 flex justify-between text-[10px]">
                        <span className="text-white/70 font-bold">Total</span>
                        <span className="text-blue-400 font-bold">${displayPrice}</span>
                    </div>
                </div>
                <motion.button whileHover={{ scale: 1.02 }}
                    className="w-full mt-2 py-1.5 rounded-lg text-[10px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                    Razorpay / COD
                </motion.button>
            </motion.div>

            {/* Coupon badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -12, y: 20 }}
                animate={couponVisible ? { opacity: 1, scale: 1, rotate: -6, y: 0 } : {}}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-bold text-[11px]"
                style={{
                    background: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(234,179,8,0.1))',
                    borderColor: 'rgba(234,179,8,0.4)', color: '#fbbf24',
                    boxShadow: '0 0 16px rgba(234,179,8,0.2)',
                }}>
                <Tag size={10} /> SAVE30 — 30% OFF! <CheckCircle size={10} className="text-green-400" />
            </motion.div>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60 animate-pulse" />
        </div>
    )
}

/* ── 3D Project Card ─────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        animate(rotateX, ((e.clientY - rect.top) / rect.height - 0.5) * -8, { duration: 0.3 })
        animate(rotateY, ((e.clientX - rect.left) / rect.width - 0.5) * 8, { duration: 0.3 })
    }
    const handleLeave = () => {
        animate(rotateX, 0, { duration: 0.5 })
        animate(rotateY, 0, { duration: 0.5 })
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl overflow-hidden border backdrop-blur-xl flex flex-col group"
                style={{
                    background: 'var(--glass-bg)',
                    borderColor: 'var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                }}>
                {/* Visual area */}
                <div className="relative overflow-hidden">
                    {project.ecommerce ? (
                        <div className="p-3 pb-0"><EcommerceScene /></div>
                    ) : (
                        <div className="relative h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}
                                className="w-full h-[100px] object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    )}
                    <motion.div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.8), transparent)' }} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300"
                        style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed line-clamp-3 font-medium flex-1"
                        style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && (
                        <ul className="space-y-1.5 mb-4">
                            {project.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-[11px] font-medium"
                                    style={{ color: 'var(--text-secondary)' }}>
                                    <CheckCircle size={11} className="text-blue-400 flex-shrink-0 mt-0.5" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded-full border font-semibold"
                                style={{
                                    background: 'rgba(96,165,250,0.08)',
                                    borderColor: 'rgba(96,165,250,0.18)',
                                    color: 'var(--accent-primary)',
                                }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                        <a href={project.github} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:text-blue-400"
                            style={{ color: 'var(--text-secondary)' }}>
                            <Github size={16} /> Code
                        </a>
                        <a href={project.link}
                            className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-violet-400 transition-colors duration-200">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

/* ── Main Projects Component ─────────────────────────────────── */
const Projects = () => (
    <section id="projects" className="section-padding min-h-screen">
        <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
                    style={{ color: 'var(--accent-primary)', borderColor: 'rgba(96,165,250,0.25)', background: 'rgba(96,165,250,0.06)' }}>
                    Portfolio
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Featured{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                        Projects
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Production-ready full-stack applications built with the MERN stack, TypeScript, and cloud infrastructure.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Mini projects */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-heading font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
                    Noteworthy{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                        Mini-Projects
                    </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {miniProjects.map((mini, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -4 }}
                            transition={{ delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="p-5 rounded-2xl border group cursor-default flex flex-col"
                            style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)', backdropFilter: 'blur(16px)' }}>
                            <div className="flex gap-1.5 mb-4">
                                <div className="w-2 h-2 rounded-full bg-red-400/70" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                                <div className="w-2 h-2 rounded-full bg-green-400/70" />
                            </div>
                            <mini.icon size={18} className="mb-2 text-blue-400 group-hover:text-violet-400 transition-colors" />
                            <h4 className="font-bold text-sm mb-1.5" style={{ color: 'var(--text-primary)' }}>{mini.title}</h4>
                            <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: 'var(--text-secondary)' }}>{mini.desc}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                                {mini.tags.map((t, j) => (
                                    <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                                        style={{ background: 'rgba(96,165,250,0.06)', borderColor: 'rgba(96,165,250,0.15)', color: 'var(--accent-primary)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a href={mini.github} target="_blank" rel="noreferrer"
                                    className="flex items-center gap-1 text-[11px] font-semibold hover:text-blue-400 transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}>
                                    <Github size={12} /> Code
                                </a>
                                {mini.live && (
                                    <a href={mini.live}
                                        className="flex items-center gap-1 text-[11px] font-semibold text-blue-400 hover:text-violet-400 transition-colors">
                                        <ExternalLink size={12} /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
)

export default Projects
