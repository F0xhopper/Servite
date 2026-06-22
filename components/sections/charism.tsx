import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Marian Inspiration",
    tagline: "Mary, model of the servant",
    body: "The constant wellspring of Secular Servite life is Mary — venerated as Virgin at the Annunciation, Mother at the Nativity, intercessor at Cana, sharer of our suffering at the Cross, and Bride of the Spirit at Pentecost. Above all she is honoured as the Virgin of Sorrows: her compassionate presence in Christ's Passion makes her the perfect model of discipleship, simplicity, and total surrender to God. She is not a distant icon but a living presence — the measure against which every Servant of Mary asks how deeply they have given themselves to God.",
    image: "/images/immaculate_conception.jpg",
    alt: "The Immaculate Conception",
    objectPosition: "object-top",
    reverse: false,
  },
  {
    title: "Fraternal Life",
    tagline: "One mind, one heart",
    body: "Imitating the first community of the apostles, Secular Servites are called to live with one mind and one heart. The Seven Holy Founders were bound together in the Lord's name — and that bond is the Order's defining mark. This call to unity is not merely social but mystical: a participation in the communion of love that is the Church itself. In a world broken by hatred and division, Servants of Mary are sent to be visible signs that another way of belonging is possible.",
    image: "/images/pentacost.jpg",
    alt: "Pentecost",
    objectPosition: "object-center",
    reverse: true,
  },
  {
    title: "Charitable Service",
    tagline: "Compassion made flesh",
    body: "Mary's vigil at the Cross was not passive — it was an act of total, costly love. Secular Servites inherit that posture: they are a people called to remain. Where others move on, they stay. Where suffering is hidden, they look. The Order asks not for grand gestures but for a consistent, incarnate compassion — rooted in the conviction that every wounded person is a place where Christ is still being crucified, and where Mary still stands.",
    image: "/images/Rogier_van_der_Weyden_Crucifixion.jpg",
    alt: "The Crucifixion — Rogier van der Weyden",
    objectPosition: "object-center",
    reverse: false,
  },
];

export function CharismSection() {
  return (
    <section className="bg-black">
      {/* Section header */}
      <div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Our Charism
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-6 text-lg italic tracking-wider text-gold/70">
          Standing with Mary at the Foot of the Cross
        </p>
      </div>

      {/* Pillar rows */}
      <div className="divide-y divide-white/[0.05]">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="grid min-h-[480px] grid-cols-1 lg:grid-cols-2 lg:min-h-[520px]"
          >
            {/* Image column */}
            <div
              className={[
                "relative h-64 overflow-hidden sm:h-80 lg:h-auto",
                pillar.reverse ? "lg:order-last" : "lg:order-first",
                "",
              ].join(" ")}
            >
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover brightness-[0.75] saturate-[0.55] ${pillar.objectPosition}`}
              />
              {/* Gradient fade toward text side */}
              <div
                className={[
                  "absolute inset-0",
                  pillar.reverse
                    ? "bg-gradient-to-l from-transparent via-black/10 to-black/55"
                    : "bg-gradient-to-r from-transparent via-black/10 to-black/55",
                ].join(" ")}
              />
            </div>

            {/* Text column */}
            <div
              className={[
                "flex items-center bg-black px-6 py-14 sm:px-10 lg:py-20",
                pillar.reverse
                  ? "lg:order-first lg:pl-16 lg:pr-14"
                  : "lg:order-last lg:pl-14 lg:pr-16",
              ].join(" ")}
            >
              <div className="max-w-[420px]">
                {/* Title */}
                <h3 className="mb-5 font-display text-3xl font-normal leading-none text-white sm:text-4xl">
                  {pillar.title}
                </h3>

                {/* Rule */}
                <div className="mb-5 h-px w-8 bg-gold/30" />

                {/* Tagline */}
                <p className="mb-5 text-base italic leading-relaxed text-gold/70">
                  {pillar.tagline}
                </p>

                {/* Body */}
                <p className="text-[15px] leading-[1.9] text-white/80">
                  {pillar.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-end px-6 py-10 sm:px-10 lg:px-16">
        <Link
          href="/about"
          className="text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
        >
          About the Order →
        </Link>
      </div>
    </section>
  );
}
