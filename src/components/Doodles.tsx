// Hand-drawn SVG bits: arrows, scribble circle, smiley avatar.

type ArrowProps = { className?: string; direction?: "left" | "up" | "down-left" | "down-right" };

export function Arrow({ className = "", direction = "left" }: ArrowProps) {
  const rotate = { left: 0, up: 80, "down-left": -35, "down-right": 200 }[direction];
  return (
    <svg
      viewBox="0 0 90 40"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M86 12 C 64 4, 40 6, 22 18 S 8 30, 6 30" />
      <path d="M6 30 L 16 20 M6 30 L 19 33" />
    </svg>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path
        d="M330 30 C 250 10, 90 20, 30 80 C -10 130, 90 185, 210 178 C 330 172, 400 120, 370 75 C 345 40, 260 35, 210 38"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Smiley({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="17" r="12" fill="#fff" stroke="#1a1a1a" strokeWidth="1.6" />
      <path d="M6 13 C 8 3, 24 3, 26 13 C 22 9, 12 9, 6 13 Z" fill="#1a1a1a" />
      <circle cx="12" cy="17" r="1.3" fill="#1a1a1a" />
      <circle cx="20" cy="17" r="1.3" fill="#1a1a1a" />
      <path d="M12 22 Q 16 25 20 22" stroke="#1a1a1a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function StickyNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`sticky-note relative inline-block px-4 py-1.5 font-script text-lg ${className}`}>
      <Smiley className="absolute -left-3 -top-4 h-7 w-7" />
      {children}
    </div>
  );
}
