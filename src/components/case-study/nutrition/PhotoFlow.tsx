import Section from "../../Section";
import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** The photo flow: the defining interaction, as described. */
export default function PhotoFlow() {
  return (
    <Section
      id="photo"
      index="03 · Photo tracking"
      title={nutrition.photo.title}
      lede={nutrition.photo.lede}
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-3">
        {nutrition.photo.steps.map((step, i) => (
          <div key={step.no} className="bg-paper px-6 py-8 md:px-8">
            <Reveal delay={i * 90}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {step.no}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-muted">
          {nutrition.photo.note}
        </p>
      </Reveal>
    </Section>
  );
}
