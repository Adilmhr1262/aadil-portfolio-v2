"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-mono text-[13px] font-medium tracking-wide text-ink"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[13px] font-medium tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-ink px-4 py-2 text-[13px] font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-line bg-paper transition-[max-height] duration-500 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0 border-b-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 text-sm font-medium text-ink-soft last:border-0 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
