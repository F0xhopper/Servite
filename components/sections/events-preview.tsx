import Link from "next/link";

interface Event {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  body: string;
  href: string;
}

const events: Event[] = [
  {
    day: "15",
    month: "September",
    year: "2026",
    title: "Feast of Our Lady of Sorrows",
    location: "Chapel of St. Philip Benizi · Chicago",
    body: "The Order's principal feast day — Mass, solemn procession, and evening prayer in honour of the Virgin of Sorrows. All are welcome.",
    href: "/events/feast-of-our-lady-of-sorrows",
  },
  {
    day: "07",
    month: "October",
    year: "2026",
    title: "Servite Rosary Evening",
    location: "Online · Zoom",
    body: "A guided recitation of the Servite Rosary of the Seven Sorrows, with reflections drawn from the writings of St. Philip Benizi.",
    href: "/events/servite-rosary-evening",
  },
  {
    day: "29",
    month: "November",
    year: "2026",
    title: "Advent Retreat Day",
    location: "Mater Dolorosa Retreat Centre · Los Angeles",
    body: "A day of silence, prayer, and formation — open to fraternity members and those discerning a call to Secular Servite life.",
    href: "/events/advent-retreat-day",
  },
];

export function EventsPreviewSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

      {/* Header */}
      <div className="mb-14 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Events
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          Gather with us in prayer, retreat, and celebration — in person and online,
          throughout the year.
        </p>
      </div>

      {/* Event list */}
      <div className="divide-y divide-white/[0.07]">
        {events.map((event) => (
          <Link
            key={event.href}
            href={event.href}
            className="group flex flex-col gap-6 py-10 transition-colors sm:flex-row sm:items-start sm:gap-10 lg:gap-16"
          >
            {/* Date */}
            <div className="flex-none sm:w-28 lg:w-36">
              <p className="font-display text-5xl font-light leading-none text-white/80 lg:text-6xl">
                {event.day}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold/60">
                {event.month}
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                {event.year}
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

            {/* Arrow — hidden on mobile since the whole row is a link */}
            <div className="hidden flex-none self-center sm:block">
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold/40 transition-colors group-hover:text-gold">
                Learn more →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Section link */}
      <div className="mt-6 flex justify-end">
        <Link
          href="/events"
          className="text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
        >
          All Events →
        </Link>
      </div>

    </section>
  );
}
