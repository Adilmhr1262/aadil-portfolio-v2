import Reveal from "../../Reveal";
import { healthCare } from "@/content/case-studies/health-and-care";

/** Quiet editorial closing on the design question. */
export default function Closing() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Closing
          </p>
          <p className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug tracking-tight text-ink md:text-4xl">
            {healthCare.closing.statement}
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {healthCare.closing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
