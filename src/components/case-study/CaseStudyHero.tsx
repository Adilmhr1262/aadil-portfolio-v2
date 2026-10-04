import ContourFigure from "../ContourFigure";
import { floodDss } from "@/content/case-studies/flood-dss";

export default function CaseStudyHero() {
  return (
    <section className="pt-16">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16">
        <p
          className="enter font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted"
          style={{ animationDelay: "0ms" }}
        >
          {floodDss.folio}
        </p>
        <p
          className="enter mt-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"
          style={{ animationDelay: "80ms" }}
        >
          {floodDss.contextLine}
        </p>

        <h1
          className="enter mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl"
          style={{ animationDelay: "160ms" }}
        >
          {floodDss.title}
        </h1>

        <p
          className="enter mt-6 max-w-2xl font-display text-lg italic leading-relaxed text-ink-soft md:text-xl"
          style={{ animationDelay: "280ms" }}
        >
          {floodDss.summary}
        </p>

        <dl
          className="enter mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-5"
          style={{ animationDelay: "400ms" }}
        >
          {floodDss.meta.map((row) => (
            <div key={row.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {row.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="enter mt-12" style={{ animationDelay: "520ms" }}>
          <figure className="border border-line bg-paper-deep/40">
            <ContourFigure />
          </figure>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Fig. 01 · Modelled risk field, illustrative
          </p>
        </div>
      </div>
    </section>
  );
}
