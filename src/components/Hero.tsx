import ContourFigure from "./ContourFigure";
import { profile } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="pt-16">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <p
          className="enter font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted"
          style={{ animationDelay: "0ms" }}
        >
          Portfolio · No. 1
        </p>

        <div className="mt-8 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <h1
              className="enter font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink md:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
            <p
              className="enter mt-6 font-display text-xl italic leading-snug text-ink-soft md:text-2xl"
              style={{ animationDelay: "240ms" }}
            >
              I build data-driven systems for decisions that matter.
            </p>
            <p
              className="enter mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-base"
              style={{ animationDelay: "360ms" }}
            >
              {profile.summary}
            </p>

            <div
              className="enter mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "480ms" }}
            >
              <a
                href="#work"
                className="bg-ink px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
              >
                Selected work
              </a>
              <a
                href="#contact"
                className="border border-ink px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                Get in touch
              </a>
            </div>

            <dl
              className="enter mt-12 grid grid-cols-1 gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:grid-cols-3"
              style={{ animationDelay: "600ms" }}
            >
              <div>
                <dt className="text-muted">Degree</dt>
                <dd className="mt-1 text-ink">{profile.degree.detail}</dd>
              </div>
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="mt-1 text-ink">{profile.home}</dd>
              </div>
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="mt-1 text-ink">Master&apos;s applicant</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-5" style={{ animationDelay: "420ms" }}>
            <div className="enter h-full">
              <ContourFigure />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                An illustrative contour field from the flood-risk modelling
                work: spatial data, turned into something a decision-maker can
                read at a glance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
