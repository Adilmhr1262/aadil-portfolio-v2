import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/content/site";

export default function Work() {
  return (
    <Section
      id="work"
      index="03 · Selected work"
      title="Systems designed and built end to end."
      lede="Each project below is real, with the stack and the outcome stated plainly. The Flood Risk DSS and PALMS now have full case studies; the remaining project pages follow the same format."
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
                {project.kind && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {project.kind}
                  </p>
                )}
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    className="group mt-5 inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
                  >
                    Read the case study
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
