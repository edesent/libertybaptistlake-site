"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const markers = [
  {
    title: "Bible preaching",
    body: "The center of every service is the Word of God opened plainly and applied simply.",
  },
  {
    title: "A real welcome",
    body: "Expect handshakes, real conversation, and a church that still feels personal instead of anonymous.",
  },
  {
    title: "Room for families",
    body: "Kids are welcome, nursery help is available, and no one expects your first Sunday to be polished.",
  },
];

export default function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden bg-warm-white py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-amber/30" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimateOnScroll>
            <div className="border border-cream-dark bg-cream p-8 md:p-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-burgundy">
                A word from our pastor
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] text-text-dark text-balance md:text-5xl lg:text-6xl">
                Honest, steady, and close to home.
              </h2>
              <p className="mt-7 font-serif text-2xl leading-relaxed text-burgundy-dark">
                &quot;When people walk through our doors, we want them to hear
                the truth clearly and feel genuinely cared for.&quot;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-text-light">
                Pastor Doyle Ross III
              </p>
              <div className="mt-8 border-t border-amber/25 pt-7 text-lg leading-relaxed text-text-body">
                Liberty Baptist Church is an Independent, King James Bible
                church in Lake, Michigan. We sing the old hymns, preach
                faithfully, and love seeing both longtime church members and
                first-time guests settle in side by side.
              </div>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            <AnimateOnScroll delay={120}>
              <div className="grid gap-6 border border-cream-dark bg-white p-6 shadow-[0_22px_44px_-30px_rgba(20,32,40,0.32)] md:grid-cols-[0.82fr_1.18fr] md:p-7">
                <div className="overflow-hidden border border-cream-dark">
                  <img
                    src="/hero-1.jpg"
                    alt="Pastor Doyle Ross III and his wife Tayler"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                      Our Pastor
                    </p>
                    <h3 className="mt-3 font-serif text-3xl text-text-dark">
                      Doyle Ross III
                    </h3>
                    <p className="mt-4 leading-relaxed text-text-light">
                      Serving Liberty Baptist since May 2021 alongside his wife
                      Tayler and their four children.
                    </p>
                  </div>
                  <a
                    href="/pastor"
                    className="mt-6 inline-flex items-center gap-2 self-start border border-ink/12 bg-cream px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-text-dark transition-all hover:bg-burgundy hover:text-white"
                  >
                    Read His Story
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-5 sm:grid-cols-3">
              {markers.map((marker, index) => (
                <AnimateOnScroll key={marker.title} delay={240 + index * 100}>
                  <div className="h-full border border-cream-dark bg-warm-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-30px_rgba(20,32,40,0.28)]">
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-amber-dark">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-text-dark">
                      {marker.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-light">
                      {marker.body}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={520}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/we-believe"
                  className="inline-flex items-center gap-2 bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-burgundy-dark"
                >
                  What We Believe
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/visit"
                  className="inline-flex items-center gap-2 border border-cream-dark bg-cream px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-text-dark transition-all hover:bg-cream-dark"
                >
                  Visit This Sunday
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
