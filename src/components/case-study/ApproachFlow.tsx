import Reveal from "../Reveal";
import { Figure } from "./primitives";
import { floodDss } from "@/content/case-studies/flood-dss";

/**
 * The data → modelling → spatial → risk → decision → interfaces
 * relationship, as an editorial sequence. Horizontal on desktop,
 * vertical on narrow screens.
 */
export default function ApproachFlow() {
  return (
    <Figure
      no="02"
      caption="From data to decision"
      meta="Conceptual"
      className="mt-10"
    >
      <ol className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-6 lg:divide-x">
        {floodDss.approach.map((stage, i) => (
          <li key={stage.label} className="p-5 md:p-6">
            <Reveal delay={i * 80}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-lg font-medium text-ink">
                {stage.label}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {stage.text}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Figure>
  );
}
