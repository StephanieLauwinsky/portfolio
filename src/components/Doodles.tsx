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

/** Hand-drawn portrait (drawn from Stephanie's photo). Used in the nav badge and the contact notebook. */
export function AvatarDoodle({ className = "", face = "#ffe500" }: { className?: string; face?: string }) {
  return (
    <svg viewBox="0 0 240 260" className={className} fill="none" stroke="#111" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* long hair, back layer (falls past the shoulders) */}
      <path d="M120 24 C 66 24, 40 64, 42 114 C 44 162, 32 202, 24 240 C 48 250, 72 244, 86 230 L 154 230 C 168 244, 192 250, 216 240 C 208 202, 196 162, 198 114 C 200 64, 174 24, 120 24 Z" fill="#111"/>
      {/* sweater shoulders */}
      <path d="M30 262 C 34 240, 60 226, 94 220 L 146 220 C 180 226, 206 240, 210 262" fill="#fff"/>
      {/* neck */}
      <path d="M106 180 L 106 208 L 134 208 L 134 180" fill={face}/>
      {/* turtleneck collar */}
      <path d="M100 204 C 100 212, 100 220, 102 226 C 114 232, 126 232, 138 226 C 140 220, 140 212, 140 204 C 128 210, 112 210, 100 204 Z" fill="#fff"/>
      <path d="M106 216 L 106 226 M114 218 L 114 229 M126 218 L 126 229 M134 216 L 134 226" strokeWidth="1.6"/>
      {/* face */}
      <path d="M68 108 C 64 152, 84 194, 120 196 C 156 194, 176 152, 172 108 C 168 76, 146 58, 120 58 C 94 58, 72 76, 68 108 Z" fill={face}/>
      {/* hair front: centre part, curtains framing the face */}
      <path d="M58 204 C 48 170, 46 140, 48 112 C 52 66, 82 34, 120 32 C 158 34, 188 66, 192 112 C 194 140, 192 170, 182 204 C 176 176, 178 140, 170 110 C 164 86, 142 72, 121 62 C 98 72, 76 86, 70 110 C 62 140, 64 176, 58 204 Z" fill="#111"/>
      {/* the part */}
      <path d="M121 36 C 120 46, 120 54, 121 62" stroke={face} strokeWidth="2.5"/>
      {/* brows */}
      <path d="M84 108 C 92 103, 102 103, 108 106" strokeWidth="3.5"/>
      <path d="M132 106 C 138 103, 148 103, 156 108" strokeWidth="3.5"/>
      {/* round glasses */}
      <circle cx="96" cy="128" r="20" strokeWidth="4"/>
      <circle cx="144" cy="128" r="20" strokeWidth="4"/>
      <path d="M116 126 C 118 122, 122 122, 124 126" strokeWidth="3.5"/>
      <path d="M76 124 L 70 121 M164 124 L 170 121" strokeWidth="3.5"/>
      {/* eyes */}
      <circle cx="98" cy="130" r="5" fill="#111" stroke="none"/>
      <circle cx="146" cy="130" r="5" fill="#111" stroke="none"/>
      {/* nose */}
      <path d="M120 142 C 118 151, 116 156, 122 158" strokeWidth="3.5"/>
      {/* lips: calm, slightly full */}
      <path d="M108 172 C 114 169, 126 169, 132 172" strokeWidth="3.5"/>
      <path d="M111 173 C 116 179, 124 179, 129 173" strokeWidth="3"/>
    </svg>
  );
}
