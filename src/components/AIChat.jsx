import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Brain } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Neural orbit ring ───────────────────────────────────────── */
const NeuralRing = () => {
    const dots = [0, 60, 120, 180, 240, 300]
    return (
        <div className="absolute inset-0 pointer-events-none" style={{ transform: 'scale(1.6)' }}>
            {dots.map((deg, i) => (
                <motion.div key={i}
                    animate={{ rotate: [deg, deg + 360] }}
                    transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                        className="absolute rounded-full"
                        style={{
                            width: 4, height: 4,
                            background: i % 2 === 0 ? '#60a5fa' : '#a78bfa',
                            top: '0%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: `0 0 6px ${i % 2 === 0 ? '#60a5fa' : '#a78bfa'}`,
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

const knowledgeBase = [
    {
        keys: ['skill', 'stack', 'tech', 'language', 'framework'],
        reply: "Anees is proficient in the full MERN stack: MongoDB, Express, React, Node.js, plus TypeScript, Redux, Socket.io, and AWS (S3, CloudFront, Elastic Beanstalk). He also works with Tailwind CSS, Shadcn UI, Firebase, JWT auth, and CI/CD pipelines."
    },
    {
        keys: ['project', 'build', 'work', 'portfolio', 'app'],
        reply: "Anees has built two major production projects: (1) A full E-Commerce platform with AI chat support, Razorpay/COD/wallet payments, AWS deployment, and GitHub Actions CI/CD. (2) AmCloths — a custom apparel platform with a live design Studio, TypeScript frontend, and Cloudinary media management."
    },
    {
        keys: ['ecommerce', 'e-commerce', 'shop', 'razorpay', 'aws'],
        reply: "His E-Commerce platform includes Razorpay, COD & wallet payments, AI-powered order tracking via ChatGPT API, admin dashboard, coupon system, and CI/CD to AWS Elastic Beanstalk. Images are served via AWS S3 + CloudFront CDN."
    },
    {
        keys: ['amcloths', 'apparel', 'tshirt', 't-shirt', 'design', 'cloudinary'],
        reply: "AmCloths is a custom apparel platform where users can design T-shirts with live previews. Built with TypeScript + React frontend, Redux state, Node.js/Express backend, MongoDB, JWT auth, and Cloudinary for media."
    },
    {
        keys: ['experience', 'job', 'work', 'mentor', 'company'],
        reply: "Anees is currently a Software Development Trainee at Mentor Bro (June 2025 – Present). He builds scalable backend APIs with Node.js, Express & MongoDB, integrates real-time features via Socket.io, and uses JWT-based auth with role-based access control."
    },
    {
        keys: ['contact', 'email', 'hire', 'reach', 'available'],
        reply: "You can reach Anees at aneesdropz@gmail.com or +91 9562390326. LinkedIn: linkedin.com/in/anees-mangalodan-5b38ba240. He is actively open to full-time opportunities!"
    },
    {
        keys: ['location', 'where', 'based', 'city', 'india'],
        reply: "Anees is based in Kerala, India and is open to relocation worldwide."
    },
    {
        keys: ['education', 'degree', 'college', 'university'],
        reply: "Anees holds a B.E. in Electronics & Communication Engineering from HMSIT, VTU, Bengaluru (2013–2017). He is a self-taught Full-Stack Developer since then."
    },
    {
        keys: ['socket', 'realtime', 'real-time', 'websocket', 'live'],
        reply: "Anees has deep experience with Socket.io — building real-time chat for LMS platforms, customer-agent chat apps with queue systems, live order tracking, and instructor broadcast systems."
    },
    {
        keys: ['hello', 'hi', 'hey', 'start', 'help'],
        reply: "Hello! I'm Anees's AI Assistant. You can ask me about his skills, projects, experience, or how to get in touch. What would you like to know?"
    },
]

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Anees's AI Assistant. Ask me about his skills, projects, experience, or how to hire him!", sender: 'ai' }
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    const handleSend = () => {
        if (!input.trim()) return
        const userMsg = { id: Date.now(), text: input, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        const userInput = input.toLowerCase()
        setInput("")
        setIsTyping(true)

        setTimeout(() => {
            const match = knowledgeBase.find(kb => kb.keys.some(k => userInput.includes(k)))
            const replyText = match
                ? match.reply
                : "I'm not sure about that, but you can contact Anees directly at aneesdropz@gmail.com — he'd be happy to answer!"
            setMessages(prev => [...prev, { id: Date.now() + 1, text: replyText, sender: 'ai' }])
            setIsTyping(false)
        }, 1200)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className="fixed bottom-28 right-6 w-80 md:w-96 h-[30rem] rounded-3xl flex flex-col z-50 overflow-hidden"
                        style={{
                            background: 'rgba(3,7,18,0.96)',
                            border: '1px solid rgba(96,165,250,0.15)',
                            boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(96,165,250,0.08)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        {/* Header */}
                        <div className="px-4 py-3.5 flex justify-between items-center relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2d1b69 100%)' }}>
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.4) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                            <div className="flex items-center gap-2.5 relative z-10">
                                <div className="relative">
                                    <div className="p-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                                        <Brain size={18} className="text-blue-200" />
                                    </div>
                                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400"
                                        style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
                                </div>
                                <div>
                                    <span className="font-bold text-sm text-white block">Anees's AI Assistant</span>
                                    <span className="text-[11px] text-blue-200/70 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        Neural Inference · Online
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full hover:bg-white/15 transition-colors relative z-10">
                                <X size={18} className="text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-3" style={{ background: 'rgba(8,12,28,0.95)' }}>
                            {messages.map((msg) => (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none border'}`}
                                        style={msg.sender === 'user'
                                            ? { background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: 'white' }
                                            : { background: 'rgba(96,165,250,0.06)', borderColor: 'rgba(96,165,250,0.12)', color: 'rgba(203,213,225,1)' }
                                        }>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center border"
                                        style={{ background: 'rgba(96,165,250,0.06)', borderColor: 'rgba(96,165,250,0.12)' }}>
                                        {[0, 0.15, 0.3].map((d, i) => (
                                            <motion.span key={i} animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                                                className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t" style={{ background: 'rgba(10,15,35,0.98)', borderColor: 'rgba(96,165,250,0.1)' }}>
                            <div className="flex gap-2">
                                <input type="text" value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about skills, projects, experience..."
                                    className="flex-1 rounded-full px-4 py-2.5 text-sm outline-none border transition-all"
                                    style={{ background: 'rgba(96,165,250,0.06)', borderColor: 'rgba(96,165,250,0.15)', color: '#e2e8f0' }}
                                    onFocus={(e) => e.target.style.borderColor = 'rgba(96,165,250,0.4)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(96,165,250,0.15)'}
                                />
                                <motion.button onClick={handleSend} whileTap={{ scale: 0.9 }}
                                    disabled={!input.trim()}
                                    className="p-2.5 rounded-full text-white disabled:opacity-40 disabled:cursor-not-allowed"
                                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                                    <Send size={16} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB */}
            <div className="fixed bottom-8 right-8 z-50">
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative text-white p-4 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                        boxShadow: isOpen ? '0 0 0 0 transparent' : '0 0 24px rgba(37,99,235,0.5), 0 0 48px rgba(124,58,237,0.2)',
                    }}>
                    {!isOpen && <NeuralRing />}
                    <AnimatePresence mode="wait">
                        {isOpen
                            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={26} /></motion.div>
                            : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={26} /></motion.div>
                        }
                    </AnimatePresence>
                    {!isOpen && <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#030712]" />}
                </motion.button>
            </div>
        </>
    )
}

export default AIChat
