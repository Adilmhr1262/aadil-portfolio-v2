import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import MasteryScale from "./MasteryScale";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/**
 * The centerpiece: the loop expanded into a vertical editorial sequence,
 * followed by the signature recommendations figure.
 */
export default function Loop() {
  return (
    <Section id="loop" index="02 · The loop" title={palms.loop.title}>
      <Reveal>
        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {palms.loop.intro}
        </p>
      </Reveal>

      <ol className="relative mt-12">
        {palms.loop.steps.map((step, i) => (
          <Reveal key={step.title} delay={Math.min(i * 60, 240)}>
            <li className="relative grid gap-2 pb-10 pl-16 md:grid-cols-12 md:gap-6 md:pl-20">
              {i < palms.loop.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[23px] top-12 h-[calc(100%-2.5rem)] w-px bg-line md:left-[27px]"
                />
              )}
              <span className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center border border-line bg-paper font-mono text-[11px] tracking-[0.1em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-medium text-ink md:col-span-3 md:text-2xl">
                {step.title}
              </h3>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft md:col-span-9">
                {step.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-4">
        <Reveal>
          <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
            {palms.signature.title}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            {palms.signature.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-8">
            <CaseImage no="02" figure={palmsFigures.recommendations} />
          </div>
        </div>
        <Reveal className="mt-8">
          <MasteryScale />
        </Reveal>
      </div>
    </Section>
  );
}
