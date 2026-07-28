import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Ministries from "@/components/Ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "From nursery to seniors, from Sunday School to summer camps — find a place to belong at Liberty Baptist Church.",
};

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Get Connected"
        title="Ministries"
        subtitle="Every age, every season. Here's where we grow together."
        glow
      />
      <Ministries />
      <Footer />
    </>
  );
}
