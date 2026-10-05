import Section from "../../Section";
import Reveal from "../../Reveal";
import { CaseImage } from "../primitives";
import {
  healthCare,
  healthCareFigures,
} from "@/content/case-studies/health-and-care";

/** The three documented actors and what each is intended to do. */
export default function Roles() {
  return (
    <Section
      id="roles"
      index="06 · Roles and responsibilities"
      title={healthCare.roles.title}
      lede={healthCare.roles.intro}
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-3">
        {healthCare.roles.items.map((item, i) => (
          <div key={item.role} className="bg-paper px-6 py-6">
            <Reveal delay={(i % 3) * 80}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {item.role}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Sees: {item.sees}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <CaseImage no="05" figure={healthCareFigures[4]} scrollX />
      </div>
      <Reveal delay={120}>
        <p className="mt-6 max-w-2xl border-l-2 border-line pl-4 text-[14px] leading-relaxed text-muted">
          {healthCare.roles.note}
        </p>
      </Reveal>
    </Section>
  );
}
