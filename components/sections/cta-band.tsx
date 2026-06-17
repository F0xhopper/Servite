import Link from "next/link";

export function CtaBandSection() {
  return (
    <section className="bg-black px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-2xl text-center">

        <div className="mb-10 h-px bg-gold/[0.12]" />

        <p className="mb-8 font-display text-sm tracking-[0.5em] text-gold/30">✠</p>

        <p className="mb-10 font-display text-2xl font-normal italic leading-relaxed tracking-wide text-white/70 sm:text-3xl lg:text-[2.5rem]">
          "If your heart is drawn to Our Lady of Sorrows, walk with us."
        </p>

        <Link
          href="/inquire"
          className="inline-block border border-gold/40 px-8 py-3 font-display text-sm tracking-[0.25em] text-gold/70 transition-colors hover:border-gold hover:text-gold"
        >
          Begin the Journey
        </Link>

        <div className="mt-10 h-px bg-gold/[0.12]" />

      </div>
    </section>
  );
}
