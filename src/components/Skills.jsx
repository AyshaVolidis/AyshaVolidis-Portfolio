import { motion } from "framer-motion";
import { Layout, Server, Database, Sparkles } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="text-primary" size={22} />,
        skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS", "Figma"],
    },
    {
        title: "Backend",
        icon: <Server className="text-secondary" size={22} />,
        skills: ["Node.js", "Express", "ASP.NET Core", "REST APIs", "Python", "C#"],
    },
    {
        title: "Database & Tools",
        icon: <Database className="text-zinc-500 dark:text-zinc-400" size={22} />,
        skills: ["PostgreSQL", "SQL Server", "Git", "GitHub", "OOP", "Unit Testing"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 theme-bg relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                        <Sparkles size={12} />
                        What I Bring
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 theme-text-primary">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="theme-text-secondary max-w-2xl mx-auto font-medium text-base">
                        A comprehensive set of skills built through rigorous training and hands-on internship experience.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-8 rounded-3xl glass hover:border-primary/20 transition-all duration-500 h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl theme-tag flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold theme-text-primary">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-full theme-tag text-xs font-semibold theme-text-primary border border-zinc-200 dark:border-white/5 hover:border-primary/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
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

export default Skills;
