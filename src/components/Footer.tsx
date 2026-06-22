export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border overflow-hidden flex flex-col items-center">
      {/* Top section: clean, minimalist details */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 z-10 mb-12">
        <p className="text-sm font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} Lou Vincent Baroro.
        </p>
        <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
          <span>Engineered with</span>
          <span className="font-semibold text-foreground">Next.js</span>
          <span>&</span>
          <span className="font-semibold text-foreground">Tailwind CSS</span>
        </p>
      </div>

      {/* 2026 State of the Art Massive Typography Footer */}
      <div className="w-full flex justify-center pointer-events-none select-none mt-10">
        <h1 className="text-[18vw] sm:text-[10rem] md:text-[12rem] leading-none font-black tracking-tighter uppercase text-foreground">
          BARORO
        </h1>
      </div>
    </footer>
  );
}
