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
      {/* hair, back layer: wavy, ends just below the chin */}
      <path d="M120 24 C 66 24, 40 64, 44 110 C 46 138, 32 154, 38 176 C 44 196, 28 208, 36 224 C 50 230, 62 222, 68 212 C 78 222, 94 218, 98 204 C 104 192, 136 192, 142 204 C 146 218, 162 222, 172 212 C 178 222, 190 230, 204 224 C 212 208, 196 196, 202 176 C 208 154, 194 138, 196 110 C 200 64, 174 24, 120 24 Z" fill="#111"/>
      {/* face */}
      <path d="M68 108 C 64 152, 84 194, 120 196 C 156 194, 176 152, 172 108 C 168 76, 146 58, 120 58 C 94 58, 72 76, 68 108 Z" fill={face}/>
      {/* hair front: centre part, wavy curtains framing the face */}
      <path d="M120 32 C 82 34, 52 66, 48 110 C 48 128, 40 142, 46 162 C 52 182, 40 196, 50 214 C 58 206, 64 196, 64 182 C 64 166, 72 152, 70 132 C 68 106, 92 76, 121 62 C 148 76, 172 106, 170 132 C 168 152, 176 166, 176 182 C 176 196, 182 206, 190 214 C 200 196, 188 182, 194 162 C 200 142, 192 128, 192 110 C 188 66, 158 34, 120 32 Z" fill="#111"/>
      {/* wave strands */}
      <path d="M58 92 C 52 112, 60 128, 54 146 C 48 164, 58 180, 52 198" stroke={face} strokeWidth="2"/>
      <path d="M182 92 C 188 112, 180 128, 186 146 C 192 164, 182 180, 188 198" stroke={face} strokeWidth="2"/>
      <path d="M42 186 C 46 200, 40 210, 44 220" stroke={face} strokeWidth="2"/>
      <path d="M198 186 C 194 200, 200 210, 196 220" stroke={face} strokeWidth="2"/>
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
