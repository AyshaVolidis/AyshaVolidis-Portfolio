import { motion } from "framer-motion";
import { Layout, Server, Database } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="text-primary" />,
        skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS", "Figma"],
    },
    {
        title: "Backend",
        icon: <Server className="text-secondary" />,
        skills: ["Node.js", "Express", "ASP.NET Core", "REST APIs", "Python", "C#"],
    },
    {
        title: "Database & Tools",
        icon: <Database className="text-zinc-500 dark:text-zinc-400" />,
        skills: ["PostgreSQL", "SQL Server", "Git", "GitHub", "OOP", "Unit Testing"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6 theme-bg transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 theme-text-primary">Technical <span className="text-gradient">Expertise</span></h2>
                    <p className="theme-text-secondary max-w-2xl mx-auto font-medium">
                        A comprehensive set of skills built through rigorous training and hands-on internship experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl glass hover:border-primary/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl theme-tag flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6 theme-text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full theme-tag text-xs font-semibold theme-text-primary border border-zinc-200 dark:border-white/5 hover:border-primary/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
