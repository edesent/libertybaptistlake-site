import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import EventsCalendar from "@/components/EventsCalendar";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay up to date with upcoming gatherings, services, and special occasions at Liberty Baptist Church.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Save the Date"
        title="Events"
        subtitle="Gatherings, services, and special occasions — all in one place."
        glow
      />
      <EventsCalendar />

      <section className="pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="p-10 md:p-12 rounded-[1.5rem] bg-ink text-center relative overflow-hidden">
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
                &ldquo;Not forsaking the assembling of ourselves together, as
                the manner of some is; but exhorting one another: and so much
                the more, as ye see the day approaching.&rdquo;
              </p>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-teal-light">
                &mdash; Hebrews 10:25
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
