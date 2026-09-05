import Link from "next/link";

import { getUpcomingEvents } from "@/lib/events";
import { formatFeastDay, formatFeastMonth } from "@/lib/feast-days";

const yearFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  timeZone: "UTC",
});

export function EventsPreviewSection() {
  const upcoming = getUpcomingEvents(3);

  return (
    <section
      id="events"
      className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"
    >

      {/* Header */}
      <div className="mb-14 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Events
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          Gather with us in prayer, retreat, and celebration, in person and online,
          throughout the year.
        </p>
      </div>

      {upcoming.length > 0 ? (
        /* Event list */
        <div className="divide-y divide-white/[0.07]">
          {upcoming.map(({ event, date }) => (
            <div
              key={event.id}
              className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:gap-10 lg:gap-16"
            >
              {/* Date */}
              <div className="flex-none sm:w-28 lg:w-36">
                <p className="font-display text-5xl font-light leading-none text-white/80 lg:text-6xl">
                  {formatFeastDay(date)}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold/60">
                  {formatFeastMonth(date)}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                  {yearFormatter.format(date)}
                </p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-2 font-display text-xl font-normal leading-snug tracking-wide text-white sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-gold/55">
                  {event.location}
                </p>
                <p className="text-[14px] leading-[1.85] text-white/70">
                  {event.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Nothing scheduled. An invitation to ask, rather than an empty panel. */
        <div className="border-t border-white/[0.07] py-10">
          <p className="max-w-lg text-[15px] leading-[1.9] text-white/70">
            Nothing is scheduled at the moment. Write to us and we will let you
            know what is coming, and look out for you when you come.
          </p>
        </div>
      )}

      {/* Section link */}
      <div className="mt-6 flex justify-end">
        <Link
          href="/contact"
          className="inline-block py-3 -my-3 text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
        >
          Contact Us →
        </Link>
      </div>

    </section>
  );
}
