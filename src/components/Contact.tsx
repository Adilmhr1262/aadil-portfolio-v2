import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/content/site";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05 · Contact"
      title="Start a conversation."
      lede="For Master's applications, research collaboration, or engineering work. My inbox is open."
      dark
    >
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-baseline gap-3 border-b-2 border-accent pb-1 font-display text-2xl font-medium text-paper transition-colors hover:text-accent md:text-4xl"
        >
          {profile.email}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
      <Reveal delay={120}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="https://github.com/Adilmhr1262"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em] text-paper/70 transition-colors hover:text-accent"
          >
            GitHub — Adilmhr1262
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/Aadil-Ali-Mahar-CV.pdf"
            download="Aadil-Ali-Mahar-CV.pdf"
            className="group inline-flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.14em] text-paper/70 transition-colors hover:text-accent"
          >
            Download CV
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
