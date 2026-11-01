import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import transcriptImg from "../images/trancript.netlify.app_(Nest Hub Max).png";
import fitaiImg from "../images/FitWithAI.png";
import recipeImg from "../images/ayshavolidis.github.io_Recipe-App_.png";
import rickmortyImg from "../images/rockmortyapi.vercel.app_.png";
import chatImg from "../images/chat-lingua.png";

const projects = [
  {
    title: "Meeting Transcriber",
    tech: ["React","Supabase", "Groq AI (Whisper)","Chrome Extension API"],
    description:
      "Meeting Transcriber is a Chrome Extension with a web dashboard that captures Google Meet and Zoom audio directly from the browser without requiring a meeting bot. It uses Groq Whisper for real-time speech-to-text transcription, with Supabase for data storage, allowing users to review transcripts, generate AI-powered meeting summaries, and extract action items.",
    link: "https://trancript.netlify.app/",
    github: "https://github.com/AyshaVolidis/Meeting-Transcriber",
    screenshot: transcriptImg,
    gradient: "from-emerald-500/30 via-teal-500/20 to-blue-600/30",
  },
  {
    title: "FitWithAI",
    tech: ["React", "TanStack", "Supabase", "Groq AI"],
    description:
      "AI-powered fitness platform with personalized workouts, nutrition tracking, and AI coaching. Built a full-stack application with Supabase authentication, progress tracking, and Groq AI integration for adaptive workout plans and coaching chat.",
    link: "https://fit-with-ai.ayshavolidis.workers.dev/",
    github: "https://github.com/AyshaVolidis/FitWithAI",
    screenshot: fitaiImg,
    gradient: "from-emerald-500/30 via-teal-500/20 to-blue-600/30",
  },
  {
    title: "Chat Lingua",
    tech: ["Node.js", "Express", "WebSocket"],
    description:
      "Real-time language learning platform using WebSockets for seamless communication.",
    link: "https://chatlingua.onrender.com/",
    github: "https://github.com/Yaffa-Solutions/ChatLingua",
    screenshot: chatImg,
    gradient: "from-cyan-500/30 via-sky-500/20 to-indigo-600/30",
  },
  {
    title: "Recipe App",
    tech: ["Vanilla JavaScript", "HTML", "CSS"],
    description:
      "One-page recipe app with CRUD functionality and list/grid UI toggle. Features a clean, interactive interface.",
    link: "https://ayshavolidis.github.io/Recipe-App/",
    github: "https://github.com/AyshaVolidis/Recipe-App",
    screenshot: recipeImg,
    gradient: "from-amber-500/30 via-yellow-500/20 to-red-600/30",
  },
  {
    title: "Rick & Morty Explorer",
    tech: ["React", "TypeScript", "TanStack Query"],
    description:
      "Interactive explorer with debounced search and clean modular architecture.",
    link: "https://rockmortyapi.vercel.app/",
    github: "https://github.com/AyshaVolidis/RockMortyApi-App",
    screenshot: rickmortyImg,
    gradient: "from-lime-500/30 via-green-500/20 to-emerald-600/30",
  },
];

const GradientFallback = ({ gradient }) => (
  <div className="relative bg-zinc-950">
    <div
      className={`h-36 bg-gradient-to-br ${gradient} relative overflow-hidden`}
    >
      <div className="absolute top-3 right-3 w-12 h-12 rounded-full border border-white/10" />
      <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border border-white/5" />
      <div className="flex items-center justify-center h-full">
        <div className="text-center px-4">
          <div className="h-3 w-32 bg-white/20 rounded-full mx-auto mb-2" />
          <div className="h-2 w-24 bg-white/10 rounded-full mx-auto" />
        </div>
      </div>
    </div>

    <div className="p-3 space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2 space-y-1.5"
          >
            <div className="w-6 h-1.5 rounded bg-white/10" />
            <div className="w-full h-1 rounded bg-white/5" />
            <div className="w-2/3 h-1 rounded bg-white/5" />
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <div className="h-1.5 w-full rounded bg-white/5" />
        <div className="h-1.5 w-full rounded bg-white/5" />
        <div className="h-1.5 w-2/3 rounded bg-white/5" />
      </div>

      <div
        className={`h-20 rounded-xl bg-gradient-to-r ${gradient} relative overflow-hidden`}
      >
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative flex items-center justify-center h-full">
          <div className="w-3/4 space-y-1.5">
            <div className="h-1.5 w-1/3 rounded bg-white/20" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 space-y-1 text-center">
            <div className="h-3 w-8 rounded bg-white/10 mx-auto" />
            <div className="h-1.5 w-10 rounded bg-white/5 mx-auto" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2 space-y-1.5">
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
          <div className="h-1 w-full rounded bg-white/5" />
        </div>
        <div className="h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2 space-y-1.5">
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
          <div className="h-1 w-full rounded bg-white/5" />
        </div>
      </div>
    </div>
  </div>
);

const BrowserMockup = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative rounded-t-lg overflow-hidden">
      <div className="bg-zinc-800/80 dark:bg-zinc-900/80 px-3 py-1.5 flex items-center gap-2 backdrop-blur-sm border-b border-white/5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-1.5">
          <div className="bg-zinc-700/50 rounded-full text-[8px] text-zinc-400 px-2 py-0.5 text-center truncate font-mono">
            {project.link?.replace(/^https?:\/\//, "").replace(/\/$/, "") ||
              "project.dev"}
          </div>
        </div>
      </div>

      <div
        className="relative h-48 overflow-hidden bg-zinc-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {imgError || !project.screenshot ? (
          <motion.div
            className="w-full will-change-transform"
            animate={{ y: isHovered ? -300 : 0 }}
            transition={{
              duration: isHovered ? 8 : 0.5,
              ease: isHovered ? "linear" : [0.32, 0.72, 0, 1],
            }}
          >
            <GradientFallback gradient={project.gradient} />
          </motion.div>
        ) : (
          <motion.img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full will-change-transform"
            animate={{ y: isHovered ? "-50%" : 0 }}
            transition={{
              duration: isHovered ? 8 : 0.5,
              ease: isHovered ? "linear" : [0.32, 0.72, 0, 1],
            }}
            onError={() => setImgError(true)}
            draggable={false}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const ProjectCard = ({ project, idx }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: ((y - centerY) / centerY) * -6,
      y: ((x - centerX) / centerX) * 6,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: idx * 0.1,
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative group cursor-pointer"
      >
        <div
          className="absolute -inset-[1px] rounded-[16px] opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(175,49,211,0.4), rgba(52,164,216,0.4), rgba(175,49,211,0.1))",
            filter: "blur(6px)",
            zIndex: -1,
          }}
        />

        <div className="relative h-full rounded-[16px] glass overflow-hidden border border-white/10 dark:border-white/5 flex flex-col shadow-sm hover:shadow-[0_0_40px_rgba(175,49,211,0.08)] transition-shadow duration-500">
          <BrowserMockup project={project} />

          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold theme-text-primary">
                {project.title}
              </h3>
              <div className="flex items-center gap-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg hover:bg-primary/10 text-zinc-400 hover:text-primary transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={13} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg hover:bg-secondary/10 text-zinc-400 hover:text-secondary transition-all duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>

            <p className="theme-text-secondary text-xs leading-relaxed mb-3 flex-1 font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-100 dark:border-white/5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-[8px] uppercase tracking-widest font-bold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary transition-transform duration-300 hover:scale-105"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
    <section
      id="projects"
      className="py-24 px-6 theme-bg overflow-hidden relative"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} />
            My Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 theme-text-primary">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="theme-text-secondary max-w-2xl mx-auto font-medium text-base">
            Explore a collection of my recent work, ranging from full-stack
            applications to interactive frontend experiments.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="snap-start shrink-0 w-[85%] md:w-[48%] lg:w-[32%] max-w-lg"
              >
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full glass hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-primary shadow-sm"
              aria-label="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full glass hover:bg-zinc-100 dark:hover:bg-white/5 transition-all text-zinc-500 dark:text-zinc-400 hover:text-primary shadow-sm"
              aria-label="Next Project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
