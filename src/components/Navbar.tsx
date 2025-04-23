import React, { useEffect, useState } from 'react';
import { TreePine, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = Math.min(window.scrollY, 200);
            const progress = currentScroll / 200;
            setScrollProgress(progress);
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setActiveSection('');
                return;
            }

            const sections = ['services', 'projects', 'testimonials', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const linkClasses = (section: string) =>
        `${activeSection === section ? 'underline font-bold' : ''} hover:underline`;

    return (
        <nav className={`sticky top-0 max-w-[1080px] m-auto z-50 h-16 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-leaf shadow-md' : 'bg-transparent'}`}>
            <div className="mx-auto flex items-center justify-between h-full px-4 relative">
                {/* Left Links (Desktop) */}
                <div className="hidden md:flex gap-4 w-1/3 justify-start">
                    <a href="#services" className={`text-pine font-mono ${linkClasses('services')}`}>SERVICES</a>
                    <a href="#projects" className={`text-pine font-mono ${linkClasses('projects')}`}>PORTFOLIO</a>
                </div>

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {isScrolled && (
                        <a href="#top" aria-label="Scroll to top">
                            <img
                                src="/assets/logos/pinecoded-green.png"
                                alt="pine logo"
                                style={{
                                    transform: `scale(${1.4 - scrollProgress * 0.3})`,
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                                className="w-16"
                            />
                        </a>
                    )}
                </div>

                {/* Right Links (Desktop) */}
                <div className="hidden md:flex gap-4 w-1/3 justify-end">
                    <a href="#testimonials" className={`text-pine font-mono ${linkClasses('testimonials')}`}>FEEDBACK</a>
                    <a href="#contact" className={`text-pine font-mono ${linkClasses('contact')}`}>CONTACT</a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-50 ml-auto">
                    <button onClick={toggleMobileMenu} aria-label="Toggle navigation">
                        <AnimatePresence mode="wait" initial={false}>
                            {!mobileMenuOpen ? (
                                <motion.div
                                    key="treepine"
                                    initial={{ y: -10, rotate: -10, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                                    exit={{ y: 10, rotate: 10, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                >
                                    <TreePine className="text-pine w-8 h-8" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="close"
                                    initial={{ y: -10, rotate: 10, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                                    exit={{ y: 10, rotate: -10, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                >
                                    <X className="text-pine w-8 h-8" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-30 transition duration-300 backdrop-blur-sm bg-black/30 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                onClick={toggleMobileMenu}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-screen w-4/5 bg-leaf shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-start p-6 gap-6 text-pine font-mono text-lg">
                    <a href="#services" onClick={toggleMobileMenu} className={linkClasses('services')}>SERVICES</a>
                    <a href="#projects" onClick={toggleMobileMenu} className={linkClasses('projects')}>PORTFOLIO</a>
                    <a href="#testimonials" onClick={toggleMobileMenu} className={linkClasses('testimonials')}>FEEDBACK</a>
                    <a href="#contact" onClick={toggleMobileMenu} className={linkClasses('contact')}>CONTACT</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
