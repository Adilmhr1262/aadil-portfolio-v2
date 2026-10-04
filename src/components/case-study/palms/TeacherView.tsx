import { CaseImage } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms, palmsFigures } from "@/content/case-studies/palms";

/** Teacher view: grade → inspect mastery → intervene, as a sequence. */
export default function TeacherView() {
  return (
    <Section id="teacher" index="04 · Teacher" title={palms.teacher.title}>
      <Reveal>
        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {palms.teacher.paragraphs[0]}
        </p>
      </Reveal>

      <div className="mt-10">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Grade
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <CaseImage no="05" figure={palmsFigures.gradingQueue} />
          </div>
          <Reveal delay={120} className="md:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Objective items grade themselves. Short answers arrive here:
              the student{"'"}s answer beside points and comment fields, with
              reviewed work kept below for the record.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Inspect mastery
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal delay={120} className="md:col-span-4 md:order-1">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Graded attempts, latest and best scores, and the mastery band
              in one table. The same state the rules evaluated is the state
              the teacher reads.
            </p>
          </Reveal>
          <div className="md:col-span-8 md:order-2">
            <CaseImage no="06" figure={palmsFigures.teacherMastery} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Intervene
          </p>
        </Reveal>
        <CaseImage no="07" figure={palmsFigures.interventions} />
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            The interventions inbox is the strongest teacher-side figure:
            active recommendations ordered by priority, the reason each one
            fired, a note on what the teacher did, and a reviewed mark when
            the follow-up is complete. The loop closes with a person, not a
            notification.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
