"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { floodDss } from "@/content/case-studies/flood-dss";

function CountUp({
  end,
  decimals,
  duration = 1400,
}: {
  end: number;
  decimals: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? end
      : 0
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(end * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export default function Results() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-8">
        {floodDss.results.primary.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Fig. 04 · {metric.label}
            </p>
            <p className="mt-3 font-display text-7xl font-medium tracking-tight text-ink md:text-8xl">
              <CountUp end={metric.value} decimals={metric.decimals} />
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {metric.note}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8">
          {floodDss.results.supporting.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.label}
              </dt>
              <dd className="mt-2 font-display text-4xl font-medium text-ink md:text-5xl">
                {item.value}
              </dd>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.note}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-10 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-soft">
          {floodDss.results.caveat}
        </p>
      </Reveal>
    </div>
  );
}
