"use client";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventsCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthName = today.toLocaleString("en-US", { month: "long" });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section className="py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-warm-white rounded-2xl shadow-[0_20px_60px_rgba(10,14,28,0.08)] border border-black/[.04] overflow-hidden">
          <div className="bg-ink px-8 py-7 text-center relative overflow-hidden">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(47,153,149,0.25) 0%, transparent 60%)",
              }}
            />
            <p className="relative text-xs font-bold tracking-[0.35em] uppercase text-teal-light mb-2">
              {year}
            </p>
            <h3 className="relative font-serif text-3xl md:text-4xl font-semibold text-white">
              {monthName}
            </h3>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-7 gap-1.5 mb-2">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-[0.7rem] font-bold tracking-widest uppercase text-text-muted py-2"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {cells.map((day, i) => {
                const isToday = day === today.getDate();
                return (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                      day === null
                        ? ""
                        : isToday
                        ? "bg-teal text-white font-semibold shadow-[0_4px_14px_rgba(47,153,149,0.35)]"
                        : "text-text-body hover:bg-cream-dark transition-colors"
                    }`}
                  >
                    {day ?? ""}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-black/[.06] bg-cream-dark/40 px-8 py-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber/15 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="w-6 h-6 text-amber-dark"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-serif text-xl md:text-2xl font-semibold text-text-dark mb-2">
              Check back soon for upcoming events
            </p>
            <p className="text-sm text-text-light max-w-md mx-auto leading-relaxed">
              We&rsquo;re putting together our calendar of gatherings, services, and
              special occasions. In the meantime, we&rsquo;d love to see you this
              Sunday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
