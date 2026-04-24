"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const beliefs = [
  {
    title: "The Bible",
    verse: "II Timothy 3:16-17",
    body: "The 66 books of Scripture are the inspired, inerrant word of God — preserved for us today in the King James Version.",
  },
  {
    title: "God",
    verse: "Deuteronomy 6:4",
    body: "One eternal, self-existent God, revealed in three Persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    verse: "John 1:1, 14",
    body: "Virgin-born, fully God and fully man, sinless, crucified for our sins, risen from the dead — the only Saviour.",
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
    <section id="beliefs" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-14 items-end">
          <AnimateOnScroll className="lg:col-span-7">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
                We Believe
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-dark leading-[1.05]">
                The sum of all our theology is{" "}
                <em className="italic text-teal">Jesus Christ</em>.
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="lg:col-span-5" delay={200}>
            <p className="text-text-light leading-relaxed">
              We hold firmly to the faith once delivered to the saints. What
              follows is a short summary — the full doctrinal statement is
              available on our We Believe page.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-dark rounded-2xl overflow-hidden border border-cream-dark">
          {beliefs.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 80}>
              <div className="h-full bg-warm-white p-8 md:p-9 hover:bg-white transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-serif text-5xl font-semibold text-teal/20 group-hover:text-teal/40 transition-colors leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-amber-dark">
                    {b.verse}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
                  {b.title}
                </h3>
                <p className="text-[0.95rem] text-text-body leading-relaxed">
                  {b.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="mt-12 text-center">
            <a
              href="/we-believe"
              className="inline-flex items-center gap-2 text-ink font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border-2 border-ink/20 hover:border-ink hover:bg-ink/5 transition-all"
            >
              Read the Full Doctrinal Statement
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
