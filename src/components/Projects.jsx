import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

const projects = [
    {
        title: "FitAI",
        tech: ["React", "TanStack", "Supabase", "Gemini AI"],
        description: "AI-powered fitness platform with personalized workouts, nutrition tracking, and AI coaching. Built a full-stack application with Supabase authentication, progress tracking, and Gemini AI integration for adaptive workout plans and coaching chat.",
        link: "https://fit-with-ai.ayshavolidis.workers.dev/",
        github: "https://github.com/AyshaVolidis/FitWithAI",
    },
    {
        title: "Fashion-Ecommerce",
        tech: ["Next.js", "Node.js", "Express", "Stripe"],
        description: "Full-stack e-commerce platform enabling users to browse products, manage carts, and complete secure online payments.",
        link: "https://fashion-ecommerce-tan.vercel.app",
        github: "https://github.com/AyshaVolidis/Fashion-ecommerce",
    },
    {
        title: "Chat Lingua",
        tech: ["Node.js", "Express", "WebSocket"],
        description: "Real-time language learning platform using WebSockets for seamless communication.",
        link: "https://chatlingua.onrender.com/",
        github: "https://github.com/Yaffa-Solutions/ChatLingua",
    },
    {
        title: "Recipe App",
        tech: ["Vanilla JavaScript", "HTML", "CSS"],
        description: "One-page recipe app with CRUD functionality and list/grid UI toggle. Features a clean, interactive interface.",
        link: "https://ayshavolidis.github.io/Recipe-App/",
        github: "https://github.com/AyshaVolidis/Recipe-App",
    },
    {
        title: "Rick & Morty Explorer",
        tech: ["React", "TypeScript", "TanStack Query"],
        description: "Interactive explorer with debounced search and clean modular architecture.",
        link: "https://rockmortyapi.vercel.app/",
        github: "https://github.com/AyshaVolidis/RockMortyApi-App",
    },
    {
        title: "Quiz App",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "Interactive quiz with multiple-choice questions and real-time scoring.",
        link: "https://ayshavolidis.github.io/QuizApp/",
        github: "https://github.com/AyshaVolidis/QuizApp",
    },
];

const ProjectCard = ({ project, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[320px] md:min-w-[420px] snap-center"
        >
            <div className="group relative h-full">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-zinc-200/50 dark:from-white/10 via-transparent to-transparent group-hover:from-primary/30 group-hover:via-secondary/20 group-hover:to-transparent transition-all duration-700" />

                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative h-full theme-card dark:backdrop-blur-md rounded-[31px] p-8 flex flex-col shadow-sm dark:shadow-[0_0_30px_rgba(175,49,211,0.05)] transition-all duration-500">
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 rounded-2xl theme-tag border border-zinc-100 dark:border-white/5 shadow-sm">
                            <Sparkles className="text-primary" size={20} />
                        </div>
                        <div className="flex items-center gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full theme-tag text-zinc-500 hover:text-primary dark:hover:text-white hover:bg-primary/10 transition-all"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full theme-tag text-zinc-500 hover:text-secondary dark:hover:text-white hover:bg-secondary/10 transition-all"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Info */}
                    <h3 className="text-xl font-bold mb-3 theme-text-primary">{project.title}</h3>
                    <p className="theme-text-secondary text-sm mb-8 flex-grow leading-relaxed font-medium">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-white/5">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 440;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="projects" className="py-24 px-6 theme-bg overflow-hidden relative">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                            <Sparkles size={12} />
                            My Work
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 theme-text-primary">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="theme-text-secondary max-w-xl font-medium text-base">
                            Explore a collection of my recent work, ranging from full-stack applications to interactive frontend experiments.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full glass hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-primary shadow-sm"
                            aria-label="Previous Project"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full glass hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-primary shadow-sm"
                            aria-label="Next Project"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Scrollable Projects */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory"
                >
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
