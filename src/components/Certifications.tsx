const CERTIFICATIONS = [
  {
    name: "NVIDIA Developer Program Member",
    issuer: "NVIDIA",
  },
  {
    name: "GitHub Developer Program Member",
    issuer: "GitHub",
  },
  {
    name: "TBI Program Incubatee (Syntaxure Labs)",
    issuer: "Kwadra TBI",
  },
  {
    name: "CHED Raise AI Societal Empowerment",
    issuer: "Commission on Higher Education",
  },
  {
    name: "ASEAN AI Hackathon 2026",
    issuer: "Passage to ASEAN - P2A International",
  },
  {
    name: "Startup Hackathon 2025 Participant",
    issuer: "Iloilo MorProGres",
  },
];

import { RevealStagger } from "./animations/RevealStagger";

export function Certifications() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Certifications & Recognitions</h2>
      <RevealStagger className="space-y-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center justify-between p-3 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
          >
            <div>
              <p className="font-medium text-foreground text-sm">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}
