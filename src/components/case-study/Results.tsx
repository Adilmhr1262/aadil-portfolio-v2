"use client";

import Reveal from "../Reveal";
import { CaseImage } from "./primitives";
import CountUp from "./CountUp";
import { floodDss, floodFigures } from "@/content/case-studies/flood-dss";

export default function Results() {
  return (
    <div className="mt-10">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Fig. 04 · Held-out evaluation metrics
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-10 pt-6 md:grid-cols-2 md:gap-8">
        {floodDss.results.primary.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {metric.label}
            </p>
            <p className="mt-3 font-display text-7xl font-medium tracking-tight text-ink md:text-8xl">
              <CountUp to={metric.value} decimals={metric.decimals} />
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {metric.note}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8">
          {floodDss.results.supporting.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-4xl font-medium text-ink md:text-5xl">
                {item.value}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.note}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <CaseImage no="05" figure={floodFigures.modelComparison} bleed className="mt-12" />

      <Reveal delay={160}>
        <p className="mt-10 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-soft">
          {floodDss.results.caveat}
        </p>
      </Reveal>
    </div>
  );
}
