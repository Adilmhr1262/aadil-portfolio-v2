import Reveal from "../Reveal";
import { CaseImage } from "./primitives";
import { floodDss, floodFigures } from "@/content/case-studies/flood-dss";

/**
 * Three interface surfaces, three different editorial treatments.
 * All captures are genuine project artifacts from the project archive.
 */
export default function Interfaces() {
  const [authority, portal, mobile] = floodDss.interfaces;
  return (
    <div className="mt-8 space-y-16 md:space-y-24">
      <article>
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Interface 01
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
              {authority.title}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {authority.role}
            </p>
            {authority.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-[15px] leading-relaxed text-ink-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <CaseImage no="10" figure={floodFigures.dashboardOverview} bleed className="mt-10" />
        <CaseImage no="11" figure={floodFigures.decisionSupport} className="mt-10" />
        <CaseImage no="12" figure={floodFigures.alertCenter} className="mt-10" />
      </article>

      <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Interface 02
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
              {portal.title}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {portal.role}
            </p>
            {portal.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-[15px] leading-relaxed text-ink-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <CaseImage no="13" figure={floodFigures.publicPortal} />
        </div>
      </article>

      <article>
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Interface 03
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
              {mobile.title}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {mobile.role}
            </p>
            {mobile.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-[15px] leading-relaxed text-ink-soft"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          <CaseImage no="14" figure={floodFigures.mobileHome} />
          <CaseImage no="15" figure={floodFigures.mobileScreens} />
        </div>
      </article>
    </div>
  );
}
