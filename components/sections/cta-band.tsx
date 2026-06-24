import Link from "next/link";

export function CtaBandSection() {
  return (
    <section className="bg-black px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-3xl">

        {/* Top rule + cross */}
        <div className="mb-14 flex items-center gap-6">
          <div className="h-px flex-1 bg-gold/[0.18]" />
          <span className="font-display text-xs tracking-[0.5em] text-gold/35">✠</span>
          <div className="h-px flex-1 bg-gold/[0.18]" />
        </div>

        {/* Quote */}
        <p className="mb-10 text-center font-display text-3xl font-normal italic leading-relaxed tracking-wide text-white sm:text-4xl lg:text-5xl lg:leading-relaxed">
          "If your heart is drawn to Our Lady of Sorrows, walk with us."
        </p>

        {/* Short rule */}
        <div className="mx-auto mb-10 h-px w-10 bg-gold/20" />

        {/* Invitation copy */}
        <p className="mb-4 text-center text-[15px] leading-[1.9] text-white/60">
          The Secular Servite life is not for the perfect — it is for the willing.
          For those who want to pray, to belong, and to serve, and who sense that
          Mary may be calling them toward something deeper.
        </p>
        <p className="mb-14 text-center text-[15px] leading-[1.9] text-white/60">
          We do not ask you to have it all figured out. We ask only that you come.
        </p>

        {/* Primary + secondary CTAs */}
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <Link
            href="/inquire"
            className="border border-gold/50 px-10 py-4 text-center text-sm tracking-[0.3em] text-gold/80 transition-colors hover:border-gold hover:text-gold"
          >
            Begin an Inquiry
          </Link>
          <Link
            href="/events/servite-rosary-evening"
            className="border border-white/12 px-10 py-4 text-center text-sm tracking-[0.3em] text-white/40 transition-colors hover:border-white/28 hover:text-white/65"
          >
            Join us for Prayer
          </Link>
        </div>

        {/* Tertiary links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="/reflections"
            className="text-[11px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/50"
          >
            Read Reflections
          </Link>
          <span className="h-3 w-px bg-white/10" aria-hidden="true" />
          <Link
            href="/rosary"
            className="text-[11px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/50"
          >
            Learn the Rosary
          </Link>
          <span className="h-3 w-px bg-white/10" aria-hidden="true" />
          <Link
            href="/our-story"
            className="text-[11px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/50"
          >
            Our Story
          </Link>
        </div>

        {/* Bottom rule */}
        <div className="mt-14 h-px bg-gold/[0.18]" />

      </div>
    </section>
  );
}
