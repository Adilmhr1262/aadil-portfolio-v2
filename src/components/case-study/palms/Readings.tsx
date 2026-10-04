import {  } from "../primitives";
import Section from "../../Section";
import Reveal from "../../Reveal";
import { palms } from "@/content/case-studies/palms";

/** Three readings of one system: a shared spine with three branches. */
export default function Readings() {
  return (
    <Section id="roles" index="05 · Roles" title={palms.readings.title}>
      <Reveal>
        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {palms.readings.intro}
        </p>
      </Reveal>
      <div className="relative mt-10 md:ml-2">
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[5px] top-4 w-px bg-line"
        />
        <ol>
          {palms.readings.roles.map((item, i) => (
            <Reveal key={item.role} delay={i * 90}>
              <li className="relative pb-10 pl-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-[11px] w-[11px] border border-accent bg-paper"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {item.role}
                </p>
                <p className="mt-2 font-display text-xl text-ink md:text-2xl">
                  <span className="text-muted">sees </span>
                  {item.sees}
                </p>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
