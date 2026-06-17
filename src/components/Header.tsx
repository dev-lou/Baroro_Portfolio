"use client";

import { ThemeToggle } from "./ThemeToggle";

const ROLES = [
  "AI Native",
  "Zero Budget Infrastructure"
];

export function Header() {
  return (
    <section className="relative">
      <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
        <div className="flex flex-col sm:flex-row gap-6 items-start flex-1">
          {/* Profile Avatar */}
          <div className="shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden ring-1 ring-border shadow-sm">
              <img
                src="/profile.jpg"
                alt="Lou Vincent Baroro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  Lou Vincent Baroro
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </h1>
                <div className="flex items-center gap-1.5 mt-1 text-muted-foreground text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Passi City, Iloilo, Philippines
                </div>
              </div>
            </div>

            {/* Role tags as plain text */}
            <div className="mt-4 text-foreground font-medium text-base">
              {ROLES.join(" \\ ")}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-1 mt-6 border border-border rounded-lg p-1 w-max bg-card">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm font-bold rounded-md hover:opacity-90 transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:louvincentj@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 text-foreground text-sm font-medium rounded-md hover:bg-muted transition-all shadow-sm hover:shadow-md border border-border/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Right side stuff (Theme toggle + Badge) */}
        <div className="flex flex-col items-end gap-6 pt-1">
          <ThemeToggle />
          <div className="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15 8H9L12 2zM3 10H21V12H3V10zM5 14H19L17 22H7L5 14z" />
            </svg>
            DICT AI Productivity and Automation Participant
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
