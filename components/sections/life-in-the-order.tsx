import Link from "next/link";

const practices = [
  {
    label: "Daily Prayer",
    body: "Each day begins with a Morning Offering and, where possible, Morning Prayer from the Liturgy of the Hours. At some point in the day, members pray the Rosary of the Seven Sorrows — fifteen Hail Marys with meditations on Mary's compassion. An evening examen closes the day: a brief, honest review of where God was present and where he was missed.",
  },
  {
    label: "Monthly Fraternity",
    body: "Once a month, members gather with their local fraternity — typically for two hours. A meeting follows a simple pattern: opening prayer, a formation session on the Rule or Servite spirituality, open sharing, and a closing Hail Mary. Fraternities are small by design, rarely more than fifteen people, so that genuine community is possible.",
  },
  {
    label: "The Rule of Life",
    body: "The OSSM Rule of Life, confirmed by the Holy See in 1995, sets out what every member commits to: daily prayer, monthly fraternity, ongoing formation, and a personal work of service. New members make an initial promise after a period of formation. That promise is renewed each year — not as a formality but as a conscious re-choosing of the life.",
  },
  {
    label: "A Work of Service",
    body: "Each member discerns one concrete act of mercy rooted in their own community — visiting the sick, accompanying refugees, supporting a food pantry, sitting with the dying. The specific work matters less than the consistency: showing up, staying present, and bringing Mary's compassion into a particular wound rather than a general good intention.",
  },
];

export function LifeInTheOrderSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">

      {/* Header */}
      <div className="mb-16 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Life in the Order
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
      </div>

      {/* Practices */}
      <div className="grid grid-cols-1 gap-0 divide-y divide-white/[0.07] sm:grid-cols-2 sm:divide-y-0 sm:gap-x-12 sm:gap-y-0">
        {practices.map((p, i) => (
          <div
            key={p.label}
            className={[
              "py-8 sm:py-0",
              i < 2 ? "sm:pb-12 sm:border-b sm:border-white/[0.07]" : "sm:pt-12",
              i % 2 === 1 ? "sm:pl-10 sm:border-l sm:border-white/[0.07]" : "",
            ].join(" ")}
          >
            <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/65">
              {p.label}
            </h3>
            <p className="text-[15px] leading-[1.9] text-white/80">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Link */}
      <div className="mt-16 flex justify-end">
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
