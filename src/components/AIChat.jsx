import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Anees's AI Assistant. Ask me about his projects, skills, or experience!", sender: 'ai' }
    ])
    const [input, setInput] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages, isTyping])

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg = { id: Date.now(), text: input, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsTyping(true)

        // Simulated AI response
        setTimeout(() => {
            let replyText = "I'm not sure how to answer that yet, but you can contact Anees directly at aneesdropz@gmail.com!"
            const lowerInput = input.toLowerCase()

            if (lowerInput.includes('skill') || lowerInput.includes('stack')) {
                replyText = "Anees is proficient in the MERN stack (MongoDB, Express, React, Node.js), Redux, TypeScript, and AWS. He also builds real-time apps with Socket.io."
            } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
                replyText = "He has built a Learning Management System (LMS), a custom T-Shirt E-commerce store with AI features, and a full-stack E-commerce platform."
            } else if (lowerInput.includes('experience') || lowerInput.includes('job')) {
                replyText = "Anees is currently a Backend Developer at Mentor Bro (Jun 2025 - Present), building real-time education platforms."
            } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
                replyText = "You can reach him at aneesdropz@gmail.com or +91 9562390326. He is open to opportunities!"
            } else if (lowerInput.includes('location')) {
                replyText = "He is based in Kerala, India."
            } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                replyText = "Hello! How can I help you today?"
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: replyText, sender: 'ai' }])
            setIsTyping(false)
        }, 1200)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[30rem] glass rounded-3xl flex flex-col shadow-2xl z-50 overflow-hidden border border-white/20 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-between items-center text-white shadow-md">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-sm block">Anees's Assistant</span>
                                    <span className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-gray-50 dark:bg-[#0B1120]">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`
                                        max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm
                                        ${msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-white/5'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about projects, skills..."
                                    className="flex-1 bg-gray-100 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-black border focus:border-blue-500 rounded-full px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none transition-all placeholder:text-gray-400"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-8 right-8 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                >
                    {isOpen ? <X size={28} /> :
                        <>
                            <MessageCircle size={28} />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles size={16} className="text-yellow-300" />
                            </motion.div>
                        </>
                    }
                </motion.button>
            </div>
        </>
    )
}

export default AIChat
