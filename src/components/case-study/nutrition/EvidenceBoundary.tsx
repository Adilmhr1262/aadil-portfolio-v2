import Section from "../../Section";
import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** The evidence boundary: DESCRIBED vs NOT VERIFIED, stated confidently. */
export default function EvidenceBoundary() {
  const cols = [
    {
      label: "Described",
      items: nutrition.evidence.documented,
      tone: "text-ink",
    },
    {
      label: "Not verified",
      items: nutrition.evidence.notVerified,
      tone: "text-muted",
    },
  ];
  return (
    <Section
      id="evidence"
      index="05 · Evidence boundary"
      title={nutrition.evidence.title}
      lede={nutrition.evidence.lede}
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {cols.map((col, ci) => (
          <div key={col.label} className="bg-paper px-6 py-8 md:px-8">
            <Reveal delay={ci * 100}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Evidence register · {col.label}
              </p>
              <ul className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`border-b border-line pb-3 font-display text-lg last:border-0 last:pb-0 ${col.tone}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
