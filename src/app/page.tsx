import { Camera } from "@/components/Camera";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <Camera />
      <Contact />
    </main>
  );
}
