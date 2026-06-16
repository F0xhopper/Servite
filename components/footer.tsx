import Link from "next/link";

const navLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Spirituality", href: "/spirituality" },
  { label: "Saints", href: "/saints" },
  { label: "Events", href: "/events" },
  { label: "Become a Member", href: "/inquire" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <p className="mb-1 font-display text-xs uppercase tracking-[0.4em] text-white/30">
              OSSM
            </p>
            <p className="mb-6 font-display text-sm leading-relaxed tracking-wider text-white/50">
              Secular Order of the<br />Servants of Mary
            </p>
            <div className="mb-6 h-px w-8 bg-gold/20" />
            <p className="text-[13px] italic leading-relaxed text-gold/40">
              Our Lady of Sorrows, pray for us.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-display text-[10px] uppercase tracking-[0.45em] text-white/25">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] tracking-wider text-white/40 transition-colors hover:text-white/70"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Fraternity details */}
          <div>
            <p className="mb-5 font-display text-[10px] uppercase tracking-[0.45em] text-white/25">
              Fraternity
            </p>
            <div className="space-y-5 text-[13px] leading-relaxed text-white/40">
              <div>
                <p className="mb-1.5 font-display text-[10px] uppercase tracking-[0.3em] text-gold/30">
                  Meeting Times
                </p>
                <p>Second Sunday of each month</p>
                <p>10:00 am · Parish Hall</p>
              </div>
              <div>
                <p className="mb-1.5 font-display text-[10px] uppercase tracking-[0.3em] text-gold/30">
                  Contact
                </p>
                <a
                  href="mailto:info@ossm.org"
                  className="transition-colors hover:text-white/60"
                >
                  info@ossm.org
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom rule */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[10px] uppercase tracking-[0.4em] text-white/20">
            ✠ Sub tuum praesidium confugimus
          </p>
          <p className="text-[11px] tracking-wide text-white/20">
            © {new Date().getFullYear()} Secular Order of the Servants of Mary
          </p>
        </div>

      </div>
    </footer>
  );
}
