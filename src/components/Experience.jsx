import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
    {
        role: "Backend Developer",
        company: "Mentor Bro",
        period: "June 2025 - Present",
        location: "Ramanatukara, Kerala",
        description: "Focusing on building a robust real-time education platform using JavaScript, Node.js, Express, MongoDB, and Socket.IO. My primary contributions included implementing scalable APIs and socket-based communication infrastructure to enable seamless live learning interactions.",
        tech: ["Node.js", "Express", "MongoDB", "Socket.io", "JavaScript"]
    }
]

const ExperienceItem = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="relative pl-8 pb-12 border-l-2 border-blue-200 dark:border-blue-500/30 last:border-0"
    >
        <div className="absolute left-[-7px] top-0 w-3.5 h-3.5 bg-blue-600 dark:bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] ring-4 ring-white dark:ring-[#030014]" />

        <div className="glass-card p-8 rounded-2xl bg-white dark:bg-white/5">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-xl font-heading font-bold text-primary">{exp.role}</h3>
                <div className="flex items-center text-sm text-accent-primary font-semibold gap-1 mt-1 sm:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                </div>
            </div>
            <div className="text-secondary mb-4 text-sm flex items-center gap-2 font-medium">
                <Briefcase size={16} />
                <span>{exp.company}, {exp.location}</span>
            </div>
            <p className="text-secondary mb-6 leading-relaxed text-base font-medium">
                {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary font-semibold">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
)

const Experience = () => {
    return (
        <section id="experience" className="section-padding min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">History</span>
                    </h2>
                </motion.div>

                <div className="ml-4 md:ml-0">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
