"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open immediately on every render/refresh
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleRedirect = () => {
    window.location.href = "https://lou-baroro-devlou.vercel.app/";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-10 overflow-hidden"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zinc-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
                Select Your Experience
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                Welcome! Click on an option below to explore my portfolio.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Option 1: Current Site */}
              <button
                onClick={handleClose}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-500/70 hover:bg-blue-500/10 transition-all duration-300 relative"
              >
                {/* Recommended Badge */}
                <div className="absolute -top-3 right-4 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md animate-pulse">
                  Recommended for Demo
                </div>

                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mt-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-1">Made during DICT</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Clean, production-ready, and highly performant architecture.
                </p>
                <div className="relative flex items-center justify-center w-full px-4 py-3 mt-2">
                  <svg className="absolute inset-0 w-full h-full text-blue-500/10 dark:text-blue-500/20" preserveAspectRatio="none" viewBox="0 0 200 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5,15 C 50,-5 150,5 195,10 C 205,50 195,90 190,95 C 140,105 50,95 10,90 C -5,50 0,20 5,15 Z" />
                  </svg>
                  <span className="relative z-10 text-[11px] text-black dark:text-black font-medium">
                    Note: Proceed here for the current demo, sir!
                  </span>
                </div>
                <div className="mt-4 text-[11px] font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Click to explore <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>

              {/* Option 2: Creative Site */}
              <button
                onClick={handleRedirect}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-border bg-background hover:border-zinc-500/50 hover:bg-zinc-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-500/10 text-zinc-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-1">Made during Personal Time</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  High-end animations, 3D, and immersive scrollytelling.
                </p>
                <div className="relative flex items-center justify-center w-full px-4 py-3 mt-auto">
                  <svg className="absolute inset-0 w-full h-full text-zinc-500/10 dark:text-zinc-500/20" preserveAspectRatio="none" viewBox="0 0 200 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10,5 C 60,10 140,-5 190,10 C 200,40 195,80 185,95 C 130,100 70,105 15,90 C 5,60 -5,20 10,5 Z" />
                  </svg>
                  <span className="relative z-10 text-[11px] text-black dark:text-black font-medium">
                    Note: Some data here are placeholders, and the website is not fully optimized or finished yet.
                  </span>
                </div>
                <div className="mt-4 text-[11px] font-bold text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Click to explore <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
