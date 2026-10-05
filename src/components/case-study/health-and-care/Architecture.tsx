import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** Documented architecture, with the AWS/Firebase ambiguity preserved. */
export default function Architecture() {
  return (
    <Section
      id="architecture"
      index="04 · System architecture"
      title={healthCare.architecture.title}
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          {healthCare.architecture.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="md:col-span-7">
          <CaseImage no="03" figure={healthCareFigures[2]} tone="ink" />
        </div>
      </div>
    </Section>
  );
}
