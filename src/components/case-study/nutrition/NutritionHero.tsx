import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** Editorial opening: title block, project-account designation, metadata, tracking motif. */
export default function NutritionHero() {
  return (
    <header className="pt-28 md:pt-36">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {nutrition.classification} · {nutrition.year}
        </p>
        <h1 className="mt-6 font-display text-6xl font-medium tracking-tight text-ink md:text-8xl">
          {nutrition.name}
        </h1>
        <p className="mt-3 font-display text-xl text-ink-soft md:text-2xl">
          {nutrition.fullName}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal delay={120} className="md:col-span-6">
          <p className="max-w-xl font-display text-2xl leading-snug text-ink md:text-[28px]">
            {nutrition.statement}
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            This case study presents the system as its author described it. No
            source code, screenshots, demo, or design documents were available
            for review — so what follows is an account, not an audit, with a
            clear boundary where the account ends.
          </p>
          <dl className="mt-10 border-t border-line">
            {nutrition.metadata.map((item) => (
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
        <Reveal delay={200} className="md:col-span-6">
          <div className="border border-line bg-paper px-6 py-8 md:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              The tracking motif
            </p>
            <svg
              viewBox="0 0 400 150"
              role="img"
              aria-label="Tracking motif: a meal photo, identified items, and estimated nutrients connected in a flow."
              className="mt-6 w-full"
            >
              <path
                d="M 40 75 L 360 75"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                className="text-accent"
              />
              <g className="text-ink">
                <circle cx="40" cy="75" r="5" fill="currentColor" />
                <circle cx="200" cy="75" r="5" fill="currentColor" />
                <circle cx="360" cy="75" r="5" fill="currentColor" />
              </g>
              <g
                fontFamily="monospace"
                fontSize="10"
                letterSpacing="2"
                className="fill-muted"
                textAnchor="middle"
              >
                <text x="40" y="105">PHOTO</text>
                <text x="200" y="105">ITEMS</text>
                <text x="360" y="105">NUTRIENTS</text>
              </g>
            </svg>
            <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Photo → identified items → calories and macronutrients.
            </p>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
