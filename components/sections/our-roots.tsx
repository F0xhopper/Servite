import Image from "next/image";
import Link from "next/link";

const bodyText = "text-[15px] leading-[1.9] text-white/65";
const yearClass = "mb-2 font-display text-[3.2rem] font-light leading-none tracking-tight text-white/80 sm:text-[3.8rem]";
const categoryClass = "mb-4 font-display text-[11px] uppercase tracking-[0.5em] text-gold/45";

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

      {/* Asymmetric editorial grid */}
      <div className="mx-auto max-w-[1400px] px-8 pb-16 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_3fr_4fr] lg:gap-x-12 lg:gap-y-0">

          {/* ── Column 1: 1233 ── */}
          <div className="border-t border-white/10 pt-8">
            <p className={yearClass}>1233</p>
            <p className={categoryClass}>Origins &amp; Early Lay Communities</p>
            <p className={`mb-3 ${bodyText}`}>
              Seven wealthy Florentine merchants withdrew from public life to live in prayer and penance, placing themselves under the protection of the Virgin Mary. Officially approved in 1256 as the Order of Friars Servants of Mary, their community drew lay men, women, and married couples from its earliest years.
            </p>
            <p className={`mb-8 ${bodyText}`}>
              These early lay participants — oblates, confraternity members, and associates — lived ordinary city and family life while remaining spiritually bound to the friars. Varied by priory and held together by devotion to Our Lady of Sorrows, they are the direct ancestors of today's OSSM.
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

          {/* ── Column 2: 1424 ── */}
          <div className="lg:pt-24">
            <div className="border-t border-white/10 pt-8">
              <p className={yearClass}>1424</p>
              <p className={categoryClass}>Formal Recognition</p>
              <p className={`mb-3 ${bodyText}`}>
                Through the Bull <em>Sedis apostolicae providentia</em>, Pope Martin V officially recognized lay Servites as a structured Third Order — giving them a genuine ecclesial identity alongside the Third Orders of the Franciscans, Dominicans, Carmelites, and Augustinians.
              </p>
              <p className={bodyText}>
                For the first time, lay people affiliated with the Servites held a defined place within the Church's life, with early forms of governance and a common name that spread across Europe in the centuries that followed.
              </p>
            </div>
          </div>

          {/* ── Column 3: image-first, then 1962–1995, then CTA ── */}
          <div className="lg:pt-12">
            <div className="relative mb-8 aspect-[3/4] overflow-hidden">
              <Image
                src="/images/Vatican II.jpg"
                alt="Second Vatican Council"
                fill
                className="object-cover brightness-[0.55] saturate-[0.3]"
              />
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className={yearClass}>1962 – 1995</p>
              <p className={categoryClass}>Vatican II &amp; The Rule Renewed</p>
              <p className={`mb-3 ${bodyText}`}>
                The Second Vatican Council called for a renewal of lay vocations across all religious families. In response, the Servite Third Order was re-examined to better reflect modern lay life and a clearer identity within the broader Servite family.
              </p>
              <p className={`mb-8 ${bodyText}`}>
                A new Rule of Life was approved by the Apostolic See in 1987 and, after further revision, definitively confirmed by the Holy See on 29 April 1995. The order was formally renamed the Secular Order of the Servants of Mary — the OSSM — a worldwide movement of lay men and women living in ordinary society, fully part of the Servite spiritual family.
              </p>
              <Link
                href="/history"
                className="inline-flex items-center gap-3 font-display text-sm tracking-[0.25em] text-gold/60 transition-colors hover:text-gold"
              >
                Explore the Full History
                <span className="text-base leading-none">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
