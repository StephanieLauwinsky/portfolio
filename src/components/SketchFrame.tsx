/** Hatched, hand-drawn picture frame. Children are placed in the inner box. */
export function SketchFrame({ children, aspect = "16/10" }: { children: React.ReactNode; aspect?: string }) {
  return (
    <div className="sketch-frame">
      {/* Diagonal corner lines from outer to inner corners */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
        <line x1="0" y1="0" x2="6%" y2="9%" stroke="#1a1a1a" strokeWidth="1.3" />
        <line x1="100%" y1="0" x2="94%" y2="9%" stroke="#1a1a1a" strokeWidth="1.3" />
        <line x1="0" y1="100%" x2="6%" y2="91%" stroke="#1a1a1a" strokeWidth="1.3" />
        <line x1="100%" y1="100%" x2="94%" y2="91%" stroke="#1a1a1a" strokeWidth="1.3" />
      </svg>
      <div className="frame-inner" style={{ aspectRatio: aspect }}>
        {children}
      </div>
    </div>
  );
}
