export default function Hero() {
  // Procedurally distributed stars — gives the hero a night-sky atmosphere
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.6,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
  }));

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background — layered night scene */}
      <div className="absolute inset-0 z-0">
        <img
          src="/church-image-of-lake-george-mi.webp"
          alt="Liberty Baptist Church in Lake George, Michigan"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,8,16,0.78) 0%, rgba(16,22,47,0.74) 42%, rgba(5,8,16,0.92) 100%), radial-gradient(ellipse 90% 70% at 50% 110%, rgba(31,46,74,0.72) 0%, rgba(16,22,47,0.58) 45%, rgba(5,8,16,0.88) 100%)",
          }}
        />
        {/* Aurora / warm glow from below — the "light" */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 120%, rgba(232,166,74,0.22) 0%, rgba(47,153,149,0.1) 40%, transparent 70%)",
          }}
        />
        {/* Distant horizon hills silhouette — a nod to Lake, MI */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1920 340"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hills-back" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(14, 24, 50, 0.9)" />
              <stop offset="100%" stopColor="rgba(5, 10, 24, 1)" />
            </linearGradient>
            <linearGradient id="hills-front" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050810" />
              <stop offset="100%" stopColor="#020309" />
            </linearGradient>
          </defs>
          <path
            d="M0 220 C 240 180, 480 240, 720 200 C 960 160, 1200 230, 1440 200 C 1680 170, 1800 210, 1920 200 L 1920 340 L 0 340 Z"
            fill="url(#hills-back)"
          />
          <path
            d="M0 280 C 320 250, 560 310, 880 280 C 1200 250, 1440 300, 1720 280 C 1820 272, 1880 280, 1920 280 L 1920 340 L 0 340 Z"
            fill="url(#hills-front)"
          />
        </svg>

        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((s) => (
            <span
              key={s.id}
              className="absolute rounded-full bg-amber-light animate-twinkle"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
                boxShadow: "0 0 4px rgba(245,207,140,0.8)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-20">
        <div className="flex justify-center animate-fade-up animation-delay-600">
          <img
            src="/speaking-the-truth-in-love.png"
            alt="Liberty Baptist Church"
            className="w-full max-w-[18rem] md:max-w-[24rem] lg:max-w-[28rem] object-contain drop-shadow-[0_0_40px_rgba(5,8,16,0.45)]"
          />
        </div>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-teal-light to-transparent mx-auto my-8 animate-fade-up animation-delay-800" />

        <h1 className="font-serif text-4xl md:text-6xl font-semibold uppercase tracking-[0.12em] text-white/88 animate-fade-up animation-delay-900">
          LIFE CAN BE DARK
        </h1>

        <p className="font-serif text-xl md:text-3xl italic text-white/90 leading-relaxed max-w-2xl mx-auto mt-5 mb-10 animate-fade-up animation-delay-1000">
          Discover the <em className="not-italic font-semibold text-amber-light">Light of Jesus</em> Here.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-up animation-delay-1100">
          <a
            href="/visit"
            className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all shadow-[0_10px_40px_rgba(47,153,149,0.45)]"
          >
            Save Me a Seat
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#services"
            className="inline-block text-white font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full border border-white/40 hover:bg-white/10 hover:border-white/80 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
          >
            Service Times
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up animation-delay-1300">
        <a
          href="#welcome"
          className="flex flex-col items-center gap-2 text-white/50 text-[0.65rem] tracking-[0.3em] uppercase hover:text-teal-light transition-colors"
        >
          <span>Scroll</span>
          <div className="w-4 h-4 border-r-2 border-b-2 border-white/50 rotate-45 animate-scroll-bounce" />
        </a>
      </div>
    </header>
  );
}
