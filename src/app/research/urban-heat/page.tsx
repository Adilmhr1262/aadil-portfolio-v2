import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CaseStudyTopBar, CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import UrbanHeatHero from "@/components/research/urban-heat/UrbanHeatHero";
import Questions from "@/components/research/urban-heat/Questions";
import Methods from "@/components/research/urban-heat/Methods";
import Results from "@/components/research/urban-heat/Results";
import Limits from "@/components/research/urban-heat/Limits";

export const metadata: Metadata = {
  title: "Urban Heat Observatory · Aadil Ali Mahar",
  description:
    "Karachi Urban Heat & Green Cover Observatory: eleven years of Landsat observations relating vegetation to land surface temperature across Karachi, 2015–2025.",
};

const urbanHeatNav = [
  { label: "Questions", href: "#questions" },
  { label: "Methods", href: "#methods" },
  { label: "Results", href: "#results" },
  { label: "Limits", href: "#limitations" },
];

export default function UrbanHeatPage() {
  return (
    <div className="overflow-x-clip">
      <CaseStudyTopBar no="Research" />
      <main className="pt-16">
        <CaseStudyNav links={urbanHeatNav} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <UrbanHeatHero />
        </div>
        <Questions />
        <Methods />
        <Results />
        <Limits />
      </main>
      <Footer />
    </div>
  );
}
