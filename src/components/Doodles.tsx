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

/**
 * Hand-drawn head doodle of Stephanie (from her photo). Used in the nav badge and the contact notebook.
 * Raw exports live in /public/doodle (SVG + PNG).
 */
export function AvatarDoodle({ className = "", face = "#ffe500" }: { className?: string; face?: string }) {
  return (
    <svg viewBox="18 16 204 220" className={className} fill="none" stroke="#111" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* hair, back layer: straight, falls just past the chin, waves only at the ends */}
      <path d="M120 26 C 70 26, 42 62, 44 112 C 46 150, 40 182, 38 204 C 36 216, 42 226, 52 226 C 60 230, 70 224, 72 216 C 80 224, 94 222, 98 212 C 106 200, 134 200, 142 212 C 146 222, 160 224, 168 216 C 170 224, 180 230, 188 226 C 198 226, 204 216, 202 204 C 200 182, 194 150, 196 112 C 198 62, 170 26, 120 26 Z" fill="#111"/>
      {/* face: round, full cheeks, soft chin */}
      <path d="M64 124 C 62 166, 88 198, 120 198 C 152 198, 178 166, 176 124 C 174 90, 152 68, 120 68 C 88 68, 66 90, 64 124 Z" fill={face}/>
      {/* hair front: centre part, straight curtains framing the face */}
      <path d="M120 34 C 80 36, 52 68, 50 112 C 48 146, 54 176, 50 206 C 60 200, 64 188, 64 172 C 62 150, 60 126, 66 108 C 74 86, 98 74, 120 72 C 142 74, 166 86, 174 108 C 180 126, 178 150, 176 172 C 176 188, 180 200, 190 206 C 186 176, 192 146, 190 112 C 188 68, 160 36, 120 34 Z" fill="#111"/>
      {/* the part */}
      <path d="M120 38 C 119 50, 119 62, 120 72" stroke={face} strokeWidth="2.5"/>
      {/* wave strands, only near the ends */}
      <path d="M48 186 C 54 196, 46 206, 52 216" stroke={face} strokeWidth="2"/>
      <path d="M192 186 C 186 196, 194 206, 188 216" stroke={face} strokeWidth="2"/>
      {/* brows: thin, straight */}
      <path d="M82 104 L 106 102" strokeWidth="3"/>
      <path d="M134 102 L 158 104" strokeWidth="3"/>
      {/* eyes: large, glancing to the side */}
      <path d="M82 130 C 88 121, 102 121, 108 130" strokeWidth="3.5"/>
      <path d="M132 130 C 138 121, 152 121, 158 130" strokeWidth="3.5"/>
      <circle cx="91" cy="131" r="7" fill="#111" stroke="none"/>
      <circle cx="141" cy="131" r="7" fill="#111" stroke="none"/>
      <circle cx="89" cy="128.5" r="2" fill="#fff" stroke="none"/>
      <circle cx="139" cy="128.5" r="2" fill="#fff" stroke="none"/>
      {/* big round glasses, thin brown frames */}
      <circle cx="95" cy="130" r="25" stroke="#7a4632" strokeWidth="2.6"/>
      <circle cx="145" cy="130" r="25" stroke="#7a4632" strokeWidth="2.6"/>
      <path d="M117 124 C 119 120, 121 120, 123 124" stroke="#7a4632" strokeWidth="2.6"/>
      <path d="M70 126 L 64 122 M170 126 L 176 122" stroke="#7a4632" strokeWidth="2.6"/>
      {/* nose */}
      <path d="M120 146 C 119 154, 117 158, 122 160" strokeWidth="3"/>
      {/* blush */}
      <ellipse cx="80" cy="162" rx="9" ry="5" fill="#f4a3a0" fillOpacity="0.55" stroke="none"/>
      <ellipse cx="160" cy="162" rx="9" ry="5" fill="#f4a3a0" fillOpacity="0.55" stroke="none"/>
      {/* smile: closed-mouth, full soft-pink lips curving up at the corners */}
      <path d="M103 170 C 109 174, 114 173, 120 175 C 126 173, 131 174, 137 170 C 132 187, 108 187, 103 170 Z" fill="#ec9a94" strokeWidth="2.5"/>
      <path d="M103 170 C 112 179, 128 179, 137 170" strokeWidth="2.5"/>
      <path d="M101 167 C 102 169, 102 171, 104 172 M139 167 C 138 169, 138 171, 136 172" strokeWidth="2"/>
    </svg>
  );
}
