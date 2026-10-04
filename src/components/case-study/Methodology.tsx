import Reveal from "../Reveal";
import { floodDss } from "@/content/case-studies/flood-dss";

/**
 * The project methodology as an academic figure:
 * a composed eight-stage sequence with slow scroll reveals.
 * Labelled as a conceptual overview.
 */
export default function Methodology() {
  return (
    <div className="mt-10 border border-line bg-paper-deep/40 px-5 py-8 md:px-10 md:py-10">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Fig. 05 · Methodology · Conceptual overview
        </p>
      </Reveal>
      <ol className="mt-6 divide-y divide-line">
        {floodDss.methodology.map((stage, i) => (
          <li
            key={stage.title}
            className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-12 sm:gap-4 md:py-6"
          >
            <Reveal delay={Math.min(i * 60, 300)} className="sm:col-span-12">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-12 sm:gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:col-span-3 md:col-span-2">
                  Stage {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-medium text-ink sm:col-span-9 md:col-span-3">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:col-span-9 sm:col-start-4 md:col-span-7 md:col-start-6">
                  {stage.text}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
