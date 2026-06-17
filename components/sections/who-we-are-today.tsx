import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    label: "Called in the World",
    body: "We are lay men and women consecrated not in the cloister, but in the midst of ordinary life — in families, in workplaces, in the communities we call home. Our vocation is to bring the ancient Servite spirit into the everyday.",
  },
  {
    label: "Gathered in Fraternity",
    body: "Across six continents, Secular Servites gather in local fraternities — communities of prayer, study, and mutual support. Bound by the same Rule and the same love of Mary, we share one mind and one heart.",
  },
  {
    label: "Standing at the Cross",
    body: "Above all, we seek to stand with Mary at the foot of the Cross — to accompany her in sorrow and to carry her compassion into a wounded world. In this vigil of love, we find our deepest identity as Servants of Mary.",
  },
];

export function WhoWeAreTodaySection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

      {/* Header */}
      <div className="mb-14 lg:mb-16">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Who We Are Today
        </h2>
        <div className="mt-6 h-px w-10 bg-gold/20" />
      </div>

      {/* Split: text + image */}
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[5fr_6fr] lg:gap-x-16 lg:gap-y-0">

        {/* Left — three blocks */}
        <div className="space-y-10">
          {pillars.map((p) => (
            <div key={p.label}>
              <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-gold/70">
                {p.label}
              </h3>
              <p className="text-[15px] leading-[1.9] text-white/70">
                {p.body}
              </p>
            </div>
          ))}

          {/* Single section link */}
          <div className="flex justify-end">
            <Link
              href="/about"
              className="text-[11px] tracking-[0.25em] text-gold/40 uppercase transition-colors hover:text-gold/70"
            >
              About the Order →
            </Link>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/mary_foot_of_cross_2.jpeg"
            alt="Mary at the Foot of the Cross"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center brightness-[0.7] saturate-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

      </div>
    </section>
  );
}
