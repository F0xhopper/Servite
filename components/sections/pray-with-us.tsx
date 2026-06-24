import Link from "next/link";

export function PrayWithUsSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-10 h-px bg-gold/[0.15]" />

        <p className="mb-7 font-display text-[10px] uppercase tracking-[0.55em] text-gold/45">
          The Servite Rosary
        </p>

        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl">
          Pray with Us
        </h2>

        <div className="mx-auto my-8 h-px w-10 bg-gold/20" />

        <p className="mb-6 text-[15px] leading-[1.9] text-white/70">
          The Rosary of the Seven Sorrows — fifteen Hail Marys with meditations on
          Mary's compassion — is the heartbeat of Servite daily prayer. It takes
          around twenty minutes and can be prayed alone or with your fraternity.
        </p>

        <p className="mb-10 text-[15px] leading-[1.9] text-white/70">
          Every first Friday evening, members gather online to pray it in common.
          You are welcome long before you have made any commitment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/rosary"
            className="border border-gold/40 px-6 py-2.5 text-sm tracking-wider text-gold/70 transition-colors hover:border-gold hover:text-gold"
          >
            Learn the Rosary
          </Link>
          <Link
            href="/events/servite-rosary-evening"
            className="text-sm tracking-wider text-white/40 transition-colors hover:text-white/70"
          >
            Join us online →
          </Link>
        </div>

        <div className="mt-10 h-px bg-gold/[0.15]" />
      </div>
    </section>
  );
}
