const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#welcome", label: "Welcome" },
  { href: "#services", label: "Service Times" },
  { href: "#pastor", label: "Our Pastor" },
  { href: "/we-believe", label: "We Believe" },
  { href: "/ministries", label: "Ministries" },
  { href: "/visit", label: "Plan a Visit" },
];

const serviceTimes = [
  { label: "Sunday School", time: "10:00 AM" },
  { label: "Morning Worship", time: "11:00 AM" },
  { label: "Evening Service", time: "6:00 PM" },
  { label: "Thursday Prayer", time: "6:30 PM" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-deep text-white/70 pt-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(47,153,149,0.18) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[.08]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/[.08] border border-white/15">
                <img src="/lbc-logo.png" alt="" className="w-10 h-10 object-contain brightness-0 invert" />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-white text-lg font-semibold">
                  Liberty Baptist
                </p>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-teal-light/80 mt-1">
                  Lake, Michigan
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              6007 Mannsiding Rd<br />
              Lake, MI 48632<br />
              <a href="tel:+19895887039" className="text-teal-light hover:text-white transition-colors">
                (989) 588-7039
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Visit</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal-light hover:pl-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Gather</h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((s) => (
                <li key={s.label} className="text-sm text-white/55">
                  <span className="block text-white/85 font-semibold">{s.label}</span>
                  <span className="text-amber-light">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/LBCLakeGeorge/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-teal hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="tel:+19895887039"
                aria-label="Phone"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-teal hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M3 5h4l2 5-2.5 1.5a11 11 0 0 0 6 6L14 15l5 2v4a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="font-serif italic text-sm text-white/45 leading-relaxed">
              &ldquo;Arise, shine; for thy light is come.&rdquo;
            </p>
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-white/30 mt-2">
              &mdash; Isaiah 60:1
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Liberty Baptist Church. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">
            An Independent, KJV Baptist Church
          </p>
        </div>
      </div>
    </footer>
  );
}
