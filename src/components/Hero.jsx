import { motion } from "framer-motion";
import { ArrowRight, Download, EyeIcon } from "lucide-react";

const Hero = () => {
    return (
        <section id="about" className="mb-6 flex flex-col items-center justify-center pt-20 px-6 text-center theme-bg">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Profile Photo - Smaller and Cleaner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mb-10"
                >
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-primary shadow-2xl shadow-primary/20 animate-glow">
                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 border-2 border-white dark:border-white/10 shadow-inner">
                            <img
                                src="/profile.jpg"
                                alt="Aysha Volidis"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    {/* Premium Decorative Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 animate-pulse" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold mb-6 uppercase tracking-widest">
                        Available for new opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight theme-text-primary">
                        I'm <span className="text-gradient">Aysha Volidis</span>
                    </h1>
                    <p className="theme-text-secondary text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                        Full Stack Developer & UX/UI Designer. I build beautiful, scalable,
                        and user-centered web solutions with React, Node.js, and ASP.NET Core.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            Explore My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://docs.google.com/document/d/1C19RS3B3UHGYG7Lq2R6Z5mOZzlGeIfgRaL21-WN4tHk/edit?tab=t.0" target="_blank" className="px-8 py-3 text-secondary bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-full font-semibold transition-all flex items-center gap-2 shadow-sm">
                            <EyeIcon size={18} /> View Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
