import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import VisitCTA from "@/components/VisitCTA";

export const metadata: Metadata = {
  title: "Plan a Visit",
  description:
    "Planning your first visit to Liberty Baptist Church? Here's everything you need to know — what to expect, when we gather, and how to find us.",
};

const expectations = [
  {
    title: "When you arrive",
    body:
      "Pull into our lot on Mannsiding Road. Someone will be at the door to greet you — and if you have kids, we'll help you find the nursery or classroom.",
  },
  {
    title: "What to wear",
    body:
      "Come just as you are. Most folks dress nicely without being fancy — but jeans and a flannel will never turn a head.",
  },
  {
    title: "What the service looks like",
    body:
      "Congregational hymn singing, an opening prayer, special music from our church family, and Bible preaching from the King James Bible. About 75 minutes.",
  },
  {
    title: "About your kids",
    body:
      "We love having children in the service. There's also nursery for little ones (birth–2½) and Children's Church during the message for ages 3 through 5th grade.",
  },
];

export default function VisitPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Plan Your Visit"
        title="Come and see."
        subtitle="Whether it's your first time in a church in thirty years or your first time ever — we're glad you're thinking about Liberty."
      />

      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-teal-dark mb-4">
              What to Expect
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark">
              A few things to put you at ease
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {expectations.map((e, i) => (
              <div
                key={e.title}
                className="bg-cream rounded-2xl p-8 border border-cream-dark hover:border-teal/30 hover:shadow-md transition-all"
              >
                <p className="font-serif text-5xl font-semibold text-teal/25 leading-none mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                  {e.title}
                </h3>
                <p className="text-text-body leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisitCTA />
      <Footer />
    </>
  );
}
