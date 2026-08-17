import { Hero } from "@/components/home/Hero";
import { PillarPanels } from "@/components/home/PillarPanels";
import { AlignmentLine } from "@/components/home/AlignmentLine";
import { HowIsThisPossible } from "@/components/home/HowIsThisPossible";
import { ProofBar } from "@/components/home/ProofBar";
import { CleanCookIQStrip } from "@/components/home/CleanCookIQStrip";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { OriginNote } from "@/components/home/OriginNote";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarPanels />
      <AlignmentLine />
      <HowIsThisPossible />
      <ProofBar />
      <CleanCookIQStrip />
      <PartnerStrip />
      <OriginNote />
    </>
  );
}
