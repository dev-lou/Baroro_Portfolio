export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lou Vincent Baroro. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
