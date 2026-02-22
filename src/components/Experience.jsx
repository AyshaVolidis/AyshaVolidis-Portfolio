import { motion } from "framer-motion";

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

const Experience = () => {
    return (
        <section id="experience" className="py-16 px-6 theme-bg">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center theme-text-primary">Professional <span className="text-gradient">Journey</span></h2>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-zinc-100 dark:border-white/10"
                        >
                            <div className="absolute left-[-9px] top-0 w-[16px] h-[16px] rounded-full bg-primary border-4 border-background" />
                            <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                                <h3 className="text-xl font-bold theme-text-primary">{exp.title}</h3>
                                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">{exp.period}</span>
                            </div>
                            <p className="text-primary dark:text-white font-bold mb-4 text-xs uppercase tracking-wide">{exp.company}</p>
                            <p className="theme-text-secondary leading-relaxed font-medium">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
