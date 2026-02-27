"use client";

import { useRef, useEffect, useState } from "react";

export type ProjectItem = {
  title: string;
  description: string;
  slug: string;
  image: string;
  techStack?: string[];
};

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

type Props = {
  projects: ProjectItem[];
  selectedTechs: Set<string>;
  onTechsChange: (techs: Set<string>) => void;
  sortOrder: "newest" | "oldest";
  onSortOrderChange: (order: "newest" | "oldest") => void;
  children: (filteredAndSortedProjects: ProjectItem[]) => React.ReactNode;
};

export default function ProjectFilters({
  projects,
  selectedTechs,
  onTechsChange,
  sortOrder,
  onSortOrderChange,
  children,
}: Props) {
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [pendingTechs, setPendingTechs] = useState<Set<string>>(selectedTechs);

  const techsWithCount = projects.reduce<{ tech: string; count: number }[]>((acc, project) => {
    (project.techStack ?? []).forEach((tech) => {
      const existing = acc.find((t) => t.tech === tech);
      if (existing) existing.count += 1;
      else acc.push({ tech, count: 1 });
    });
    return acc;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterToggle = (tech: string) => {
    setPendingTechs((prev) => {
      const next = new Set(prev);
      if (next.has(tech)) next.delete(tech);
      else next.add(tech);
      return next;
    });
  };

  const handleApplyFilter = () => {
    onTechsChange(pendingTechs);
    setFilterOpen(false);
  };

  const handleClearFilter = () => {
    setPendingTechs(new Set());
    onTechsChange(new Set());
    setFilterOpen(false);
  };

  const totalTechs = techsWithCount.length;
  const nonSelectedCount = totalTechs - selectedTechs.size;
  const activeFilterCount = selectedTechs.size;
  const filtered =
    activeFilterCount === 0
      ? projects
      : projects.filter((p) => (p.techStack ?? []).some((t) => selectedTechs.has(t)));
  const sorted =
    sortOrder === "newest" ? [...filtered] : [...filtered].reverse();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        {/* Filter by Tech */}
        <div className="relative inline-block" ref={filterRef}>
          <button
            type="button"
            onClick={() => {
              setFilterOpen((o) => !o);
              if (!filterOpen) setPendingTechs(selectedTechs);
              setSortOpen(false);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Filter by Tech
            <ChevronUpIcon className={`h-4 w-4 transition-transform ${filterOpen ? "" : "rotate-180"}`} />
          </button>
          {totalTechs > 0 && (
            <span
              className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white border-2 border-white shadow-sm"
              style={{ transform: "translate(50%, -50%)" }}
            >
              {nonSelectedCount}
            </span>
          )}
          {filterOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 min-w-[220px] max-h-[280px] flex flex-col rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
              <div className="overflow-y-auto p-2 flex-1">
                {techsWithCount.map(({ tech, count }) => (
                  <label
                    key={tech}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  >
                    <input
                      type="checkbox"
                      checked={pendingTechs.has(tech)}
                      onChange={() => handleFilterToggle(tech)}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--accent)] focus:ring-[var(--accent)]"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {tech} ({count})
                    </span>
                  </label>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-gray-200 dark:border-gray-600 p-2">
                <button
                  type="button"
                  onClick={handleApplyFilter}
                  className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={handleClearFilter}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <ClearIcon className="h-4 w-4" />
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Newest First */}
        <div className="relative" ref={sortRef}>
          <button
            type="button"
            onClick={() => {
              setSortOpen((o) => !o);
              setFilterOpen(false);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {sortOrder === "newest" ? "Newest First" : "Oldest First"}
            <ChevronUpIcon className={`h-4 w-4 transition-transform ${sortOpen ? "" : "rotate-180"}`} />
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-full z-20 mt-2 min-w-[180px] rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg overflow-hidden py-1">
              <button
                type="button"
                onClick={() => {
                  onSortOrderChange("newest");
                  setSortOpen(false);
                }}
                className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className={sortOrder === "newest" ? "font-medium text-[var(--accent)]" : "text-gray-700 dark:text-gray-300"}>
                  Newest First
                </span>
                {sortOrder === "newest" && <CheckIcon className="h-4 w-4 shrink-0 text-[var(--accent)]" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  onSortOrderChange("oldest");
                  setSortOpen(false);
                }}
                className="flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className={sortOrder === "oldest" ? "font-medium text-[var(--accent)]" : "text-gray-700 dark:text-gray-300"}>
                  Oldest First
                </span>
                {sortOrder === "oldest" && <CheckIcon className="h-4 w-4 shrink-0 text-[var(--accent)]" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {children(sorted)}
    </>
  );
}
