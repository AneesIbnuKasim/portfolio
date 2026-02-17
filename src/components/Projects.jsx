import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "T-Shirt Studio (E-Commerce)",
        description: "Full-stack custom apparel platform allowing AI-assisted design generation and personalization. Features real-time customization, Redux state management, and Cloudinary integration for design assets.",
        tags: ["React", "TypeScript", "Redux", "Node.js", "MongoDB", "Cloudinary"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
    },
    {
        title: "Learning Web App (LMS)",
        description: "Comprehensive LMS with role-based access for students and instructors. Includes real-time chat via Socket.io, course management, assignment grading, and secure REST APIs.",
        tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Socket.io"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
    },
    {
        title: "Full Stack E-Commerce",
        description: "Robust shopping platform with Admin Dashboard, AI-powered chat support, and complex order tracking. Deployed on AWS Elastic Beanstalk with CloudFront CDN.",
        tags: ["React", "Node.js", "Socket.io", "AWS", "Redis"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1472851294608-d0fe5c281754?w=800&q=80"
    }
]

const miniProjects = [
    { title: "Real-time Chat App", tags: ["React", "Socket.io", "Tailwind"] },
    { title: "Weather App", tags: ["React", "OpenWeather API"] },
    { title: "Finance Tracker", tags: ["React", "LocalStorage"] },
    { title: "Contacts Manager", tags: ["Node.js", "Express", "MongoDB"] }
]

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl overflow-hidden group bg-white dark:bg-white/5"
    >
        <div className="relative h-48 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark overlay for text readability over image if needed, but here text is below */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-heading font-bold mb-2 text-primary group-hover:text-accent-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-secondary text-sm mb-4 line-clamp-3 leading-relaxed font-medium">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-black dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 font-semibold">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={project.github} className="text-secondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-semibold">
                    <Github size={18} /> Code
                </a>
                <a href={project.link} className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-1 text-sm font-semibold">
                    <ExternalLink size={18} /> Live Demo
                </a>
            </div>
        </div>
    </motion.div>
)

const Projects = () => {
    return (
        <section id="projects" className="section-padding min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Projects</span>
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg font-medium">
                        A selection of my work building scalable web applications with the MERN stack.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Mini Projects */}
                <div className="mt-20">
                    <h3 className="text-2xl font-heading font-bold mb-8 text-center text-primary">Noteworthy <span className="text-accent-primary">Mini-Projects</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {miniProjects.map((mini, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-xl bg-white dark:bg-white/5"
                            >
                                <h4 className="font-bold text-lg mb-2 text-primary">{mini.title}</h4>
                                <div className="flex flex-wrap gap-2 text-xs text-secondary font-medium">
                                    {mini.tags.join(" • ")}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
