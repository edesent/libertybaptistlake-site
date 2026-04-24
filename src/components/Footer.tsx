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
    <footer className="relative overflow-hidden bg-ink-deep pt-20 text-white/72">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,18,23,0.94) 0%, rgba(11,18,23,0.98) 100%), radial-gradient(circle at 18% 18%, rgba(200,141,87,0.12), transparent 20%), repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 84px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-amber-light">
                Liberty Baptist Church
              </p>
              <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">
                A steady, personal place to worship in Lake, Michigan.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/62">
                If you are looking for a church home, coming back after time
                away, or simply wanting a place to hear the Bible preached
                plainly this Sunday, we would be glad to welcome you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="/visit"
                className="inline-flex items-center gap-2 bg-amber px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:bg-amber-light"
              >
                Plan a Visit
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="tel:+19895887039"
                className="inline-flex items-center gap-2 border border-white/16 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                Call the Office
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-12 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center border border-white/15 bg-white/[0.06]">
                <img
                  src="/lbc-logo.png"
                  alt=""
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold text-white">
                  Liberty Baptist
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.26em] text-amber-light">
                  Lake, Michigan
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              6007 Mannsiding Rd
              <br />
              Lake, MI 48632
              <br />
              <a
                href="tel:+19895887039"
                className="text-amber-light transition-colors hover:text-white"
              >
                (989) 588-7039
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-white/58 transition-all hover:pl-1 hover:text-amber-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Service Times
            </h4>
            <ul className="space-y-2.5">
              {serviceTimes.map((service) => (
                <li key={service.label} className="text-sm text-white/58">
                  <span className="block font-semibold text-white/84">
                    {service.label}
                  </span>
                  <span className="text-amber-light">{service.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-serif text-base font-semibold text-white">
              Connect
            </h4>
            <div className="mb-6 flex gap-3">
              <a
                href="https://www.facebook.com/LBCLakeGeorge/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center border border-white/14 bg-white/[0.06] text-white/70 transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="tel:+19895887039"
                aria-label="Phone"
                className="flex h-11 w-11 items-center justify-center border border-white/14 bg-white/[0.06] text-white/70 transition-all hover:-translate-y-0.5 hover:bg-burgundy hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M3 5h4l2 5-2.5 1.5a11 11 0 0 0 6 6L14 15l5 2v4a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="font-serif text-sm italic leading-relaxed text-white/45">
              &quot;Arise, shine; for thy light is come.&quot;
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
              Isaiah 60:1
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-white/30 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Liberty Baptist Church. All
            rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">
            An Independent, KJV Baptist Church
          </p>
        </div>
      </div>
    </footer>
  );
}
