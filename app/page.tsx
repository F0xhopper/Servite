import { HeroSection } from "@/components/sections/hero";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { ScriptureSection } from "@/components/sections/scripture";
import { CharismSection } from "@/components/sections/charism";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ScriptureSection />
      <CharismSection />
    </>
  );
}
