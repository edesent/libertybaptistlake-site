const visitNotes = [
  "Traditional hymns and heartfelt congregational singing",
  "Plain preaching from the King James Bible",
  "A warm church family with room for kids and first-time guests",
];

const serviceCards = [
  { label: "Sunday School", time: "10:00 AM" },
  { label: "Morning Worship", time: "11:00 AM" },
  { label: "Evening Service", time: "6:00 PM" },
  { label: "Thursday Prayer", time: "6:30 PM" },
];

export default function Hero() {
  return (
    <header
      id="home"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,18,23,0.93) 0%, rgba(20,32,40,0.88) 44%, rgba(11,18,23,0.98) 100%), radial-gradient(circle at 18% 18%, rgba(200,141,87,0.16), transparent 22%), radial-gradient(circle at 84% 18%, rgba(111,138,131,0.12), transparent 24%), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 106px)",
          }}
        />
        <div
          className="absolute left-[8%] top-[22%] h-56 w-56 rounded-full bg-burgundy/18 blur-3xl animate-drift-float"
          aria-hidden="true"
        />
        <div
          className="absolute right-[8%] top-[14%] h-72 w-72 rounded-full bg-amber/16 blur-3xl animate-glow-pulse"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-34 pb-16 md:pt-38 lg:pt-32">
        <div className="grid w-full gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.34em] text-amber-light">
                A traditional church home in Lake, Michigan
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.92] text-balance md:text-7xl xl:text-[6.1rem]">
                Find a steadier,
                <span className="mt-2 block text-amber-light">
                  warmer place to worship.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/74 md:text-xl">
                Old hymns. Plain Bible preaching. A sincere church family on the
                back roads of central Michigan where neighbors can come in,
                breathe, and hear the hope of Jesus clearly.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/visit"
                className="inline-flex items-center gap-2 bg-amber px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:-translate-y-0.5 hover:bg-amber-light"
              >
                Plan Your Visit
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/18 bg-white/[0.05] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                Service Times
              </a>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
              <div className="border border-white/12 bg-white/[0.05] p-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-amber-light">
                  What to expect
                </p>
                <div className="mt-5 space-y-4">
                  {visitNotes.map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="leading-relaxed text-white/72">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/12 bg-burgundy/20 p-6">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.3em] text-amber-light">
                  Need help first?
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/72">
                  Call ahead and we will make your first Sunday easier.
                </p>
                <a
                  href="tel:+19895887039"
                  className="mt-5 block font-serif text-3xl text-white transition-colors hover:text-amber-light"
                >
                  (989) 588-7039
                </a>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/48">
                  6007 Mannsiding Rd
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 hidden h-28 w-28 border border-white/12 animate-sway-soft lg:block" />
            <div className="absolute -right-4 bottom-10 hidden h-36 w-36 border border-amber/30 lg:block" />

            <div className="relative ml-auto max-w-[37rem]">
              <div className="grid gap-5 md:grid-cols-[0.72fr_0.28fr]">
                <div className="relative overflow-hidden border-[10px] border-cream bg-cream shadow-[0_40px_90px_-44px_rgba(0,0,0,0.82)]">
                  <img
                    src="/hero-2.jpg"
                    alt="Pastor Doyle Ross III and family"
                    className="aspect-[4/4.25] w-full object-cover"
                  />
                </div>
                <div className="grid gap-5 md:grid-rows-[1fr_auto]">
                  <div className="overflow-hidden border border-white/12 bg-white/8 shadow-[0_26px_60px_-34px_rgba(0,0,0,0.55)]">
                    <img
                      src="/hero-1.jpg"
                      alt="Pastor Doyle Ross III and Tayler Ross"
                      className="aspect-[4/4.7] w-full object-cover"
                    />
                  </div>
                  <div className="border border-white/12 bg-ink-deep/72 p-4 backdrop-blur-sm">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-amber-light">
                      Meet Pastor Ross
                    </p>
                    <p className="mt-3 font-serif text-2xl text-white">
                      Simple preaching.
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">
                      Real warmth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 ml-auto w-full max-w-xs border border-cream-dark bg-warm-white p-5 text-text-dark shadow-[0_24px_50px_-30px_rgba(0,0,0,0.48)] md:-mt-20 md:mr-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-burgundy">
                  This week at Liberty
                </p>
                <div className="mt-4 space-y-3">
                  {serviceCards.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-end justify-between gap-4 border-b border-ink/8 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-text-light">{item.label}</span>
                      <span className="font-serif text-2xl text-text-dark">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 justify-center">
          <a
            href="#welcome"
            className="flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-amber-light"
          >
            <span>Scroll</span>
            <div className="h-4 w-4 rotate-45 border-r-2 border-b-2 border-white/50 animate-scroll-bounce" />
          </a>
        </div>
      </div>
    </header>
  );
}
