import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Calendar } from "lucide-react";

const Contact = () => {
    const socialLinks = [
        { icon: <Mail size={24} />, href: "mailto:ayshavolidis@gmail.com", label: "Email" },
        { icon: <Github size={24} />, href: "https://github.com/ayshavolidis", label: "GitHub" },
        { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/ayshavolidis", label: "LinkedIn" },
    ];

    return (
        <section id="contact" className="py-24 px-6 theme-bg flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-4xl text-gradient md:text-6xl font-bold mb-6 theme-text-primary">
                    Let's Build Something Amazing!
                </h2>
                <p className="theme-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                    I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-all duration-300 shadow-sm"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
