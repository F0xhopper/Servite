import Image from "next/image";

export function SwordPiercedSection() {
  return (
    <section className="bg-black px-6 pb-24 pt-0 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-xs sm:max-w-sm">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/images/vergine-addolarata.jpg"
            alt="Our Lady of Sorrows"
            fill
            sizes="(max-width: 640px) 320px, 384px"
            className="object-cover object-top"
          />
        </div>
        <p className="mt-6 text-center font-display text-[10px] tracking-[0.45em] text-white/25 uppercase">
          Our Lady of Sorrows
        </p>
      </div>
    </section>
  );
}
