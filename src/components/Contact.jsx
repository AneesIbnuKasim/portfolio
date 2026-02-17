import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for reaching out! This is a demo form.");
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="contact" className="section-padding min-h-screen flex items-center relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Connect</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-secondary text-lg mb-8 leading-relaxed">
                        I'm currently available for full-time opportunities.
                        Whether you have a question about my stack, want to collaborate, or just want to say hi, I'd love to hear from you!
                    </motion.p>

                    <motion.div variants={staggerContainer} className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 text-secondary group cursor-pointer">
                            <div className="p-4 glass rounded-xl text-accent-primary bg-white/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Email</p>
                                <a href="mailto:aneesdropz@gmail.com" className="font-medium text-primary hover:text-accent-primary transition-colors text-lg">aneesdropz@gmail.com</a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center gap-4 text-secondary group">
                            <div className="p-4 glass rounded-xl text-accent-primary bg-white/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Phone</p>
                                <p className="font-medium text-primary text-lg">+91 9562390326</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center gap-4 text-secondary group">
                            <div className="p-4 glass rounded-xl text-accent-primary bg-white/50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Location</p>
                                <p className="font-medium text-primary text-lg">Kerala, India <span className="text-sm text-accent-primary">(Open to Relocate)</span></p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mt-12 flex gap-4">
                        <a href="https://github.com/Anees-M" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-2 bg-white/50 dark:bg-white/5 text-secondary border border-gray-200 dark:border-white/10 shadow-lg">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/anees-m" target="_blank" rel="noreferrer" className="p-4 glass rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 bg-white/50 dark:bg-white/5 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-white/10 shadow-lg">
                            <Linkedin size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-10 rounded-3xl bg-white/80 dark:bg-white/5 shadow-2xl border border-white/20 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl -z-10" />
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-secondary mb-2 ml-1">Name</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-secondary mb-2 ml-1">Email</label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-secondary mb-2 ml-1">Message</label>
                            <textarea
                                rows="4"
                                className="input-field resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary group flex items-center justify-center gap-2">
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact
