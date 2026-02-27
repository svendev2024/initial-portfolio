"use client";

import { useState, useEffect, useCallback } from "react";
import type { ProjectGalleryItem } from "@/data/content";

const chevronClass = "h-5 w-5";
const AUTO_ADVANCE_MS = 5000;

export default function ProjectGallery({ items }: { items: ProjectGalleryItem[] }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setIndex(next < 0 ? items.length - 1 : next >= items.length ? 0 : next);
    },
    [items.length]
  );

  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);
  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => goNext(), AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [items.length, goNext]);

  if (!items.length) return null;

  return (
    <div className="w-full">
      <div className="relative flex min-h-[360px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] sm:min-h-[420px]">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{
            width: "100%",
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="relative flex shrink-0 basis-full w-full min-w-full">
              {item.cardStyle === "award" ? (
                <div className="relative flex min-h-[360px] w-full flex-col items-center justify-center gap-3 bg-white p-8 text-center sm:min-h-[420px] sm:p-12">
                  <p className=" text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                    WINNER: Best Risk Decisioning Platform
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">{item.date}</p>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
                    <div className="h-9 w-9 shrink-0 bg-gradient-to-br from-amber-400 to-amber-600" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">FinTech Breakthrough Awards</span>
                  </div>
                </div>
              ) : item.image ? (
                <>
                  <div className="relative h-80 w-full sm:h-96">
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                    <p className=" text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/80">{item.date}</p>
                  </div>
                </>
              ) : (
                <div className="flex w-full min-h-[360px] items-center justify-center p-8 sm:min-h-[420px]">
                  <div className="max-w-2xl text-center">
                    <p className=" text-lg font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.date}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-2 text-[var(--foreground)] shadow-sm transition hover:bg-[var(--card-hover)]"
          aria-label="Previous"
        >
          <svg className={chevronClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-2 text-[var(--foreground)] shadow-sm transition hover:bg-[var(--card-hover)]"
          aria-label="Next"
        >
          <svg className={chevronClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-[var(--accent)]" : "w-1.5 bg-[var(--muted-foreground)]/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
