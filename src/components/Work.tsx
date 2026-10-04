import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/content/site";

export default function Work() {
  return (
    <Section
      id="work"
      index="03 · Selected work"
      title="Systems designed and built end to end."
      lede="Each project below is real, with the stack and the outcome stated plainly. Full project pages with architecture, data, and results arrive in the next stage."
    >
      <div className="border-t border-line">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 70}>
            <article className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:py-10">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:col-span-2 md:pt-1">
                {project.year}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {project.stack}
                </p>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Project page · placeholder
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
