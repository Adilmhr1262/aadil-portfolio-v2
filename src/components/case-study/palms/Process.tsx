import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/** Design process, QA record, limitations, and the closing reflection. */
export default function Process() {
  return (
    <>
      <Section id="process" index="09 · Design process" title={palms.designProcess.title}>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            {palms.designProcess.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-8">
            <CaseImage no="10" figure={palmsFigures.wireframeDashboard} />
          </div>
        </div>
      </Section>

      <Section id="quality" index="10 · Quality" title={palms.qa.title}>
        <ol className="border-t border-line">
          {palms.qa.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 60, 180)}>
              <li className="flex gap-5 border-b border-line py-5">
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  QA-{String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                  {item}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="limits" index="11 · Limits" title={palms.limitations.title}>
        <Reveal>
          <div className="border border-line bg-paper px-6 py-6 md:px-8">
            <ul className="max-w-3xl space-y-4">
              {palms.limitations.items.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="flex gap-4 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-[9px] h-px w-6 shrink-0 bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <section className="mx-auto max-w-3xl px-6 pb-28 pt-8 md:pb-36">
        <Reveal>
          <div className="border-t-2 border-ink pt-10">
            {palms.reflection.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-6 font-display text-xl leading-relaxed text-ink md:text-2xl"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
