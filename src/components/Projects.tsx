const PROJECTS = [
  {
    name: "SpatialSync",
    description: "Real-time spatial synchronization platform with collaborative features and live data streaming.",
    url: "https://github.com/dev-lou/SpatialSync",
    tags: ["React", "Convex", "Real-time"],
  },
  {
    name: "CICT Store",
    description: "Full-stack e-commerce platform for campus merchandise with inventory management and payment integration.",
    url: "https://github.com/dev-lou/Cict-Store",
    tags: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    name: "Clinic Management System",
    description: "Healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    url: "https://github.com/dev-lou/clinic",
    tags: ["Full Stack", "MySQL", "Healthcare"],
  },
  {
    name: "OJT QR Pass",
    description: "QR-code-based attendance and verification system for on-the-job training tracking.",
    url: "https://github.com/dev-lou/OJT-Qr-Pass",
    tags: ["QR Code", "Mobile", "Flutter"],
  },
  {
    name: "CICT QR",
    description: "Campus-wide QR identification and access system for student and staff verification.",
    url: "https://github.com/dev-lou/CICT-QR",
    tags: ["QR Code", "Web", "Authentication"],
  },
  {
    name: "PixelPilot",
    description: "Stop AI slop. 91+ rules that force Cursor, Copilot & Windsurf to write unique, production-ready UI code.",
    url: "https://github.com/dev-lou/PixelPilot",
    tags: ["Cursor", "Copilot", "Prompt Engineering"],
  },
];

export function Projects() {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-tag-bg text-tag-text">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
