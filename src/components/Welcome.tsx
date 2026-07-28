"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function Welcome() {
  return (
    <section id="welcome" className="relative py-28 bg-warm-white overflow-hidden">
      {/* Subtle ornament */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(47,153,149,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
              A Word from Our Pastor
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-dark leading-[1.05] mb-8">
              You are invited to something{" "}
              <em className="italic text-teal">honest</em>,{" "}
              <em className="italic text-teal">simple</em>, and{" "}
              <em className="italic text-teal">welcoming</em>.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center mt-12">
          <AnimateOnScroll className="md:col-span-2" delay={100}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-teal/15 blur-xl opacity-70"
                aria-hidden="true"
              />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(20,24,40,0.35)]">
                <img
                  src="/hero-1.jpg"
                  alt="Pastor Doyle Ross III and his wife Tayler"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-5 py-2.5 shadow-lg border border-cream-dark">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-teal-dark">
                  Pastor Doyle &amp; Tayler Ross
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-3" delay={250}>
            <div>
              <p className="text-xl text-text-dark leading-relaxed mb-5 font-serif">
                &ldquo;We know how heavy life can feel. That&rsquo;s why our
                doors are open every week — so you can sit down, breathe, and
                hear the promise of Jesus preached plainly.&rdquo;
              </p>
              <p className="text-text-body leading-relaxed mb-4">
                Liberty Baptist Church is an Independent, King James Bible
                church in Lake, Michigan. We sing the old hymns, preach the
                whole counsel of God, and make room for families of every
                season — from the young parent holding a fussy baby to the
                neighbor walking in for the very first time.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                If you&rsquo;re looking for a church home, we&rsquo;d love to
                meet you. Come just as you are.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#pastor"
                  className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-dusk hover:-translate-y-0.5 transition-all"
                >
                  Meet Pastor Ross
                </a>
                <a
                  href="/we-believe"
                  className="inline-flex items-center gap-2 text-ink font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border-2 border-ink/20 hover:border-ink hover:bg-ink/5 transition-all"
                >
                  What We Believe →
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
