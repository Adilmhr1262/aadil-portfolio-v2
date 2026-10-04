"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { Figure } from "./primitives";
import { floodDss } from "@/content/case-studies/flood-dss";

/**
 * Editorial system diagram: six layers on a single spine.
 * The spine draws progressively as the diagram enters view.
 * No boxes, no flowchart chrome: typography, rules, spacing.
 */
export default function ArchitectureDiagram() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || drawn) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [drawn]);

  return (
    <Figure no="03" caption="System architecture" meta="Six layers" className="mt-10">
      <div ref={wrapRef} className="relative px-5 py-8 md:px-10 md:py-10">
        <div aria-hidden="true" className="absolute bottom-8 left-[31px] top-8 w-px bg-line md:left-[75px]" />
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[31px] top-8 w-px origin-top bg-accent/70 md:left-[75px]"
          style={{
            transform: drawn ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 1.8s cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        />
        <ol className="relative space-y-8 md:space-y-10">
          {floodDss.architecture.map((layer, i) => (
            <li key={layer.id} className="relative pl-10 md:pl-14">
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-1.5 h-2 w-2 rounded-full border-2 border-accent bg-paper md:left-[31px]"
              />
              <Reveal delay={i * 90}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {layer.label}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium text-ink md:text-2xl">
                  {layer.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {layer.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Figure>
  );
}
