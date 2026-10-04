import Reveal from "../Reveal";
import { AssetPlaceholder, Figure } from "./primitives";
import { floodDss } from "@/content/case-studies/flood-dss";

export default function Spatial() {
  return (
    <div className="mt-8">
      {floodDss.spatialParagraphs.map((p) => (
        <Reveal key={p.slice(0, 24)}>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-ink-soft md:text-base">
            {p}
          </p>
        </Reveal>
      ))}

      <Figure
        no="06"
        caption="From districts to decisions"
        meta="Conceptual"
        className="mt-10"
      >
        <ol className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {floodDss.spatialSequence.map((step, i) => (
            <li key={step.label} className="p-5 md:p-6">
              <Reveal delay={i * 80}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {step.label}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Figure>

      <Reveal className="mt-8">
        <AssetPlaceholder
          label="Project map · asset to be added"
          sub="District-level risk map from the PostGIS spatial database. No map is shown until the project's own rendered output is available."
        />
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Fig. 07 · District risk map · Placeholder
        </p>
      </Reveal>
    </div>
  );
}
