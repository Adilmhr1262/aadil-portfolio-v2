"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const defaultLinks = [
  { label: "Context", href: "#context" },
  { label: "Approach", href: "#approach" },
  { label: "Architecture", href: "#architecture" },
  { label: "Methodology", href: "#methodology" },
  { label: "Results", href: "#results" },
  { label: "Spatial", href: "#spatial" },
  { label: "Interfaces", href: "#interfaces" },
  { label: "Technology", href: "#technology" },
];

export function CaseStudyTopBar({ no = "No. 1" }: { no?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-mono text-[13px] font-medium tracking-wide text-ink transition-colors hover:text-accent"
        >
          ← Aadil Ali Mahar
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Case study · {no}
        </span>
      </div>
    </header>
  );
}

export function CaseStudyNav({
  links = defaultLinks,
}: {
  links?: { label: string; href: string }[];
}) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);

      let current = "";
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 140) current = link.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <div className="sticky top-16 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <nav
          aria-label="Case study sections"
          className="-mx-1 flex gap-6 overflow-x-auto px-1 py-3"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                active === link.href
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px bg-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
