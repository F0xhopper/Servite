import Image from "next/image";

export function OurRootsSection() {
  return (
    <section className="bg-black">
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-8 pb-14 pt-20 sm:px-12 lg:px-16 lg:pt-28">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl">
          Our Roots
        </h2>
        <div className="mt-5 h-px w-8 bg-gold/20" />
      </div>

      {/* Asymmetric editorial grid — wide left / two-entry middle / image-led right */}
      <div className="mx-auto max-w-[1400px] px-8 pb-28 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[5fr_3fr_4fr] lg:gap-x-12 lg:gap-y-0">

          {/* ── Column 1: 1233 — foundational, wide, image at bottom ── */}
          <div className="border-t border-white/10 pt-8">
            <p className="mb-2 font-display text-[3.2rem] font-light leading-none tracking-tight text-white/80 sm:text-[3.8rem]">
              1233
            </p>
            <p className="mb-6 font-display text-[11px] uppercase tracking-[0.5em] text-gold/45">
              Origins &amp; Early Lay Communities
            </p>
            <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
              Seven wealthy Florentine merchants withdrew from public life to live in prayer and penance dedicated to the Virgin Mary. Their community — officially approved in 1256 as the Order of Friars Servants of Mary — drew lay men, women, and married couples from its earliest years.
            </p>
            <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
              These early participants were not yet a formal order. They were oblates, confraternity members, and associates living ordinary city and family life while remaining spiritually linked to the friars.
            </p>
            <p className="mb-10 text-[15px] leading-[1.9] text-white/45">
              Local in character and varied by priory, with no unified rule, their communities shared a deep devotion to Our Lady of Sorrows. They are the direct ancestors of today's OSSM.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/founders_vision.jpg"
                alt="Vision of the Seven Holy Founders"
                fill
                className="object-cover brightness-[0.55] saturate-[0.3]"
              />
            </div>
          </div>

          {/* ── Column 2: 1424 + 1500s–1900s stacked, drops down ── */}
          <div className="flex flex-col gap-12 lg:pt-24">

            {/* Entry A */}
            <div className="border-t border-white/10 pt-8">
              <p className="mb-2 font-display text-[3.2rem] font-light leading-none tracking-tight text-white/80 sm:text-[3.8rem]">
                1424
              </p>
              <p className="mb-6 font-display text-[11px] uppercase tracking-[0.5em] text-gold/45">
                Formal Recognition
              </p>
              <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
                Pope Martin V, through the Bull{" "}
                <em>Sedis apostolicae providentia</em>, officially recognized lay
                Servites as a structured part of the Servite family — the Third Order.
              </p>
              <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
                Lay people in the world now held an ecclesial identity and early forms of governance, alongside the Third Orders of the Franciscans, Dominicans, Carmelites, and Augustinians.
              </p>
              <p className="text-[15px] leading-[1.9] text-white/45">
                The name "Third Order of Servites" became common across Europe from this point forward.
              </p>
            </div>

            {/* Entry B */}
            <div className="border-t border-white/10 pt-8">
              <p className="mb-2 font-display text-[3.2rem] font-light leading-none tracking-tight text-white/80 sm:text-[3.8rem]">
                1500s – 1900s
              </p>
              <p className="mb-6 font-display text-[11px] uppercase tracking-[0.5em] text-gold/45">
                Growth &amp; Global Expansion
              </p>
              <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
                The Prior General took an active role animating secular fraternities, while devotion deepened around Our Lady of Sorrows and the Seven Sorrows.
              </p>
              <p className="text-[15px] leading-[1.9] text-white/45">
                Through the nineteenth century, Servite missionary activity carried the Third Order to the Americas, Africa, and Asia — though no single universal rule yet unified these growing communities.
              </p>
            </div>

          </div>

          {/* ── Column 3: image-first, then 1962–1995, slight drop ── */}
          <div className="lg:pt-12">
            <div className="relative mb-8 aspect-[3/4] overflow-hidden">
              <Image
                src="/images/mater-dolorosa.jpg"
                alt="Our Lady of Sorrows"
                fill
                className="object-cover brightness-[0.55] saturate-[0.3]"
              />
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="mb-2 font-display text-[3.2rem] font-light leading-none tracking-tight text-white/80 sm:text-[3.8rem]">
                1962 – 1995
              </p>
              <p className="mb-6 font-display text-[11px] uppercase tracking-[0.5em] text-gold/45">
                Vatican II &amp; The Rule Renewed
              </p>
              <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
                The Second Vatican Council called for the renewal of lay vocations. The Servite Third Order was re-evaluated to reflect modern lay life and a clearer identity within the Servite family.
              </p>
              <p className="mb-3 text-[15px] leading-[1.9] text-white/45">
                A new Rule of Life was approved by the Apostolic See in 1987. After a series of revisions, the definitive text was confirmed by the Holy See on 29 April 1995.
              </p>
              <p className="text-[15px] leading-[1.9] text-white/45">
                Today the Secular Order of the Servants of Mary — the OSSM — is a worldwide lay movement of men and women living in ordinary society, fully part of the Servite spiritual family.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
