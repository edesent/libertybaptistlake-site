import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "We Believe — Doctrinal Statement",
  description:
    "The doctrinal statement of Liberty Baptist Church: the Bible, God, the Church, Jesus Christ, sin & salvation, and things to come.",
};

type Article = {
  num: string;
  title: string;
  body: string;
  verses: string;
};

const articles: Article[] = [
  {
    num: "01",
    title: "The Bible",
    body:
      "We believe that the Scriptures of the Old and New Testaments (the 66 books) are the inspired, inerrant Word of God — that God has supernaturally preserved His Word through the centuries and that the King James Version is the preserved Word of God for the English-speaking people.",
    verses: "Psalm 12:6–7 · II Timothy 3:15–17 · I Peter 1:23–25 · II Peter 1:19–21",
  },
  {
    num: "02",
    title: "God",
    body:
      "We believe in one living, eternal, self-existent God, who reveals Himself to man in three distinct, yet co-equal and co-eternal Persons: the Father, the Son (Jesus Christ), and the Holy Spirit.",
    verses: "Deuteronomy 6:4 · I Timothy 1:17 · James 1:17 · I John 4:4",
  },
  {
    num: "03",
    title: "Jesus Christ",
    body:
      "We believe that Jesus Christ is fully God and fully man, eternally divine, virgin-born, sinless in life, substitutionary in death, bodily resurrected, ascended to the Father, and coming again in power and glory. He is the only Saviour of the world.",
    verses:
      "Isaiah 7:14 · Matthew 1:25 · Luke 1:26–35 · John 1:1, 14 · Romans 3:19–25 · Philippians 2:5–11 · Hebrews 7:26 · I Peter 1:19",
  },
  {
    num: "04",
    title: "Sin & Salvation",
    body:
      "We believe that all men have inherited a sinful nature from Adam and are by nature and choice separated from God. Salvation is the gift of God, received by grace through faith in the finished work of Jesus Christ alone — not of works, lest any man should boast. Those who reject Christ will bear eternal consequences.",
    verses:
      "Genesis 5:1–5 · Romans 3:10–23, 5:6–12, 6:23, 10:9–10 · Ephesians 2:8–9 · Titus 3:5–6 · Revelation 20:11–14",
  },
  {
    num: "05",
    title: "The Church",
    body:
      "We believe that the local church is composed of saved, baptized believers who voluntarily unite for worship, fellowship, observance of the ordinances (baptism and the Lord's Supper), edification, and the Great Commission. The two Scriptural offices are the pastor and the deacon.",
    verses:
      "Matthew 16:16–18 · Acts 2:41–43, 20:28 · Ephesians 1:12–14, 5:25–30 · I Timothy 3:4–15",
  },
  {
    num: "06",
    title: "Things to Come",
    body:
      "We believe in the pre-tribulational, pre-millennial return of Jesus Christ for His Church; a literal seven-year tribulation; His bodily return to the earth to establish a literal thousand-year reign; and the final judgment and eternal state. We believe these truths should motivate us to live holy and purposeful lives.",
    verses:
      "I Corinthians 15:51–58 · I Thessalonians 4:13–18, 5:1–9 · Revelation 19–22",
  },
];

export default function WeBelievePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Our Doctrine"
        title="We Believe"
        subtitle="The sum of all our theological beliefs is Jesus Christ. What follows is a summary of the truths He has given us in His Word."
        glow
      />

      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {articles.map((a) => (
              <article key={a.num} className="relative pl-8 md:pl-16">
                <span
                  className="absolute top-0 left-0 font-serif text-6xl md:text-7xl font-semibold text-teal/15 leading-none select-none"
                  aria-hidden="true"
                >
                  {a.num}
                </span>
                <div className="border-l-2 border-teal/25 pl-6 md:pl-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-4">
                    {a.title}
                  </h2>
                  <p className="text-[1.05rem] text-text-body leading-relaxed mb-5">
                    {a.body}
                  </p>
                  <p className="text-[0.8rem] font-bold tracking-[0.18em] uppercase text-amber-dark">
                    {a.verses}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 p-10 md:p-12 rounded-[1.5rem] bg-ink text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(47,153,149,0.25) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed mb-4">
                &ldquo;Jesus saith unto him, I am the way, the truth, and the life:
                no man cometh unto the Father, but by me.&rdquo;
              </p>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-teal-light">
                &mdash; John 14:6
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
