import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "../Reveal";
import type { CaseFigure } from "@/content/case-studies/flood-dss";

/** Mono kicker + serif title block shared by case-study sections. */
export function SectionHeading({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {kicker}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft md:text-base">
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/** Framed figure with FIG. number and mono caption. */
export function Figure({
  no,
  caption,
  meta,
  children,
  className = "",
}: {
  no: string;
  caption: string;
  meta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <figure className="border border-line bg-paper-deep/40">
        {children}
        <figcaption className="flex items-center justify-between gap-4 border-t border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <span>
            Fig. {no} · {caption}
          </span>
          {meta && <span className="shrink-0">{meta}</span>}
        </figcaption>
      </figure>
    </Reveal>
  );
}

/** A genuine project artifact, framed as an academic figure. */
export function CaseImage({
  no,
  figure,
  className = "",
}: {
  no: string;
  figure: CaseFigure;
  className?: string;
}) {
  return (
    <Figure no={no} caption={figure.caption} meta={figure.meta} className={className}>
      <div className="bg-paper p-3 md:p-5">
        <Image
          src={figure.src}
          width={figure.width}
          height={figure.height}
          alt={figure.alt}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="h-auto w-full border border-line"
        />
      </div>
    </Figure>
  );
}

/** Elegant, clearly labelled placeholder for a future project asset. */
export function AssetPlaceholder({
  label,
  sub,
}: {
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center gap-3 border border-dashed border-muted/60 bg-paper px-6 py-16 text-center md:min-h-72">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      {sub && (
        <p className="max-w-sm text-sm leading-relaxed text-muted">{sub}</p>
      )}
    </div>
  );
}
