"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/content";
import ProjectCardImage from "@/components/ProjectCardImage";
import AnimateSection from "@/components/AnimateSection";
import ProjectFilters, { type ProjectItem } from "@/components/ProjectFilters";

const SECTION_CLASS = "mx-auto max-w-4xl px-6";

const projectItems: ProjectItem[] = projects.map((p) => ({
  title: p.title,
  description: p.description,
  slug: p.slug,
  image: p.image,
  techStack: p.techStack,
}));

export default function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set());
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  return (
    <div className="min-h-full">
      <section className={`${SECTION_CLASS} pt-2 pb-12 sm:pb-14`}>
        <ProjectFilters
          projects={projectItems}
          selectedTechs={selectedTechs}
          onTechsChange={setSelectedTechs}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        >
          {(filteredAndSortedProjects) => (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {filteredAndSortedProjects.map((project, i) => {
                const fullProject = projects.find((p) => p.slug === project.slug)!;
                return (
                  <AnimateSection key={fullProject.slug} delay={0.1 + i * 0.08}>
                    <li>
                      <Link
                        href={`/projects/${fullProject.slug}`}
                        className="block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/40"
                      >
                        <ProjectCardImage image={fullProject.image} title={fullProject.title} />
                        <div className="p-3">
                          <h2 className="text-lg font-bold dark:text-white">
                            {fullProject.title}
                          </h2>
                          <p className="mt-2 text-[var(--muted-foreground)]">
                            {fullProject.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  </AnimateSection>
                );
              })}
            </ul>
          )}
        </ProjectFilters>
      </section>
    </div>
  );
}
