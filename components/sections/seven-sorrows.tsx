import Image from "next/image";

const sorrows = [
  {
    numeral: "I",
    title: "The Prophecy of Simeon",
    body: "The aged Simeon foretells that a sword will pierce Mary's soul as a sign of contradiction for many in Israel.",
    ref: "Luke 2:34–35",
  },
  {
    numeral: "II",
    title: "The Flight into Egypt",
    body: "Warned by an angel, the Holy Family flees Herod's massacre into exile — Mary holding the Child in the darkness of the journey.",
    ref: "Matthew 2:13–14",
  },
  {
    numeral: "III",
    title: "The Loss of Jesus in the Temple",
    body: "After three days of anguished searching, Mary and Joseph find the twelve-year-old Jesus among the teachers in the Temple.",
    ref: "Luke 2:43–45",
  },
  {
    numeral: "IV",
    title: "Mary Meets Jesus on the Way to Calvary",
    body: "On the road to Golgotha, mother and Son meet face to face — each bearing a cross the other cannot carry.",
    ref: "Luke 23:27–29",
  },
  {
    numeral: "V",
    title: "The Crucifixion and Death of Jesus",
    body: "Mary stands at the foot of the Cross as her Son is lifted up and breathes his last — her vigil of compassion the Order's defining image.",
    ref: "John 19:25–30",
  },
  {
    numeral: "VI",
    title: "The Descent from the Cross",
    body: "The lifeless body of Jesus is taken down and laid in his mother's arms — the Pietà, the fullness of a mother's grief.",
    ref: "Matthew 27:57–59",
  },
  {
    numeral: "VII",
    title: "The Burial of Jesus",
    body: "Mary accompanies her Son to the tomb, watching as the stone is sealed — remaining in sorrow while the world waits in silence.",
    ref: "John 19:40–42",
  },
];

export function SevenSorrowsSection() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

        {/* Header */}
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
            The Seven Sorrows
          </h2>
          <div className="mx-auto mt-5 h-px w-10 bg-gold/20" />
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
            The Servite charism is inseparable from Mary's seven sorrows — moments in her life that trace the full arc of compassionate suffering alongside her Son. Meditation on these mysteries is the heartbeat of Servite prayer.
          </p>
        </div>

        {/* Three-column: left sorrows · image · right sorrows */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_240px_1fr] lg:gap-6 xl:grid-cols-[1fr_280px_1fr] xl:gap-10">

          {/* Left — sorrows I, II, III (text right-aligned, numeral on the inner edge) */}
          <ol className="flex flex-col justify-center divide-y divide-white/[0.06]">
            {sorrows.slice(0, 3).map((sorrow) => (
              <li key={sorrow.numeral} className="flex items-start gap-5 py-5">
                <span className="w-6 shrink-0 pt-0.5 font-display text-xs tracking-widest text-gold/55">
                  {sorrow.numeral}
                </span>
                <div>
                  <h3 className="mb-1.5 font-display text-[15px] font-normal tracking-wide text-white/90">
                    {sorrow.title}
                  </h3>
                  <p className="mb-2 text-[14px] leading-[1.8] text-white/75">
                    {sorrow.body}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold/55">
                    {sorrow.ref}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Center — image */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/seven-sorrows.jpg"
                  alt="The Seven Sorrows of Mary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-cover brightness-[0.7] saturate-[0.45]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-white/25">
              Vergine Addolorata · Seven Swords of Sorrow
            </p>
          </div>

          {/* Right — sorrows IV, V, VI, VII (text left-aligned, numeral on the inner edge) */}
          <ol className="flex flex-col justify-center divide-y divide-white/[0.06]">
            {sorrows.slice(3).map((sorrow) => (
              <li key={sorrow.numeral} className="flex items-start gap-5 py-5">
                <span className="w-6 shrink-0 pt-0.5 font-display text-xs tracking-widest text-gold/55">
                  {sorrow.numeral}
                </span>
                <div>
                  <h3 className="mb-1.5 font-display text-[15px] font-normal tracking-wide text-white/90">
                    {sorrow.title}
                  </h3>
                  <p className="mb-2 text-[14px] leading-[1.8] text-white/75">
                    {sorrow.body}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold/55">
                    {sorrow.ref}
                  </p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}
