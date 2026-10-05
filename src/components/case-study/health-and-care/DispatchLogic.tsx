import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** The documented nearest-driver dispatch logic. */
export default function DispatchLogic() {
  return (
    <Section
      id="dispatch"
      index="05 · Dispatch logic"
      title={healthCare.dispatch.title}
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <CaseImage no="04" figure={healthCareFigures[3]} />
        </div>
        <div className="md:col-span-5">
          {healthCare.dispatch.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="border border-line bg-paper px-5 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Documented rules
              </p>
              <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-ink">
                <li>Respond to requests within 30 seconds.</li>
                <li>Assign by proximity and availability.</li>
                <li>Cancel only before the journey starts.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
