import Image from "next/image";

const saints = [
  {
    name: "The Seven Holy Founders",
    years: "fl. 1233",
    feast: "17 February",
    title: "Founders of the Servite Order",
    body: "Seven wealthy Florentine laymen who withdrew from the world together to serve Our Lady, founding the Order in 1233. Canonised as one — the only collective canonisation in the Church.",
    image: "/images/founders_vision.jpg",
    objectPosition: "object-center",
  },
  {
    name: "St. Philip Benizi",
    years: "1233 – 1285",
    feast: "22 August",
    title: "Reformer & Fifth Prior General",
    body: "Called the 'second founder,' Philip stabilised and expanded the Order through a critical period of growth, and was so venerated that he fled to avoid election as pope.",
    image: "/images/mater-dolorosa.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Peregrine Laziosi",
    years: "1265 – 1345",
    feast: "4 May",
    title: "Patron of the Sick & Suffering",
    body: "Miraculously healed of cancer on the eve of amputation, Peregrine is the Order's great intercessor for the ill — bearing in his own body the compassion Mary showed at the Cross.",
    image: "/images/vintage_catholic.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Juliana Falconieri",
    years: "1270 – 1341",
    feast: "19 June",
    title: "Foundress of the Mantellate",
    body: "Niece of one of the Seven Founders, Juliana established the Servite Sisters and gave herself entirely to penance, Eucharistic love, and contemplative prayer.",
    image: "/images/vergine-addolarata.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Anthony Mary Pucci",
    years: "1819 – 1892",
    feast: "12 January",
    title: "Pastor of the Poor",
    body: "A parish priest who spent forty-four years in tireless service to the sick and destitute of Viareggio — the modern face of Servite pastoral charity made flesh.",
    image: "/images/our_lady_of_sorrows.jpg",
    objectPosition: "object-center",
  },
];

export function PatronSaintsSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

      {/* ── Section header ── */}
      <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
        <p className="mb-5 font-display text-sm tracking-[0.5em] text-gold/40">✠ Our Saints</p>
        <p className="mb-4 font-display text-[4rem] font-light leading-none tracking-tight text-white/10 sm:text-[5rem]">
          VII
        </p>
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Patron Saints
        </h2>
        <div className="mt-6 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-white/40">
          The canonised sons and daughters of the Servite family — each a living
          icon of the Order's charism of prayer, fraternity, and compassionate
          service.
        </p>
      </div>

      {/* ── Portrait grid ── */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-16 sm:grid-cols-3 sm:gap-x-0 lg:grid-cols-5">
        {saints.map((saint, i) => (
          <div key={saint.name} className="relative flex flex-col items-center px-4 sm:px-5 lg:px-6">

            {/* Thin vertical divider between columns (sm+) */}
            {i > 0 && (
              <div className="absolute -left-px top-0 hidden h-full w-px bg-gold/[0.07] sm:block" />
            )}

            {/* Portrait medallion */}
            <div
              className="relative mb-6 h-36 w-36 overflow-hidden rounded-full ring-1 ring-gold/25 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
            >
              <Image
                src={saint.image}
                alt={saint.name}
                fill
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 128px, 160px"
                className={[
                  "object-cover brightness-[0.55] saturate-[0.3]",
                  saint.objectPosition,
                ].join(" ")}
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_28px_rgba(0,0,0,0.6)]" />
            </div>

            {/* Cross marker */}
            <p className="mb-3 font-display text-xs tracking-[0.4em] text-gold/30">✠</p>

            {/* Name */}
            <h3 className="mb-1 text-center font-display text-[15px] font-normal leading-snug tracking-wide text-white sm:text-sm lg:text-[15px]">
              {saint.name}
            </h3>

            {/* Years */}
            <p className="mb-3 font-display text-[9px] uppercase tracking-[0.4em] text-white/20">
              {saint.years}
            </p>

            {/* Thin rule */}
            <div className="mb-3 h-px w-6 bg-gold/20" />

            {/* Feast */}
            <p className="mb-1 font-display text-[9px] uppercase tracking-[0.35em] text-gold/35">
              Feast — {saint.feast}
            </p>

            {/* Title */}
            <p className="mb-4 text-center text-[12px] italic leading-snug text-gold/50">
              {saint.title}
            </p>

            {/* Body */}
            <p className="text-center text-[12px] leading-[1.8] text-white/35">
              {saint.body}
            </p>
          </div>
        ))}
      </div>

      {/* ── Bottom flourish ── */}
      <div className="mt-20 flex flex-col items-center gap-3 lg:mt-24">
        <p className="font-display text-[10px] uppercase tracking-[0.55em] text-white/15">
          Sub tuum praesidium confugimus
        </p>
        <p className="font-display text-sm tracking-[0.3em] text-gold/20">✠</p>
      </div>

    </section>
  );
}
