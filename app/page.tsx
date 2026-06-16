import { HeroSection } from "@/components/sections/hero";
import { OurRootsSection } from "@/components/sections/our-roots";
import { ScriptureSection } from "@/components/sections/scripture";
import { CharismSection } from "@/components/sections/charism";
import { WhoWeAreTodaySection } from "@/components/sections/who-we-are-today";
import { PatronSaintsSection } from "@/components/sections/patron-saints";
import { EventsPreviewSection } from "@/components/sections/events-preview";
import { CtaBandSection } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurRootsSection />
      <ScriptureSection />
      <CharismSection />
      <WhoWeAreTodaySection />
      <PatronSaintsSection />
      <EventsPreviewSection />
      <CtaBandSection />
    </>
  );
}
