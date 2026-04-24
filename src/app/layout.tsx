import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif-site",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-site",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lbclakegeorge.com"),
  title: {
    default:
      "Liberty Baptist Church — Independent KJV Baptist Church in Lake, MI",
    template: "%s | Liberty Baptist Church",
  },
  description:
    "Discover the light of Jesus at Liberty Baptist Church in Lake, Michigan. Pastor Doyle Ross III preaches the King James Bible. Sunday 10 AM, 11 AM & 6 PM. Thursday prayer at 6:30 PM. All are welcome.",
  keywords: [
    "Liberty Baptist Church",
    "Baptist church Lake MI",
    "Baptist church Lake George Michigan",
    "Independent Baptist church Clare County",
    "KJV Bible church Central Michigan",
    "Pastor Doyle Ross",
    "church near me Lake Michigan",
    "Mannsiding Road church",
    "Baptist church Clare MI",
  ],
  authors: [{ name: "Liberty Baptist Church" }],
  creator: "Liberty Baptist Church",
  publisher: "Liberty Baptist Church",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Liberty Baptist Church — Lake, MI",
    description:
      "Discover the light of Jesus at Liberty Baptist Church. KJV preaching, traditional worship, and a warm church family in Lake, Michigan.",
    url: "https://www.lbclakegeorge.com",
    type: "website",
    locale: "en_US",
    siteName: "Liberty Baptist Church",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberty Baptist Church — Lake, MI",
    description:
      "Independent KJV Baptist church in Lake, Michigan. All are welcome.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-warm-white">
        {children}
      </body>
    </html>
  );
}
