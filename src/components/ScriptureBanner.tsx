export default function ScriptureBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,18,23,0.94) 0%, rgba(20,32,40,0.9) 100%), radial-gradient(circle at 50% 28%, rgba(200,141,87,0.18), transparent 24%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-[0_26px_60px_-36px_rgba(0,0,0,0.7)] backdrop-blur-sm md:px-12 md:py-14">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.34em] text-amber-light">
            Psalm 119:105
          </p>
          <blockquote className="mt-7">
            <p className="font-serif text-3xl leading-[1.08] tracking-tight text-balance md:text-5xl lg:text-6xl">
              Thy word is a <em className="italic text-amber-light">lamp</em>{" "}
              unto my feet, and a{" "}
              <em className="italic text-amber-light">light</em> unto my path.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
