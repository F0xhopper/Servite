import Image from "next/image";

const pillars = [
  {
    roman: "I",
    title: "Marian Inspiration",
    tagline: "Mary, model of the servant",
    body: "The constant wellspring of Secular Servite life is Mary — venerated as Virgin at the Annunciation, Mother at the Nativity, intercessor at Cana, sharer of our suffering at the Cross, and Bride of the Spirit at Pentecost. Above all she is honoured as the Virgin of Sorrows: her compassionate presence in Christ's Passion makes her the perfect model of discipleship, simplicity, and total surrender to God. Daily acts of reverence — the Servite Rosary of the Seven Sorrows, the Vigil of Our Lady — keep this inspiration alive.",
    image: "/images/vergine-addolarata.jpg",
    alt: "Vergine Addolorata — Our Lady of Sorrows",
    reverse: false,
  },
  {
    roman: "II",
    title: "Fraternal Life",
    tagline: "One mind, one heart",
    body: "Imitating the first community of the apostles, Secular Servites are called to live with one mind and one heart. The Seven Holy Founders were bound together in the Lord's name — and that bond is the Order's defining mark. Gathered in local fraternities, members share an inner search for God, docility to the Holy Spirit, and mutual support in prayer, study, and fellowship. In a world broken by hatred and division, Servants of Mary are sent to be witnesses of unity and reconciliation.",
    image: "/images/founders_vision.jpg",
    alt: "Vision of the Seven Holy Founders",
    reverse: true,
  },
  {
    roman: "III",
    title: "Charitable Service",
    tagline: "Compassion made flesh",
    body: "As Mary stood at the foot of the Cross, Secular Servites are called to stand beside the countless crosses where Christ is still being crucified — among the poor, the abandoned, the imprisoned, refugees, and victims of injustice. This is not merely social action but redemptive cooperation: taking up the cross each day, they become bearers of the freedom that frees creation from suffering. Following the great figures of the Order, they bring comfort wherever human dignity is wounded.",
    image: "/images/Rogier_van_der_Weyden_Crucifixion.jpg",
    alt: "The Crucifixion — Rogier van der Weyden",
    reverse: false,
  },
];

export function CharismSection() {
  return (
    <section className="bg-black">
      {/* Section header */}
      <div className="px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <p className="mb-8 font-display text-sm tracking-[0.5em] text-gold/40">✠</p>
        <h2 className="mb-5 font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Our Charism
        </h2>
        <div className="mx-auto h-px w-10 bg-gold/20" />
      </div>

      {/* Pillar rows */}
      <div className="divide-y divide-white/[0.05]">
        {pillars.map((pillar) => (
          <div
            key={pillar.roman}
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
                className="object-cover brightness-[0.75] saturate-[0.55]"
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
                <p className="mb-5 text-base italic leading-relaxed text-gold/55">
                  {pillar.tagline}
                </p>

                {/* Body */}
                <p className="text-[15px] leading-[1.9] text-white/65">
                  {pillar.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
