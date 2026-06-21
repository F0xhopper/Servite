import Image from "next/image";
import Link from "next/link";

interface Event {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  body: string;
  href: string;
  image: string;
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
    image: "/images/vergine-addolarata.jpg",
  },
  {
    day: "07",
    month: "October",
    year: "2026",
    title: "Servite Rosary Evening",
    location: "Online · Zoom",
    body: "A guided recitation of the Servite Rosary of the Seven Sorrows, with reflections drawn from the writings of St. Philip Benizi.",
    href: "/events/servite-rosary-evening",
    image: "/images/our_lady_of_sorrows.jpg",
  },
  {
    day: "29",
    month: "November",
    year: "2026",
    title: "Advent Retreat Day",
    location: "Mater Dolorosa Retreat Centre · Los Angeles",
    body: "A day of silence, prayer, and formation — open to fraternity members and those discerning a call to Secular Servite life.",
    href: "/events/advent-retreat-day",
    image: "/images/mary_foot_of_cross.jpg",
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

      {/* Cards */}
      <div className="grid grid-cols-1 gap-px border border-white/[0.06] sm:grid-cols-3">
        {events.map((event) => (
          <Link
            key={event.href}
            href={event.href}
            className="group flex flex-col bg-black transition-colors hover:bg-white/[0.02]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover brightness-[0.55] saturate-[0.4] transition-[filter] duration-500 group-hover:brightness-[0.65]"
              />
              {/* Date badge over image */}
              <div className="absolute bottom-0 left-0 p-5">
                <div className="flex items-end gap-2">
                  <span className="font-display text-4xl font-normal leading-none text-white/85">
                    {event.day}
                  </span>
                  <div className="mb-0.5">
                    <p className="font-display text-[10px] tracking-[0.25em] text-gold/70 uppercase">
                      {event.month}
                    </p>
                    <p className="font-display text-[10px] tracking-[0.25em] text-white/55">
                      {event.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col px-8 py-8">
              {/* Title */}
              <h3 className="mb-3 font-display text-xl font-normal leading-snug tracking-wide text-white">
                {event.title}
              </h3>

              {/* Location */}
              <p className="mb-5 text-[11px] tracking-[0.2em] text-gold/60 uppercase">
                {event.location}
              </p>

              {/* Body */}
              <p className="text-[14px] leading-[1.85] text-white/75">
                {event.body}
              </p>

              {/* Link affordance */}
              <p className="mt-auto pt-6 text-[11px] tracking-[0.25em] text-gold/50 uppercase transition-colors group-hover:text-gold">
                Learn more →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Single section link */}
      <div className="mt-12 flex justify-end">
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
