import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** The MobileRescue UI mockups as the visual centerpiece. */
export default function Interaction() {
  return (
    <Section
      id="interaction"
      index="03 · Core interaction"
      title={healthCare.interaction.title}
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          {healthCare.interaction.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Defining interaction
              </p>
              <p className="mt-2 font-display text-xl text-ink">
                One-tap SOS
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                A single emergency action for situations where every second of
                interaction matters — documented, not shipped.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <CaseImage no="01" figure={healthCareFigures[0]} />
        </div>
      </div>
    </Section>
  );
}
