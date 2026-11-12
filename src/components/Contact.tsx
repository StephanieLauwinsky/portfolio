import { site } from "@/content/site";
import { Scribble } from "./Doodles";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 px-4 pb-40 pt-16">
      <div className="relative mx-auto max-w-xl">
        {/* Spiral rings */}
        <div className="absolute -left-3 top-8 bottom-8 z-10 flex flex-col justify-between" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="block h-3 w-9 rounded-full border-2 border-[#555] bg-gradient-to-b from-[#eee] to-[#999]"
            />
          ))}
        </div>

        <div className="relative flex aspect-[5/6] flex-col items-center justify-center bg-highlight px-8 shadow-[0_25px_50px_-20px_rgb(0_0_0/0.35)]">
          <div className="relative">
            <Scribble className="absolute -inset-x-16 -inset-y-10 h-[calc(100%+5rem)] w-[calc(100%+8rem)]" />
            <h2
              className="relative text-center font-marker uppercase leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 9vw, 4.5rem)" }}
            >
              {site.contactHeading.map((w) => (
                <span key={w} className="block">
                  {w}
                </span>
              ))}
            </h2>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-lg">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border-[1.5px] border-ink bg-ink px-6 py-2 font-mono text-sm uppercase text-highlight shadow-[3px_3px_0_#fff] transition hover:-translate-y-0.5"
            >
              Send it →
            </a>
            <a href={`mailto:${site.email}`} className="underline decoration-wavy underline-offset-4">
              {site.email}
            </a>
            <div className="flex gap-4">
              {site.socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
