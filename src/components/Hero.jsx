import { Typewriter } from 'react-simple-typewriter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const scrollIconOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center pt-15 overflow-hidden">

            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -z-10" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-200 dark:border-blue-500/30 rounded-full bg-blue-50 dark:bg-blue-500/5 mb-8 backdrop-blur-sm hover:scale-105 transition-transform cursor-default shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                            </span>
                            <span className="text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide">Available for work</span>
                        </div>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-primary mb-4 leading-tight tracking-tight drop-shadow-sm">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Anees M</span>
                    </motion.h1>

                    <motion.div variants={item} className="h-20 md:h-24 mb-4">
                        <span className="text-3xl md:text-5xl font-heading font-bold text-secondary">
                            <Typewriter
                                words={['Full Stack Developer', 'MERN Stack Expert', 'Backend Specialist', 'Real-time Systems']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.div>

                    <motion.p variants={item} className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-7 leading-relaxed font-medium">
                        Result-driven MERN Stack developer specialized in building scalable web applications.
                        Expertise in React, Node.js, MongoDB, and AWS to deliver robust API-friendly solutions.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="projects" smooth={true} offset={-80} className="w-full sm:w-auto">
                            <button className="btn-primary flex items-center justify-center gap-2 w-full group">
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="btn-outline flex items-center justify-center gap-2 w-full group">
                                Download Resume
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Cool Scroll Indicator */}
            <motion.div
                style={{ opacity: scrollIconOpacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
            >
                <Link to="about" smooth={true} duration={500} offset={-80}>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-secondary uppercase tracking-[0.3em] font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            Scroll Down
                        </span>
                        <div className="relative w-7 h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1.5 overflow-hidden">
                            {/* The "Cool" Traveling Dot */}
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                    opacity: [1, 0, 1]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                            />
                            {/* Decorative line inside mouse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
                        </div>
                        {/* Arrow indicator that fades in/out */}
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mt-2 text-blue-500 dark:text-blue-400 pb-5"
                        >
                            <ArrowRight size={16} className="rotate-90" />
                        </motion.div>
                    </div>
                </Link>
            </motion.div>
        </section>
    )
}

export default Hero
