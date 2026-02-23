import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Projects", to: "projects" },
        { name: "Experience", to: "experience" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-2" : "bg-transparent py-4"
            }`}
            style={scrolled ? {
                background: 'rgba(3,7,18,0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(96,165,250,0.12)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
            } : {}}>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="home" smooth duration={500} className="cursor-pointer flex-shrink-0">
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            className="font-heading font-bold text-2xl tracking-wider select-none"
                            style={{ color: 'var(--text-primary)' }}>
                            ANEES
                            <span className="text-blue-400" style={{ textShadow: '0 0 12px rgba(96,165,250,0.6)' }}>.</span>
                            <span style={{ color: 'var(--text-primary)' }}>DEV</span>
                        </motion.span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name} to={link.to} smooth duration={500}
                                spy onSetActive={() => setActiveSection(link.to)}
                                className="relative text-sm font-semibold cursor-pointer group transition-colors duration-200"
                                style={{ color: activeSection === link.to ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${activeSection === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                    style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }}
                                />
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile toggle */}
                    <div className="flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg transition-colors"
                            style={{ color: 'var(--text-primary)' }}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden border-t"
                        style={{
                            background: 'rgba(3,7,18,0.95)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(96,165,250,0.1)',
                        }}>
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name} to={link.to} smooth duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-base font-semibold cursor-pointer transition-all border-b last:border-0"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        borderColor: 'rgba(255,255,255,0.04)',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(96,165,250,0.06)'; e.currentTarget.style.color = 'var(--accent-primary)' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
