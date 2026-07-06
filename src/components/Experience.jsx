import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
    {
        title: "Advanced React Bootcamp",
        company: "Gaza Sky Geeks",
        period: "2026",
        description: "Enhancing skills in state management, modular architecture, and TanStack Query for scalable applications.",
    },
    {
        title: "Skill Stack Paths - Python & OOP",
        company: "Gaza Sky Geeks",
        period: "2025",
        description: "Learned data structures and OOP principles. Built and documented a Library Management System.",
    },
    {
        title: "Full Stack Intern",
        company: "Yaffa Solutions",
        period: "2025",
        description: "Developed web apps using React, Node.js, and PostgreSQL. Focused on responsive UI and Agile teamwork.",
    },
    {
        title: "ASP.NET Core Intern",
        company: "Eng. Zakaria Abu Selmia",
        period: "2025",
        description: "Focused on backend logic, Razor Pages, and Entity Framework Core in educational projects.",
    },
];

const TimelineDot = ({ index }) => (
    <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
        <div className="relative">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className="absolute -inset-2 rounded-full bg-primary/20 animate-pulse-soft" />
        </div>
    </div>
);

const ExperienceCard = ({ exp, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
            >
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 rounded-2xl glass hover:border-primary/20 transition-all duration-500">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                            <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 uppercase tracking-wider">
                                {exp.period}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold theme-text-primary mb-1">{exp.title}</h3>
                        <p className="text-primary dark:text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
                            {exp.company}
                        </p>
                        <p className="theme-text-secondary text-sm leading-relaxed font-medium">
                            {exp.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 theme-bg relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                        <Briefcase size={12} />
                        My Path
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 theme-text-primary">
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="theme-text-secondary max-w-2xl mx-auto font-medium text-base">
                        A timeline of my growth from internships to advanced training.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40 -translate-x-1/2" />

                    {/* Mobile Line */}
                    <div className="md:hidden absolute left-[9px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40" />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Dot */}
                                <div className="md:hidden absolute left-0 top-0">
                                    <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    <TimelineDot index={index} />
                                </div>

                                <ExperienceCard exp={exp} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
