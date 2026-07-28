"use client";

import { useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarEvent = {
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
};

const EVENTS: CalendarEvent[] = [
  { title: "Tent Revival", date: "2026-08-09", time: "6:00 PM – 8:00 PM" },
  { title: "Tent Revival", date: "2026-08-10", time: "7:00 PM – 9:00 PM" },
  { title: "Tent Revival", date: "2026-08-11", time: "10:00 AM – 11:00 AM" },
  { title: "BBBB Fellowship", date: "2026-08-11", time: "10:00 AM – 11:00 AM" },
  { title: "Tent Revival", date: "2026-08-11", time: "7:00 PM – 9:00 PM" },
  { title: "Tent Revival", date: "2026-08-12", time: "10:00 AM – 11:00 AM" },
  { title: "Tent Revival", date: "2026-08-12", time: "7:00 PM – 9:00 PM" },
  { title: "Tent Revival", date: "2026-08-13", time: "10:00 AM – 11:00 AM" },
  { title: "Tent Revival", date: "2026-08-13", time: "7:00 PM – 9:00 PM" },
];

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

export default function EventsCalendar() {
  const today = new Date();

  // Default to the month of the earliest upcoming event, if there is one;
  // otherwise show the current month.
  const upcoming = EVENTS.filter((e) => new Date(`${e.date}T23:59:59`) >= today)
    .sort(
      (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
    );

  type GroupedEvent = { title: string; date: string; times: string[] };
  const upcomingGrouped: GroupedEvent[] = [];
  for (const e of upcoming) {
    const last = upcomingGrouped[upcomingGrouped.length - 1];
    if (last && last.date === e.date && last.title === e.title) {
      last.times.push(e.time);
    } else {
      upcomingGrouped.push({ title: e.title, date: e.date, times: [e.time] });
    }
  }
  const initial = upcoming.length
    ? new Date(`${upcoming[0].date}T00:00:00`)
    : today;

  const [year, setYear] = useState(initial.getFullYear());
  const [month, setMonth] = useState(initial.getMonth());

  const monthName = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const eventsByDate = new Map<string, CalendarEvent[]>();
  for (const e of EVENTS) {
    if (!eventsByDate.has(e.date)) eventsByDate.set(e.date, []);
    eventsByDate.get(e.date)!.push(e);
  }

  function goPrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }

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
            <div className="relative flex items-center justify-between">
              <button
                type="button"
                onClick={goPrevMonth}
                aria-label="Previous month"
                className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                ‹
              </button>
              <div>
                <p className="text-xs font-bold tracking-[0.35em] uppercase text-teal-light mb-2">
                  {year}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-white">
                  {monthName}
                </h3>
              </div>
              <button
                type="button"
                onClick={goNextMonth}
                aria-label="Next month"
                className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                ›
              </button>
            </div>
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
                const isToday =
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();
                const dayEvents =
                  day !== null ? eventsByDate.get(dateKey(year, month, day)) : undefined;
                const hasEvent = !!dayEvents?.length;

                return (
                  <div
                    key={i}
                    title={
                      dayEvents?.length
                        ? Array.from(
                            dayEvents.reduce((map, e) => {
                              if (!map.has(e.title)) map.set(e.title, []);
                              map.get(e.title)!.push(e.time);
                              return map;
                            }, new Map<string, string[]>())
                          )
                            .map(
                              ([title, times]) =>
                                `${title}: Service Time ${times.join(", and ")}`
                            )
                            .join("\n")
                        : undefined
                    }
                    className={`relative aspect-square flex items-center justify-center rounded-lg text-sm ${
                      day === null
                        ? ""
                        : isToday
                        ? "bg-teal text-white font-semibold shadow-[0_4px_14px_rgba(47,153,149,0.35)]"
                        : hasEvent
                        ? "bg-amber/15 text-text-dark font-semibold hover:bg-amber/25 transition-colors"
                        : "text-text-body hover:bg-cream-dark transition-colors"
                    }`}
                  >
                    {day ?? ""}
                    {hasEvent && (
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-1.5 w-1.5 h-1.5 rounded-full ${
                          isToday ? "bg-white" : "bg-amber-dark"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-black/[.06] bg-cream-dark/40 px-8 py-8">
            {upcomingGrouped.length > 0 ? (
              <>
                <p className="font-serif text-xl md:text-2xl font-semibold text-text-dark mb-5 text-center">
                  Upcoming Events
                </p>
                <ul className="space-y-3 max-w-md mx-auto">
                  {upcomingGrouped.map((e, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-4 bg-warm-white rounded-xl px-5 py-3 border border-black/[.04]"
                    >
                      <div>
                        <p className="font-semibold text-text-dark">{e.title}</p>
                        <p className="text-sm text-text-light">
                          {new Date(`${e.date}T00:00:00`).toLocaleDateString(
                            "en-US",
                            { weekday: "short", month: "short", day: "numeric" }
                          )}
                        </p>
                      </div>
                      <div className="text-sm text-text-muted text-right whitespace-nowrap">
                        {e.times.map((t, ti) => (
                          <p key={ti}>{ti === 0 ? `Service Time ${t}` : `and ${t}`}</p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="text-center">
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
