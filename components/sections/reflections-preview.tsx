import Image from "next/image";
import Link from "next/link";

interface Reflection {
  date: string;
  author: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
}

const reflections: Reflection[] = [
  {
    date: "June 2026",
    author: "Br. Thomas M.",
    title: "Abiding at the Foot of the Cross",
    excerpt:
      "In the silence beneath the cross, Mary did not turn away. She stayed — and in her staying, she teaches us that fidelity to suffering is itself a form of prayer.",
    href: "/reflections/abiding-at-the-foot-of-the-cross",
    image: "/images/mary_foot_of_cross.jpg",
  },
  {
    date: "May 2026",
    author: "Sr. Catherine O.",
    title: "The Seven Sorrows as a Path of Union",
    excerpt:
      "Each sorrow is not merely a wound to be pitied but a door — an invitation to enter more deeply into the mystery of compassion that unites the Mother to her Son.",
    href: "/reflections/seven-sorrows-path-of-union",
    image: "/images/seven-sorrows.jpg",
  },
  {
    date: "April 2026",
    author: "Fr. Jerome A.",
    title: "On Poverty of Spirit in Servite Life",
    excerpt:
      "The founders of our Order left everything — not as a heroic gesture, but because they had glimpsed something so luminous that everything else became shadow.",
    href: "/reflections/poverty-of-spirit-servite-life",
    image: "/images/founders_vision.jpg",
  },
];

export function ReflectionsPreviewSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

      {/* Header */}
      <div className="mb-14 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Reflections
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          Writings from within the Order — meditations on Mary, the sorrows, and
          the inner life of Servite prayer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-px border border-white/[0.06] sm:grid-cols-3">
        {reflections.map((reflection) => (
          <Link
            key={reflection.href}
            href={reflection.href}
            className="group flex flex-col bg-black transition-colors hover:bg-white/[0.02]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={reflection.image}
                alt={reflection.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover brightness-[0.45] saturate-[0.35] transition-[filter] duration-500 group-hover:brightness-[0.55]"
              />
              {/* Author + date badge over image */}
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-display text-[10px] tracking-[0.25em] text-gold/70 uppercase">
                  {reflection.author}
                </p>
                <p className="mt-0.5 font-display text-[10px] tracking-[0.2em] text-white/50">
                  {reflection.date}
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col px-8 py-8">
              {/* Title */}
              <h3 className="mb-5 font-display text-xl font-normal leading-snug tracking-wide text-white">
                {reflection.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[14px] leading-[1.85] text-white/70 italic">
                &ldquo;{reflection.excerpt}&rdquo;
              </p>

              {/* Link affordance */}
              <p className="mt-auto pt-6 text-[11px] tracking-[0.25em] text-gold/50 uppercase transition-colors group-hover:text-gold">
                Read more →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Section link */}
      <div className="mt-12 flex justify-end">
        <Link
          href="/reflections"
          className="text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
        >
          All Reflections →
        </Link>
      </div>

    </section>
  );
}
