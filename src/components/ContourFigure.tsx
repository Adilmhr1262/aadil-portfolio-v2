"use client";

import { useEffect, useRef } from "react";

/**
 * Fig. 01: a slow-drifting contour field drawn on canvas,
 * evoking the spatial risk models of the flood DSS work.
 */
export default function ContourFigure() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const levels = 13;
      for (let i = 0; i < levels; i++) {
        const f = i / (levels - 1);
        const baseY = h * 0.12 + f * h * 0.76;
        const amp = 14 + f * 26;
        const p1 = 0.004 + f * 0.004;
        const p2 = 0.009 - f * 0.003;
        const drift = reduceMotion ? 0 : t * (0.25 + f * 0.35);

        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const y =
            baseY +
            amp * Math.sin(x * p1 * 2 + drift + f * 3.1) * 0.6 +
            amp * 0.5 * Math.cos(x * p2 * 2 - drift * 0.7 + f * 1.3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const isAccent = i === Math.floor(levels * 0.62);
        ctx.strokeStyle = isAccent ? "rgba(154, 43, 36, 0.55)" : "rgba(27, 22, 16, 0.14)";
        ctx.lineWidth = isAccent ? 1.5 : 1;
        ctx.stroke();
      }

      // corner ticks, cartographic feel
      ctx.strokeStyle = "rgba(27, 22, 16, 0.35)";
      ctx.lineWidth = 1;
      const tick = 10;
      const corners: Array<[number, number, number, number]> = [
        [12, 12, 1, 1],
        [w - 12, 12, -1, 1],
        [12, h - 12, 1, -1],
        [w - 12, h - 12, -1, -1],
      ];
      for (const [cx, cy, sx, sy] of corners) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + tick * sx, cy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy + tick * sy);
        ctx.stroke();
      }

      if (!reduceMotion) {
        t += 0.008;
        raf = requestAnimationFrame(draw);
      }
    };

    draw();
    const onResize = () => {
      if (reduceMotion) draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure className="border border-line bg-paper-deep/40">
      <canvas ref={canvasRef} className="block h-64 w-full md:h-80" aria-hidden="true" />
      <figcaption className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <span>Fig. 01 · Modelled risk field</span>
        <span>Flood DSS · 2026</span>
      </figcaption>
    </figure>
  );
}
