import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04 · Experience"
      title="Remote experience across international teams."
      lede="All four roles were remote, across four countries, alongside and after my degree."
    >
      <ol className="relative ml-1 border-l border-line pl-8 md:pl-12">
        {experience.map((item, i) => (
          <Reveal key={`${item.role}-${item.company}`} delay={i * 70}>
            <li className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-[5px] rounded-full border-2 border-accent bg-paper md:-left-12"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.dates} · {item.location}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium text-ink md:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm italic text-ink-soft">{item.company}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                {item.summary}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
