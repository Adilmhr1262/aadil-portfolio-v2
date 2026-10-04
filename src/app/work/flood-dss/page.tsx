import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { CaseStudyTopBar, CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ApproachFlow from "@/components/case-study/ApproachFlow";
import ArchitectureDiagram from "@/components/case-study/ArchitectureDiagram";
import Methodology from "@/components/case-study/Methodology";
import Results from "@/components/case-study/Results";
import Spatial from "@/components/case-study/Spatial";
import Interfaces from "@/components/case-study/Interfaces";
import Technology from "@/components/case-study/Technology";
import { floodDss } from "@/content/case-studies/flood-dss";

export const metadata: Metadata = {
  title: "Flood Risk Prediction and Early Warning DSS · Aadil Ali Mahar",
  description:
    "Case study of a flood-risk prediction and early-warning decision-support system for Sindh, Pakistan: predictive modelling, PostGIS spatial analysis, and role-based interfaces.",
};

export default function FloodDssCaseStudy() {
  return (
    <div className="overflow-x-clip">
      <CaseStudyTopBar />
      <main className="pt-16">
        <CaseStudyNav />
        <CaseStudyHero />

        <Section
          id="context"
          index="01 · Context"
          title="Where the project begins."
        >
          {floodDss.contextParagraphs.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-ink-soft md:text-base">
                {p}
              </p>
            </Reveal>
          ))}
        </Section>

        <div className="border-y border-line bg-paper-deep/50">
          <Section
            id="objective"
            index="02 · Objective"
            title="What the system was designed to accomplish."
          >
            <ol className="mt-2 max-w-3xl">
              {floodDss.objectives.map((objective, i) => (
                <Reveal key={objective} delay={i * 70}>
                  <li className="flex gap-5 border-b border-line py-5">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-medium text-ink md:text-2xl">
                      {objective}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Section>
        </div>

        <Section
          id="approach"
          index="03 · Approach"
          title="From data to decision."
          lede="The project's central relationship: evidence becomes models, models become maps, maps become warnings, warnings reach people."
        >
          <ApproachFlow />
        </Section>

        <div className="border-y border-line bg-paper-deep/50">
          <Section
            id="architecture"
            index="04 · Architecture"
            title="How the system is organized."
            lede="Six layers, one spine. Each layer is named at the level the project record supports; nothing finer is invented."
          >
            <ArchitectureDiagram />
          </Section>
        </div>

        <Section
          id="methodology"
          index="05 · Methodology"
          title="How the work was done."
        >
          <Methodology />
        </Section>

        <div className="border-y border-line bg-paper-deep/50">
          <Section
            id="results"
            index="06 · Results"
            title="What the evaluation showed."
          >
            <Results />
          </Section>
        </div>

        <Section
          id="spatial"
          index="07 · Spatial analysis"
          title="Where risk lives on the map."
        >
          <Spatial />
        </Section>

        <div className="border-y border-line bg-paper-deep/50">
          <Section
            id="interfaces"
            index="08 · Interfaces"
            title="One system, three audiences."
            lede="The same underlying system provides a different experience for each user: the authority who decides, the public who needs to know, and the volunteer in the field."
          >
            <Interfaces />
          </Section>
        </div>

        <Section
          id="technology"
          index="09 · Technology"
          title="What it is built with."
        >
          <Technology />
        </Section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <Reveal>
              <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-soft">
                {floodDss.closingNote}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/#work"
                  className="bg-ink px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
                >
                  ← Back to selected work
                </Link>
                <a
                  href="mailto:aadilmaharr@gmail.com"
                  className="nav-link text-sm font-medium text-ink"
                >
                  Discuss this project
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
