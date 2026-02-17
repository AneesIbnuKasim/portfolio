import { motion } from 'framer-motion'
import { Code, Database, Server, Cloud, Globe, Cpu, Smartphone, Layout } from 'lucide-react'

const skills = [
    { name: "JavaScript (ES6+)", icon: <Code size={20} />, level: 95 },
    { name: "React.js & Redux", icon: <Layout size={20} />, level: 90 },
    { name: "Node.js & Express", icon: <Server size={20} />, level: 90 },
    { name: "MongoDB", icon: <Database size={20} />, level: 85 },
    { name: "Socket.io", icon: <Globe size={20} />, level: 85 },
    { name: "AWS & Hosting", icon: <Cloud size={20} />, level: 80 },
    { name: "Tailwind & UI", icon: <Smartphone size={20} />, level: 90 },
    { name: "System Design", icon: <Cpu size={20} />, level: 80 },
]

const About = () => {
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section-padding min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Me</span>
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-secondary">
                        <p>
                            I am a result-driven, self-taught MERN Stack developer with a proven track record of building scalable web applications.
                            My expertise spans across the entire stack, from crafting responsive frontends with React, Tailwind, and Shadcn, to engineering robust backends with Node.js, Express, and MongoDB.
                        </p>
                        <p>
                            I have successfully delivered impactful projects including E-commerce platforms and Learning Management Systems using real-time technologies like Socket.io.
                            I am energetic, adaptable, and dedicated to developing API-friendly solutions that solve real-world problems.
                        </p>
                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 inline-block">
                            <span className="font-semibold text-primary">Education:</span>
                            <span className="block text-sm mt-1">Electronics And Communication Engineering (2013-2017)</span>
                            <span className="text-xs text-secondary">HMSIT, VTU, Bengaluru</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl"
                >
                    <h3 className="text-2xl font-heading font-bold mb-8 text-primary flex items-center gap-2">
                        Technical Arsenal
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    </h3>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                variants={item}
                                key={index}
                                className="group flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/30"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-blue-600 dark:text-blue-400 p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <span className="font-semibold text-sm text-primary">{skill.name}</span>
                                </div>

                                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
export default About
