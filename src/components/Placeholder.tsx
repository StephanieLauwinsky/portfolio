import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  tint?: [string, string];
  sizes?: string;
  priority?: boolean;
};

/** Renders the image if one is set, otherwise a labelled gradient placeholder. */
export function MediaOrPlaceholder({ src, alt, label, tint = ["#e8e8e8", "#cfcfcf"], sizes, priority }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes ?? "100vw"} priority={priority} className="object-cover" />;
  }
  return (
    <div
      role="img"
      aria-label={`${alt} (placeholder)`}
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})` }}
    >
      {label !== "" && (
      <span className="rounded bg-white/70 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
        {label ?? "image placeholder"}
      </span>
      )}
    </div>
  );
}
