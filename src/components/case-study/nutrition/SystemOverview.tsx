import Section from "../../Section";
import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** The stack as described — a register, nothing more. */
export default function SystemOverview() {
  return (
    <Section
      id="system"
      index="02 · System"
      title={nutrition.system.title}
      lede={nutrition.system.lede}
    >
      <dl className="border-t border-line">
        {nutrition.system.rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 60}>
            <div className="grid grid-cols-3 gap-4 border-b border-line py-4 md:py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {row.label}
              </dt>
              <dd className="col-span-2 font-display text-lg text-ink md:text-xl">
                {row.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
