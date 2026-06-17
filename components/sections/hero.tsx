import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative -mt-24 flex flex-col overflow-hidden lg:h-dvh lg:flex-row">
      {/* Text panel */}
      <div className="flex w-full flex-col justify-center bg-black px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:w-[48%] lg:px-16 lg:pb-0 lg:pt-32">
        <div className="max-w-sm">
          <h1 className="mb-4 text-5xl font-light leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
            Servants
            <br />
            of Mary
          </h1>
          <div className="mb-8 h-px w-12 bg-white/20" />
          <p className="mb-6 text-lg italic tracking-wider text-gold/70">
            Standing with Mary at the Foot of the Cross
          </p>
          <p className="mb-10 text-[15px] leading-[1.9] text-white/60">
            Heirs to an eight-century vigil begun by the Seven Holy Founders, the Secular Order of the Servants of Mary invites lay Catholics to live the ancient Servite charism of prayer, fraternity, and compassionate service in the heart of daily life.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/inquire"
              className="border border-gold/40 px-6 py-2.5 text-sm tracking-wider text-gold/70 transition-colors hover:border-gold hover:text-gold"
            >
              Begin the Journey
            </Link>
            <Link
              href="/our-story"
              className="text-sm tracking-wider text-white/40 transition-colors hover:text-white/70"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Image panel */}
      <div className="relative h-[420px] w-full sm:h-[500px] md:h-[560px] lg:h-full lg:flex-1">
        <Image
          src="/images/mater-dolorosa.jpg"
          alt="Mater Dolorosa, Our Lady of Sorrows"
          fill
          className="object-cover object-center brightness-[0.75] saturate-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
      </div>
    </section>
  );
}
