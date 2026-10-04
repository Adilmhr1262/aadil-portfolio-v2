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
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-paper/50">
          Placeholder: GitHub, LinkedIn, and CV download links to be added.
        </p>
      </Reveal>
    </Section>
  );
}
