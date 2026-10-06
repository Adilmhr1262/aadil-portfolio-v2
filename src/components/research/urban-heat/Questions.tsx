import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { urbanHeat } from "@/content/research/urban-heat";

/** The four pre-registered research questions. */
export default function Questions() {
  return (
    <Section
      id="questions"
      index="01 · Questions"
      title={urbanHeat.questions.title}
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {urbanHeat.questions.items.map((q, i) => (
          <div key={q.no} className="bg-paper px-6 py-8 md:px-8">
            <Reveal delay={i * 80}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {q.no}
              </p>
              <p className="mt-3 font-display text-lg leading-snug text-ink">
                {q.body}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
