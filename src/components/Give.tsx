const GIVELIFY_URL =
  "https://www.givelify.com/donate/liberty-baptist-church-lake-mi-2j7wy5MTUyNzc2NQ==/donation/amount";

export default function Give() {
  return (
    <>
      {/* Enticing graphic banner */}
      <section className="relative bg-ink overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,166,74,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(47,153,149,0.18) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="relative inline-flex items-center justify-center mb-8">
            <span
              className="absolute inset-0 rounded-full bg-amber-light/25 blur-3xl scale-150 animate-glow-pulse"
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 160 160"
              className="relative w-36 h-36 md:w-44 md:h-44 drop-shadow-[0_0_35px_rgba(245,207,140,0.4)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="give-heart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f5cf8c" />
                  <stop offset="100%" stopColor="#e8a64a" />
                </linearGradient>
                <linearGradient id="give-hands" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5ec2be" />
                  <stop offset="100%" stopColor="#2f9995" />
                </linearGradient>
              </defs>
              {/* radiant rays */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <line
                    key={i}
                    x1="80"
                    y1="80"
                    x2="80"
                    y2="14"
                    stroke="#f5cf8c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.35"
                    transform={`rotate(${angle} 80 80)`}
                  />
                );
              })}
              {/* cupped hands */}
              <path
                d="M28 96c6-14 20-22 30-16 4 2 6 6 6 6s2-4 6-6c10-6 24 2 30 16 5 12-2 26-18 34-8 4-14 8-18 12-4-4-10-8-18-12-16-8-23-22-18-34z"
                fill="url(#give-hands)"
                opacity="0.9"
              />
              {/* heart */}
              <path
                d="M80 100c-16-10-26-20-26-32a15 15 0 0 1 26-10.5A15 15 0 0 1 106 68c0 12-10 22-26 32z"
                fill="url(#give-heart)"
              />
            </svg>
          </div>

          <p className="text-xs font-bold tracking-[0.35em] uppercase text-teal-light mb-4">
            Cheerful Giving
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-5">
            Your Generosity Changes Lives
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Every gift — big or small — helps carry the light of Jesus into
            our church family and our community. Thank you for sowing
            cheerfully.
          </p>
        </div>
      </section>

      {/* Giving options */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* One-Time Gift */}
            <div className="bg-warm-white rounded-2xl border border-black/[.04] shadow-[0_20px_60px_rgba(10,14,28,0.06)] p-9 flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/15 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="w-7 h-7 text-amber-dark"
                >
                  <rect x="3" y="8" width="18" height="13" rx="2" />
                  <path d="M3 8l2-4h14l2 4M12 8v13M8 4v4M16 4v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
                One-Time Gift
              </h3>
              <p className="text-sm text-text-light leading-relaxed mb-8">
                Give a single gift toward a special offering, missions, or
                simply as the Lord leads you today.
              </p>
              <a
                href={GIVELIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(47,153,149,0.35)]"
              >
                Give Now
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Monthly Tithe */}
            <div className="bg-ink rounded-2xl border border-white/[.06] shadow-[0_20px_60px_rgba(10,14,28,0.25)] p-9 flex flex-col items-center text-center relative overflow-hidden">
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(47,153,149,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/20 mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="w-7 h-7 text-teal-light"
                >
                  <path d="M17 2l4 4-4 4M3 12v-2a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 12v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="relative font-serif text-2xl font-semibold text-white mb-3">
                Monthly Tithe
              </h3>
              <p className="relative text-sm text-white/60 leading-relaxed mb-8">
                Set up recurring giving to faithfully support the ongoing
                ministry and mission of Liberty Baptist Church.
              </p>
              <a
                href={GIVELIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-auto inline-flex items-center gap-2 bg-amber text-ink font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-amber-light hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(232,166,74,0.35)]"
              >
                Give Now
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted mt-10 max-w-md mx-auto leading-relaxed">
            You&rsquo;ll be taken to our secure Givelify giving page, where you
            can choose a one-time or recurring gift and select your amount.
          </p>
        </div>
      </section>
    </>
  );
}
