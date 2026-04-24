"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Sunday School",
    time: "10:00 AM",
    day: "Sunday",
    body: "Classes for children, teens, and adults studying the Bible together.",
  },
  {
    title: "Morning Worship",
    time: "11:00 AM",
    day: "Sunday",
    body: "Hymn singing, prayer, special music, and preaching from the King James Bible.",
    featured: true,
  },
  {
    title: "Evening Service",
    time: "6:00 PM",
    day: "Sunday",
    body: "A quieter close to the Lord's Day with testimony, singing, and the Word.",
  },
  {
    title: "Prayer & Bible Study",
    time: "6:30 PM",
    day: "Thursday",
    body: "A midweek time for prayer, Scripture, and carrying burdens together.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#1d1715] py-28 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,14,13,0.9) 0%, rgba(29,23,21,0.92) 100%), radial-gradient(circle at 15% 20%, rgba(200,141,87,0.14), transparent 22%), radial-gradient(circle at 82% 72%, rgba(152,97,74,0.14), transparent 24%), repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 82px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-28">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-amber-light">
                Gather with us
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] text-balance md:text-5xl lg:text-6xl">
                A weekly rhythm built around worship, prayer, and preaching.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/68">
                There is no complicated production to figure out here. Just
                faithful services, old hymns, the Bible opened plainly, and a
                church family learning to walk with Christ together.
              </p>

              <div className="mt-10 border border-white/10 bg-white/[0.05] p-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-amber-light">
                  If you are new
                </p>
                <p className="mt-4 leading-relaxed text-white/72">
                  Sunday morning at 11:00 AM is the easiest service to start
                  with, but you are welcome at every gathering.
                </p>
                <a
                  href="/visit"
                  className="mt-6 inline-flex items-center gap-2 bg-amber px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:bg-amber-light"
                >
                  Your First Visit
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 90}>
                <div
                  className={`h-full border p-7 transition-all hover:-translate-y-1 ${
                    service.featured
                      ? "border-amber/40 bg-gradient-to-br from-[#4f3424] to-[#251d19] shadow-[0_26px_60px_-32px_rgba(200,141,87,0.45)]"
                      : "border-white/10 bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[0.64rem] font-bold uppercase tracking-[0.28em] text-white/48">
                        {service.day}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {service.title}
                      </h3>
                    </div>
                    {service.featured && (
                      <span className="bg-amber px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-ink">
                        Start here
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-5 font-serif ${
                      service.featured
                        ? "text-5xl text-amber-light"
                        : "text-4xl text-white"
                    }`}
                  >
                    {service.time}
                  </p>
                  <p className="mt-5 max-w-md leading-relaxed text-white/66">
                    {service.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll delay={380}>
          <div className="mt-10 border border-white/10 bg-white/[0.05] px-6 py-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-amber-light">
                You&apos;ll find us here
              </p>
              <p className="mt-3 font-serif text-2xl text-white">
                6007 Mannsiding Rd, Lake, MI 48632
              </p>
            </div>
            <a
              href="/visit"
              className="mt-5 inline-flex items-center gap-2 border border-white/16 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10 md:mt-0"
            >
              Get Directions
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
