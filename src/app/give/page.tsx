import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Give from "@/components/Give";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support the ministry of Liberty Baptist Church with a one-time gift or weekly tithe through Givelify.",
};

export default function GivePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Support the Ministry"
        title="Give"
        subtitle="Whether a one-time gift or your ongoing tithe, thank you for partnering with us."
        glow
      />
      <Give />
      <Footer />
    </>
  );
}
