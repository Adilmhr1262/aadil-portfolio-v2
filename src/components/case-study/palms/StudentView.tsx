import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import MasteryScale from "./MasteryScale";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/** Student view: learning path dominant, assessment entry supporting. */
export default function StudentView() {
  return (
    <Section id="student" index="03 · Student" title={palms.student.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          {palms.student.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-[15px] leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              The mastery scale
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <CaseImage no="03" figure={palmsFigures.learningPath} />
        </div>
      </div>
      <Reveal className="mt-8">
        <MasteryScale />
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <CaseImage no="04" figure={palmsFigures.assessmentEntry} />
        </div>
        <Reveal delay={120} className="md:col-span-7">
          <div className="border-l-2 border-accent/60 pl-6 md:mt-2">
            <p className="font-display text-xl leading-snug text-ink md:text-2xl">
              The scale is the interface.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Four bands (Needs Support, Developing, Proficient, Mastered)
              with an adjustable threshold (default 70) decide which rule
              fires. The student never has to guess what a score means; the
              band, the threshold, and the reason travel together.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
