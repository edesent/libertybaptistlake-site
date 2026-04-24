interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="relative overflow-hidden bg-ink pt-44 pb-26 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,18,23,0.95) 0%, rgba(20,32,40,0.9) 100%), radial-gradient(circle at 50% 22%, rgba(200,141,87,0.16), transparent 22%), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 106px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="border border-white/10 bg-white/[0.04] px-6 py-10 text-center shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)] backdrop-blur-sm md:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-light animate-fade-up animation-delay-200">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.96] text-balance animate-fade-up animation-delay-400 md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/68 text-balance animate-fade-up animation-delay-600 md:text-xl">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex justify-center animate-fade-up animation-delay-800">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
}
