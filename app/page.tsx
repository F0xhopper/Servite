import { HeroSection } from "@/components/sections/hero";
import { ScriptureSection } from "@/components/sections/scripture";
import { OurRootsSection } from "@/components/sections/our-roots";
import { CharismSection } from "@/components/sections/charism";
import { LifeInTheOrderSection } from "@/components/sections/life-in-the-order";
import { PatronSaintsSection } from "@/components/sections/patron-saints";
import { MarianQuoteSection } from "@/components/sections/marian-quote";
import { EventsPreviewSection } from "@/components/sections/events-preview";
import { FeastDaysPreviewSection } from "@/components/sections/feast-days-preview";
import { CtaBandSection } from "@/components/sections/cta-band";

// The feast day preview and the events list are both computed from today's
// date, so revalidate rather than letting the homepage hold on to the list as
// it stood on the day of the build.
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
      <CtaBandSection />
    </>
  );
}
