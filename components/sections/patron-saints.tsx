import Image from "next/image";
import Link from "next/link";

interface Saint {
  name: string;
  title: string;
  body: string;
  image: string;
  objectPosition: string;
}

const saints: Saint[] = [
  {
    name: "The Seven Holy Founders",
    title: "Founders of the Servite Order",
    body: "Seven wealthy Florentine laymen who withdrew from the world together to serve Our Lady, founding the Order in 1233. Canonised as one — the only collective canonisation in the Church.",
    image: "/images/founders_vision.jpg",
    objectPosition: "object-center",
  },
  {
    name: "St. Philip Benizi",
    title: "Reformer & Fifth Prior General",
    body: "Called the 'second founder,' Philip stabilised and expanded the Order through a critical period of growth, and was so venerated that he fled to avoid election as pope.",
    image: "/images/mater-dolorosa.jpg",
    objectPosition: "object-top",
  },
  {
    name: "St. Peregrine Laziosi",
    title: "Patron of the Sick & Suffering",
    body: "Miraculously healed of cancer on the eve of amputation, Peregrine is the Order's great intercessor for the ill — bearing in his own body the compassion Mary showed at the Cross.",
    image: "/images/vintage_catholic.jpg",
    objectPosition: "object-top",
  },
];

const portraitClass = "object-cover brightness-[0.5] saturate-[0.3]";
const bodyClass = "text-[14px] leading-[1.8] text-white/78";
const titleClass = "mb-4 text-[13px] italic leading-snug text-gold/65";

export function PatronSaintsSection() {
  const [founders, philip, peregrine] = saints;

  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

      {/* Header */}
      <div className="mb-20 lg:mb-28">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          Patron Saints
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          The canonised sons and daughters of the Servite family — each a living
          icon of the Order's charism of prayer, fraternity, and compassionate
          service.
        </p>
      </div>

      {/* Three saints with vertical stagger */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-0">

          {/* Founders — tall portrait, anchored top */}
          <div className="lg:w-[38%] lg:pr-16">
            <div className="relative mb-7 h-48 w-48 overflow-hidden rounded-full">
              <Image src={founders.image} alt={founders.name} fill sizes="192px" className={`${portraitClass} ${founders.objectPosition}`} />
            </div>
            <h3 className="mb-1 font-display text-xl font-normal leading-tight tracking-wide text-white">{founders.name}</h3>
            <p className={titleClass}>{founders.title}</p>
            <p className={`max-w-xs ${bodyClass}`}>{founders.body}</p>
          </div>

          {/* Philip — pushed down */}
          <div className="lg:mt-24 lg:w-[30%] lg:px-8">
            <div className="relative mb-7 h-44 w-44 overflow-hidden rounded-full">
              <Image src={philip.image} alt={philip.name} fill sizes="176px" className={`${portraitClass} ${philip.objectPosition}`} />
            </div>
            <h3 className="mb-1 font-display text-lg font-normal leading-tight tracking-wide text-white">{philip.name}</h3>
            <p className={titleClass}>{philip.title}</p>
            <p className={bodyClass}>{philip.body}</p>
          </div>

          {/* Peregrine — slight offset, bordered on left */}
          <div className="lg:mt-10 lg:w-[32%] lg:border-l lg:border-gold/[0.07] lg:pl-12">
            <div className="relative mb-7 h-36 w-36 overflow-hidden rounded-full">
              <Image src={peregrine.image} alt={peregrine.name} fill sizes="112px" className={`${portraitClass} ${peregrine.objectPosition}`} />
            </div>
            <h3 className="mb-1 font-display text-base font-normal leading-tight tracking-wide text-white">{peregrine.name}</h3>
            <p className={titleClass}>{peregrine.title}</p>
            <p className={bodyClass}>{peregrine.body}</p>
          </div>

        </div>

        {/* Single section link */}
        <div className="mt-20 flex justify-end lg:mt-28">
          <Link href="/saints" className="text-[11px] tracking-[0.25em] text-gold/60 uppercase transition-colors hover:text-gold">
            All Saints →
          </Link>
        </div>
      </div>

    </section>
  );
}
