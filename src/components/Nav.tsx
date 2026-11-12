"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { AvatarDoodle } from "./Doodles";

// `loop` tweaks each pen loop so they don't look stamped: "playground" is drawn too narrow, like the reference.
const links = [
  { href: "/about", label: "about", loop: "-rotate-2" },
  { href: "/#works", label: "works", loop: "rotate-1" },
  { href: "/#playground", label: "playground", loop: "scale-x-[0.86] -rotate-1" },
  { href: "/#contact", label: "contact", loop: "rotate-2" },
];

/** Loose, hand-drawn ellipse that overshoots at the top like a quick pen loop. */
function PenLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -inset-x-1 -inset-y-0.5 h-[calc(100%+4px)] w-[calc(100%+8px)] overflow-visible ${className}`}
      fill="none"
      stroke="#111"
      strokeWidth="1.6"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      aria-hidden
    >
      <path
        d="M58 4 C 82 3, 99 12, 98 25 C 97 40, 74 47, 48 46 C 20 45, 2 38, 3 25 C 4 12, 22 5, 46 4 C 60 3.5, 72 5, 80 8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Nav() {
  const [hidden, setHidden] = useState(false);

  // Hide while scrolling down, reveal when scrolling up (like the reference).
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-[90px] md:-translate-y-[100px]" : "translate-y-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-[22px] px-[37px] pt-[30px] md:h-[92px] md:flex-row md:items-start md:justify-between md:px-6">
        {/* Name badge: double-line box, slightly tilted */}
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="block -rotate-[2.2deg] rounded-[7px] border-2 border-ink bg-paper p-[3px] transition-transform hover:-rotate-[4deg]"
        >
          <span className="flex h-[38px] items-center gap-2.5 rounded-[5px] border-[1.5px] border-ink pl-2.5 pr-3.5">
            {site.avatar ? (
              <span className="relative h-7 w-7">
                <Image src={site.avatar} alt="" fill sizes="28px" className="object-contain" />
              </span>
            ) : (
              <AvatarDoodle className="h-7 w-7" face="#fff" />
            )}
            <span className="font-marker text-xl leading-none">{site.firstName}</span>
          </span>
        </Link>

        {/* Links, each circled with a pen loop */}
        <ul className="flex w-full items-center justify-between md:w-auto md:justify-end md:gap-[18px] md:pt-[7px]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative inline-flex h-7 items-center justify-center px-2 font-script text-lg font-semibold leading-none transition-transform hover:-rotate-3 md:h-[34px] md:px-[10px] md:text-2xl"
              >
                <PenLoop className={l.loop} />
                <span className="relative">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
