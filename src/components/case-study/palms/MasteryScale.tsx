import { palmsBands } from "@/content/case-studies/palms";

/**
 * The recurring PALMS motif: the four mastery bands as an editorial
 * annotation device. Deliberately not a progress bar: no fill, no
 * gamification, just the scale.
 */
export default function MasteryScale({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-line ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {palmsBands.map((band, i) => (
          <div
            key={band.name}
            className={`px-4 py-3 ${i > 0 ? "border-l border-line" : ""} ${
              i >= 2 ? "max-md:border-t max-md:border-line" : ""
            } ${i === 2 ? "max-md:border-l-0" : ""}`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
              {band.name}
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-muted">
              {band.range}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
