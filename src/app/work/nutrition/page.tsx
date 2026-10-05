import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CaseStudyTopBar, CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import NutritionHero from "@/components/case-study/nutrition/NutritionHero";
import Problem from "@/components/case-study/nutrition/Problem";
import SystemOverview from "@/components/case-study/nutrition/SystemOverview";
import PhotoFlow from "@/components/case-study/nutrition/PhotoFlow";
import Features from "@/components/case-study/nutrition/Features";
import EvidenceBoundary from "@/components/case-study/nutrition/EvidenceBoundary";
import Closing from "@/components/case-study/nutrition/Closing";

export const metadata: Metadata = {
  title: "Nutrition Tracking · Aadil Ali Mahar",
  description:
    "Case study of the Personal Nutrition and Calorie Tracking System: a web-based system for photo-based food tracking with calorie and macronutrient estimates, dashboards, and goals — presented as described by its author.",
};

const nutritionNav = [
  { label: "Problem", href: "#problem" },
  { label: "System", href: "#system" },
  { label: "Photo", href: "#photo" },
  { label: "Features", href: "#features" },
  { label: "Evidence", href: "#evidence" },
];

export default function NutritionCaseStudy() {
  return (
    <div className="overflow-x-clip">
      <CaseStudyTopBar no="No. 4" />
      <main className="pt-16">
        <CaseStudyNav links={nutritionNav} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <NutritionHero />
        </div>
        <Problem />
        <SystemOverview />
        <PhotoFlow />
        <Features />
        <EvidenceBoundary />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
