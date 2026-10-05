import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** The documented emergency-request workflow, with the sequence diagram. */
export default function SystemFlow() {
  return (
    <Section
      id="system"
      index="02 · The proposed system"
      title={healthCare.system.title}
      lede={healthCare.system.intro}
    >
      <ol className="grid gap-px border border-line bg-line md:grid-cols-3">
        {healthCare.system.steps.map((step, i) => (
          <li key={step.title} className="bg-paper px-6 py-6">
            <Reveal delay={(i % 3) * 80}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-xl text-ink">{step.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <CaseImage no="02" figure={healthCareFigures[1]} scrollX />
      </div>
    </Section>
  );
}
