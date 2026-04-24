"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const ministries = [
  {
    title: "Children",
    age: "Birth - 5th Grade",
    desc: "Loving nursery care, preschool and elementary Sunday School, and Children's Church during the morning service.",
    verse: "Matthew 19:14",
  },
  {
    title: "Youth & Teens",
    age: "Middle & High School",
    desc: "Bible class Sundays at 10 AM and Wednesdays at 6 PM - an environment that builds faith, character, and friendships in Christ.",
    verse: "I Timothy 4:12",
  },
  {
    title: "Adults",
    age: "All Ages",
    desc: "Sunday School at 10 AM and weekly Bible studies for men and women focused on Scripture, fellowship, and spiritual growth.",
    verse: "Matthew 18:20",
  },
  {
    title: "Ladies",
    age: "Monthly",
    desc: "Monthly ladies' fellowship - a chance to laugh, pray, and dig into the Word together around the table.",
    verse: "Titus 2:3-5",
  },
  {
    title: "Teen Camps",
    age: "Summer & Winter",
    desc: "Our teens attend seasonal camps - a week away from the ordinary to hear from God, make lifelong memories, and come home changed.",
    verse: "Ecclesiastes 12:1",
  },
  {
    title: "Missions",
    age: "Around the World",
    desc: "We support missionaries on every populated continent through prayer, giving, and our yearly missions conference.",
    verse: "Mark 16:15",
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <AnimateOnScroll>
            <div className="border border-cream-dark bg-warm-white p-8 lg:sticky lg:top-28">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-burgundy">
                A place for everyone
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.02] text-text-dark text-balance md:text-5xl">
                Ministries that make room for every season of life.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-light">
                From nursery to camps to adult Bible study, Liberty is built to
                help people grow in Christ together, not just attend a service
                and disappear.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2">
            {ministries.map((ministry, index) => (
              <AnimateOnScroll key={ministry.title} delay={index * 80}>
                <div className="h-full border border-cream-dark bg-warm-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(20,32,40,0.28)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.64rem] font-bold uppercase tracking-[0.26em] text-burgundy">
                        {ministry.age}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl text-text-dark">
                        {ministry.title}
                      </h3>
                    </div>
                    <span className="font-serif text-4xl leading-none text-amber/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-text-body">
                    {ministry.desc}
                  </p>
                  <p className="mt-5 text-sm italic text-text-light">
                    {ministry.verse}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
