import Image from "next/image";
import Link from "next/link";

import {
  formatFeastDay,
  formatFeastMonth,
  getUpcomingFeastDays,
} from "@/lib/feast-days";

export function FeastDaysPreviewSection() {
  // The principal celebrations only; the full calendar is on its own page.
  const upcoming = getUpcomingFeastDays(3, { majorOnly: true });

  return (
    <section
      id="feast-days"
      className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"
    >

      {/* Header */}
      <div className="mb-14 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Feast Days
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          The next days the Order keeps: the Virgin of Sorrows and the saints of
          the Servite family.
        </p>
      </div>

      {/* Next three principal feasts */}
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
        {upcoming.map(({ feast, date }) => (
          <div key={feast.id} className="flex flex-col">
            {feast.image && (
              <div className="relative mb-7 aspect-[3/4] overflow-hidden">
                <Image
                  src={feast.image}
                  alt={feast.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={`object-cover brightness-[0.72] saturate-[0.5] ${
                    feast.objectPosition ?? "object-center"
                  }`}
                />
              </div>
            )}
            <p className="font-display text-5xl font-light leading-none text-white/80">
              {formatFeastDay(date)}
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold/60">
              {formatFeastMonth(date)} {date.getUTCFullYear()}
            </p>
            <h3 className="mt-5 font-display text-xl font-normal leading-snug tracking-wide text-white">
              {feast.name}
            </h3>
            {feast.note && (
              <p className="mt-4 text-[14px] leading-[1.85] text-white/70">
                {feast.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Section link */}
      <div className="mt-12 flex justify-end">
        <Link
          href="/feast-days"
          className="inline-block py-3 -my-3 text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
        >
          All Feast Days →
        </Link>
      </div>

    </section>
  );
}
