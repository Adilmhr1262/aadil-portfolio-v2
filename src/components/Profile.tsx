import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/content/site";

const facts = [
  { label: "Education", value: `${profile.degree.title}, ${profile.degree.school} (${profile.degree.dates})` },
  { label: "Result", value: "CGPA 3.02 / 4.00" },
  { label: "Home", value: profile.home },
  { label: "Languages", value: profile.languages.join(" · ") },
  { label: "Focus", value: "Master's applications · disaster management track" },
];

export default function Profile() {
  return (
    <Section
      id="profile"
      index="01 · Profile"
      title="A computer scientist working on applied systems."
      lede="Alongside my degree I worked remotely for international companies in the US, China, the UK, and Germany, work that taught me to take full ownership of a task."
    >
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="text-[15px] leading-[1.85] text-ink-soft md:text-base">
            <span className="float-left mr-3 font-display text-6xl font-medium leading-[0.85] text-ink">
              I
            </span>
            completed my B.S. in Computer Science at The Islamia University of
            Bahawalpur in February 2026. After graduation I designed and built a
            complete flood-risk prediction and early-warning decision-support
            system for flood-prone communities in Sindh, Pakistan: spatial
            analysis and machine-learning models (best held-out F1 0.875,
            ROC-AUC 0.963) delivered through a full software stack serving
            authorities, volunteers, and the public.
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft md:text-base">
            I am now applying for Master&apos;s study to keep building on this
            foundation: modelling work that stays close to real data and ends
            up in the hands of the people who need it.
          </p>
          <p className="mt-8 border-l-2 border-accent pl-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            Placeholder: publications and awards: none yet. This space stays
            open as the record grows.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5">
          <dl className="border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-3 gap-4 border-b border-line py-4"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </dt>
                <dd className="col-span-2 text-sm leading-relaxed text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
