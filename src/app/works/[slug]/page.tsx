import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Arrow, StickyNote } from "@/components/Doodles";
import { MediaOrPlaceholder } from "@/components/Placeholder";
import { SketchFrame } from "@/components/SketchFrame";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: "The problem", body: p.problem },
    { label: "My role", body: p.role },
    { label: "The outcome", body: p.outcome },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 pb-40 pt-16 sm:px-6">
      <Link href="/#works" className="inline-flex items-center gap-2 font-script text-xl text-ink-soft hover:text-ink">
        <Arrow className="h-5 w-10" /> back to works
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="tag-pill px-3 py-0.5 font-script text-lg">{p.category}</span>
        <span className="font-mono text-sm text-ink-soft">{p.year}</span>
      </div>
      <h1 className="mt-4 font-marker uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
        {p.title}
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-ink-soft">{p.summary}</p>

      <div className="mt-12 -rotate-[0.6deg]">
        <SketchFrame>
          <MediaOrPlaceholder src={p.image} alt={p.title} label={`${p.title} cover`} sizes="(min-width: 896px) 896px, 100vw" priority />
        </SketchFrame>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {sections.map((s) => (
          <section key={s.label}>
            <h2 className="font-script text-3xl">{s.label}</h2>
            <p className="mt-2 text-lg leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-center gap-4 text-center">
        <StickyNote className="rotate-1">next up</StickyNote>
        <Link href={`/works/${next.slug}`} className="font-marker text-4xl uppercase hover:underline">
          {next.title} →
        </Link>
      </div>
    </main>
  );
}
