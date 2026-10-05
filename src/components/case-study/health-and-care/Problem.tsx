import Section from "../../Section";
import Reveal from "../../Reveal";
import { healthCare } from "@/content/case-studies/health-and-care";

/** The documented coordination problem. */
export default function Problem() {
  return (
    <Section id="problem" index="01 · Problem" title={healthCare.problem.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          {healthCare.problem.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="md:col-span-7">
          <div className="border border-line bg-paper px-6 py-8 md:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              What the SRS describes
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "a person needs medical transport",
                "booking, availability, location, and communication are disconnected",
                "no reliable way to find the nearest available ambulance",
                "providers have no structured way to receive requests",
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
              Designed to reduce coordination friction — not claimed to have
              reduced it.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
