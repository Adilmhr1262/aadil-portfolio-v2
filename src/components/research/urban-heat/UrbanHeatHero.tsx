import Reveal from "@/components/Reveal";
import { urbanHeat } from "@/content/research/urban-heat";

/** Editorial opening for the observatory research page. */
export default function UrbanHeatHero() {
  return (
    <header className="pt-28 md:pt-36">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {urbanHeat.classification} · {urbanHeat.year}
        </p>
        <h1 className="mt-6 font-display text-6xl font-medium tracking-tight text-ink md:text-8xl">
          {urbanHeat.name}
        </h1>
        <p className="mt-3 font-display text-xl text-ink-soft md:text-2xl">
          {urbanHeat.fullName}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal delay={120} className="md:col-span-7">
          <p className="max-w-xl font-display text-2xl leading-snug text-ink md:text-[28px]">
            {urbanHeat.statement}
          </p>
          <dl className="mt-10 border-t border-line">
            {urbanHeat.metadata.map((item) => (
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
        <Reveal delay={200} className="md:col-span-5">
          <div className="border border-line bg-paper px-6 py-8 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Headline result
            </p>
            <p className="mt-6 font-display text-5xl font-medium tracking-tight text-ink md:text-6xl">
              {urbanHeat.results.headline.value}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
              {urbanHeat.results.headline.label}
            </p>
            <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Association only — no causal or health claims.
            </p>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
