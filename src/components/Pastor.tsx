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
    <section id="pastor" className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1920 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="pastor-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(47,153,149,0.15)" />
            </pattern>
          </defs>
          <rect width="1920" height="800" fill="url(#pastor-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-teal/60 rounded-tl-[2rem]"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-teal/60 rounded-br-[2rem]"
                aria-hidden="true"
              />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(20,24,40,0.4)]">
                <img
                  src="/hero-2.jpg"
                  alt="Pastor Doyle Ross III with Tayler and their children Doyle IV, Vera, Kezia, and Boaz"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
                Our Pastor
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark leading-tight mb-6">
                Doyle Ross III
              </h2>
              <p className="text-text-body leading-relaxed mb-4 text-lg">
                Pastor Ross accepted Christ as a young boy and sensed a call
                to ministry at thirteen. He trained at Midstate Baptist Bible
                Institute and was ordained in 2016.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                After four years serving as an Assistant Pastor, he came to
                Liberty Baptist in May 2021. Today he and his wife{" "}
                <strong className="text-text-body">Tayler</strong> are raising
                their four children —{" "}
                <strong className="text-text-body">Doyle IV, Vera, Kezia, and Boaz</strong>{" "}
                — alongside the Liberty church family.
              </p>

              <div className="space-y-3 mb-10">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-5">
                    <span className="mt-1 font-serif text-2xl font-semibold text-teal w-20 flex-shrink-0">
                      {m.year}
                    </span>
                    <span className="text-text-body pt-1.5">{m.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="/pastor"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-dusk hover:-translate-y-0.5 transition-all"
              >
                Read His Full Story
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
