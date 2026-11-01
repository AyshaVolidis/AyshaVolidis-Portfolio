import { motion } from "framer-motion";
import { ArrowRight, EyeIcon, Sparkles } from "lucide-react";

const floatingElements = [
    { className: "top-[15%] left-[8%] w-3 h-3 bg-primary/20 rounded-full animate-float" },
    { className: "top-[25%] right-[12%] w-5 h-5 bg-secondary/20 rounded-full animate-float-delayed" },
    { className: "bottom-[30%] left-[5%] w-4 h-4 bg-primary/15 rounded-full animate-float-slow" },
    { className: "bottom-[20%] right-[8%] w-6 h-6 bg-secondary/15 rounded-full animate-float-delayed" },
    { className: "top-[40%] left-[3%] w-8 h-8 border border-primary/10 rounded-full animate-spin-slow" },
    { className: "top-[30%] right-[5%] w-12 h-12 border border-secondary/10 rounded-full animate-spin-slower" },
    { className: "bottom-[40%] right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-pulse-soft" },
    { className: "top-[55%] left-[12%] w-2 h-2 bg-secondary/30 rounded-full animate-pulse-soft" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 theme-bg overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />

            {/* Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full dark:opacity-20" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/5 blur-[150px] rounded-full dark:opacity-20" />

            {/* Floating Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingElements.map((el, i) => (
                    <div key={i} className={`absolute ${el.className}`} />
                ))}
                <div className="absolute top-[45%] left-[15%] w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl animate-pulse-soft" />
                <div className="absolute top-[35%] right-[18%] w-20 h-20 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: "-1s" }} />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                {/* Profile Photo */}
                <motion.div variants={itemVariants} className="relative mb-10 group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-primary animate-glow-pulse">
                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-[3px] border-white dark:border-zinc-900">
                            <img
                                src="/profile.jpg"
                                alt="Aysha Volidis"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 animate-float-delayed">
                        <Sparkles size={14} className="text-white" />
                    </div>
                </motion.div>

                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Available for new opportunities
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight theme-text-primary">
                        {"I'm "}
                        <span className="text-gradient inline-block">Aysha Volidis</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="theme-text-secondary text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium"
                >
                    Full-Stack Engineer specialized in shipping performance-driven web apps, modern React architectures, and seamless AI integrations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn-primary flex items-center gap-2 group text-sm md:text-base w-full sm:w-auto justify-center"
                    >
                        Explore My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1t87HkBVbp67xz-S5_6CRNPglefABphNJ/edit?usp=sharing&ouid=109758310099105182343&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center gap-2 group text-sm md:text-base w-full sm:w-auto justify-center"
                    >
                        <EyeIcon size={18} />
                        View Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
