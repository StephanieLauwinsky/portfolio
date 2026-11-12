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

/** Hand-drawn face used inside the contact notebook. Replace via `site.avatar`. */
export function AvatarDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 240" className={className} fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* hair back */}
      <path d="M38 120 C 20 60, 60 18, 112 18 C 170 18, 205 62, 190 128 C 186 150, 196 175, 205 190 C 180 196, 168 180, 165 165" fill="#111" />
      <path d="M38 120 C 30 150, 20 172, 14 190 C 40 196, 54 180, 58 165" fill="#111" />
      {/* face */}
      <path d="M52 112 C 50 170, 80 210, 112 210 C 146 210, 172 172, 170 112 C 150 98, 120 90, 100 70 C 92 92, 70 106, 52 112 Z" fill="#ffe500" />
      {/* bangs */}
      <path d="M52 112 C 70 106, 92 92, 100 70 C 120 90, 150 98, 170 112" />
      {/* eyes */}
      <path d="M86 138 C 90 132, 98 132, 102 138" />
      <path d="M124 138 C 128 132, 136 132, 140 138" />
      {/* cheeks */}
      <path d="M74 160 l8 -2 M140 158 l8 2" strokeWidth="3.5" />
      {/* nose + smile */}
      <path d="M113 146 C 110 156, 108 162, 116 163" strokeWidth="4" />
      <path d="M94 178 C 104 192, 124 192, 134 178" />
    </svg>
  );
}
