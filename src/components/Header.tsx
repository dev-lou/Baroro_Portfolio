"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ScheduleModal } from "./ScheduleModal";
import { MagneticButton } from "./animations/MagneticButton";

const ROLES = [
  "AI Native",
  "Zero Budget Infrastructure"
];

export function Header() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

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
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-1 mt-6 sm:border sm:border-border sm:rounded-lg sm:p-1 w-full sm:w-max sm:bg-card">
              <MagneticButton
                as="a"
                href="#"
                onClick={(e: React.MouseEvent) => { e.preventDefault(); setIsScheduleOpen(true); }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 sm:py-2 bg-black text-white dark:bg-white dark:text-black text-sm font-bold rounded-lg sm:rounded-md hover:opacity-90 transition-all shadow-sm hover:shadow-md cursor-pointer border border-transparent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="mailto:louvincentj@gmail.com"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 sm:py-2 text-foreground text-sm font-medium rounded-lg sm:rounded-md hover:bg-muted transition-all shadow-sm hover:shadow-md border border-border sm:border-border/50 bg-card sm:bg-transparent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right side stuff (Theme toggle + Badge) */}
        <div className="flex flex-col items-start sm:items-end gap-6 pt-1 w-full sm:w-auto mt-4 sm:mt-0">
          <ThemeToggle />
          <div className="bg-blue-600 w-full sm:w-auto text-white text-xs font-bold px-4 py-2 rounded-md flex flex-col items-center justify-center gap-1 cursor-default shadow-sm text-center">
            <span className="opacity-90 font-medium text-[10px] uppercase tracking-wider">Made during</span>
            <div className="flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 8H9L12 2zM3 10H21V12H3V10zM5 14H19L17 22H7L5 14z" />
              </svg>
              <span>DICT AI Productivity and Automation</span>
            </div>
          </div>
        </div>
      </div>
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </section>
  );
}
