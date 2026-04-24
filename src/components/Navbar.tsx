"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Services" },
  { href: "#pastor", label: "Our Pastor" },
  { href: "/we-believe", label: "We Believe" },
  { href: "/ministries", label: "Ministries" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    if (!href.startsWith("#")) return;
    if (isSubPage) {
      e.preventDefault();
      window.location.href = `/${href}`;
      return;
    }

    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 88;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const settled = scrolled || isSubPage;

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
          <div
            className={`transition-all duration-300 ${
              settled
                ? "border border-cream-dark bg-warm-white/96 shadow-[0_20px_45px_-28px_rgba(20,32,40,0.35)]"
                : "border border-white/10 bg-ink/82 shadow-[0_22px_55px_-30px_rgba(0,0,0,0.62)] backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-5">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home")}
                className="group flex min-w-0 items-center gap-3"
                aria-label="Liberty Baptist Church"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-white/12 bg-ink">
                  <img
                    src="/lbc-logo.png"
                    alt=""
                    className="h-7 w-7 object-contain brightness-0 invert"
                  />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block truncate font-serif text-lg font-semibold tracking-[0.03em] md:text-xl ${
                      settled ? "text-text-dark" : "text-white"
                    }`}
                  >
                    Liberty Baptist Church
                  </span>
                  <span
                    className={`mt-1 block text-[0.6rem] uppercase tracking-[0.32em] ${
                      settled ? "text-burgundy" : "text-amber-light"
                    }`}
                  >
                    Lake, Michigan
                  </span>
                </span>
              </a>

              <div className="hidden items-center gap-5 xl:flex">
                <p
                  className={`text-[0.64rem] uppercase tracking-[0.26em] ${
                    settled ? "text-text-light" : "text-white/58"
                  }`}
                >
                  Sunday 10 AM, 11 AM, 6 PM
                </p>
                <a
                  href="/visit"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                    settled
                      ? "bg-burgundy text-white hover:bg-burgundy-dark"
                      : "bg-amber text-ink hover:bg-amber-light"
                  }`}
                >
                  Plan a Visit
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 p-2 lg:hidden"
                aria-label="Toggle navigation"
              >
                <span
                  className={`h-0.5 w-6 transition-all ${
                    settled ? "bg-text-dark" : "bg-white"
                  } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-6 transition-all ${
                    settled ? "bg-text-dark" : "bg-white"
                  } ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-6 transition-all ${
                    settled ? "bg-text-dark" : "bg-white"
                  } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </button>
            </div>

            <div className="hidden items-center justify-between border-t border-current/10 px-5 py-2.5 lg:flex">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-3 py-2 text-sm font-medium uppercase tracking-[0.14em] transition-all ${
                        settled
                          ? "text-text-body hover:bg-ink/5 hover:text-text-dark"
                          : "text-white/82 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p
                className={`text-[0.62rem] uppercase tracking-[0.28em] ${
                  settled ? "text-text-light" : "text-white/55"
                }`}
              >
                Independent KJV Baptist Church
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/50 transition-opacity lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[22rem] max-w-[88vw] border-l border-cream-dark bg-warm-white px-7 pt-24 pb-8 text-text-body shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 border border-cream-dark bg-cream px-5 py-5">
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.28em] text-burgundy">
            Gather with us
          </p>
          <div className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span>Sunday School</span>
              <span className="font-semibold text-text-dark">10:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Morning Worship</span>
              <span className="font-semibold text-text-dark">11:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Evening Service</span>
              <span className="font-semibold text-text-dark">6:00 PM</span>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-2">
              <span>Thursday Prayer</span>
              <span className="font-semibold text-text-dark">6:30 PM</span>
            </div>
          </div>
        </div>

        <ul className="flex flex-col border border-cream-dark">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-cream-dark last:border-b-0"
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-dark transition-all hover:bg-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/visit"
          onClick={() => setMenuOpen(false)}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-burgundy-dark"
        >
          Plan a Visit
          <span aria-hidden="true">→</span>
        </a>

        <div className="mt-10 text-sm text-text-light">
          <p>6007 Mannsiding Rd</p>
          <p>Lake, MI 48632</p>
          <a
            href="tel:+19895887039"
            className="mt-3 inline-block text-burgundy transition-colors hover:text-burgundy-dark"
          >
            (989) 588-7039
          </a>
        </div>
      </div>
    </>
  );
}
