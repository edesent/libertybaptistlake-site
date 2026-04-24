"use client";

import { useState, useEffect } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isSubPage
          ? "bg-ink/95 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "py-4 bg-gradient-to-b from-ink/70 via-ink/20 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-3 group"
          aria-label="Liberty Baptist Church"
        >
          <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/[.08] border border-white/15 overflow-hidden transition-all group-hover:border-teal-light/50 group-hover:bg-white/15">
            <img
              src="/lbc-logo.png"
              alt=""
              className="w-8 h-8 object-contain brightness-0 invert"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-white text-lg md:text-xl font-semibold tracking-wide">
              Liberty Baptist
              <span className="hidden md:inline text-teal-light/85 font-normal"> Church</span>
            </span>
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 mt-0.5">
              Lake, Michigan
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/85 text-sm font-medium px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/visit"
              className="ml-3 inline-flex items-center gap-2 bg-teal text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all shadow-[0_6px_20px_rgba(47,153,149,0.35)]"
            >
              Plan a Visit
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <div
          className={`fixed lg:hidden top-0 right-0 w-80 h-screen bg-ink pt-24 px-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-white/85 text-base font-medium px-4 py-3 rounded-md hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <a
                href="/visit"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-teal text-white font-semibold px-6 py-3.5 rounded-full hover:bg-teal-light hover:text-ink transition-all"
              >
                Plan a Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
