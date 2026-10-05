import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CaseStudyTopBar, CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import HealthCareHero from "@/components/case-study/health-and-care/HealthCareHero";
import Problem from "@/components/case-study/health-and-care/Problem";
import SystemFlow from "@/components/case-study/health-and-care/SystemFlow";
import Interaction from "@/components/case-study/health-and-care/Interaction";
import Architecture from "@/components/case-study/health-and-care/Architecture";
import DispatchLogic from "@/components/case-study/health-and-care/DispatchLogic";
import Roles from "@/components/case-study/health-and-care/Roles";
import DataModel from "@/components/case-study/health-and-care/DataModel";
import Specification from "@/components/case-study/health-and-care/Specification";
import EvidenceBoundary from "@/components/case-study/health-and-care/EvidenceBoundary";
import Outcome from "@/components/case-study/health-and-care/Outcome";
import Closing from "@/components/case-study/health-and-care/Closing";

export const metadata: Metadata = {
  title: "Health and Care · Aadil Ali Mahar",
  description:
    "Case study of Health and Care, a final-year academic system-design project: a proposed Android ambulance-service workflow with emergency request, nearest-driver coordination, and location-aware tracking, documented in an SRS and SDD.",
};

const healthCareNav = [
  { label: "Problem", href: "#problem" },
  { label: "System", href: "#system" },
  { label: "Interaction", href: "#interaction" },
  { label: "Architecture", href: "#architecture" },
  { label: "Dispatch", href: "#dispatch" },
  { label: "Roles", href: "#roles" },
  { label: "Data", href: "#data" },
  { label: "Specification", href: "#specification" },
  { label: "Evidence", href: "#evidence" },
];

export default function HealthCareCaseStudy() {
  return (
    <div className="overflow-x-clip">
      <CaseStudyTopBar no="No. 3" />
      <main className="pt-16">
        <CaseStudyNav links={healthCareNav} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <HealthCareHero />
        </div>
        <Problem />
        <SystemFlow />
        <Interaction />
        <Architecture />
        <DispatchLogic />
        <Roles />
        <DataModel />
        <Specification />
        <EvidenceBoundary />
        <Outcome />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
