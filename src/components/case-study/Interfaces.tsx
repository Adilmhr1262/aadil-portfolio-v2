import Reveal from "../Reveal";
import { AssetPlaceholder } from "./primitives";
import { floodDss } from "@/content/case-studies/flood-dss";

/**
 * Three interface surfaces, three different editorial treatments:
 * the reader should feel one system serving three audiences.
 */
export default function Interfaces() {
  return (
    <div className="mt-8 space-y-16 md:space-y-24">
      {floodDss.interfaces.map((surface, i) => {
        const flip = i % 2 === 1;
        return (
          <article
            key={surface.title}
            className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10"
          >
            <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Fig. {String(8 + i).padStart(2, "0")} · Interface {surface.index}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
                  {surface.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {surface.role}
                </p>
                {surface.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-4 text-[15px] leading-relaxed text-ink-soft"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
            <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
              <Reveal delay={120}>
                <AssetPlaceholder label={surface.placeholder} />
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  );
}
