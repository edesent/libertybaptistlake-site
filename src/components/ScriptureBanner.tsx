export default function ScriptureBanner() {
  return (
    <section className="relative py-32 overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(47,153,149,0.22) 0%, rgba(10,14,28,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(232,166,74,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(47,153,149,0.15) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Light rays SVG */}
        <div className="flex justify-center mb-10">
          <svg viewBox="0 0 100 100" className="w-16 h-16" aria-hidden="true">
            <defs>
              <radialGradient id="lampGlow">
                <stop offset="0%" stopColor="#f5cf8c" stopOpacity="1" />
                <stop offset="100%" stopColor="#f5cf8c" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#lampGlow)" opacity="0.6" />
            <path
              d="M35 30 L50 20 L65 30 L65 55 C65 62 58 66 50 66 C42 66 35 62 35 55 Z"
              stroke="#f5cf8c"
              strokeWidth="1.5"
              fill="rgba(245,207,140,0.12)"
              strokeLinejoin="round"
            />
            <path
              d="M45 36 C45 32, 48 30, 50 30 C 52 30, 55 32, 55 36 C 55 42, 50 44, 50 50 C 50 44, 45 42, 45 36 Z"
              fill="#f5cf8c"
            />
            <path d="M50 66 L50 78 M42 78 L58 78" stroke="#f5cf8c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <blockquote>
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-8">
            <span className="text-amber-light">&ldquo;</span>
            But speaking the truth in love, may grow up into him in all
            things, which is the head, even Christ:
            <span className="text-amber-light">&rdquo;</span>
          </p>
          <cite className="text-sm font-semibold tracking-[0.35em] uppercase text-teal-light not-italic">
            &mdash; Ephesians 4:15
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
