import Image from "next/image";

export function ScriptureSection() {
  return (
    <section className="bg-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

        {/* Verse — left */}
        <div className="flex-1 text-center lg:text-left">
          <blockquote className="font-display text-2xl font-normal leading-relaxed tracking-wide text-white sm:text-3xl lg:text-[2.5rem] lg:leading-relaxed">
            "And thy own soul a sword shall pierce, that, out of many hearts, thoughts may be revealed."
          </blockquote>
          <div className="mx-auto my-10 h-px w-8 bg-gold/20 lg:mx-0" />
          <p className="font-display text-[11px] uppercase tracking-[0.45em] text-white/25">
            Luke 2:35
          </p>
        </div>

        {/* Image — right */}
        <div className="w-full max-w-[260px] flex-none sm:max-w-[300px] lg:max-w-[280px]">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/vintage_catholic.jpg"
              alt="Vintage Catholic devotional image"
              fill
              sizes="(max-width: 1024px) 300px, 280px"
              className="object-cover object-top brightness-[0.75] saturate-[0.55]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
