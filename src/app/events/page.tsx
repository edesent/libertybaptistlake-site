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
      <Footer />
    </>
  );
}
