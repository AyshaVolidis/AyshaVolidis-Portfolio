import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";

const projects = [

    {
        title: "Chat Lingua",
        tech: ["Node.js", "Express", "WebSocket"],
        description: "Real-time language learning platform using WebSockets for seamless communication.",
        link: "https://chatlingua.onrender.com/",
        github: "https://github.com/AyshaVolidis/ChatLingua",
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

const Projects = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400;
            current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="projects" className="py-24 px-6 theme-bg overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex  items-center  justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
                        <p className="theme-text-secondary max-w-xl font-medium">
                            Explore a collection of my recent work, ranging from full-stack applications to interactive frontend experiments.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-white/5 transition-all text-zinc-500 dark:text-white"
                            aria-label="Previous Project"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-white/5 transition-all text-zinc-500 dark:text-white"
                            aria-label="Next Project"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory no-scrollbar"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="min-w-[320px] md:min-w-[400px]  snap-center group p-[1px] rounded-[32px] bg-gradient-to-br from-zinc-200 dark:from-white/10 to-transparent hover:from-primary/40 transition-all duration-500"
                        >
                            <div className="h-full theme-card dark:backdrop-blur-md rounded-[31px] p-8 flex flex-col shadow-sm dark:shadow-[0_0_30px_rgba(175,49,211,0.1)] transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-2xl theme-tag border border-zinc-100 dark:border-white/10 shadow-sm">
                                        <ExternalLink className="text-primary" size={20} />
                                    </div>
                                    <div className="flex gap-4">
                                        {project.github && <a href={project.github} className="text-zinc-500 hover:text-primary dark:hover:text-white transition-colors" aria-label="Github Repo"><Github size={20} /></a>}
                                        {project.link && <a href={project.link} className="text-zinc-500 hover:text-primary dark:hover:text-white transition-colors" aria-label="Live Demo"><ExternalLink size={20} /></a>}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 theme-text-primary">{project.title}</h3>
                                <p className="theme-text-secondary text-sm mb-8 flex-grow leading-relaxed font-medium">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-primary">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
