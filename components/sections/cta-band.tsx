import Image from "next/image";
import Link from "next/link";

export function CtaBandSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">

      {/* Background image */}
      <Image
        src="/images/mary_foot_of_cross.jpg"
        alt=""
        fill
        className="object-cover brightness-[0.18] saturate-[0.3]"
        aria-hidden="true"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />

      <div className="relative mx-auto max-w-2xl text-center">

        <div className="mb-10 h-px bg-gold/[0.18]" />

        <p className="mb-8 font-display text-sm tracking-[0.5em] text-gold/40">✠</p>

        <p className="mb-10 font-display text-2xl font-normal italic leading-relaxed tracking-wide text-white/80 sm:text-3xl lg:text-[2.5rem]">
          "If your heart is drawn to Our Lady of Sorrows, walk with us."
        </p>

        <Link
          href="/inquire"
          className="inline-block border border-gold/40 px-8 py-3 font-display text-sm tracking-[0.25em] text-gold/70 transition-colors hover:border-gold hover:text-gold"
        >
          Begin the Journey
        </Link>

        <div className="mt-10 h-px bg-gold/[0.18]" />

      </div>
    </section>
  );
}
