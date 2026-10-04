"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One-time count-up, firing when the element first scrolls into view.
 *
 * The true value is always the rendered and accessible text: server HTML,
 * crawlers, reduced-motion users, and no-JS clients all see it. The
 * count-up only ever replaces it transiently while the animation runs,
 * then settles back on the true value.
 */
export default function CountUp({
  to,
  decimals = 0,
  duration = 1400,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [override, setOverride] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
          if (p < 1) {
            setOverride((to * eased).toFixed(decimals));
            raf = requestAnimationFrame(tick);
          } else {
            setOverride(null);
          }
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
  }, [to, decimals, duration]);

  return <span ref={ref}>{override ?? to.toFixed(decimals)}</span>;
}
