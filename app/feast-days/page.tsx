import type { Metadata } from "next";
import Link from "next/link";

import {
  formatFeastDay,
  formatFeastMonth,
  getFeastDaysForYear,
  getUpcomingFeastDays,
  type UpcomingFeast,
} from "@/lib/feast-days";

export const metadata: Metadata = {
  title: "Feast Days",
  description:
    "The feast days of the Servite calendar: Our Lady of Sorrows, the Seven Holy Founders, and the saints of the Order.",
};

// Keep the "next feast" marker fresh without rebuilding the site.
export const revalidate = 3600;

function groupByMonth(feasts: UpcomingFeast[]) {
  const months: { month: string; feasts: UpcomingFeast[] }[] = [];
  for (const entry of feasts) {
    const month = formatFeastMonth(entry.date);
    const last = months[months.length - 1];
    if (last && last.month === month) last.feasts.push(entry);
    else months.push({ month, feasts: [entry] });
  }
  return months;
}

export default function FeastDaysPage() {
  const year = new Date().getUTCFullYear();
  const months = groupByMonth(getFeastDaysForYear(year));
  const next = getUpcomingFeastDays(1)[0];

  return (
    <section className="bg-black px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-36 lg:px-16 lg:pb-40">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <h1 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
            Feast Days
          </h1>
          <div className="mt-5 h-px w-10 bg-gold/20" />
          <p className="mt-8 max-w-lg text-[15px] leading-[1.9] text-white/75">
            The Servite calendar: the days on which the Order keeps the Virgin of
            Sorrows, the saints and blesseds of its own family, and the great
            feasts of the Church. Dates shown for {year}.
          </p>
          <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-white/40">
            Days marked <span className="text-gold/60">Servite</span> are proper
            to the Order. Provinces and fraternities keep local observances too.
          </p>
        </div>

        {/* Calendar */}
        <div className="flex flex-col gap-12">
          {months.map(({ month, feasts }) => (
            <div key={month}>
              <h2 className="mb-6 font-display text-[11px] uppercase tracking-[0.45em] text-white/30">
                {month}
              </h2>
              <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
                {feasts.map(({ feast, date }) => {
                  const isNext = next?.feast.id === feast.id;
                  return (
                    <div
                      key={feast.id}
                      className={`flex gap-5 py-6 sm:gap-8 ${
                        isNext ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      {/* Date */}
                      <div className="w-10 flex-none pt-0.5 sm:w-14">
                        <p className="font-display text-2xl font-light leading-none text-white/70 sm:text-3xl">
                          {formatFeastDay(date)}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <h3 className="font-display text-lg font-normal leading-snug tracking-wide text-white sm:text-xl">
                            {feast.name}
                          </h3>
                          {feast.kind === "order" && (
                            <span className="text-[10px] uppercase tracking-[0.25em] text-gold/45">
                              Servite
                            </span>
                          )}
                          {isNext && (
                            <span className="border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.25em] text-gold/70">
                              Next
                            </span>
                          )}
                        </div>
                        {feast.movable && (
                          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
                            Movable · {feast.movable.rule}
                          </p>
                        )}
                        {feast.note && (
                          <p className="mt-3 text-[14px] leading-[1.8] text-white/65">
                            {feast.note}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.07] pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[15px] leading-[1.9] text-white/65">
            Would you like to keep these days with us? You are welcome to join
            the fraternity for any of them.
          </p>
          <Link
            href="/contact"
            className="self-start border border-gold/50 px-8 py-3.5 text-sm tracking-[0.3em] text-gold/80 transition-colors hover:border-gold hover:text-gold"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
