interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  glow?: boolean;
}

export default function PageHeader({ eyebrow, title, subtitle, glow }: Props) {
  return (
    <header className="relative pt-40 pb-20 bg-ink overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(47,153,149,0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(232,166,74,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {glow && (
          <>
            <span
              className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-amber-light/25 blur-3xl scale-110 animate-glow-pulse"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-teal/15 blur-2xl scale-95"
              aria-hidden="true"
            />
          </>
        )}
        <p className="relative text-xs font-bold tracking-[0.35em] uppercase text-teal-light mb-5 animate-fade-up animation-delay-200">
          {eyebrow}
        </p>
        <h1 className="relative font-serif text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-6 animate-fade-up animation-delay-400">
          {title}
        </h1>
        {subtitle && (
          <p className="relative text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-600">
            {subtitle}
          </p>
        )}
        <div className="relative mt-10 flex justify-center animate-fade-up animation-delay-800">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent" />
        </div>
      </div>
    </header>
  );
}
