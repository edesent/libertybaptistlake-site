"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    day: "Sunday",
    title: "Sunday School",
    time: "10:00 AM",
    desc: "Bible classes for every age — children, teens, and adults learning together.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-teal-light">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 18h20M14 24h20M14 30h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Sunday",
    title: "Morning Worship",
    time: "11:00 AM",
    desc: "Traditional hymns, congregational prayer, and preaching from the King James Bible.",
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-amber-light">
        <path d="M24 4 L34 14 L34 32 L38 36 L38 44 L10 44 L10 36 L14 32 L14 14 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M24 12 V22 M19 17 H29" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Sunday",
    title: "Evening Service",
    time: "6:00 PM",
    desc: "A reflective close to the Lord's Day — testimony, singing, and the Word.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-teal-light">
        <path d="M32 24a8 8 0 1 1-8-8 6 6 0 0 0 8 8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M40 12l-2 2M38 24h3M14 40l-2 2M10 30H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    day: "Thursday",
    title: "Prayer & Bible Study",
    time: "6:30 PM",
    desc: "Midweek prayer meeting and verse-by-verse study. A good place to bring burdens.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-teal-light">
        <path d="M24 6v6M12 12l4 4M6 24h6M12 36l4-4M24 36v6M36 36l-4-4M42 24h-6M36 12l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-ink">
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,153,149,0.15) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,166,74,0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03) 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-light mb-4">
            Join us in worship
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5">
            When we gather
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            First Sunday, first time back, or every single week — we&rsquo;d love
            to save you a seat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 90}>
              <div
                className={`relative rounded-2xl p-7 h-full flex flex-col transition-all hover:-translate-y-1.5 ${
                  s.featured
                    ? "bg-gradient-to-br from-amber/[.12] via-amber/[.06] to-transparent border border-amber/30 hover:border-amber/60 hover:shadow-[0_20px_50px_-10px_rgba(232,166,74,0.3)]"
                    : "bg-white/[.04] border border-white/10 hover:border-teal/40 hover:bg-white/[.07] hover:shadow-[0_20px_50px_-10px_rgba(47,153,149,0.25)]"
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-7 bg-amber text-ink text-[0.65rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1 rounded-full shadow-lg">
                    Main Service
                  </span>
                )}
                <div className="mb-5">{s.icon}</div>
                <p className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-white/50 mb-2">
                  {s.day}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                  {s.title}
                </h3>
                <p className={`text-3xl font-bold mb-4 ${s.featured ? "text-amber" : "text-teal-light"}`}>
                  {s.time}
                </p>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-16 flex flex-col md:flex-row gap-6 md:items-center justify-center text-center md:text-left border-t border-white/10 pt-10">
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 mx-auto md:mx-0 text-teal-light flex-shrink-0">
              <path d="M24 4C16 4 10 10.5 10 18c0 10 14 26 14 26s14-16 14-26c0-7.5-6-14-14-14z" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div>
              <p className="text-white/55 text-sm uppercase tracking-[0.2em] mb-1">You&rsquo;ll find us at</p>
              <p className="text-white text-xl font-serif">
                6007 Mannsiding Rd &middot; Lake, MI 48632
              </p>
            </div>
            <a
              href="/visit"
              className="md:ml-auto inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-teal-light hover:text-ink transition-all"
            >
              Get Directions
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
