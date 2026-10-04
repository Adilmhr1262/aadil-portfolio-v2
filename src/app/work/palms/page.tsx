import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CaseStudyTopBar, CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import PalmsHero from "@/components/case-study/palms/PalmsHero";
import Problem from "@/components/case-study/palms/Problem";
import Loop from "@/components/case-study/palms/Loop";
import StudentView from "@/components/case-study/palms/StudentView";
import TeacherView from "@/components/case-study/palms/TeacherView";
import Readings from "@/components/case-study/palms/Readings";
import Research from "@/components/case-study/palms/Research";
import Engineering from "@/components/case-study/palms/Engineering";
import Rules from "@/components/case-study/palms/Rules";
import Process from "@/components/case-study/palms/Process";

export const metadata: Metadata = {
  title: "PALMS · Aadil Ali Mahar",
  description:
    "Case study of PALMS, a mastery-based learning platform for education research: transparent recommendation rules, visible mastery bands, teacher intervention workflows, and pre/post research measurement.",
};

const palmsNav = [
  { label: "Problem", href: "#problem" },
  { label: "The loop", href: "#loop" },
  { label: "Student", href: "#student" },
  { label: "Teacher", href: "#teacher" },
  { label: "Roles", href: "#roles" },
  { label: "Research", href: "#research" },
  { label: "Engineering", href: "#engineering" },
  { label: "The five rules", href: "#rules" },
];

export default function PalmsCaseStudy() {
  return (
    <div className="overflow-x-clip">
      <CaseStudyTopBar no="No. 2" />
      <main className="pt-16">
        <CaseStudyNav links={palmsNav} />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <PalmsHero />
        </div>
        <Problem />
        <Loop />
        <StudentView />
        <TeacherView />
        <Readings />
        <Research />
        <Engineering />
        <Rules />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
