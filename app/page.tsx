import { HeroSection } from "@/components/sections/hero";
import { OurRootsSection } from "@/components/sections/our-roots";
import { ScriptureSection } from "@/components/sections/scripture";
import { CharismSection } from "@/components/sections/charism";
import { WhoWeAreTodaySection } from "@/components/sections/who-we-are-today";
import { PatronSaintsSection } from "@/components/sections/patron-saints";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurRootsSection />
      <ScriptureSection />
      <CharismSection />
      <WhoWeAreTodaySection />
      <PatronSaintsSection />
    </>
  );
}
