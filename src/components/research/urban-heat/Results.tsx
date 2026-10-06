import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { CaseImage } from "@/components/case-study/primitives";
import { urbanHeat, urbanHeatFigures } from "@/content/research/urban-heat";

/** Results: the evidence, then what it means. */
export default function Results() {
  return (
    <Section id="results" index="03 · Results" title={urbanHeat.results.title}>
      <div className="grid gap-8 md:grid-cols-2">
        <CaseImage no="01" figure={urbanHeatFigures[0]} />
        <CaseImage no="02" figure={urbanHeatFigures[1]} />
      </div>
      <div className="mt-8">
        <CaseImage no="03" figure={urbanHeatFigures[2]} />
      </div>
      <ul className="mt-10 max-w-3xl space-y-4">
        {urbanHeat.results.points.map((point, i) => (
          <Reveal key={i} delay={Math.min(i * 70, 280)}>
            <li className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-ink-soft">
              {point}
            </li>
          </Reveal>
        ))}
      </ul>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <CaseImage no="04" figure={urbanHeatFigures[3]} />
        <CaseImage no="05" figure={urbanHeatFigures[4]} />
      </div>
    </Section>
  );
}
