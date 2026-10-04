import Reveal from "../../Reveal";
import { Figure } from "../primitives";
import { palms } from "@/content/case-studies/palms";

/**
 * Fig. 01: the learning loop as an academic process figure.
 * Typographic only: numbered steps on a thin spine.
 */
export default function LoopFigure() {
  return (
    <Figure
      no="01"
      caption="The PALMS learning loop."
      meta="Seven stages"
    >
      <div className="bg-paper px-6 py-8 md:px-10 md:py-10">
        <ol className="relative">
          {palms.loopWords.map((word, i) => (
            <Reveal key={word} delay={i * 60}>
              <li className="relative flex items-baseline gap-5 py-3 pl-2">
                {i < palms.loopWords.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[27px] top-12 h-[calc(100%-2rem)] w-px bg-line"
                  />
                )}
                <span className="relative z-10 flex h-8 w-12 shrink-0 items-center justify-center border border-line bg-paper font-mono text-[11px] tracking-[0.1em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  {word}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Figure>
  );
}
