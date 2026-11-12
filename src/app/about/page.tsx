import type { Metadata } from "next";
import Link from "next/link";
import { StickyNote } from "@/components/Doodles";
import { MediaOrPlaceholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About", description: site.bio[0] };

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-5xl gap-12 px-4 pb-24 pt-40 sm:px-6 md:pt-32 md:grid-cols-[1fr_1.4fr] md:items-start">
      <div className="relative mx-auto w-64 rotate-[-2deg] bg-white p-3 pb-10 shadow-[0_20px_40px_-15px_rgb(0_0_0/0.35)] md:sticky md:top-16">
        <div className="relative aspect-[4/5]">
          <MediaOrPlaceholder src={site.portrait} alt={`Portrait of ${site.name}`} label="your photo" sizes="256px" />
        </div>
        <p className="absolute inset-x-0 bottom-2 text-center font-script text-xl">{site.location}</p>
      </div>

      <div>
        <StickyNote className="-rotate-2">about me</StickyNote>
        <h1 className="mt-6 font-marker uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm uppercase text-ink-soft">
          {site.role} · {site.location}
        </p>
        <div className="mt-8 space-y-4 text-xl leading-relaxed">
          {site.bio.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        <h2 className="mt-12 font-script text-3xl">What I focus on</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {site.focus.map((f) => (
            <li key={f} className="tag-pill px-4 py-1 text-lg">
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4 text-lg">
          <a href={`mailto:${site.email}`} className="underline decoration-wavy underline-offset-4">
            {site.email}
          </a>
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {s.label}
            </a>
          ))}
          <Link href="/#works" className="underline underline-offset-4">
            see my work →
          </Link>
        </div>
      </div>
    </main>
  );
}
