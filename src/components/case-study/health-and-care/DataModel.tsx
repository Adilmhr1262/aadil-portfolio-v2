import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** The documented data model: User, Driver, Booking, Payment. */
export default function DataModel() {
  return (
    <Section
      id="data"
      index="07 · Data model"
      title={healthCare.data.title}
    >
      <div className="max-w-2xl">
        {healthCare.data.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <CaseImage no="06" figure={healthCareFigures[5]} tone="ink" />
        </div>
        <div className="md:col-span-6">
          <CaseImage no="07" figure={healthCareFigures[6]} tone="ink" />
        </div>
      </div>
    </Section>
  );
}
