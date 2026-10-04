import Reveal from "../../Reveal";
import LoopFigure from "./LoopFigure";
import { palms } from "@/content/case-studies/palms";

/** Editorial opening: title block, statement, metadata, and the loop motif. */
export default function PalmsHero() {
  return (
    <header className="pt-28 md:pt-36">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {palms.classification} · {palms.year}
        </p>
        <h1 className="mt-6 font-display text-6xl font-medium tracking-tight text-ink md:text-8xl">
          {palms.name}
        </h1>
        <p className="mt-3 font-display text-xl text-ink-soft md:text-2xl">
          {palms.fullName}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal delay={120} className="md:col-span-6">
          <p className="max-w-xl font-display text-2xl leading-snug text-ink md:text-[28px]">
            {palms.statement}
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Personalization does not have to be opaque. PALMS demonstrates a
            transparent alternative: mastery is visible, recommendation rules
            are explicit, reasons are readable, teachers can intervene, and
            research measurement stays separate from causal claims.
          </p>
          <dl className="mt-10 border-t border-line">
            {palms.metadata.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-3 gap-4 border-b border-line py-3"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </dt>
                <dd className="col-span-2 text-[14px] leading-relaxed text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="md:col-span-6">
          <LoopFigure />
        </div>
      </div>
    </header>
  );
}
