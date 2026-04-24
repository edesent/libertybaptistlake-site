"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ADDRESS = "6007 Mannsiding Rd, Lake, MI 48632";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function VisitCTA() {
  return (
    <section id="visit" className="py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
            Come as you are
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-dark mb-5">
            Plan your first visit
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            No reservation needed, no dress code to worry about. Just come &mdash;
            we&rsquo;ll greet you at the door.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          <AnimateOnScroll className="md:col-span-2">
            <div className="h-full bg-ink rounded-[1.5rem] p-10 flex flex-col shadow-[0_30px_70px_-20px_rgba(20,24,40,0.35)] relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(47,153,149,0.3) 0%, transparent 70%)" }}
                aria-hidden="true"
              />

              <div className="relative flex-1">
                <div className="space-y-7">
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-teal-light mb-2">
                      Address
                    </p>
                    <p className="text-white text-lg leading-snug">
                      6007 Mannsiding Rd<br />
                      Lake, MI 48632
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-teal-light mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+19895887039"
                      className="text-white text-lg hover:text-teal-light transition-colors"
                    >
                      (989) 588-7039
                    </a>
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-teal-light mb-2">
                      Service Times
                    </p>
                    <ul className="space-y-1.5 text-white/85 text-[0.95rem]">
                      <li className="flex justify-between">
                        <span>Sunday School</span>
                        <span className="text-amber-light font-semibold">10:00 AM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Morning Worship</span>
                        <span className="text-amber-light font-semibold">11:00 AM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Evening Service</span>
                        <span className="text-amber-light font-semibold">6:00 PM</span>
                      </li>
                      <li className="flex justify-between border-t border-white/10 pt-1.5 mt-1.5">
                        <span>Thursday Prayer</span>
                        <span className="text-amber-light font-semibold">6:30 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex flex-col gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-teal text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+19895887039"
                  className="block text-center text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border border-white/25 hover:bg-white/10 hover:border-white/60 transition-all"
                >
                  Call the Office
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-3" delay={150}>
            <div className="h-full rounded-[1.5rem] overflow-hidden shadow-lg aspect-[4/3] md:aspect-auto bg-cream-dark">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Liberty Baptist Church"
                className="border-0 min-h-[400px] md:min-h-full"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={300}>
          <div className="mt-14 text-center">
            <p className="font-serif italic text-lg text-text-light mb-4">
              &ldquo;If you cannot come, we&rsquo;ll come to you. If you have
              questions, just ask. We mean it.&rdquo;
            </p>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-teal-dark">
              &mdash; Pastor Doyle Ross III
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
