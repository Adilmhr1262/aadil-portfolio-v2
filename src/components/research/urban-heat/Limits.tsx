import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { urbanHeat } from "@/content/research/urban-heat";

/** Limits and provenance, stated plainly. */
export default function Limits() {
  return (
    <>
      <Section
        id="limitations"
        index="04 · Limitations"
        title={urbanHeat.limitations.title}
      >
        <ul className="max-w-3xl space-y-4">
          {urbanHeat.limitations.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 70, 210)}>
              <li className="border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-ink-soft">
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section
        id="provenance"
        index="05 · Provenance"
        title={urbanHeat.provenance.title}
      >
        <Reveal>
          <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {urbanHeat.provenance.body}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
