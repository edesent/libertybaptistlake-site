"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    title: "Children",
    age: "Birth — 5th Grade",
    desc: "Loving nursery care, preschool and elementary Sunday School, and Children's Church during the morning service.",
    verse: "Matthew 19:14",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <path d="M32 12c-6 0-10 4-10 9s4 9 10 9 10-4 10-9-4-9-10-9zM16 52c0-9 7-16 16-16s16 7 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="28" cy="21" r="1.3" fill="currentColor" />
        <circle cx="36" cy="21" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Youth & Teens",
    age: "Middle & High School",
    desc: "Bible class Sundays at 10 AM and Wednesdays at 6 PM — an environment that builds faith, character, and friendships in Christ.",
    verse: "I Timothy 4:12",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <path d="M12 22 L32 10 L52 22 L52 48 L12 48 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26 48 L26 34 L38 34 L38 48" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Adults",
    age: "All Ages",
    desc: "Sunday School at 10 AM and weekly Bible studies for men and women focused on Scripture, fellowship, and spiritual growth.",
    verse: "Matthew 18:20",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <rect x="10" y="16" width="44" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 16 V48 M18 26 H28 M36 26 H46 M18 34 H28 M36 34 H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ladies",
    age: "Monthly",
    desc: "Monthly ladies' fellowship — a chance to laugh, pray, and dig into the Word together around the table.",
    verse: "Titus 2:3-5",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <path d="M32 8 C 40 8, 46 14, 46 22 C 46 30, 40 34, 32 34 C 24 34, 18 30, 18 22 C 18 14, 24 8, 32 8 Z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 56 L 20 40 L 44 40 L 50 56 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Teen Camps",
    age: "Summer & Winter",
    desc: "Our teens attend seasonal camps — a week away from the ordinary to hear from God, make lifelong memories, and come home changed.",
    verse: "Ecclesiastes 12:1",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <path d="M8 52 L 32 12 L 56 52 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 12 L 32 52" stroke="currentColor" strokeWidth="2" />
        <path d="M22 52 L 32 40 L 42 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Missions",
    age: "Around the World",
    desc: "We support missionaries on every populated continent through prayer, giving, and our yearly missions conference.",
    verse: "Mark 16:15",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 text-teal">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" />
        <ellipse cx="32" cy="32" rx="10" ry="24" stroke="currentColor" strokeWidth="2" />
        <path d="M8 32 H56 M32 8 V56" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
            A place for everyone
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-dark mb-5">
            Our Ministries
          </h2>
          <p className="text-lg text-text-light">
            Whatever season you&rsquo;re in, there&rsquo;s a Bible class, a
            fellowship, or a seat waiting for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <AnimateOnScroll key={m.title} delay={i * 80}>
              <div className="group h-full bg-warm-white rounded-2xl p-8 border border-cream-dark hover:border-teal/40 hover:shadow-[0_20px_50px_-20px_rgba(47,153,149,0.3)] hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-teal/5 group-hover:bg-teal/10 transition-colors">
                    {m.icon}
                  </div>
                  <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-text-muted">
                    {m.age}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
                  {m.title}
                </h3>
                <p className="text-[0.95rem] text-text-body leading-relaxed mb-5">
                  {m.desc}
                </p>
                <p className="font-serif italic text-sm text-teal-dark">
                  &mdash; {m.verse}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
