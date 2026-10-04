import Reveal from "../Reveal";
import { floodDss } from "@/content/case-studies/flood-dss";

/**
 * Verified technologies, presented in context by layer,
 * not as a wall of badges.
 */
export default function Technology() {
  return (
    <div className="mt-8">
      <dl className="border-t border-line">
        {floodDss.technology.map((group, i) => (
          <Reveal key={group.label} delay={i * 70}>
            <div className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-6 md:py-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent md:col-span-3 md:pt-1">
                {group.label}
              </dt>
              <dd className="max-w-3xl text-[15px] leading-relaxed text-ink-soft md:col-span-9">
                {group.text}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
      <Reveal>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Only technologies verified in the project record are listed. Anything
          further is a placeholder until confirmed.
        </p>
      </Reveal>
    </div>
  );
}
