import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const experienceData = [
  {
    company: "PDES (Palestinian Digital Empowerment System)",
    description: "Digital empowerment platform driving AI and tech capacity building.",
    roles: [
      {
        title: "AI Digital Product Development Fellow",
        period: "May 2026 - Jun 2026",
        description:
          "Participated in an intensive hands-on program focusing on building end-to-end digital products powered by modern AI tools.",
        contributions: [
          "Executed product discovery, user research, and market strategy to validate digital product ideas",
          "Implemented AI-assisted workflows and tools to optimize prototyping and product development speed",
          "Developed and validated practical projects applying modern product methodologies and AI integrations",
        ],
        tools: [
          "AI Workflows",
          "Product Discovery",
          "User Research",
          "Prototyping",
          "Product Validation",
        ],
      },
    ],
  },
  {
    company: "Gaza Sky Geeks",
    description: "Leading tech bootcamp and innovation hub in Palestine.",
    roles: [
      {
        title: "Advanced React Bootcamp",
        period: "2026",
        description:
          "Enhancing skills in state management, modular architecture, and TanStack Query for scalable applications.",
        contributions: [
          "Mastered advanced React patterns including compound components and render props for reusable UI",
          "Built enterprise-grade applications with TanStack Query for efficient server-state management",
          "Implemented complex state management solutions with Zustand and React Context API",
        ],
        tools: ["React 19", "TanStack Query", "Zustand", "JavaScript ES6+"],
      },
      {
        title: "Skill Stack Paths - Python & OOP",
        period: "2025",
        description:
          "Learned data structures and OOP principles. Built and documented a Library Management System.",
        contributions: [
          "Mastered Python OOP concepts including inheritance, polymorphism, and encapsulation",
          "Developed a comprehensive Library Management System with full CRUD operations",
          "Documented the entire codebase with clear API references and usage examples",
        ],
        tools: ["Python", "OOP", "Data Structures", "Documentation"],
      },
    ],
  },
  {
    company: "Yaffa Solutions",
    description: "Software development company building modern web solutions.",
    roles: [
      {
        title: "Full Stack Intern",
        period: "2025",
        description:
          "Developed web apps using React, Node.js, and PostgreSQL. Focused on responsive UI and Agile teamwork.",
        contributions: [
          "Designed and shipped responsive UIs using React with Tailwind CSS",
          "Built RESTful APIs with Node.js and Express for seamless data flow",
          "Collaborated in an Agile team using Git workflow and daily standups",
        ],
        tools: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      },
    ],
  },
  {
    company: "Eng. Zakaria Abu Selmia",
    description: "Technical mentorship under experienced software engineer.",
    roles: [
      {
        title: "ASP.NET Core Intern",
        period: "2025",
        description:
          "Focused on backend logic, Razor Pages, and Entity Framework Core in educational projects.",
        contributions: [
          "Built server-rendered web pages using Razor Pages with clean MVC architecture",
          "Designed database schemas and implemented ORM mappings with Entity Framework Core",
          "Developed RESTful endpoints handling authentication and data validation",
        ],
        tools: [
          "ASP.NET Core",
          "Razor Pages",
          "Entity Framework",
          "SQL Server",
          "C#",
        ],
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 },
  },
};

const CompanyTab = ({ company, isActive, onClick, idx }) => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 25 }}
    onClick={onClick}
    className={`relative w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group ${isActive
        ? "glass border-primary/30 shadow-lg shadow-primary/5"
        : "hover:glass border border-transparent hover:border-white/5"
      }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <div className="relative z-10 flex items-center gap-3">
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive
            ? "bg-primary shadow-lg shadow-primary/50"
            : "bg-zinc-400 group-hover:bg-primary/50"
          }`}
      />
      <div className="flex-1 min-w-0">
        <span
          className={`text-sm font-bold block truncate transition-colors duration-300 ${isActive ? "theme-text-primary" : "theme-text-secondary group-hover:theme-text-primary"
            }`}
        >
          {company}
        </span>
        <span className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium mt-0.5 block">
          {experienceData
            .find((c) => c.company === company)
            ?.roles.map((r) => r.period)
            .join(" · ") || ""}
        </span>
      </div>
      <ChevronRight
        size={14}
        className={`transition-all duration-300 ${isActive
            ? "text-primary opacity-100 translate-x-0"
            : "text-zinc-500 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
          }`}
      />
    </div>
  </motion.button>
);

const RoleContent = ({ role }) => (
  <div className="space-y-5">
    <div className="flex items-center flex-wrap gap-3">
      <h3 className="text-xl font-bold theme-text-primary">{role.title}</h3>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
        <Calendar size={10} />
        {role.period}
      </span>
    </div>

    <p className="theme-text-secondary text-sm leading-relaxed font-medium">
      {role.description}
    </p>

    <div className="space-y-3">
      <h4 className="text-xs font-bold uppercase tracking-[0.15em] theme-text-primary/60">
        Key Contributions
      </h4>
      <div className="space-y-2.5">
        {role.contributions.map((contribution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 200, damping: 25 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={16}
              className="text-primary shrink-0 mt-0.5"
            />
            <span className="theme-text-secondary text-sm font-medium leading-relaxed">
              {contribution}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="pt-2">
      <h4 className="text-xs font-bold uppercase tracking-[0.15em] theme-text-primary/60 mb-2.5">
        Tools & Technologies
      </h4>
      <div className="flex flex-wrap gap-2">
        {role.tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-primary/30 hover:text-primary dark:hover:text-secondary transition-all duration-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ContentPanel = ({ company }) => (
  <motion.div
    key={company.company}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ type: "spring", stiffness: 250, damping: 28 }}
    className="space-y-8"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
      <div>
        <h3 className="text-lg font-bold theme-text-primary">
          {company.company}
        </h3>
        <p className="text-xs theme-text-secondary font-medium">
          {company.description}
        </p>
      </div>
    </div>

    <div className="space-y-8 pl-4 border-l-2 border-zinc-200 dark:border-white/5">
      {company.roles.map((role, i) => (
        <motion.div
          key={role.title}
          variants={itemVariants}
          className="relative"
        >
          <div className="absolute -left-[calc(1rem+5px)] top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30" />
          <RoleContent role={role} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section
      id="experience"
      className="py-24 px-6 theme-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-72 shrink-0 space-y-2"
          >
            {experienceData.map((company, idx) => (
              <CompanyTab
                key={company.company}
                company={company.company}
                isActive={activeCompany === idx}
                onClick={() => setActiveCompany(idx)}
                idx={idx}
              />
            ))}
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 25 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10 dark:border-white/5"
            >
              <AnimatePresence mode="wait">
                <ContentPanel company={experienceData[activeCompany]} />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
