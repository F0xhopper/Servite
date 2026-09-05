import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { contactDetails } from "@/lib/contact-details";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Write to the Secular Order of the Servants of Mary with questions, to arrange a visit, or for a first conversation about the Order.",
};

const detailLabelClass =
  "mb-2 font-display text-[10px] uppercase tracking-[0.3em] text-gold/40";

export default function ContactPage() {
  return (
    <section className="bg-black px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-36 lg:px-16 lg:pb-40">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <h1 className="font-display text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <div className="mt-5 h-px w-10 bg-gold/20" />
          <p className="mt-8 max-w-lg text-[15px] leading-[1.9] text-white/75">
            We would be glad to hear from you. Whether you are simply curious
            about the Servants of Mary, would like to visit a fraternity, or
            sense a call to the Secular Order, write to us and someone will
            answer personally. There is nothing to commit to in asking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">

          {/* Form */}
          <ContactForm />

          {/* Details */}
          <div className="flex flex-col gap-10 border-t border-white/[0.07] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className={detailLabelClass}>Email</p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-block py-2 text-[15px] text-white/70 transition-colors hover:text-gold"
              >
                {contactDetails.email}
              </a>
            </div>

            <div>
              <p className={detailLabelClass}>Meeting Times</p>
              <p className="text-[15px] leading-[1.9] text-white/70">
                {contactDetails.meeting.when}
                <br />
                {contactDetails.meeting.time} · {contactDetails.meeting.place}
              </p>
            </div>

            <div>
              <p className={detailLabelClass}>Visiting</p>
              <p className="text-[15px] leading-[1.9] text-white/70">
                Enquirers are welcome at any monthly gathering. Let us know
                you are coming and we will look out for you.
              </p>
            </div>

            <p className="text-[13px] italic leading-relaxed text-gold/40">
              Our Lady of Sorrows, pray for us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
