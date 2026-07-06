import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";

const socialLinks = [
    {
        icon: <Mail size={22} />,
        href: "mailto:ayshavolidis@gmail.com",
        label: "Email",
        subtitle: "ayshavolidis@gmail.com",
    },
    {
        icon: <Github size={22} />,
        href: "https://github.com/ayshavolidis",
        label: "GitHub",
        subtitle: "@ayshavolidis",
    },
    {
        icon: <Linkedin size={22} />,
        href: "https://linkedin.com/in/ayshavolidis",
        label: "LinkedIn",
        subtitle: "Aysha Volidis",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 theme-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 blur-[120px] rounded-full" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        <Sparkles size={12} />
                        Get In Touch
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 theme-text-primary leading-tight">
                        Let's Build Something{" "}
                        <span className="text-gradient">Amazing</span>
                        <br />
                        Together!
                    </h2>

                    <p className="theme-text-secondary text-lg md:text-xl mb-16 max-w-2xl mx-auto font-medium">
                        I'm always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group relative w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative flex items-center gap-4 px-6 py-4 rounded-2xl glass hover:border-primary/20 transition-all duration-300 shadow-sm">
                                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                        {link.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold theme-text-primary flex items-center gap-1">
                                            {link.label}
                                            <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                        </p>
                                        <p className="text-xs theme-text-secondary mt-0.5">{link.subtitle}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-8 border-t border-zinc-200 dark:border-white/5">
                        <p className="text-xs theme-text-secondary font-medium">
                            © {new Date().getFullYear()} Aysha Volidis. Crafted with passion.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
