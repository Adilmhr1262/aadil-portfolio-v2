import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "../Reveal";
import type { CaseFigure } from "./types";

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
  bleed = false,
}: {
  no: string;
  caption: string;
  meta?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <Reveal className={`${bleed ? "lg:-mx-16 xl:-mx-24" : ""} ${className}`}>
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

/** A genuine project artifact, framed as an academic figure.
 *  tone="ink" renders the artifact on a deliberate dark plate for
 *  source diagrams whose original dark treatment must be preserved. */
export function CaseImage({
  no,
  figure,
  className = "",
  bleed = false,
  scrollX = false,
  tone = "paper",
}: {
  no: string;
  figure: CaseFigure;
  className?: string;
  bleed?: boolean;
  scrollX?: boolean;
  tone?: "paper" | "ink";
}) {
  const dark = tone === "ink";
  return (
    <Figure no={no} caption={figure.caption} meta={figure.meta} className={className} bleed={bleed}>
      <div className={dark ? "bg-ink p-3 md:p-6" : "bg-paper p-3 md:p-5"}>
        <div className={scrollX ? "overflow-x-auto" : ""}>
          <Image
            src={figure.src}
            width={figure.width}
            height={figure.height}
            alt={figure.alt}
            sizes={bleed ? "(max-width: 768px) 100vw, 1400px" : "(max-width: 768px) 100vw, 1100px"}
            className={`h-auto w-full ${dark ? "border border-white/15" : "border border-line"} ${scrollX ? "min-w-[640px] md:min-w-0" : ""}`}
          />
        </div>
        {scrollX && (
          <p className={`mt-2 font-mono text-[10px] uppercase tracking-[0.14em] ${dark ? "text-white/50" : "text-muted"} md:hidden`}>
            Scroll sideways to inspect
          </p>
        )}
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
