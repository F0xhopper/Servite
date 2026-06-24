import Link from "next/link";

export function PrayWithUsSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

      {/* Header */}
      <div className="mb-12 lg:mb-14">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Pray with Us
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-6 text-base italic leading-relaxed text-gold/70">
          The Rosary of the Seven Sorrows
        </p>
      </div>

      {/* Body */}
      <div className="max-w-xl space-y-6">
        <p className="text-[15px] leading-[1.9] text-white/80">
          Fifteen Hail Marys with meditations on Mary's compassion — the heartbeat
          of Servite daily prayer. It takes around twenty minutes and can be prayed
          alone or with your fraternity.
        </p>
        <p className="text-[15px] leading-[1.9] text-white/80">
          Every first Friday evening, members gather online to pray it in common.
          You are welcome long before you have made any commitment.
        </p>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center gap-5">
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

    </section>
  );
}
