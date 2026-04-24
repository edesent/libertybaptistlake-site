"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const beliefs = [
  {
    title: "The Bible",
    verse: "II Timothy 3:16-17",
    body: "The 66 books of Scripture are the inspired, inerrant word of God - preserved for us today in the King James Version.",
  },
  {
    title: "God",
    verse: "Deuteronomy 6:4",
    body: "One eternal, self-existent God, revealed in three Persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    verse: "John 1:1, 14",
    body: "Virgin-born, fully God and fully man, sinless, crucified for our sins, risen from the dead - the only Saviour.",
  },
  {
    title: "Sin & Salvation",
    verse: "Romans 10:9-10",
    body: "Every person is a sinner by birth and by choice. Christ's substitutionary death is God's one remedy, received by grace through faith.",
  },
  {
    title: "The Church",
    verse: "Matthew 16:18",
    body: "A local body of baptized believers united for worship, fellowship, the ordinances, and the Great Commission.",
  },
  {
    title: "Things to Come",
    verse: "I Thessalonians 4:13-18",
    body: "The pre-tribulational rapture of believers, a literal thousand-year reign of Christ, and the final judgment.",
  },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="bg-warm-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <AnimateOnScroll>
            <div className="border border-cream-dark bg-cream p-8 lg:sticky lg:top-28">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-burgundy">
                We Believe
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] text-text-dark text-balance md:text-5xl">
                Our doctrine is not a side note. It shapes everything.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-light">
                We hold firmly to the faith once delivered to the saints. This
                summary is short by design, but the full doctrinal statement is
                available for anyone who wants to read it carefully.
              </p>
              <a
                href="/we-believe"
                className="mt-8 inline-flex items-center gap-2 bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-burgundy-dark"
              >
                Full Doctrinal Statement
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-5">
            {beliefs.map((belief, index) => (
              <AnimateOnScroll key={belief.title} delay={index * 80}>
                <div className="grid gap-5 border border-cream-dark bg-white p-6 shadow-[0_20px_40px_-32px_rgba(20,32,40,0.24)] md:grid-cols-[5.5rem_1fr] md:p-7">
                  <div className="flex items-baseline justify-between md:block">
                    <span className="font-serif text-5xl leading-none text-burgundy/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-amber-dark md:mt-4 md:block">
                      {belief.verse}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-text-dark">
                      {belief.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-body">
                      {belief.body}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
