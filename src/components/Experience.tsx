const EXPERIENCE = [
  {
    role: "CTO & Co-Founder",
    company: "Syntaxure Labs",
    period: "2026 — Present",
    description: "Leading technical architecture and AI-native development initiatives.",
  },
  {
    role: "Independent Developer",
    company: "Personal Projects & Hackathons",
    period: "2023 — 2026",
    description: "Built production-ready web platforms, mobile apps, and AI engines while studying.",
  },
];

const EDUCATION = [
  {
    role: "BS Information Technology",
    company: "University",
    period: "2021 — 2026",
    description: "Specialized in software engineering and AI systems.",
  },
];

export function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4">Experience</h2>
      <div className="relative ml-3 border-l-2 border-timeline-line">
        {EXPERIENCE.map((item, index) => (
          <div key={item.role + item.company} className="relative pl-6 pb-6 last:pb-0">
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-background bg-accent ring-2 ring-accent/30 shadow-sm ${index === 0 ? "animate-pulse" : ""}`} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground text-sm">{item.role}</h3>
                <p className="text-sm text-accent">{item.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
            </div>
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-border">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Education</h3>
          {EDUCATION.map((item) => (
            <div key={item.role} className="relative pl-6 pb-6 last:pb-0">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-background bg-accent ring-2 ring-accent/30 shadow-sm" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.role}</h3>
                  <p className="text-sm text-accent">{item.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
