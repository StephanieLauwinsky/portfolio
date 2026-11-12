import { site } from "@/content/site";
import { StickyNote } from "./Doodles";
import { MediaOrPlaceholder } from "./Placeholder";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-4 pb-16">
      {/* Big handwritten backdrop */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[22vh] select-none whitespace-nowrap text-center font-script leading-none text-highlight/70 sm:top-56"
        style={{ fontSize: "clamp(5rem, 17vw, 16rem)" }}
      >
        {site.heroBackdrop}
      </p>

      {/* Lanyard + ID card */}
      <div className="swing relative z-10 flex flex-col items-center">
        <div className="h-24 w-5 bg-strap sm:h-28 sm:w-6" />
        <svg viewBox="0 0 30 60" className="-mt-1 h-14 w-7" aria-hidden>
          <rect x="9" y="0" width="12" height="10" rx="2" fill="#bdbdbd" stroke="#777" />
          <path d="M15 10 V18" stroke="#999" strokeWidth="3" />
          <ellipse cx="15" cy="24" rx="5" ry="6" fill="none" stroke="#999" strokeWidth="2.5" />
          <path d="M15 30 C 4 34, 4 54, 15 56 C 26 54, 26 34, 15 30" fill="none" stroke="#aaa" strokeWidth="3" />
        </svg>
        <div className="relative -mt-3 w-60 rounded-md border border-black/5 bg-white/80 p-3 pt-8 shadow-[0_25px_45px_-15px_rgb(0_0_0/0.35)] backdrop-blur sm:w-72">
          <span className="absolute left-1/2 top-3 h-2.5 w-14 -translate-x-1/2 rounded-full bg-paper ring-1 ring-black/10" />
          <StickyNote className="absolute -left-2 top-9 z-10 -rotate-3 text-base">
            {site.greeting}
          </StickyNote>
          <div className="relative aspect-[9/10] overflow-hidden rounded-sm">
            <MediaOrPlaceholder
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              label="your photo"
              tint={["#ececec", "#d8d8d8"]}
              priority
              sizes="300px"
            />
          </div>
        </div>
      </div>

      <h1
        className="relative z-10 mt-10 text-center font-marker uppercase leading-none"
        style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
      >
        I&apos;m {site.firstName}
      </h1>
      <p className="relative z-10 mt-4 max-w-xl text-center text-lg text-ink-soft sm:text-xl">{site.tagline}</p>
    </section>
  );
}
