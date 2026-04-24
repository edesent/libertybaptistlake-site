import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Pastor from "@/components/Pastor";
import Beliefs from "@/components/Beliefs";
import ScriptureBanner from "@/components/ScriptureBanner";
import Ministries from "@/components/Ministries";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Liberty Baptist Church",
  alternateName: "Liberty Baptist Lake George",
  url: "https://www.lbclakegeorge.com",
  logo: "https://www.lbclakegeorge.com/lbc-logo.png",
  description:
    "Independent, KJV Bible-preaching Baptist church in Lake, Michigan. Traditional hymns, warm fellowship, family-centered worship.",
  telephone: "+1-989-588-7039",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6007 Mannsiding Rd",
    addressLocality: "Lake",
    addressRegion: "MI",
    postalCode: "48632",
    addressCountry: "US",
  },
  sameAs: ["https://www.facebook.com/LBCLakeGeorge/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "18:30",
      closes: "20:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Pastor />
      <Beliefs />
      <ScriptureBanner />
      <Ministries />
      <VisitCTA />
      <Footer />
    </>
  );
}
