"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { site } from "@/data/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
];

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") document.documentElement.classList.add("dark");
    else if (stored === "light") document.documentElement.classList.remove("dark");
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const willBeDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
    setDark(willBeDark);
  };

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const activeIndex = navLinks.findIndex(({ href }) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
  );

  useEffect(() => {
    const el = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [activeIndex, pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] dark:border-[var(--accent)]/30 dark:bg-black backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4 md:py-5">
        <Link
          href="/"
          className=" text-lg font-semibold text-[var(--foreground)] shrink-0 transition-colors hover:text-[var(--accent)]"
        >
          <span className="md:hidden">{site.initials}</span>
          <span className="hidden md:inline">{site.name}</span>
        </Link>

        <nav
          ref={navRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-0.5 rounded-full border border-[var(--border)] dark:border-[var(--accent)] dark:bg-black dark:shadow-[0_0_0_1px_var(--accent)] px-1.5 py-1.5 shadow-lg backdrop-blur-sm"
        >
          {activeIndex >= 0 && indicatorStyle.width > 0 && (
            <div
              className="absolute rounded-full border-2 border-[var(--accent)] pointer-events-none transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                top: "6px",
                bottom: "6px",
              }}
              aria-hidden
            />
          )}
          {navLinks.map(({ href, label }, index) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                ref={(el) => { linkRefs.current[index] = el; }}
                href={href}
                className="relative flex items-center justify-center rounded-full px-3 py-1.5 text-[15px] font-medium min-w-[72px] transition-colors border-2 border-transparent z-10 hover:bg-gray-200 dark:hover:bg-gray-800/70 dark:bg-black"
                style={{ color: isActive ? "var(--accent)" : undefined }}
              >
                <span
                  className={
                    isActive
                      ? "font-semibold"
                      : "text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white"
                  }
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-gray-100 text-[var(--accent)] shadow-sm transition-all duration-200 ease-out hover:bg-gray-200 hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-[var(--accent)]"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
