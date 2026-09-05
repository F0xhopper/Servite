import Image from "next/image";
import Link from "next/link";

interface Saint {
  name: string;
  title: string;
  body: string;
  feast: string;
  image: string;
  objectPosition: string;
}

/**
 * In chronological order. Each entry is kept to two sentences: the section is
 * meant to widen the picture of the Servite family, not to add reading.
 */
const saints: Saint[] = [
  {
    name: "The Seven Holy Founders",
    title: "Founders of the Servite Order",
    body: "Seven Florentine laymen who withdrew from the world together to serve Our Lady, founding the Order in 1233. Canonised as one, the only collective canonisation in the Church.",
    feast: "17 February",
    image: "/images/servite-founders.jpeg",
    objectPosition: "object-top",
  },
  {
    name: "St. Philip Benizi",
    title: "The Order's Second Founder",
    body: "Fifth Prior General, who carried the Order across Europe and into the universities. Elected pope by acclamation, he fled to the hills until another was chosen.",
    feast: "23 August",
    image: "/images/benizi.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Juliana Falconieri",
    title: "Foundress of the Servite Third Order",
    body: "Niece of one of the Seven Founders, she received the habit from St. Philip Benizi. She gathered the women of Florence into the Third Order, the root from which the Secular Order grew.",
    feast: "19 June",
    image: "/images/juliana-falconieri.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Peregrine Laziosi",
    title: "Patron of the Sick & Suffering",
    body: "Healed of cancer on the eve of amputation, he is the Order's great intercessor for the ill. He bore in his own body the compassion Mary showed at the Cross.",
    feast: "4 May",
    image: "/images/peregrine.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Clelia Barbieri",
    title: "Foundress of the Minim Sisters of Our Lady of Sorrows",
    body: "She founded her community at twenty-three, among the poor of her village outside Bologna, and died at twenty-six. The Servite charism lived out at its most ordinary and its most complete.",
    feast: "13 July",
    image: "/images/clelia-barbieri.jpg",
    objectPosition: "object-top",
  },
];

/**
 * The vertical offset each column carries on desktop, so the row keeps the
 * staggered rhythm the section had when it held three saints. Index modulo the
 * column count, so the pattern repeats down the grid.
 */
const stagger = ["lg:mt-0", "lg:mt-20", "lg:mt-8"];

export function PatronSaintsSection() {
  return (
    <section
      id="saints"
      className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"
    >

      {/* Header */}
      <div className="mb-20 lg:mb-28">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Patron Saints
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          The canonised sons and daughters of the Servite family, each a living
          icon of the Order&rsquo;s charism of prayer, fraternity, and
          compassionate service.
        </p>
      </div>

      {/* Saints */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-24">
          {saints.map((saint, index) => (
            <div key={saint.name} className={stagger[index % stagger.length]}>
              <div className="relative mb-7 h-60 w-60 overflow-hidden rounded-full">
                <Image
                  src={saint.image}
                  alt={saint.name}
                  fill
                  sizes="240px"
                  className={`object-cover brightness-[0.5] saturate-[0.3] ${saint.objectPosition}`}
                />
              </div>
              <h3 className="mb-1 font-display text-xl font-normal leading-tight tracking-wide text-white">
                {saint.name}
              </h3>
              <p className="mb-4 text-[13px] italic leading-snug text-gold/65">
                {saint.title}
              </p>
              <p className="max-w-xs text-[14px] leading-[1.8] text-white/78">
                {saint.body}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/30">
                Feast {saint.feast}
              </p>
            </div>
          ))}
        </div>

        {/* Single section link */}
        <div className="mt-20 flex justify-end lg:mt-28">
          <Link
            href="/feast-days"
            className="inline-block py-3 -my-3 text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold"
          >
            Their Feast Days →
          </Link>
        </div>
      </div>

    </section>
  );
}
