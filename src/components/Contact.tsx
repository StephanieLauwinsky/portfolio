"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { AvatarDoodle, Scribble } from "./Doodles";

const RINGS = 8;

function Rings({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none z-30 flex flex-col justify-around ${className}`} aria-hidden>
      {Array.from({ length: RINGS }).map((_, i) => (
        <span key={i} className="flex h-4 w-10 flex-col justify-center gap-[3px]">
          <span className="block h-[5px] rounded-full bg-gradient-to-b from-[#f2f2f2] via-[#9a9a9a] to-[#3a3a3a] ring-1 ring-black/50" />
          <span className="block h-[5px] rounded-full bg-gradient-to-b from-[#f2f2f2] via-[#9a9a9a] to-[#3a3a3a] ring-1 ring-black/50" />
        </span>
      ))}
    </div>
  );
}

function AvatarPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 bg-highlight p-10">
      {site.avatar ? (
        <div className="relative aspect-square w-3/5">
          <Image src={site.avatar} alt={`Drawing of ${site.name}`} fill sizes="320px" className="object-contain" />
        </div>
      ) : (
        <AvatarDoodle className="w-1/2 max-w-72 md:w-3/5" />
      )}
      <p className="text-center font-marker text-3xl uppercase lg:text-4xl">I&apos;m {site.firstName}</p>
    </div>
  );
}

function CoverPage() {
  return (
    <div className="flex h-full items-center justify-center bg-highlight px-8">
      <div className="relative">
        <Scribble className="absolute -inset-x-14 -inset-y-10 h-[calc(100%+5rem)] w-[calc(100%+7rem)]" />
        <h2 className="relative text-center font-marker uppercase leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          {site.contactHeading.map((w) => (
            <span key={w} className="block">
              {w}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}

const inputCls =
  "w-full border-0 border-b-[1.5px] border-ink/70 bg-transparent px-1 pb-3 pt-6 font-script text-2xl outline-none placeholder:text-ink/45 focus:border-ink";

function FormPage() {
  const id = useId();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Portfolio inquiry from ${name || "someone"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex h-full flex-col bg-paper px-8 py-8 sm:px-14 sm:py-10">
      <p className="inline-block self-start rounded-full bg-ink px-3 py-0.5 font-marker text-lg -rotate-1 text-white">
        {site.contactLabel}
      </p>
      <form onSubmit={onSubmit} className="mt-2 flex flex-1 flex-col">
        <label htmlFor={`${id}-name`} className="sr-only">Your name</label>
        <input id={`${id}-name`} name="name" required placeholder="Your name" autoComplete="name" className={inputCls} />
        <label htmlFor={`${id}-email`} className="sr-only">Email</label>
        <input id={`${id}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" className={inputCls} />
        <label htmlFor={`${id}-message`} className="sr-only">Message</label>
        <textarea id={`${id}-message`} name="message" required placeholder="Message" rows={3} className={`${inputCls} resize-y`} />
        <button type="submit" className="group relative mt-8 self-end px-7 py-2 font-script text-2xl">
          <svg viewBox="0 0 160 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
            <path
              d="M22 40 L40 16 M30 46 L56 14 M44 46 L70 14 M58 46 L84 14 M72 46 L98 14 M86 46 L112 14 M100 46 L124 18"
              stroke="#ffe500"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <ellipse cx="80" cy="30" rx="76" ry="25" fill="none" stroke="#111" strokeWidth="2" />
          </svg>
          <span className="relative inline-flex items-center gap-2 transition-transform group-hover:translate-x-0.5">
            {site.contactSend}
            <svg viewBox="0 0 30 12" className="h-3 w-8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              <path d="M1 6 H28 M22 1 L28 6 L22 11" />
            </svg>
          </span>
        </button>
      </form>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4 font-script text-lg">
        <a href={`mailto:${site.email}`} className="underline decoration-wavy decoration-ink/40 underline-offset-4">
          {site.email}
        </a>
        <div className="flex gap-5">
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="underline decoration-wavy decoration-ink/40 underline-offset-4">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Flip the cover open once the notebook is mostly in view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          io.disconnect();
        }
      },
      { threshold: 0.55 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" className="scroll-mt-8 overflow-hidden px-4 pb-24 pt-16">
      {/* Mobile: pages stacked */}
      <div className="mx-auto max-w-md shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)] md:hidden">
        <AvatarPage />
        <FormPage />
      </div>

      {/* Desktop: spiral notebook whose cover flips open */}
      <div className="mx-auto hidden max-w-6xl md:block" style={{ perspective: "2400px" }}>
        <div
          ref={ref}
          className="relative aspect-[16/9] transition-transform duration-[1100ms] ease-[cubic-bezier(.6,.05,.25,1)] motion-reduce:transition-none"
          style={{ transform: open ? "translateX(0)" : "translateX(-25%)" }}
        >
          {/* Right page (form) */}
          <div className="absolute inset-y-0 right-0 w-1/2 shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)]">
            <FormPage />
          </div>

          <Rings className="absolute inset-y-6 left-1/2 -translate-x-1/2" />

          {/* Cover: front = "Let's make something", back = avatar page */}
          <div
            onClick={() => setOpen(true)}
            className="absolute inset-y-0 right-0 z-20 w-1/2 origin-left cursor-pointer transition-transform duration-[1100ms] ease-[cubic-bezier(.6,.05,.25,1)] motion-reduce:transition-none"
            style={{ transformStyle: "preserve-3d", transform: open ? "rotateY(-180deg)" : "rotateY(0deg)" }}
          >
            <div className="absolute inset-0 shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)]" style={{ backfaceVisibility: "hidden" }}>
              <CoverPage />
            </div>
            <div
              className="absolute inset-0 shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)]"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <AvatarPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
