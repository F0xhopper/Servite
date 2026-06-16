import Image from "next/image";

export function WhoWeAreSection() {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      {/* Section header */}
      <h2 className="mb-8 font-display text-4xl font-normal leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
        Who We Are
      </h2>
      <div className="mb-12 h-px w-12 bg-white/20 lg:mb-16" />

      {/* Split: text left, tall image right */}
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[5fr_7fr] lg:gap-x-14 lg:gap-y-0">

        {/* LEFT — all three text blocks stacked */}
        <div className="space-y-10 text-[16px] leading-[1.95]">
          <div>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Called in the World
            </h3>
            <p className="text-white/70">
              We are lay members of the Servite Order — men and women
              consecrated not in the cloister, but in the world. Our
              calling is lived out within families, in workplaces, and in
              the communities we call home.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Our Tradition
            </h3>
            <p className="text-white/70">
              Drawing from eight centuries of Servite spirituality, we
              share fully in the mission of the Order — formed in prayer,
              community, and service after the example of the Seven Holy
              Founders.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold/80">
              At the Foot of the Cross
            </h3>
            <p className="text-white/70">
              Above all, we seek to stand with Mary at the foot of the
              Cross — to accompany her in sorrow and to carry her
              compassion into a wounded world. In this vigil of love, we
              find our identity as Servants of Mary.
            </p>
          </div>
        </div>

        {/* RIGHT — tall image that fills the height driven by the text column */}
        <div className="relative min-h-[420px] lg:min-h-0">
          <Image
            src="/images/mary_foot_of_cross.jpg"
            alt="Mary at the Foot of the Cross"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-top brightness-[0.75] saturate-[0.55]"
          />
        </div>

      </div>
    </section>
  );
}
