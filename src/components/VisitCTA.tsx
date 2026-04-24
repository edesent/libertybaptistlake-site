"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ADDRESS = "6007 Mannsiding Rd, Lake, MI 48632";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const reassure = [
  "No dress code beyond coming respectfully",
  "Friendly help for finding classes or nursery",
  "A simple, traditional service that is easy to follow",
];

export default function VisitCTA() {
  return (
    <section id="visit" className="bg-warm-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-burgundy">
            Plan your first visit
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold text-text-dark md:text-5xl lg:text-6xl">
            Come and see.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-light">
            No reservation needed. No pressure. Just come, and we will help you
            get settled.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimateOnScroll>
            <div className="border border-cream-dark bg-cream p-6 md:p-8">
              <div className="grid gap-6 border-b border-amber/25 pb-6">
                <div>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                    Address
                  </p>
                  <p className="mt-3 font-serif text-2xl text-text-dark">
                    6007 Mannsiding Rd
                  </p>
                  <p className="text-text-light">Lake, MI 48632</p>
                </div>
                <div>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                    Phone
                  </p>
                  <a
                    href="tel:+19895887039"
                    className="mt-3 block font-serif text-2xl text-text-dark transition-colors hover:text-burgundy"
                  >
                    (989) 588-7039
                  </a>
                </div>
              </div>

              <div className="mt-6 border-b border-amber/25 pb-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                  Service times
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span>Sunday School</span>
                    <span className="font-semibold text-text-dark">10:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Morning Worship</span>
                    <span className="font-semibold text-text-dark">11:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening Service</span>
                    <span className="font-semibold text-text-dark">6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday Prayer</span>
                    <span className="font-semibold text-text-dark">6:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                  To put you at ease
                </p>
                <div className="mt-4 space-y-3">
                  {reassure.map((item) => (
                    <div
                      key={item}
                      className="border border-cream-dark bg-warm-white px-4 py-3"
                    >
                      <p className="text-text-body">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-burgundy-dark"
                >
                  Get Directions
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="tel:+19895887039"
                  className="inline-flex items-center gap-2 border border-cream-dark bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-text-dark transition-all hover:bg-cream"
                >
                  Call the Office
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="overflow-hidden border border-cream-dark bg-white shadow-[0_22px_44px_-30px_rgba(20,32,40,0.28)]">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Liberty Baptist Church"
                className="min-h-[420px] border-0"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={260}>
          <div className="mt-12 border border-cream-dark bg-cream px-8 py-8 text-center">
            <p className="mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed text-text-dark md:text-3xl">
              &quot;If you have questions, just ask. We really do mean it.
              We&apos;d love to help make your first visit easy.&quot;
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-burgundy">
              Pastor Doyle Ross III
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
