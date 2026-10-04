import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/** Research instrument: pre/post measurement, stated as measurement. */
export default function Research() {
  return (
    <Section id="research" index="06 · Research" title={palms.research.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          {palms.research.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="border border-line bg-paper px-5 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Stated on the page itself
              </p>
              <p className="mt-2 font-display text-lg leading-snug text-ink">
                {"\"Score change is calculated as post-test minus pre-test and reported as a measured value only.\""}
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <CaseImage no="08" figure={palmsFigures.researchEval} />
        </div>
      </div>
    </Section>
  );
}
