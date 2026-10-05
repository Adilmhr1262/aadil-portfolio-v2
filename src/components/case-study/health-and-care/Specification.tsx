import Section from "../../Section";
import Reveal from "../../Reveal";
import { healthCare } from "@/content/case-studies/health-and-care";

/** Compact technical register — specifications only, targets labeled as targets. */
export default function Specification() {
  return (
    <Section
      id="specification"
      index="08 · Design specification"
      title={healthCare.specification.title}
      lede={healthCare.specification.intro}
    >
      <Reveal>
        <dl className="border-t border-line">
          {healthCare.specification.items.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 border-b border-line py-4 md:grid-cols-12 md:gap-6"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:col-span-4">
                {item.label}
              </dt>
              <dd className="text-[14px] leading-relaxed text-ink md:col-span-8">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
