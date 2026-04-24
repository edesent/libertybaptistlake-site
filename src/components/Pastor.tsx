"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const milestones = [
  { year: "2012", text: "Began studies at Midstate Baptist Bible Institute" },
  { year: "2016", text: "Ordained to the Gospel ministry; married Tayler" },
  { year: "2017", text: "Assistant Pastor at Highland Hills Baptist Church" },
  { year: "2021", text: "Called as Senior Pastor of Liberty Baptist Church" },
];

export default function Pastor() {
  return (
    <section id="pastor" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <AnimateOnScroll>
            <div className="border border-cream-dark bg-warm-white p-6 shadow-[0_24px_55px_-34px_rgba(20,32,40,0.35)] md:p-8">
              <div className="overflow-hidden border border-cream-dark">
                <img
                  src="/hero-2.jpg"
                  alt="Pastor Doyle Ross III with Tayler and their children Doyle IV, Vera, Kezia, and Boaz"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <div className="mt-6 border-t border-cream-dark pt-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                  The Ross Family
                </p>
                <p className="mt-3 font-serif text-2xl leading-relaxed text-text-dark">
                  A young family serving faithfully and helping shape the life
                  of Liberty Baptist Church.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-burgundy">
                Our Pastor
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] text-text-dark text-balance md:text-5xl lg:text-6xl">
                Doyle Ross III
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-body">
                Pastor Ross accepted Christ as a young boy and sensed a call to
                preach at thirteen. After ministry training and years of
                assistant pastoral service, he came to Liberty in 2021 with a
                heart to shepherd people week by week.
              </p>
              <p className="mt-4 leading-relaxed text-text-light">
                He and his wife <strong className="text-text-body">Tayler</strong>{" "}
                are raising <strong className="text-text-body">Doyle IV, Vera,
                Kezia, and Boaz</strong> while serving the church family
                together.
              </p>

              <div className="mt-10 grid gap-3">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="grid gap-3 border border-cream-dark bg-warm-white px-5 py-4 sm:grid-cols-[5rem_1fr] sm:items-start"
                  >
                    <span className="font-serif text-2xl text-burgundy">
                      {milestone.year}
                    </span>
                    <span className="pt-1 text-text-body">{milestone.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/pastor"
                  className="inline-flex items-center gap-2 bg-burgundy px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-burgundy-dark"
                >
                  Read His Full Story
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/visit"
                  className="inline-flex items-center gap-2 border border-cream-dark bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-text-dark transition-all hover:bg-cream"
                >
                  Meet Him Sunday
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
