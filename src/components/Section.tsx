import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  dark?: boolean;
  children: ReactNode;
};

export default function Section({ id, index, title, lede, dark = false, children }: SectionProps) {
  const heading = dark ? "text-paper" : "text-ink";
  const ledeColor = dark ? "text-paper/70" : "text-ink-soft";
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {index}
          </p>
          <h2 className={`mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl ${heading}`}>
            {title}
          </h2>
          {lede && (
            <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed md:text-base ${ledeColor}`}>
              {lede}
            </p>
          )}
          <div className="mt-10 border-t border-line" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
