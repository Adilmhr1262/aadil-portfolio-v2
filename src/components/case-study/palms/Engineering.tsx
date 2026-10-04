import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import CountUp from "../CountUp";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/** Engineering: data model figure, client/server split, evidence strip. */
export default function Engineering() {
  return (
    <Section id="engineering" index="07 · Engineering" title={palms.engineering.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          {palms.engineering.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="mt-2 border border-line bg-paper px-5 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Request path
              </p>
              <ol className="mt-3 space-y-2 font-mono text-[13px] text-ink">
                {["Next.js", "server-side API proxy", "FastAPI", "PostgreSQL"].map(
                  (layer, i, arr) => (
                    <li key={layer}>
                      <span>{layer}</span>
                      {i < arr.length - 1 && (
                        <span aria-hidden="true" className="block text-muted">
                          ↓
                        </span>
                      )}
                    </li>
                  ),
                )}
              </ol>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <CaseImage no="09" figure={palmsFigures.erDiagram} scrollX />
        </div>
      </div>

      <Reveal className="mt-12">
        <div className="border-y border-line py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {palms.engineering.evidence.map((item) => (
              <div key={item.label}>
                <p className="font-display text-4xl font-medium text-ink md:text-5xl">
                  <CountUp to={Number(item.value)} />
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-muted">
            {palms.engineering.evidenceNote}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
