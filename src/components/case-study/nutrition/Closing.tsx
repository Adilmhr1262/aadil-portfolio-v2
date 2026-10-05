import Reveal from "../../Reveal";
import { nutrition } from "@/content/case-studies/nutrition";

/** Quiet editorial closing. */
export default function Closing() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Closing
          </p>
          <p className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug tracking-tight text-ink md:text-4xl">
            {nutrition.closing.statement}
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {nutrition.closing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
