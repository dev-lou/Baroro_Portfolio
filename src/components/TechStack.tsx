"use client";

import { useState } from "react";

const CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Vite", "Flutter", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend",
    skills: ["PHP", "Python", "Node.js", "Laravel", "Flask", "Express"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "Firebase", "Turso", "Neon"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Cloudflare", "Docker", "Linux", "Raspberry Pi", "Git", "GitHub Actions"],
  },
  {
    label: "AI & Computer Vision",
    skills: ["Google Gemini", "TensorFlow", "OpenCV", "YOLOv11"],
  },
];

export function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-foreground">Tech Stack</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-accent hover:text-accent-hover transition-colors font-medium flex items-center gap-1 cursor-pointer"
        >
          {showAll ? "Show Less" : "View All"}
          <svg
            className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="space-y-5">
        {visibleCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold text-foreground mb-2.5 uppercase tracking-wider">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg bg-tag-bg text-tag-text border border-border hover:border-accent/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
