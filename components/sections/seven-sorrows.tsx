import Image from "next/image";
import Link from "next/link";

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function SevenSorrowsSection() {
  return (
    <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
      <Image
        src="/images/seven-sorrows.jpg"
        alt="The Seven Sorrows of Mary"
        fill
        className="object-cover brightness-[0.28] saturate-[0.25]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/55" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-7 font-display text-[10px] uppercase tracking-[0.55em] text-gold/50">
          The Heart of Servite Prayer
        </p>
        <h2 className="font-display text-5xl font-normal tracking-wide text-white sm:text-6xl lg:text-7xl">
          The Seven Sorrows
        </h2>
        <div className="my-8 h-px w-10 bg-gold/25" />
        <p className="max-w-md text-[15px] leading-[1.9] text-white/60 italic">
          Meditation on these mysteries is not pious sentiment — it is a school of
          compassion, teaching us to stand where Mary stood: beside the suffering,
          without turning away.
        </p>

        <div className="mt-10 flex items-center gap-6 sm:gap-8">
          {numerals.map((n) => (
            <span key={n} className="font-display text-[11px] tracking-[0.2em] text-gold/35">
              {n}
            </span>
          ))}
        </div>

        <Link
          href="/seven-sorrows"
          className="mt-10 text-[11px] uppercase tracking-[0.28em] text-gold/55 transition-colors hover:text-gold"
        >
          Meditate on the Seven Sorrows →
        </Link>
      </div>
    </section>
  );
}
