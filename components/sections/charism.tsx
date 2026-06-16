import Image from "next/image";

const pillars = [
  {
    roman: "I",
    latin: "Oratio",
    title: "Prayer",
    tagline: "The contemplative root",
    body: "Prayer is not preparation for our mission — it is our mission. We enter Mary's silence at the foot of the Cross and let her sorrow school our hearts in what love truly costs. In stillness, we become servants.",
    image: "/images/vergine-addolarata.jpg",
    alt: "Vergine Addolorata — Our Lady of Sorrows",
    reverse: false,
  },
  {
    roman: "II",
    latin: "Fraternitas",
    title: "Community",
    tagline: "Fraternal charity",
    body: "The Seven Holy Founders fled the world not to be alone, but to be together in God. We inherit their bond — a brotherhood and sisterhood of shared pilgrimage, mutual accountability, and love that endures through the Cross.",
    image: "/images/founders_vision.jpg",
    alt: "Vision of the Seven Holy Founders",
    reverse: true,
  },
  {
    roman: "III",
    latin: "Ministerium",
    title: "Service",
    tagline: "Love made visible",
    body: "What prayer receives and community forges is poured out in service. We carry Mary's compassion into the places of suffering she would seek first — the poor, the grieving, the forgotten at the margins of the world.",
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
        <h2 className="mb-5 font-display text-5xl font-normal tracking-wide text-white sm:text-6xl lg:text-7xl">
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
                {/* Ordinal + Latin */}
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-display text-[11px] tracking-[0.5em] text-gold/45 uppercase">
                    {pillar.roman}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20">
                    {pillar.latin}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-5 font-display text-5xl font-normal leading-none text-white lg:text-[3.25rem]">
                  {pillar.title}
                </h3>

                {/* Rule */}
                <div className="mb-5 h-px w-8 bg-gold/30" />

                {/* Tagline */}
                <p className="mb-5 text-base italic leading-relaxed text-gold/55">
                  {pillar.tagline}
                </p>

                {/* Body */}
                <p className="text-[15px] leading-[1.95] text-white/50">
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
