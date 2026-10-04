import {  } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms, palmsRules } from "@/content/case-studies/palms";

/**
 * The five rules, stated exactly as implemented.
 * Academic annotation treatment: bordered rows, not cards.
 */
export default function Rules() {
  return (
    <Section id="rules" index="08 · The five rules" title={palms.rulesSection.title}>
      <Reveal>
        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {palms.rulesSection.intro}
        </p>
      </Reveal>

      <ol className="mt-10 border-t border-line">
        {palmsRules.map((rule, i) => (
          <Reveal key={rule.code} delay={Math.min(i * 60, 240)}>
            <li className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {rule.index}
                </p>
                <p className="mt-2 break-words font-mono text-[12px] tracking-[0.06em] text-ink">
                  {rule.code}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {rule.condition}
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-xl font-medium text-ink md:text-2xl">
                  {rule.title}
                </p>
                <p className="mt-3 max-w-2xl border-l-2 border-line pl-4 text-[15px] leading-relaxed text-ink-soft">
                  {rule.message}
                </p>
                <p className="mt-4 max-w-2xl text-[14px] leading-relaxed">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Reason stored with the recommendation:{" "}
                  </span>
                  <span className="text-ink">{rule.reason}</span>
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-10 border border-accent/40 bg-paper px-6 py-6 md:px-8">
          <p className="max-w-3xl font-display text-xl leading-snug text-ink md:text-2xl">
            {palms.rulesSection.contrast}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
