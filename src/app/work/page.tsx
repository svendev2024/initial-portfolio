"use client";

import { useState } from "react";
import { workExperience } from "@/data/content";
import CompanyLogo from "@/components/CompanyLogo";
import { CalendarIcon, MapPinIcon } from "@/components/icons";
import AnimateSection from "@/components/AnimateSection";
import WorkFilters, { type WorkJob } from "@/components/WorkFilters";

const SECTION_CLASS = "mx-auto max-w-4xl px-6";

const jobs: WorkJob[] = workExperience.map((j) => ({
  company: j.company,
  role: j.role,
  period: j.period,
  location: j.location,
  description: j.description,
  slug: j.slug,
  logoDomain: j.logoDomain,
  logoUrl: "logoUrl" in j ? j.logoUrl : undefined,
}));

export default function WorkPage() {
  const [selectedCompanies, setSelectedCompanies] = useState<Set<string>>(new Set());
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  return (
    <div className="min-h-full">
      <section className={`${SECTION_CLASS} pt-2 pb-12 sm:pb-14`}>
        <WorkFilters
          jobs={jobs}
          selectedCompanies={selectedCompanies}
          onCompaniesChange={setSelectedCompanies}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        >
          {(filteredAndSortedJobs) => (
            <ul className="mt-10 space-y-6">
              {filteredAndSortedJobs.map((job, i) => (
                <AnimateSection key={`${job.slug}-${job.role}`} delay={0.1 + i * 0.08}>
                  <li className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 flex gap-4 shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 hover:bg-[var(--card-hover)] hover:border-blue-500 dark:hover:border-blue-500">
                    <CompanyLogo
                      domain={job.logoDomain}
                      company={job.company}
                      logoUrl={job.logoUrl}
                      className="mt-0.5"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-lg font-semibold text-[var(--foreground)]">
                          {job.company}
                        </span>
                        <span className="text-[var(--muted-foreground)]">·</span>
                        <span className="text-[var(--muted-foreground)]">
                          {job.role}
                        </span>
                      </div>
                      <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)]">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarIcon className="h-4 w-4 shrink-0" />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPinIcon className="h-4 w-4 shrink-0" />
                          {job.location}
                        </span>
                      </p>
                      <p className="mt-3 leading-relaxed text-[var(--muted-foreground)]">
                        {job.description}
                      </p>
                    </div>
                  </li>
                </AnimateSection>
              ))}
            </ul>
          )}
        </WorkFilters>
      </section>
    </div>
  );
}
