"use client";

import { 
  SiNextdotjs, SiReact, SiFlutter, SiVuedotjs, 
  SiPython, SiLaravel, SiNodedotjs, SiFlask,
  SiFirebase, SiSupabase, SiMysql, SiPostgresql, SiSqlite,
  SiGit, SiVercel, SiNetlify, SiDocker,
  SiGithubcopilot, SiGithub, SiGithubactions
} from "react-icons/si";
import { FaCode, FaGamepad, FaRobot, FaServer, FaDatabase, FaToolbox, FaCheck, FaShieldHalved, FaLock } from "react-icons/fa6";
import { motion, useReducedMotion } from "motion/react";

const CATEGORIES = [
  {
    label: "Web, Mobile & Game Dev",
    icon: <FaCode className="text-blue-500" />,
    className: "md:col-span-2",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React / Native", icon: <SiReact /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "GDevelop", icon: <FaGamepad /> },
      { name: "Lua (Roblox)", icon: <FaGamepad /> },
      { name: "C# (WinForms)", icon: <FaCode /> }
    ],
  },
  {
    label: "Backend",
    icon: <FaServer className="text-green-500" />,
    className: "",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "PHP / Laravel", icon: <SiLaravel /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Flask", icon: <SiFlask /> }
    ],
  },
  {
    label: "Databases & BaaS",
    icon: <FaDatabase className="text-orange-500" />,
    className: "",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Neon", icon: <FaDatabase /> },
      { name: "Turso", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> }
    ],
  },
  {
    label: "DevOps & Hosting",
    icon: <FaToolbox className="text-purple-500" />,
    className: "",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Full-Stack Arch", icon: <FaServer /> },
      { name: "Vercel / Render", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Docker", icon: <SiDocker /> }
    ],
  },
  {
    label: "AI Tools",
    icon: <FaRobot className="text-indigo-500" />,
    className: "",
    skills: [
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "Cursor", icon: <FaRobot /> },
      { name: "Windsurf", icon: <FaRobot /> },
      { name: "Antigravity", icon: <FaRobot /> },
      { name: "Zed", icon: <FaCode /> },
      { name: "OpenCode", icon: <FaCode /> }
    ],
  },
  {
    label: "Testing, CI/CD & Code Quality",
    icon: <FaShieldHalved className="text-teal-500" />,
    className: "md:col-span-2",
    skills: [
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Husky + lint-staged", icon: <FaCheck /> },
      { name: "Commitlint", icon: <FaCheck /> },
      { name: "Changesets", icon: <SiGit /> },
      { name: "CODEOWNERS", icon: <SiGithub /> },
      { name: "Gitleaks CI", icon: <FaLock /> },
      { name: "Renovate Bot", icon: <FaRobot /> },
      { name: "Socket Security", icon: <FaShieldHalved /> },
      { name: "Codium PR Agent", icon: <FaRobot /> },
    ],
  },
];

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Tech Stack</h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          },
          hidden: {}
        }}
      >
        {CATEGORIES.map((cat) => (
          <motion.div 
            key={cat.label}
            className={`p-5 rounded-2xl border border-border bg-card hover:bg-card-hover transition-all duration-300 ${cat.className}`}
            variants={{
              hidden: reduce ? {} : { opacity: 0, y: 24 },
              visible: reduce ? {} : { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }
              },
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              {cat.icon}
              <h3 className="text-sm font-bold text-foreground tracking-wide">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-tag-bg text-tag-text border border-border"
                >
                  <span className="text-sm opacity-80">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
