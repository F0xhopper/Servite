import Link from "next/link";

export function CtaBandSection() {
  return (
    <section className="bg-black px-6 py-32 sm:px-10 sm:py-40 lg:px-16 lg:py-52">
      <div className="mx-auto max-w-2xl text-center">

        <p className="font-display text-3xl font-normal italic leading-relaxed tracking-wide text-white sm:text-4xl lg:text-5xl lg:leading-relaxed">
          "If your heart is drawn to Our Lady of Sorrows, walk with us."
        </p>

        <div className="mx-auto my-12 h-px w-8 bg-gold/20" />

        <Link
          href="/inquire"
          className="border border-gold/50 px-10 py-4 text-sm tracking-[0.3em] text-gold/80 transition-colors hover:border-gold hover:text-gold"
        >
          Begin an Inquiry
        </Link>

      </div>
    </section>
  );
}
