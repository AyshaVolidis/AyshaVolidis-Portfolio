import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
            <nav
                className={cn(
                    "max-w-8xl mx-auto rounded-full transition-all duration-300 px-8 py-3",
                    scrolled
                        ? "glass shadow-2xl shadow-primary/20"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-gradient">
                        AV.
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium theme-text-secondary hover:text-primary dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-200 dark:border-white/10">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
                            >
                                {!isDark ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
                        >
                            {!isDark ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="dark:text-white text-zinc-900">
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium py-2 border-b border-white/5 last:border-0 theme-text-primary"
                                onClick={() => setMobileMenuOpen(false)}
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
