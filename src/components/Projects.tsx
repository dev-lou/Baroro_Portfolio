const PROJECTS = [
  {
    name: "SpatialSync",
    description: "Real-time spatial synchronization platform with collaborative features and live data streaming.",
    githubUrl: "https://github.com/dev-lou/SpatialSync",
    liveUrl: "https://spatialsync.isufstcict.com/",
    tags: ["React", "Convex", "Real-time"],
  },
  {
    name: "CICT Store",
    description: "Full-stack e-commerce platform for campus merchandise with inventory management and payment integration.",
    githubUrl: "https://github.com/dev-lou/Cict-Store",
    liveUrl: "https://cictstore.me/",
    tags: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    name: "Clinic Management System",
    description: "Healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    githubUrl: "https://github.com/dev-lou/clinic",
    liveUrl: "https://isufst-clinic.onrender.com/",
    tags: ["Full Stack", "MySQL", "Healthcare"],
  },
  {
    name: "OJT QR Pass",
    description: "QR-code-based attendance and verification system for on-the-job training tracking.",
    githubUrl: "https://github.com/dev-lou/OJT-Qr-Pass",
    liveUrl: "https://ojt-qr.vercel.app/",
    tags: ["QR Code", "Mobile", "Flutter"],
  },
  {
    name: "CICT QR",
    description: "Campus-wide QR identification and access system for student and staff verification.",
    githubUrl: "https://github.com/dev-lou/CICT-QR",
    liveUrl: "https://qr.isufstcict.com/",
    tags: ["QR Code", "Web", "Authentication"],
  },
  {
    name: "PixelPilot",
    description: "Stop AI slop. 91+ rules that force Cursor, Copilot & Windsurf to write unique, production-ready UI code.",
    githubUrl: "https://github.com/dev-lou/PixelPilot",
    liveUrl: "https://github.com/dev-lou/PixelPilot", // Usually a repo link for this type of tool
    tags: ["Cursor", "Copilot", "Prompt Engineering"],
  },
];

import { RevealStagger } from "./animations/RevealStagger";

export function Projects() {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">Recent Projects</h2>
      <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECTS.map((project) => (
            <div
            key={project.name}
            className="flex flex-col p-5 rounded-2xl border border-gray-200 dark:border-[#333] bg-white dark:bg-[#111] hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                {project.name}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-gray-100 dark:border-white/10">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors whitespace-nowrap px-3 py-1.5 rounded-lg shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  <span>Live Website</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}
