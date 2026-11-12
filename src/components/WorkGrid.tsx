import Link from "next/link";
import { projects, site } from "@/content/site";
import { Arrow, StickyNote } from "./Doodles";
import { MediaOrPlaceholder } from "./Placeholder";
import { SketchFrame } from "./SketchFrame";

// Scattered "collage" layout, repeated every 6 projects. Tailwind classes must be literal strings.
const layouts = [
  { col: "md:col-start-1 md:col-end-6", rotate: -1.2, offset: "" },
  { col: "md:col-start-7 md:col-end-13", rotate: 1.5, offset: "md:-mt-10" },
  { col: "md:col-start-2 md:col-end-12", rotate: 0.8, offset: "md:mt-10" },
  { col: "md:col-start-1 md:col-end-7", rotate: -2, offset: "md:mt-6" },
  { col: "md:col-start-7 md:col-end-13", rotate: 1, offset: "md:mt-24" },
  { col: "md:col-start-2 md:col-end-12", rotate: -0.6, offset: "md:mt-10" },
];

const tints: [string, string][] = [
  ["#e9eef5", "#c9d6e8"],
  ["#f4ece0", "#e3cfb3"],
  ["#e6f0ea", "#bfd8c8"],
  ["#efe9f4", "#d2c4e2"],
  ["#f6f1d8", "#e6d98f"],
  ["#eaeaea", "#cdcdcd"],
];

export function WorkGrid() {
  return (
    <section id="works" className="scroll-mt-8 px-4 pb-24 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-2 font-script text-xl sm:text-2xl">
        <p>
          {site.workHeading} — {projects.at(-1)?.year} to {projects[0]?.year}
        </p>
        <p className="flex items-center gap-2">
          <Arrow className="h-6 w-16" direction="down-left" />
          {site.workAside}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
        {projects.map((p, i) => {
          const l = layouts[i % layouts.length];
          return (
            <article key={p.slug} className={`${l.col} ${l.offset} relative`}>
              {p.note && p.noteStyle === "sticky" && (
                <StickyNote className="mb-3 -rotate-2">{p.note}</StickyNote>
              )}
              <Link
                href={`/works/${p.slug}`}
                className="group block transition-transform duration-300 hover:-translate-y-1"
                style={{ transform: `rotate(${l.rotate}deg)` }}
              >
                <SketchFrame>
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                    <MediaOrPlaceholder
                      src={p.image}
                      alt={p.title}
                      label={`${p.title} cover`}
                      tint={tints[i % tints.length]}
                      sizes="(min-width: 768px) 60vw, 100vw"
                    />
                  </div>
                </SketchFrame>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl">{p.title}</h3>
                  <span className="tag-pill px-3 py-0.5 font-script text-lg">{p.category}</span>
                </div>
              </Link>
              {p.note && p.noteStyle !== "sticky" && (
                <p className="mt-6 flex items-center justify-center gap-3 font-script text-xl text-ink-soft">
                  <Arrow className="h-6 w-14" direction={i % 2 ? "up" : "left"} />
                  <span style={{ transform: `rotate(${l.rotate * 2}deg)` }}>{p.note}</span>
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
