import { HeroSection } from "@/components/sections/hero";
import { ScriptureSection } from "@/components/sections/scripture";
import { OurRootsSection } from "@/components/sections/our-roots";
import { CharismSection } from "@/components/sections/charism";
import { LifeInTheOrderSection } from "@/components/sections/life-in-the-order";
import { PatronSaintsSection } from "@/components/sections/patron-saints";
import { PrayWithUsSection } from "@/components/sections/pray-with-us";
import { EventsPreviewSection } from "@/components/sections/events-preview";
import { ReflectionsPreviewSection } from "@/components/sections/reflections-preview";
// import { HowItBeginsSection } from "@/components/sections/how-it-begins";
import { CtaBandSection } from "@/components/sections/cta-band";
// import { SevenSorrowsSection } from "@/components/sections/seven-sorrows";

export default function Home() {
  return (
    <>
      {/* — Understand — */}
      <HeroSection />
      <ScriptureSection />
      <OurRootsSection />
      <CharismSection />

      {/* — Live it — */}
      <LifeInTheOrderSection />
      <PatronSaintsSection />

      {/* — Join — */}
      <PrayWithUsSection />
      <EventsPreviewSection />
      <ReflectionsPreviewSection />
      {/* <HowItBeginsSection /> */}
      <CtaBandSection />
    </>
  );
}
