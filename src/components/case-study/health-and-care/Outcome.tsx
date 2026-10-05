import Section from "../../Section";
import Reveal from "../../Reveal";
import { healthCare } from "@/content/case-studies/health-and-care";

/** Academic outcome — Grade A, stated briefly and without technical implication. */
export default function Outcome() {
  return (
    <Section
      id="outcome"
      index="10 · Academic outcome"
      title={healthCare.outcome.title}
    >
      <div className="max-w-2xl">
        {healthCare.outcome.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
