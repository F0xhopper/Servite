/**
 * The Servite calendar.
 *
 * Sources:
 *   - "Servite Feast Days", Servite High School (OSM), servitehs.org
 *     https://www.servitehs.org/uploaded/NEWS/2014_Feast_Days_Sheet1.pdf
 *   - Servite Order, Wikipedia (dates for the canonised Servite saints)
 *     https://en.wikipedia.org/wiki/Servite_Order
 *   - Dedication of the basilica of Monte Senario, 22 September
 *     (Order of Servants of Mary, servidimaria.net)
 *
 * Two caveats worth putting to the fraternity before this is treated as
 * authoritative:
 *   - Dates for several of the medieval blesseds differ between the Order's
 *     proper calendar and local usage. Bl. Joachim of Siena (3 February here,
 *     16 April in the general calendar), Bl. Ubald and Bl. Bonaventure of
 *     Forlì are the ones to check.
 *   - Provinces and individual fraternities add their own observances.
 *
 * Fixed feasts carry a month/day; movable ones are resolved against the date of
 * Easter for a given year.
 */

export interface FeastDay {
  id: string;
  name: string;
  note?: string;
  /** "order" = proper to the Servite family; "church" = a universal feast the Order keeps. */
  kind: "order" | "church";
  /** The principal celebrations. The homepage preview draws only on these. */
  major?: boolean;
  image?: string;
  /** Where the subject sits in the image, when the middle is not right. */
  objectPosition?: string;
  /** Fixed feasts: month is 1-12. */
  fixed?: { month: number; day: number };
  /** Movable feasts: resolved per year, with a human-readable rule. */
  movable?: { rule: string; resolve: (year: number) => Date };
}

export interface UpcomingFeast {
  feast: FeastDay;
  date: Date;
}

/** Easter Sunday (Gregorian), Meeus/Jones/Butcher algorithm. Returns a UTC date. */
function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function daysBefore(date: Date, days: number): Date {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
}

export const feastDays: FeastDay[] = [
  {
    id: "mary-mother-of-god",
    name: "Mary, Mother of God",
    note: "The year opens where the Order stands: with Mary.",
    kind: "church",
    major: true,
    image: "/images/feast-mother-of-god.jpg",
    fixed: { month: 1, day: 1 },
  },
  {
    id: "anthony-pucci",
    name: "St. Anthony Pucci",
    note: "Servite parish priest of Viareggio for forty-five years, canonised in 1962.",
    kind: "order",
    fixed: { month: 1, day: 12 },
  },
  {
    id: "james-of-villa",
    name: "Bl. James of Villa",
    kind: "order",
    fixed: { month: 1, day: 15 },
  },
  {
    id: "presentation-of-the-lord",
    name: "The Presentation of the Lord",
    note: "Mary's first sorrow: the prophecy of Simeon, that a sword would pierce her own soul.",
    kind: "church",
    fixed: { month: 2, day: 2 },
  },
  {
    id: "joachim-of-siena",
    name: "Bl. Joachim of Siena",
    note: "A Servite of the first generation, formed by St. Philip Benizi.",
    kind: "order",
    fixed: { month: 2, day: 3 },
  },
  {
    id: "seven-holy-founders",
    name: "The Seven Holy Founders",
    note: "The seven Florentine merchants who withdrew to Monte Senario in 1233. Canonised as one.",
    kind: "order",
    major: true,
    image: "/images/servite-founders.jpeg",
    objectPosition: "object-top",
    fixed: { month: 2, day: 17 },
  },
  {
    id: "elizabeth-picenardi",
    name: "Bl. Elizabeth Picenardi",
    note: "A Servite tertiary of Mantua who gathered other women into the life.",
    kind: "order",
    fixed: { month: 2, day: 19 },
  },
  {
    id: "joseph",
    name: "St. Joseph",
    kind: "church",
    fixed: { month: 3, day: 19 },
  },
  {
    id: "annunciation",
    name: "The Annunciation of the Lord",
    note: "Mary's fiat: the beginning of every Servite's own 'let it be done to me'.",
    kind: "church",
    major: true,
    image: "/images/feast-annunciation.jpg",
    fixed: { month: 3, day: 25 },
  },
  {
    id: "our-lady-at-the-foot-of-the-cross",
    name: "Our Lady at the Foot of the Cross",
    note: "The Order's own Passiontide feast of the Virgin's compassion.",
    kind: "order",
    major: true,
    image: "/images/mary_foot_of_cross.jpg",
    objectPosition: "object-top",
    movable: {
      rule: "Friday before Palm Sunday",
      // Palm Sunday is the Sunday before Easter (Easter − 7); the Friday
      // before it falls two days earlier again.
      resolve: (year) => daysBefore(easterSunday(year), 9),
    },
  },
  {
    id: "peregrine-laziosi",
    name: "St. Peregrine Laziosi",
    note: "Patron of the sick and suffering, healed of cancer on the eve of amputation.",
    kind: "order",
    major: true,
    image: "/images/peregrine.jpg",
    objectPosition: "object-top",
    fixed: { month: 5, day: 4 },
  },
  {
    id: "mother-and-mediatrix",
    name: "Blessed Virgin Mary, Mother and Mediatrix of Grace",
    kind: "order",
    fixed: { month: 5, day: 8 },
  },
  {
    id: "benincasa",
    name: "Bl. Benincasa",
    note: "A Servite hermit of Montepulciano.",
    kind: "order",
    fixed: { month: 5, day: 11 },
  },
  {
    id: "francis-of-siena",
    name: "Bl. Francis of Siena",
    kind: "order",
    fixed: { month: 5, day: 12 },
  },
  {
    id: "james-philip-bertoni",
    name: "Bl. James Philip Bertoni",
    kind: "order",
    fixed: { month: 5, day: 30 },
  },
  {
    id: "juliana-falconieri",
    name: "St. Juliana Falconieri",
    note: "Foundress of the Servite Third Order, from which the Secular Order descends.",
    kind: "order",
    major: true,
    image: "/images/juliana-falconieri.jpg",
    objectPosition: "object-top",
    fixed: { month: 6, day: 19 },
  },
  {
    id: "thomas-of-orvieto",
    name: "Bl. Thomas of Orvieto",
    kind: "order",
    fixed: { month: 6, day: 26 },
  },
  {
    id: "ferdinand-baccilieri",
    name: "Bl. Ferdinand Maria Baccilieri",
    note: "Founder of the Servite Sisters of Galeazza, beatified in 1999.",
    kind: "order",
    fixed: { month: 7, day: 1 },
  },
  {
    id: "ubald-of-borgo",
    name: "Bl. Ubald of Borgo",
    kind: "order",
    fixed: { month: 7, day: 3 },
  },
  {
    id: "clelia-barbieri",
    name: "St. Clelia Barbieri",
    note: "Foundress of the Minim Sisters of Our Lady of Sorrows, part of the wider Servite family.",
    kind: "order",
    fixed: { month: 7, day: 13 },
  },
  {
    id: "assumption",
    name: "The Assumption of the Blessed Virgin Mary",
    kind: "church",
    major: true,
    image: "/images/feast-assumption.jpg",
    fixed: { month: 8, day: 15 },
  },
  {
    id: "philip-benizi",
    name: "St. Philip Benizi",
    note: "The Order's 'second founder' and fifth Prior General, who fled election as pope.",
    kind: "order",
    major: true,
    image: "/images/benizi.jpg",
    objectPosition: "object-top",
    fixed: { month: 8, day: 23 },
  },
  {
    id: "augustine",
    name: "St. Augustine",
    note: "The Order lives under his Rule.",
    kind: "church",
    fixed: { month: 8, day: 28 },
  },
  {
    id: "andrew-dotti",
    name: "Bl. Andrew Dotti",
    kind: "order",
    fixed: { month: 8, day: 31 },
  },
  {
    id: "joan-of-florence",
    name: "Bl. Joan of Florence",
    note: "Companion and successor of St. Juliana Falconieri.",
    kind: "order",
    fixed: { month: 9, day: 1 },
  },
  {
    id: "maria-maddalena-starace",
    name: "Bl. Maria Maddalena Starace",
    note: "Foundress of the Compassionist Sisters, beatified in 2007.",
    kind: "order",
    fixed: { month: 9, day: 5 },
  },
  {
    id: "bonaventure-of-forli",
    name: "Bl. Bonaventure of Forlì",
    kind: "order",
    fixed: { month: 9, day: 6 },
  },
  {
    id: "our-lady-of-sorrows",
    name: "Our Lady of Sorrows",
    note: "The principal feast of the Order, and the reason for its name.",
    kind: "order",
    major: true,
    image: "/images/vergine-addolarata.jpg",
    objectPosition: "object-top",
    fixed: { month: 9, day: 15 },
  },
  {
    id: "monte-senario",
    name: "Dedication of the Basilica of Monte Senario",
    note: "The mountain above Florence where the Seven Founders settled, and where the Order began.",
    kind: "order",
    major: true,
    image: "/images/feast-monte-senario.jpg",
    fixed: { month: 9, day: 22 },
  },
  {
    id: "maria-guadalupe-ricart-olmos",
    name: "Bl. Maria Guadalupe Ricart Olmos",
    note: "A Servite nun of Valencia, martyred in 1936.",
    kind: "order",
    fixed: { month: 10, day: 3 },
  },
  {
    id: "john-angelo-porro",
    name: "Bl. John Angelo Porro",
    kind: "order",
    fixed: { month: 10, day: 25 },
  },
  {
    id: "all-saints-of-the-order",
    name: "All Saints of the Order",
    note: "The whole Servite family, canonised and uncanonised, kept in one day.",
    kind: "order",
    major: true,
    image: "/images/feast-all-saints.jpg",
    fixed: { month: 11, day: 16 },
  },
  {
    id: "all-souls-of-the-order",
    name: "Remembrance of the Servite Dead",
    note: "All deceased friars, sisters, relatives and friends of the Servite family.",
    kind: "order",
    fixed: { month: 11, day: 17 },
  },
  {
    id: "immaculate-conception",
    name: "The Immaculate Conception",
    kind: "church",
    major: true,
    image: "/images/immaculate_conception.jpg",
    objectPosition: "object-top",
    fixed: { month: 12, day: 8 },
  },
  {
    id: "jerome-of-santangelo",
    name: "Bl. Jerome of Sant'Angelo",
    kind: "order",
    fixed: { month: 12, day: 10 },
  },
  {
    id: "our-lady-of-guadalupe",
    name: "Our Lady of Guadalupe",
    kind: "church",
    fixed: { month: 12, day: 12 },
  },
  {
    id: "bonaventure-of-pistoia",
    name: "Bl. Bonaventure of Pistoia",
    kind: "order",
    fixed: { month: 12, day: 15 },
  },
  {
    id: "nativity",
    name: "The Nativity of Our Lord",
    kind: "church",
    fixed: { month: 12, day: 25 },
  },
];

/** The date a feast falls on in a given year, as a UTC date. */
export function feastDateFor(feast: FeastDay, year: number): Date {
  if (feast.movable) {
    return feast.movable.resolve(year);
  }
  const { month, day } = feast.fixed!;
  return new Date(Date.UTC(year, month - 1, day));
}

/** Today, as a UTC date with the time stripped, so comparisons are day-by-day. */
function startOfDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
}

/** Every feast of the given year, in calendar order. */
export function getFeastDaysForYear(year: number): UpcomingFeast[] {
  return feastDays
    .map((feast) => ({ feast, date: feastDateFor(feast, year) }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

/**
 * The next `count` feasts on or after `from`, rolling into next year once the
 * current year's calendar is exhausted. Pass `majorOnly` for the principal
 * celebrations alone.
 */
export function getUpcomingFeastDays(
  count: number,
  { from = new Date(), majorOnly = false }: { from?: Date; majorOnly?: boolean } = {}
): UpcomingFeast[] {
  const today = startOfDay(from);
  const year = today.getUTCFullYear();

  return [...getFeastDaysForYear(year), ...getFeastDaysForYear(year + 1)]
    .filter(({ date }) => date.getTime() >= today.getTime())
    .filter(({ feast }) => !majorOnly || feast.major)
    .slice(0, count);
}

const dayFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  timeZone: "UTC",
});
const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  timeZone: "UTC",
});

/** "15" */
export function formatFeastDay(date: Date): string {
  return dayFormatter.format(date);
}

/** "September" */
export function formatFeastMonth(date: Date): string {
  return monthFormatter.format(date);
}

/** "15 September" */
export function formatFeastDate(date: Date): string {
  return `${formatFeastDay(date)} ${formatFeastMonth(date)}`;
}
