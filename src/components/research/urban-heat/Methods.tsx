import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { urbanHeat } from "@/content/research/urban-heat";

/** Methods register, condensed from the analytical report. */
export default function Methods() {
  return (
    <Section
      id="methods"
      index="02 · Methods"
      title={urbanHeat.methods.title}
      lede={urbanHeat.methods.lede}
    >
      <dl className="border-t border-line">
        {urbanHeat.methods.rows.map((row, i) => (
          <Reveal key={row.label} delay={Math.min(i * 60, 240)}>
            <div className="grid gap-4 border-b border-line py-4 md:grid-cols-12 md:py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:col-span-3">
                {row.label}
              </dt>
              <dd className="text-[15px] leading-relaxed text-ink md:col-span-9">
                {row.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
