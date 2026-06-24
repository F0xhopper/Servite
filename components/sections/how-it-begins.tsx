import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Inquiry",
    body: "Reach out to a local fraternity, or contact us online. You will be invited to attend a meeting as a guest — no commitment required, only an open heart and a question.",
  },
  {
    number: "02",
    title: "Novitiate",
    body: "A period of prayer, formation, and discernment lasting one to two years. You attend monthly fraternity meetings, study the Rule of Life, and begin living the daily practices.",
  },
  {
    number: "03",
    title: "Profession",
    body: "At the end of novitiate, you make an initial promise — a conscious act of self-giving renewed each year, not as a formality, but as a free re-choosing of the life.",
  },
];

export function HowItBeginsSection() {
  return (
    <section className="bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mb-16 lg:mb-20">
        <h2 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
          How the Journey Begins
        </h2>
        <div className="mt-5 h-px w-10 bg-gold/20" />
        <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/75">
          The path into Secular Servite life moves through three movements — not a
          fast track, but a gradual deepening.
        </p>
      </div>

      <div className="grid grid-cols-1 divide-y divide-white/[0.07] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={[
              "py-10 lg:py-0",
              i === 0 ? "lg:pr-14" : i === 1 ? "lg:px-14" : "lg:pl-14",
            ].join(" ")}
          >
            <p className="mb-6 font-display text-[3.5rem] font-light leading-none text-white/10">
              {step.number}
            </p>
            <h3 className="mb-4 font-display text-2xl font-normal tracking-wide text-white">
              {step.title}
            </h3>
            <div className="mb-5 h-px w-8 bg-gold/20" />
            <p className="text-[15px] leading-[1.9] text-white/75">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-start">
        <Link
          href="/inquire"
          className="border border-gold/40 px-6 py-2.5 text-sm tracking-wider text-gold/70 transition-colors hover:border-gold hover:text-gold"
        >
          Begin an Inquiry
        </Link>
      </div>
    </section>
  );
}
