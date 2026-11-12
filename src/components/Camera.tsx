"use client";

import { useCallback, useEffect, useState } from "react";
import { photos, site } from "@/content/site";
import { Arrow, StickyNote } from "./Doodles";
import { MediaOrPlaceholder } from "./Placeholder";

const pad = (n: number) => String(n).padStart(3, "0");

export function Camera() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = photos.length;

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + total) % total), [total]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => go(1), 2200);
    return () => clearInterval(id);
  }, [playing, go]);

  const current = photos[index];
  const upcoming = [1, 2].map((d) => photos[(index + d) % total]);

  return (
    <section id="playground" className="scroll-mt-8 px-4 py-24">
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

      <div className="relative mx-auto mt-12 flex max-w-3xl justify-center">
        {/* Printed photos sliding out of the camera (desktop only) */}
        <div className="pointer-events-none absolute left-[78%] top-[22%] hidden gap-8 lg:flex" aria-hidden>
          {upcoming.map((ph, i) => (
            <div key={ph.caption + i} className="relative h-48 w-56 border-4 border-white shadow-[3px_3px_0_#1a1a1a]">
              <MediaOrPlaceholder src={ph.image} alt={ph.caption} tint={ph.tint} label="" sizes="224px" />
            </div>
          ))}
        </div>

        {/* Camera body */}
        <div
          className="relative z-10 flex w-full max-w-[44rem] flex-col items-center gap-6 rounded-[1.75rem] border border-black/10 p-5 shadow-[0_30px_50px_-20px_rgb(0_0_0/0.4),inset_0_2px_0_rgb(255_255_255/0.6)] sm:flex-row sm:p-7"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgb(0 0 0/0.025) 0 1px, transparent 1px 6px), repeating-linear-gradient(90deg, rgb(0 0 0/0.025) 0 1px, transparent 1px 6px), linear-gradient(180deg,#cfccc6,#b9b5ae)",
          }}
        >
          <div className="w-full sm:flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-[6px] border-[#111] bg-black">
              <MediaOrPlaceholder
                src={current.image}
                alt={current.caption}
                tint={current.tint}
                label={current.caption}
                sizes="(min-width: 640px) 460px, 90vw"
              />
              <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 font-mono text-xs text-white">
                {playing ? "❚❚" : "▶"}
              </span>
              <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 font-mono text-xs text-white" aria-live="polite">
                {pad(index + 1)}-{pad(total)}
              </span>
            </div>
            <p className="mt-2 text-center font-serif text-sm font-bold tracking-[0.4em] text-ink-soft">
              {site.firstName.toUpperCase()}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-b from-[#6f6b66] to-[#4c4844] shadow-inner">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-2 flex h-10 w-8 items-center justify-center text-white/80 hover:text-white"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                className="h-14 w-14 rounded-full bg-gradient-to-b from-[#7d7973] to-[#5a5651] font-sans text-sm font-bold text-white/90 shadow-md active:translate-y-px"
              >
                OK
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-2 flex h-10 w-8 items-center justify-center text-white/80 hover:text-white"
              >
                ▶
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIndex(0)}
              aria-label="Back to first photo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#5cb85c] to-[#3d8b3d] text-white shadow-md active:translate-y-px"
            >
              ↺
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
