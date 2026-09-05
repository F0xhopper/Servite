import Image from "next/image";
import Link from "next/link";

// Two short sentences each: enough to picture the life, little enough that the
// rest is worth a conversation.
const practices = [
  {
    label: "Daily Prayer",
    body: "A morning offering, and where possible Morning Prayer from the Liturgy of the Hours. At some point in the day, the Rosary of the Seven Sorrows; at its close, a brief evening examen.",
    image: "/images/prayer-rosary-hands.jpg",
    alt: "Praying hands holding a rosary",
    objectPosition: "object-center",
  },
  {
    label: "Monthly Fraternity",
    body: "Once a month the local fraternity gathers for about two hours: opening prayer, a session of formation, open sharing, and a closing Hail Mary. Fraternities stay small by design.",
    image: "/images/fraternity-misericordia.jpg",
    alt: "Members of a confraternity at prayer beneath the Virgin's mantle",
    objectPosition: "object-center",
  },
  {
    label: "The Rule of Life",
    body: "The OSSM Rule of Life, confirmed by the Holy See in 1995, sets out what every member commits to. A promise is made after a period of formation, then freely renewed each year.",
    image: "/images/rule-of-life-book.jpg",
    alt: "Hands holding an open illuminated book",
    objectPosition: "object-center",
  },
  {
    label: "A Work of Service",
    body: "Each member takes up one concrete act of mercy in their own community: the sick, the grieving, the stranger. What matters is less the work chosen than the staying with it.",
    image: "/images/washing-of-the-feet.jpg",
    alt: "Christ washing the disciples' feet",
    objectPosition: "object-center",
  },
];

export function LifeInTheOrderSection() {
  return (
    <section
      id="life-in-the-order"
      className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >

      {/* Header */}
      <div className="mb-16 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Life in the Order
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
      </div>

      {/* Practices */}
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-8">
        {practices.map((p) => (
          <div key={p.label} className="flex flex-col">
            <div className="relative mb-7 aspect-[3/4] overflow-hidden">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover brightness-[0.72] saturate-[0.5] ${p.objectPosition}`}
              />
            </div>
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/65">
              {p.label}
            </h3>
            <p className="text-[14px] leading-[1.85] text-white/75">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
        <p className="max-w-md text-[15px] leading-[1.9] text-white/65">
          Want to know what this looks like day to day? Get in touch.
        </p>
        <Link
          href="/contact"
          className="self-start border border-gold/50 px-8 py-3.5 text-sm tracking-[0.3em] text-gold/80 transition-colors hover:border-gold hover:text-gold"
        >
          Contact Us
        </Link>
      </div>

    </section>
  );
}
