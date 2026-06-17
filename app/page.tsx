import { HeroSection } from "@/components/sections/hero";
import { OurRootsSection } from "@/components/sections/our-roots";
import { ScriptureSection } from "@/components/sections/scripture";
import { SevenSorrowsSection } from "@/components/sections/seven-sorrows";
import { CharismSection } from "@/components/sections/charism";
import { LifeInTheOrderSection } from "@/components/sections/life-in-the-order";
import { PatronSaintsSection } from "@/components/sections/patron-saints";
import { EventsPreviewSection } from "@/components/sections/events-preview";
import { CtaBandSection } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurRootsSection />
      <ScriptureSection />
      <SevenSorrowsSection />
      <CharismSection />
      <LifeInTheOrderSection />
      <PatronSaintsSection />
      <EventsPreviewSection />
      <CtaBandSection />
    </>
  );
}
