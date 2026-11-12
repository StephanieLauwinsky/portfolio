"use client";

import { useCallback, useEffect, useState } from "react";
import { photos, site } from "@/content/site";
import { Arrow, StickyNote } from "./Doodles";
import { MediaOrPlaceholder } from "./Placeholder";

const pad = (n: number) => String(n).padStart(3, "0");

function Print({ index, className = "" }: { index: number; className?: string }) {
  const ph = photos[index];
  return (
    <div
      className={`h-60 w-64 border-[7px] border-white shadow-[3px_3px_0_#1a1a1a,0_10px_25px_-10px_rgb(0_0_0/0.3)] ${className}`}
      aria-hidden
    >
      <MediaOrPlaceholder src={ph.image} alt={ph.caption} tint={ph.tint} label="" sizes="256px" />
    </div>
  );
}

export function Camera() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [joke, setJoke] = useState(false);
  const total = photos.length;
  const at = (d: number) => (index + d + total * 3) % total;

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + total) % total), [total]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => go(1), 2200);
    return () => clearInterval(id);
  }, [playing, go]);

  useEffect(() => {
    if (!joke) return;
    const id = setTimeout(() => setJoke(false), 1800);
    return () => clearTimeout(id);
  }, [joke]);

  const current = photos[index];

  return (
    <section id="playground" className="scroll-mt-8 overflow-hidden px-4 py-24">
      <h2
        className="text-center font-marker uppercase leading-[0.95]"
        style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
      >
        {site.cameraHeading[0]}
        <br />
        {site.cameraHeading[1]}
      </h2>
      <div className="mt-8 flex justify-center">
        <StickyNote className="rotate-1">{site.cameraNote}</StickyNote>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[60rem]">
        {/* Prints tucked behind the camera: two on the left, one on the right (desktop) */}
        <div className="hidden lg:block">
          <Print index={at(-2)} className="absolute right-[calc(100%+14rem)] top-1/2 -translate-y-1/2" />
          <Print index={at(-1)} className="absolute right-[calc(100%-7rem)] top-1/2 -translate-y-1/2" />
          <Print index={at(1)} className="absolute left-[calc(100%-7rem)] top-1/2 -translate-y-1/2" />
        </div>

        {/* Camera body */}
        <div
          className="relative z-10 flex w-full flex-col items-center gap-6 rounded-[2rem] border border-black/10 p-5 shadow-[0_35px_60px_-25px_rgb(0_0_0/0.45),inset_0_2px_0_rgb(255_255_255/0.6),inset_0_-2px_0_rgb(0_0_0/0.08)] sm:flex-row sm:gap-10 sm:p-9"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgb(0 0 0/0.03) 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, rgb(0 0 0/0.03) 0 1px, transparent 1px 5px), linear-gradient(180deg,#d2cfc9,#b8b4ad)",
          }}
        >
          <div className="w-full sm:flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[10px] border-[#0d0d0d] bg-black">
              <MediaOrPlaceholder
                src={current.image}
                alt={current.caption}
                tint={current.tint}
                label={current.caption}
                sizes="(min-width: 640px) 640px, 90vw"
              />
              <span className="absolute left-3 top-3 rounded bg-black/55 px-2 py-0.5 font-mono text-sm text-white">
                {playing ? "❚❚" : "▶"}
              </span>
              <span
                className="absolute right-3 top-3 rounded bg-black/55 px-2 py-0.5 font-mono text-base font-semibold text-white"
                aria-live="polite"
              >
                {pad(index + 1)}-{pad(total)}
              </span>
              {joke && (
                <span
                  role="status"
                  className="sticky-note absolute bottom-4 left-1/2 -translate-x-1/2 -rotate-2 px-4 py-1 font-script text-xl"
                >
                  nope, keeping this one :)
                </span>
              )}
            </div>
            <p className="mt-3 text-center font-serif text-lg font-bold tracking-[0.35em] text-[#4a4540]">
              {site.firstName.toUpperCase()}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-7 sm:pr-2">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-b from-[#7a7671] to-[#55514c] shadow-[inset_0_2px_6px_rgb(0_0_0/0.35),0_2px_0_rgb(255_255_255/0.4)]">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-2 flex h-12 w-10 items-center justify-center text-xl text-white/80 hover:text-white"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                className="h-[4.5rem] w-[4.5rem] rounded-full bg-gradient-to-b from-[#86827c] to-[#5f5b56] font-sans text-2xl font-bold text-white/90 shadow-[0_4px_8px_rgb(0_0_0/0.35),inset_0_1px_0_rgb(255_255_255/0.25)] active:translate-y-px"
              >
                OK
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-2 flex h-12 w-10 items-center justify-center text-xl text-white/80 hover:text-white"
              >
                ▶
              </button>
            </div>
            <button
              type="button"
              onClick={() => setJoke(true)}
              aria-label="Delete photo"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#5fbf5f] to-[#3a8f3a] text-white shadow-[0_4px_8px_rgb(0_0_0/0.3),inset_0_1px_0_rgb(255_255_255/0.35)] active:translate-y-px"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13M10 10.5v6.5M14 10.5v6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <p className="mt-8 flex items-center justify-center gap-3 font-script text-xl text-ink-soft">
        <Arrow className="h-6 w-14" />
        {site.cameraAside}
      </p>
    </section>
  );
}
