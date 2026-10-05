import Section from "../../Section";
import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** The feature register — the author's account, presented as described. */
export default function Features() {
  return (
    <Section
      id="features"
      index="04 · Features"
      title={nutrition.features.title}
      lede={nutrition.features.lede}
    >
      <dl className="border-t border-line">
        {nutrition.features.items.map((item, i) => (
          <Reveal key={item.label} delay={Math.min(i * 50, 300)}>
            <div className="grid grid-cols-3 gap-4 border-b border-line py-4 md:py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.label}
              </dt>
              <dd className="col-span-2 text-[15px] leading-relaxed text-ink">
                {item.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
