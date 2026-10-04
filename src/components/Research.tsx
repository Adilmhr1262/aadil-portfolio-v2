import Section from "./Section";
import Reveal from "./Reveal";
import { research } from "@/content/site";

export default function Research() {
  return (
    <Section
      id="research"
      index="02 · Research"
      title="Applied research, kept honest."
      lede="My research direction is simple: turn data into tools that help people decide. Two lines of work are built; the third is where graduate study begins."
    >
      <ol className="border-t border-line">
        {research.map((line, i) => (
          <Reveal key={line.title} delay={i * 90}>
            <li className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:py-10">
              <span className="font-display text-4xl font-medium text-line md:col-span-2 md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                    {line.title}
                  </h3>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                      line.state === "built" ? "text-accent" : "text-muted"
                    }`}
                  >
                    {line.state === "built" ? "Built" : "Direction for graduate study"}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                  {line.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Placeholder: dedicated research pages with methods, data, and
          results arrive in the next stage.
        </p>
      </Reveal>
    </Section>
  );
}
