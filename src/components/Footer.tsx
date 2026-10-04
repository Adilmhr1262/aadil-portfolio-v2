import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 {profile.name}</p>
        <p>Stage one · foundation and homepage</p>
      </div>
    </footer>
  );
}
