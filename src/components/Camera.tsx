"use client";

import { useEffect, useRef, useState } from "react";
import { photos, site } from "@/content/site";
import { Arrow, StickyNote } from "./Doodles";
import { MediaOrPlaceholder } from "./Placeholder";

const pad = (n: number) => String(n).padStart(3, "0");

// Film-strip geometry (px, desktop), measured from the reference at 1440px wide.
const STEP = 339; // distance between prints
const STRIP_LEFT = 231; // left edge of the current print, from the camera's left edge
const SHUTTER_MS = 140;

export function Camera() {
  // `order` = the roll; trash moves the current photo to the end of it.
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [index, setIndex] = useState(0);
  const [shutter, setShutter] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const total = order.length;

  useEffect(() => () => clearTimeout(timer.current), []);

  const flash = () => {
    setShutter(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShutter(false), SHUTTER_MS);
  };

  const go = (delta: number) => {
    setIndex((i) => (i + delta + total) % total);
    flash();
  };

  const trash = () => {
    setOrder((o) => [...o.slice(0, index), ...o.slice(index + 1), o[index]]);
    flash();
  };

  const current = photos[order[index]];

  return (
    <section id="playground" className="scroll-mt-24 overflow-hidden px-4 py-24">
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

      <div className="relative mx-auto mt-12 w-full max-w-[720px]">
        {/* Film strip: every photo as a print behind the camera; slides as you browse (desktop) */}
        <div
          className="absolute top-1/2 hidden -translate-y-[calc(50%-11px)] lg:block"
          style={{ left: STRIP_LEFT }}
          aria-hidden
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(.3,1.25,.5,1)] motion-reduce:transition-none"
            style={{ gap: STEP - 257, transform: `translateX(${-index * STEP}px)` }}
          >
            {order.map((photoIndex) => {
              const ph = photos[photoIndex];
              return (
                <div
                  key={photoIndex}
                  className="relative h-[192px] w-[257px] shrink-0 border-[7px] border-white shadow-[3px_3px_0_#1a1a1a,0_10px_25px_-10px_rgb(0_0_0/0.3)]"
                >
                  <MediaOrPlaceholder src={ph.image} alt={ph.caption} tint={ph.tint} label="" sizes="243px" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Camera body */}
        <div
          className="relative z-10 flex w-full flex-col items-center gap-6 rounded-[18px] border border-black/10 px-5 pb-4 pt-5 shadow-[0_35px_60px_-25px_rgb(0_0_0/0.45),inset_0_2px_0_rgb(255_255_255/0.6),inset_0_-2px_0_rgb(0_0_0/0.08)] sm:flex-row sm:items-start sm:gap-0 sm:pb-3 sm:pl-[30px] sm:pr-0 sm:pt-[27px]"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgb(0 0 0/0.03) 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, rgb(0 0 0/0.03) 0 1px, transparent 1px 5px), linear-gradient(180deg,#d2cfc9,#b8b4ad)",
          }}
        >
          <div className="w-full sm:w-[479px] sm:shrink-0">
            <div className="rounded-[9px] bg-[#060606] p-[9px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-[#0a0a0a]">
                <div className={`absolute inset-0 transition-opacity duration-100 ${shutter ? "opacity-0" : "opacity-100"}`}>
                  <MediaOrPlaceholder
                    src={current.image}
                    alt={current.caption}
                    tint={current.tint}
                    label={current.caption}
                    sizes="(min-width: 640px) 460px, 90vw"
                  />
                </div>
                <span className="absolute left-3 top-3 rounded-[3px] bg-black/55 px-1.5 py-0.5 font-mono text-xs text-white">
                  ▶
                </span>
                <span
                  className="absolute right-3 top-3 rounded-[3px] bg-black/55 px-1.5 py-0.5 font-mono text-sm font-semibold text-white"
                  aria-live="polite"
                >
                  {pad(index + 1)}-{pad(total)}
                </span>
              </div>
            </div>
            <p className="mt-2.5 text-center font-serif text-[17px] font-bold tracking-[0.35em] text-[#4a4540]">
              {site.firstName.toUpperCase()}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-7 sm:flex-1 sm:pt-[100px]">
            <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full bg-gradient-to-b from-[#7a7671] to-[#55514c] shadow-[inset_0_2px_6px_rgb(0_0_0/0.35),0_2px_0_rgb(255_255_255/0.4)]">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-1.5 flex h-11 w-9 items-center justify-center text-lg text-white/80 hover:text-white"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={flash}
                aria-label="Take a picture"
                className="h-[54px] w-[54px] rounded-full bg-gradient-to-b from-[#86827c] to-[#5f5b56] font-sans text-lg font-bold text-white/90 shadow-[0_4px_8px_rgb(0_0_0/0.35),inset_0_1px_0_rgb(255_255_255/0.25)] active:translate-y-px"
              >
                OK
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-1.5 flex h-11 w-9 items-center justify-center text-lg text-white/80 hover:text-white"
              >
                ▶
              </button>
            </div>
            <button
              type="button"
              onClick={trash}
              aria-label="Move this photo to the end of the roll"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-gradient-to-b from-[#5fbf5f] to-[#3a8f3a] text-white shadow-[0_4px_8px_rgb(0_0_0/0.3),inset_0_1px_0_rgb(255_255_255/0.35)] active:translate-y-px"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
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
