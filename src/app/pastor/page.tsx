import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Pastor — Doyle Ross III",
  description:
    "Meet Pastor Doyle Ross III, Senior Pastor of Liberty Baptist Church in Lake, Michigan, and his wife Tayler.",
};

export default function PastorPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Our Pastor"
        title="Doyle Ross III"
        subtitle="Shepherd, husband, and father — serving Liberty Baptist Church since May 2021."
      />

      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(20,24,40,0.35)]">
                  <img src="/hero-1.jpg" alt="Pastor Doyle Ross III and Tayler Ross" className="w-full" />
                </div>
                <div className="mt-6 p-6 bg-cream rounded-2xl border border-cream-dark">
                  <p className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-teal-dark mb-3">
                    At a glance
                  </p>
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-text-light">Senior Pastor since</dt>
                      <dd className="text-text-dark font-semibold">May 2021</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-light">Ordained</dt>
                      <dd className="text-text-dark font-semibold">Oct 2016</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-light">Wife</dt>
                      <dd className="text-text-dark font-semibold">Tayler</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-light">Children</dt>
                      <dd className="text-text-dark font-semibold">Four</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <article className="md:col-span-7 prose-like">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-6 leading-tight">
                A simple calling, a steady walk.
              </h2>
              <div className="space-y-5 text-text-body leading-relaxed text-[1.05rem]">
                <p>
                  Pastor Ross accepted Jesus Christ as his Saviour at an early
                  age and first sensed a call to the ministry when he was
                  thirteen years old. That call never wavered.
                </p>
                <p>
                  He began preparing for ministry with a year of study at Grace
                  Baptist College in Gaylord, Michigan, and then completed a
                  four-year program at{" "}
                  <strong className="text-text-dark">
                    Midstate Baptist Bible Institute
                  </strong>{" "}
                  (2012&ndash;2016), where he was trained in expositional
                  preaching and the work of the local church. He was ordained
                  to the Gospel ministry on October 31, 2016.
                </p>
                <p>
                  From 2017 to 2021 he served as Assistant Pastor at Highland
                  Hills Baptist Church in Highland, Michigan, learning the
                  rhythms of pastoral work alongside families week after week.
                  Then in May of 2021 he was called to lead Liberty Baptist
                  Church as Senior Pastor &mdash; a call the Ross family
                  accepted with prayer and joy.
                </p>
                <h3 className="font-serif text-2xl font-semibold text-text-dark mt-10 mb-4">
                  His Family
                </h3>
                <p>
                  Pastor Ross married{" "}
                  <strong className="text-text-dark">Tayler</strong> on August
                  13, 2016. Tayler holds a bachelor&rsquo;s degree in secondary
                  education from Pensacola Christian College (2015). Together
                  they are raising four children &mdash;{" "}
                  <strong className="text-text-dark">Doyle IV, Vera, Kezia,</strong>{" "}
                  and <strong className="text-text-dark">Boaz</strong>.
                </p>
                <p>
                  If you&rsquo;d like to talk with Pastor Ross, he&rsquo;d
                  love to meet you. You can reach the church office at{" "}
                  <a href="tel:+19895887039" className="text-teal-dark font-semibold hover:text-teal transition-colors">
                    (989) 588-7039
                  </a>
                  , or simply come a few minutes early on a Sunday and he will
                  find you.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/visit"
                  className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all"
                >
                  Plan a Visit
                </a>
                <a
                  href="/we-believe"
                  className="inline-flex items-center gap-2 text-ink font-semibold text-sm tracking-wide uppercase px-7 py-3.5 rounded-full border-2 border-ink/20 hover:border-ink hover:bg-ink/5 transition-all"
                >
                  What We Believe →
                </a>
              </div>
            </article>
          </div>

          <div className="rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(20,24,40,0.35)]">
            <img src="/hero-2.jpg" alt="The Ross family" className="w-full" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
