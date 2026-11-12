import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/about", label: "about" },
  { href: "/#works", label: "works" },
  { href: "/#playground", label: "playground" },
  { href: "/#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border-[1.5px] border-ink bg-paper/90 px-2 py-1.5 font-mono text-xs uppercase shadow-[2px_3px_0_#1a1a1a] backdrop-blur sm:gap-2 sm:text-sm">
        <Link href="/" className="rounded-full bg-highlight px-3 py-1 font-marker normal-case">
          {site.firstName}
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="rounded-full px-2 py-1 hover:bg-black/5 sm:px-3">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
