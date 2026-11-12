import type { Metadata } from "next";
import { Caveat, Geist_Mono, Patrick_Hand, Permanent_Marker } from "next/font/google";
import { Nav } from "@/components/Nav";
import { site } from "@/content/site";
import "./globals.css";

const marker = Permanent_Marker({ variable: "--font-permanent-marker", weight: "400", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const hand = Patrick_Hand({ variable: "--font-patrick-hand", weight: "400", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marker.variable} ${caveat.variable} ${hand.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}
