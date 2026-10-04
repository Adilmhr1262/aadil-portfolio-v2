import {  } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms } from "@/content/case-studies/palms";

/** The design problem, with a typographic comparison figure. */
export default function Problem() {
  const stages = ["assessment", "mastery", "rule", "reason", "recommendation", "teacher action"];
  return (
    <Section id="problem" index="01 · Problem" title={palms.problem.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          {palms.problem.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="md:col-span-7">
          <div className="border border-line bg-paper px-6 py-8 md:px-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Opaque personalization
                </p>
                <div className="mt-6 space-y-3 text-ink-faint">
                  <p className="font-display text-xl">learner activity</p>
                  <p aria-hidden="true" className="font-mono text-sm">↓</p>
                  <p className="font-display text-xl">recommendation appears</p>
                </div>
              </div>
              <div className="md:border-l md:border-line md:pl-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  PALMS
                </p>
                <ol className="mt-6 space-y-3">
                  {stages.map((stage, i) => (
                    <li key={stage}>
                      {i > 0 && (
                        <p aria-hidden="true" className="mb-3 font-mono text-sm text-muted">
                          ↓
                        </p>
                      )}
                      <p className="font-display text-xl text-ink">{stage}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <p className="mt-8 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Every step between activity and action is inspectable.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
