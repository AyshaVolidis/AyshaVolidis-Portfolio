import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { isDark, toggleTheme } = useTheme();
    const observerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrolled(winScroll > 20);
            setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
        );
        sections.forEach((section) => observerRef.current.observe(section));
        return () => {
            if (observerRef.current) {
                sections.forEach((section) => observerRef.current.unobserve(section));
            }
        };
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="h-[2px] bg-zinc-100 dark:bg-zinc-900">
                <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <nav
                className={cn(
                    "mx-3 md:mx-8 my-3 rounded-2xl md:rounded-full transition-all duration-500 px-5 md:px-8 py-3",
                    scrolled
                        ? "glass shadow-2xl shadow-primary/10 dark:shadow-primary/5"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(e, "#")}
                        className="text-2xl font-bold text-gradient tracking-tight hover:opacity-80 transition-opacity"
                    >
                        AV.
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                    activeSection === link.href.slice(1)
                                        ? "text-white"
                                        : "theme-text-secondary hover:text-primary dark:hover:text-white"
                                )}
                            >
                                {activeSection === link.href.slice(1) && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-scale-in" />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}

                        <div className="ml-4 pl-4 border-l border-zinc-200 dark:border-white/10">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
                                aria-label="Toggle Theme"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-zinc-700 dark:text-zinc-300"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2 animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={cn(
                                    "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                                    activeSection === link.href.slice(1)
                                        ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-white"
                                        : "theme-text-secondary hover:bg-zinc-50 dark:hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
