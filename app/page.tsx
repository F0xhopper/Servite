import { HeroSection } from "@/components/sections/hero";
import { ScriptureSection } from "@/components/sections/scripture";
import { OurRootsSection } from "@/components/sections/our-roots";
import { CharismSection } from "@/components/sections/charism";
import { LifeInTheOrderSection } from "@/components/sections/life-in-the-order";
import { PatronSaintsSection } from "@/components/sections/patron-saints";
import { MarianQuoteSection } from "@/components/sections/marian-quote";
import { EventsPreviewSection } from "@/components/sections/events-preview";
import { FeastDaysPreviewSection } from "@/components/sections/feast-days-preview";
// import { HowItBeginsSection } from "@/components/sections/how-it-begins";
import { CtaBandSection } from "@/components/sections/cta-band";
// import { SevenSorrowsSection } from "@/components/sections/seven-sorrows";

// The feast days preview is computed from today's date; revalidate so the
// homepage doesn't hold on to the build-day list.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* Understand */}
      <HeroSection />
      <ScriptureSection />
      <OurRootsSection />
      <CharismSection />

      {/* Live it */}
      <LifeInTheOrderSection />
      <PatronSaintsSection />

      {/* Join */}
      <MarianQuoteSection />
      <EventsPreviewSection />
      <FeastDaysPreviewSection />
      {/* <HowItBeginsSection /> */}
      <CtaBandSection />
    </>
  );
}
