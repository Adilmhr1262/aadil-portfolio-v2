import Section from "../../Section";
import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** The problem the system was built to take on, as described. */
export default function Problem() {
  return (
    <Section id="problem" index="01 · Problem" title={nutrition.problem.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          {nutrition.problem.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="md:col-span-5">
          <div className="border border-line bg-paper px-6 py-8 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              The recording problem
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "every meal, every day, has to be recorded",
                "typing out each item is where tracking fails",
                "a photo is cheaper than a form",
                "goals only work if the record exists",
              ].map((line) => (
                <li
                  key={line}
                  className="border-b border-line pb-4 font-display text-xl text-ink last:border-0 last:pb-0"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              As described by the author — not a measured claim.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
