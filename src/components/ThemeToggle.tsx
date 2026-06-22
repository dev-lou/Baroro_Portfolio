"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-16 h-8 rounded-full border shadow-sm transition-all duration-300 flex items-center cursor-pointer hover:shadow-md hover:scale-105 focus:outline-none overflow-hidden ${
        isDark ? "border-white/10 bg-[#111]/80 backdrop-blur-md" : "border-gray-200 bg-white/80 backdrop-blur-md"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Icons for premium feel */}
      <div className="absolute inset-0 flex justify-between items-center px-1.5 opacity-40 text-gray-400 dark:text-gray-500 pointer-events-none">
        {/* Sun (Left) */}
        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        {/* Moon (Right) */}
        <svg className="w-4 h-4 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>

      <div
        className={`absolute top-1 bottom-1 w-6 h-6 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center shadow-md z-10 ${
          isDark 
            ? "translate-x-9 bg-white" 
            : "translate-x-1 bg-[#FF9500]"
        }`}
      >
        {isDark ? (
          <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
